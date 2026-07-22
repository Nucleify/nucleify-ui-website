import { defineConfig } from 'astro/config';

function playgroundPath(url) {
  const path = url.split('?')[0];
  return path === '/playground' || path === '/playground/';
}

function playgroundSpaPath(url) {
  const path = url.split('?')[0];
  return path.startsWith('/playground/') && !path.includes('.');
}

export default defineConfig({
  vite: {
    plugins: [
      {
        name: 'playground-static',
        configureServer(server) {
          server.middlewares.use((req, _res, next) => {
            const url = req.url ?? '';
            if (playgroundPath(url) || (playgroundSpaPath(url) && url !== '/playground/index.html')) {
              const query = url.includes('?') ? url.slice(url.indexOf('?')) : '';
              req.url = `/playground/index.html${query}`;
            }
            next();
          });
        },
      },
    ],
  },
});
