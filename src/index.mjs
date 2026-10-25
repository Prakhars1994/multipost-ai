// Cloudflare Worker for MultiPost AI - Serving the page directly
export default {
  async fetch(request, env) {
    // Serve the HTML page for all routes (SPA routing)
    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>MultiPost AI - Write Once, Publish Everywhere</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); min-height: 100vh; display: flex; flex-direction: column; }
    .navbar { padding: 20px 40px; display: flex; justify-content: space-between; align-items: center; background: rgba(0,0,0,0.2); border-bottom: 1px solid rgba(255,255,255,0.1); }
    .logo { font-size: 24px; font-weight: bold; color: white; }
    .nav-links { display: flex; gap: 30px; }
    .nav-links a { color: white; text-decoration: none; transition: opacity 0.3s; }
    .nav-links a:hover { opacity: 0.8; }
    .hero { flex: 1; display: flex; align-items: center; justify-content: center; text-align: center; color: white; padding: 40px; }
    .hero-content h1 { font-size: 48px; margin-bottom: 20px; }
    .hero-content p { font-size: 20px; margin-bottom: 30px; opacity: 0.9; }
    .cta-buttons { display: flex; gap: 20px; justify-content: center; }
    .btn { padding: 15px 40px; border: none; border-radius: 8px; font-size: 16px; cursor: pointer; transition: all 0.3s; }
    .btn-primary { background: white; color: #667eea; font-weight: bold; }
    .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 10px 20px rgba(0,0,0,0.2); }
    .btn-secondary { background: transparent; color: white; border: 2px solid white; }
    .btn-secondary:hover { background: white; color: #667eea; }
    .features { background: white; padding: 60px 40px; }
    .features h2 { text-align: center; font-size: 36px; margin-bottom: 40px; color: #333; }
    .feature-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; }
    .feature-card { padding: 30px; background: #f8f9fa; border-radius: 8px; border-left: 4px solid #667eea; }
    .feature-card h3 { margin-bottom: 15px; color: #667eea; }
    .feature-card p { color: #666; line-height: 1.6; }
    .pricing { padding: 60px 40px; background: #f8f9fa; }
    .pricing h2 { text-align: center; font-size: 36px; margin-bottom: 40px; color: #333; }
    .price-card { max-width: 400px; margin: 0 auto; background: white; padding: 40px; border-radius: 8px; box-shadow: 0 5px 15px rgba(0,0,0,0.1); }
    .price-card h3 { font-size: 28px; margin-bottom: 20px; color: #667eea; }
    .price-card .amount { font-size: 48px; font-weight: bold; color: #333; margin-bottom: 20px; }
    .price-card ul { list-style: none; margin-bottom: 30px; }
    .price-card li { padding: 10px 0; color: #666; border-bottom: 1px solid #eee; }
    .footer { background: rgba(0,0,0,0.2); color: white; padding: 40px; text-align: center; border-top: 1px solid rgba(255,255,255,0.1); }
    .footer p { margin-bottom: 10px; }
    .contact-info { margin-top: 20px; }
  </style>
</head>
<body>
  <nav class="navbar">
    <div class="logo">🚀 MultiPost AI</div>
    <div class="nav-links">
      <a href="#features">Features</a>
      <a href="#pricing">Pricing</a>
      <a href="#contact">Contact</a>
    </div>
  </nav>

  <div class="hero">
    <div class="hero-content">
      <h1>Write Once. Publish Everywhere.</h1>
      <p>Post to 10+ social media platforms simultaneously with MultiPost AI</p>
      <div class="cta-buttons">
        <button class="btn btn-primary">Start Free Trial</button>
        <button class="btn btn-secondary">Learn More</button>
      </div>
    </div>
  </div>

  <section class="features" id="features">
    <h2>Powerful Features</h2>
    <div class="feature-grid">
      <div class="feature-card">
        <h3>✨ Multi-Platform Publishing</h3>
        <p>Publish to Facebook, Instagram, LinkedIn, Twitter, TikTok, and 5+ more platforms from one dashboard</p>
      </div>
      <div class="feature-card">
        <h3>⏱️ Schedule Posts</h3>
        <p>Plan your content calendar weeks in advance and schedule posts for optimal engagement times</p>
      </div>
      <div class="feature-card">
        <h3>📊 Analytics & Insights</h3>
        <p>Track performance across all platforms with unified analytics and ROI tracking</p>
      </div>
      <div class="feature-card">
        <h3>🤖 AI Optimization</h3>
        <p>AI automatically optimizes captions, hashtags, and timing for maximum reach and engagement</p>
      </div>
      <div class="feature-card">
        <h3>🎨 Content Library</h3>
        <p>Organize and reuse your best content with an intelligent content management system</p>
      </div>
      <div class="feature-card">
        <h3>👥 Team Collaboration</h3>
        <p>Work with your team, set approval workflows, and maintain brand consistency</p>
      </div>
    </div>
  </section>

  <section class="pricing" id="pricing">
    <h2>Simple, Transparent Pricing</h2>
    <div class="price-card">
      <h3>Professional Plan</h3>
      <div class="amount">₹4,999<span style="font-size: 20px; color: #999;">/month</span></div>
      <ul>
        <li>✅ Unlimited Posts</li>
        <li>✅ 10+ Platform Integration</li>
        <li>✅ Advanced Analytics</li>
        <li>✅ AI-Powered Optimization</li>
        <li>✅ Team Collaboration</li>
        <li>✅ 24/7 Support</li>
      </ul>
      <button class="btn btn-primary" style="width: 100%;">Start 30-Day Trial</button>
    </div>
  </section>

  <footer class="footer" id="contact">
    <h3>MultiPost AI</h3>
    <p>The smarter way to manage your social media</p>
    <div class="contact-info">
      <p>📞 +91 84460 00784</p>
      <p>🌐 vdldigital.com</p>
      <p style="margin-top: 20px; opacity: 0.8;">© 2026 Vishwakarma Digital Labs. All rights reserved.</p>
    </div>
  </footer>

  <script>
    // Simple smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    // Simple animation on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
        }
      });
    }, observerOptions);

    document.querySelectorAll('.feature-card, .price-card').forEach(el => observer.observe(el));

    const style = document.createElement('style');
    style.textContent = '@keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }';
    document.head.appendChild(style);
  </script>
</body>
</html>`;

    return new Response(htmlContent, {
      headers: { 'Content-Type': 'text/html; charset=utf-8' }
    });
  }
};
