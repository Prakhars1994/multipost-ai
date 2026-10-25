// Cloudflare Worker for MultiPost AI
// Serves static assets from public directory

export default {
  async fetch(request, env) {
    // If ASSETS binding is available, use it to serve files
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

    // Fallback if ASSETS is not available
    return new Response('Service Unavailable - ASSETS binding not configured', {
      status: 503,
      headers: { 'Content-Type': 'text/plain' }
    });
  },
};
