export default {
  fetch() {
    return new Response('<h1>MultiPost AI is Live!</h1><p>Worker is running correctly.</p>', {
      headers: { 'Content-Type': 'text/html' }
    });
  }
};
