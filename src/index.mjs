// Cloudflare Worker for MultiPost AI
// Serves static assets from public directory

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Try to serve static asset
    if (env.ASSETS) {
      const assetResponse = await env.ASSETS.fetch(request);
      if (assetResponse.status !== 404) {
        return assetResponse;
      }
    }

    // Fallback: serve index.html for SPA routing
    const indexRequest = new Request(url.origin + '/index.html', request);
    if (env.ASSETS) {
      return env.ASSETS.fetch(indexRequest);
    }

    return new Response('Not Found', { status: 404 });
  },
};
