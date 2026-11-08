import { access, mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import * as esbuild from 'esbuild';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const nucleifyRoot = resolve(root, 'node_modules/nucleify-ui');
const outDir = resolve(root, 'public/docs');
const outFile = resolve(outDir, 'assets/index.js');
const watch = process.argv.includes('--watch');

const cssStyleSheetPlugin = {
  name: 'css-stylesheet',
  setup(build) {
    build.onResolve({ filter: /\.css$/ }, (args) => ({
      path: resolve(args.resolveDir, args.path),
      namespace: 'css-stylesheet',
    }));

    build.onLoad({ filter: /.*/, namespace: 'css-stylesheet' }, async (args) => {
      const css = await readFile(args.path, 'utf8');
      return {
        contents: `
          const sheet = new CSSStyleSheet();
          sheet.replaceSync(${JSON.stringify(css)});
          export default sheet;
        `,
        loader: 'js',
      };
    });
  },
};

const tsImportsPlugin = {
  name: 'resolve-ts-imports',
  setup(build) {
    build.onResolve({ filter: /^\..*\.js$/ }, async (args) => {
      const tsPath = resolve(args.resolveDir, args.path.replace(/\.js$/, '.ts'));
      try {
        await access(tsPath);
        return { path: tsPath };
      } catch {
        return null;
      }
    });
  },
};

const buildOptions = {
  absWorkingDir: nucleifyRoot,
  entryPoints: [resolve(nucleifyRoot, 'src/main.ts')],
  bundle: true,
  outfile: outFile,
  format: 'esm',
  platform: 'browser',
  target: 'es2021',
  plugins: [cssStyleSheetPlugin, tsImportsPlugin],
  tsconfig: resolve(nucleifyRoot, 'tsconfig.json'),
  logLevel: 'info',
};

async function writeStaticAssets() {
  await mkdir(resolve(outDir, 'assets'), { recursive: true });

  const variablesCss = await readFile(resolve(nucleifyRoot, 'src/styles/variables.css'), 'utf8');
  const globalCss = await readFile(resolve(nucleifyRoot, 'src/styles/global.css'), 'utf8');
  const inlinedGlobal = globalCss.replace('@import "./variables.css";', variablesCss);

  await writeFile(resolve(outDir, 'variables.css'), variablesCss);
  await writeFile(resolve(outDir, 'nucleify-global.css'), inlinedGlobal);

  const indexHtml = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>nucleify-ui Docs</title>
    <link rel="icon" href="/favicon.ico" sizes="any" />
    <link rel="preload" as="style" href="/docs/nucleify-global.css" />
    <link rel="modulepreload" href="/docs/assets/index.js" />
    <link rel="stylesheet" href="/docs/nucleify-global.css" />
    <style>
      html, body {
        margin: 0;
        min-height: 100%;
        background: #080808;
        color: #f5f4f4;
      }
      :not(:defined) {
        visibility: hidden !important;
      }
      body:not(.styles-ready) docs-app {
        visibility: hidden;
      }
    </style>
  </head>
  <body class="nui-preset-nucleus nui-dark">
    <docs-app></docs-app>
    <script type="module">
      await import('/docs/assets/index.js');
      await customElements.whenDefined('docs-app');
      const app = document.querySelector('docs-app');
      if (app?.updateComplete) await app.updateComplete;
      document.body.classList.add('styles-ready');
    </script>
  </body>
</html>
`;

  await writeFile(resolve(outDir, 'index.html'), indexHtml);
}

async function build() {
  await writeStaticAssets();
  await esbuild.build(buildOptions);
  console.log('Docs app built to public/docs');
}

if (watch) {
  await writeStaticAssets();
  const ctx = await esbuild.context(buildOptions);
  await ctx.watch();
  console.log('Watching nucleify-ui docs sources…');
} else {
  await build();
}
