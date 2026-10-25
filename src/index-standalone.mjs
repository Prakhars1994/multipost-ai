// Standalone version - serve index.html for all routes
import fs from 'fs';
import path from 'path';

const htmlContent = fs.readFileSync(path.join(process.cwd(), 'public/index.html'), 'utf-8');

export default {
  async fetch(request) {
    // Serve index.html for SPA routing
    return new Response(htmlContent, {
      headers: { 'Content-Type': 'text/html; charset=utf-8' }
    });
  }
};
