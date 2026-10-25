// Cloudflare Worker for MultiPost AI
// Serves static assets from public directory with SPA routing

export default {
  async fetch(request, env) {
    if (env.ASSETS) {
      let response = await env.ASSETS.fetch(request);

      // If the requested file doesn't exist (404), serve index.html for SPA routing
      if (response.status === 404) {
        const indexUrl = new URL(request.url);
        indexUrl.pathname = '/index.html';
        const indexRequest = new Request(indexUrl, {
          method: request.method,
          headers: request.headers,
          body: request.body,
        });
        response = await env.ASSETS.fetch(indexRequest);
      }

      return response;
    }

    return new Response('ASSETS binding not configured', { status: 503 });
  },
};
