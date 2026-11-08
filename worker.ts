import { isDocsSpaPath } from './src/config/docs-routes';

function normalizePath(pathname: string): string {
  if (pathname.length > 1 && pathname.endsWith('/')) {
    return pathname.slice(0, -1);
  }
  return pathname;
}

export default {
  async fetch(
    request: Request,
    env: { ASSETS: { fetch: typeof fetch } },
  ): Promise<Response> {
    const url = new URL(request.url);
    const path = normalizePath(url.pathname);

    const assetResponse = await env.ASSETS.fetch(request);
    if (assetResponse.status !== 404) {
      return assetResponse;
    }

    if (isDocsSpaPath(path)) {
      // Use /docs/ (not /docs/index.html) — Assets html_handling 307s
      // index.html → /docs/, which would leak to the browser and wipe the
      // pretty path (/components/button → /docs/).
      return env.ASSETS.fetch(
        new Request(new URL('/docs/', request.url), request),
      );
    }

    return new Response('Not Found', { status: 404 });
  },
};
