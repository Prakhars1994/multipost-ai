// Cloudflare Worker for MultiPost AI
// Serves static assets from public directory

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // Serve static assets
    if (env.ASSETS) {
      return env.ASSETS.fetch(request);
    }
    
    // Fallback: serve index.html for SPA routing
    if (url.pathname === '/' || url.pathname === '') {
      return env.ASSETS.fetch(new Request(url.origin + '/index.html'));
    }
    
    return new Response('Not Found', { status: 404 });
  },
};
