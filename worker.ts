export default {
  async fetch(request: Request, env: { ASSETS: { fetch: typeof fetch } }): Promise<Response> {
    const url = new URL(request.url);

    // For SPA subroutes under /playground (when not matching a physical static file),
    // fallback to /playground/index.html
    if (url.pathname.startsWith('/playground')) {
      return env.ASSETS.fetch(new Request(new URL('/playground/index.html', request.url), request));
    }

    return new Response('Not Found', { status: 404 });
  },
};
