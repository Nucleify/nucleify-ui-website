import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import { DOCS_SITEMAP_PATHS, isDocsSpaPath } from './src/config/docs-routes.ts';

const SITE = 'https://ui.nucleify.io';

function stripQuery(url) {
  return url.split('?')[0];
}

export default defineConfig({
  site: SITE,
  integrations: [
    sitemap({
      customPages: DOCS_SITEMAP_PATHS.map((path) => `${SITE}${path}`),
    }),
  ],
  vite: {
    plugins: [
      {
        name: 'docs-spa-fallback',
        configureServer(server) {
          server.middlewares.use((req, _res, next) => {
            const url = req.url ?? '';
            const path = stripQuery(url);
            const query = url.includes('?') ? url.slice(url.indexOf('?')) : '';

            if (isDocsSpaPath(path)) {
              req.url = `/docs/index.html${query}`;
            }

            next();
          });
        },
      },
    ],
  },
});
