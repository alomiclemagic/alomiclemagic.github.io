[index.html](https://github.com/user-attachments/files/25484621/index.html)
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Russian for Kids | alo.micle.magic</title>
<meta name="description" content="Learn Russian through culture, history, and fun! 25 interactive lessons for ages 6-12. Created by Elena Micle, Russian Language Major & ESL Expert.">
<meta property="og:title" content="Russian for Kids — Complete Beginner Course">
<meta property="og:description" content="25 interactive lessons teaching the Cyrillic alphabet, vocabulary, conversations, and Russian culture. Ages 6-12.">
<style>
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Fraunces:ital,wght@0,300;0,700;1,300&family=Nunito:wght@400;600;700;800;900&display=swap');

  :root {
    --red: #CC0000;
    --blue: #003399;
    --gold: #FFD700;
    --deep-blue: #001f6b;
    --cream: #FFF9F3;
    --text: #1a1a2e;
    --muted: #666;
  }

  * { box-sizing: border-box; margin: 0; padding: 0; scroll-behavior: smooth; }

  body {
    font-family: 'Nunito', sans-serif;
    background: #fff;
    color: var(--text);
    overflow-x: hidden;
  }

  /* ── NAV ───────────────────────────────────────────── */
  nav {
    position: fixed; top: 0; left: 0; right: 0;
    background: rgba(0, 31, 107, 0.97);
    backdrop-filter: blur(12px);
    z-index: 1000;
    padding: 0 6%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 64px;
    border-bottom: 3px solid var(--red);
  }

  .nav-logo {
    font-family: 'Playfair Display', serif;
    font-size: 1.25rem;
    color: var(--gold);
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .nav-links {
    display: flex;
    gap: 2rem;
    list-style: none;
  }

  .nav-links a {
    color: rgba(255,255,255,0.85);
    text-decoration: none;
    font-weight: 700;
    font-size: 0.88rem;
    letter-spacing: 0.5px;
    transition: color 0.2s;
  } 

  .nav-links a:hover { color: var(--gold); }

  .nav-cta {
    background: var(--red);
    color: white !important;
    padding: 8px 20px;
    border-radius: 30px;
    font-weight: 800 !important;
    transition: transform 0.2s, background 0.2s !important;
  }
  .nav-cta:hover { background: #aa0000 !important; transform: scale(1.05); }

  /* ── HERO ──────────────────────────────────────────── */
  .hero {
    min-height: 100vh;
    background: linear-gradient(135deg, var(--deep-blue) 0%, #003399 55%, #0044cc 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 80px 6% 60px;
    position: relative;
    overflow: hidden;
  }

  .hero-bg-shapes {
    position: absolute; inset: 0; pointer-events: none;
  }
  .hero-circle {
    position: absolute;
    border-radius: 50%;
    background: rgba(255,255,255,0.04);
  }

  .flag-banner {
    display: flex;
    border-radius: 4px;
    overflow: hidden;
    width: 80px;
    height: 12px;
    margin: 0 auto 20px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.3);
  }
  .flag-banner div { flex: 1; }
  .fb-w { background: white; }
  .fb-b { background: #003399; }
  .fb-r { background: #CC0000; }

  .hero h1 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(3rem, 8vw, 5.5rem);
    color: white;
    line-height: 1.05;
    margin-bottom: 10px;
    text-shadow: 0 4px 20px rgba(0,0,0,0.3);
  }

  .hero h1 .gold { color: var(--gold); }

  .hero-cyrillic {
    font-family: 'Playfair Display', serif;
    font-size: 1.6rem;
    color: rgba(173,216,230,0.9);
    font-style: italic;
    margin-bottom: 20px;
  }

  .hero-subtitle {
    font-size: 1.15rem;
    color: rgba(255,255,255,0.85);
    max-width: 600px;
    line-height: 1.7;
    margin: 0 auto 36px;
    font-weight: 600;
  }

  .hero-stats {
    display: flex;
    gap: 2rem;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 44px;
  }

  .hero-stat {
    text-align: center;
  }

  .hero-stat .num {
    font-family: 'Playfair Display', serif;
    font-size: 2.4rem;
    color: var(--gold);
    font-weight: 700;
    line-height: 1;
    display: block;
  }

  .hero-stat .lbl {
    font-size: 0.8rem;
    color: rgba(255,255,255,0.7);
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  .hero-buttons {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  .btn-primary {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: var(--red);
    color: white;
    text-decoration: none;
    font-weight: 800;
    font-size: 1rem;
    padding: 16px 36px;
    border-radius: 50px;
    transition: all 0.25s;
    box-shadow: 0 6px 25px rgba(204,0,0,0.4);
  }
  .btn-primary:hover { background: #aa0000; transform: translateY(-2px); box-shadow: 0 10px 35px rgba(204,0,0,0.5); }

  .btn-secondary {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(255,255,255,0.1);
    color: white;
    text-decoration: none;
    font-weight: 700;
    font-size: 1rem;
    padding: 16px 36px;
    border-radius: 50px;
    border: 2px solid rgba(255,255,255,0.4);
    transition: all 0.25s;
  }
  .btn-secondary:hover { background: rgba(255,255,255,0.2); border-color: white; }

  .scroll-hint {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    color: rgba(255,255,255,0.5);
    font-size: 0.8rem;
    font-weight: 700;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    animation: bounce 2s infinite;
  }

  @keyframes bounce {
    0%, 100% { transform: translateX(-50%) translateY(0); }
    50% { transform: translateX(-50%) translateY(6px); }
  }

  /* ── SECTION COMMONS ────────────────────────────────── */
  section { padding: 80px 6%; }

  .section-label {
    font-size: 0.75rem;
    font-weight: 900;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: var(--red);
    margin-bottom: 12px;
  }

  .section-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2rem, 4vw, 3rem);
    color: var(--deep-blue);
    line-height: 1.15;
    margin-bottom: 16px;
  }

  .section-subtitle {
    font-size: 1.05rem;
    color: var(--muted);
    max-width: 600px;
    line-height: 1.7;
  }

  /* ── WHAT'S INCLUDED ──────────────────────────────── */
  .included {
    background: var(--cream);
  }

  .included-inner {
    max-width: 1200px;
    margin: 0 auto;
  }

  .included-head {
    text-align: center;
    margin-bottom: 60px;
  }

  .units-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 24px;
    margin-bottom: 50px;
  }

  .unit-card {
    background: white;
    border-radius: 16px;
    padding: 28px 20px;
    text-align: center;
    box-shadow: 0 4px 20px rgba(0,0,0,0.07);
    border-top: 4px solid;
    transition: transform 0.25s;
  }
  .unit-card:hover { transform: translateY(-4px); }
  .unit-card:nth-child(1) { border-color: var(--blue); }
  .unit-card:nth-child(2) { border-color: var(--red); }
  .unit-card:nth-child(3) { border-color: #008080; }
  .unit-card:nth-child(4) { border-color: #7B1FA2; }
  .unit-card:nth-child(5) { border-color: #E65100; }

  .unit-icon { font-size: 2.5rem; margin-bottom: 12px; display: block; }
  .unit-name { font-weight: 900; font-size: 0.95rem; color: var(--text); margin-bottom: 6px; }
  .unit-lessons { font-size: 0.8rem; color: var(--muted); font-weight: 700; margin-bottom: 12px; }
  .lesson-list { list-style: none; font-size: 0.82rem; color: #555; line-height: 1.8; text-align: left; }
  .lesson-list li::before { content: '→ '; color: var(--red); font-weight: 800; }

  /* ── WHAT YOU GET ───────────────────────────────────── */
  .deliverables {
    max-width: 1100px;
    margin: 0 auto;
  }

  .deliv-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
    margin-top: 40px;
  }

  .deliv-card {
    background: white;
    border-radius: 12px;
    padding: 24px;
    border-left: 4px solid var(--blue);
    box-shadow: 0 2px 12px rgba(0,0,0,0.06);
    display: flex;
    gap: 16px;
    align-items: flex-start;
  }

  .deliv-icon { font-size: 1.8rem; flex-shrink: 0; }
  .deliv-title { font-weight: 800; color: var(--deep-blue); margin-bottom: 4px; }
  .deliv-desc { font-size: 0.88rem; color: var(--muted); line-height: 1.5; }

  /* ── BONUS ──────────────────────────────────────────── */
  .bonus-section {
    background: linear-gradient(135deg, var(--deep-blue), #003399);
    color: white;
  }

  .bonus-inner { max-width: 1100px; margin: 0 auto; }

  .bonus-inner .section-title { color: var(--gold); }
  .bonus-inner .section-subtitle { color: rgba(255,255,255,0.7); }

  .bonus-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 16px;
    margin-top: 40px;
  }

  .bonus-card {
    background: rgba(255,255,255,0.1);
    border: 1.5px solid rgba(255,255,255,0.2);
    border-radius: 12px;
    padding: 20px 16px;
    text-align: center;
    backdrop-filter: blur(6px);
    transition: background 0.2s, transform 0.2s;
  }
  .bonus-card:hover { background: rgba(255,255,255,0.18); transform: translateY(-3px); }
  .bonus-card .bonus-icon { font-size: 2.2rem; display: block; margin-bottom: 8px; }
  .bonus-card .bonus-name { font-weight: 800; font-size: 0.9rem; color: white; }
  .bonus-card .bonus-desc { font-size: 0.8rem; color: rgba(255,255,255,0.65); margin-top: 4px; }

  /* ── ABOUT CREATOR ──────────────────────────────────── */
  .about { background: white; }
  .about-inner {
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center;
  }

  .about-visual {
    background: linear-gradient(135deg, var(--deep-blue), #003399);
    border-radius: 20px;
    padding: 40px;
    text-align: center;
    color: white;
    box-shadow: 0 15px 50px rgba(0,31,107,0.25);
  }

  .creator-avatar {
    width: 100px; height: 100px;
    background: var(--gold);
    border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-size: 3rem;
    margin: 0 auto 20px;
    box-shadow: 0 6px 20px rgba(0,0,0,0.3);
  }

  .creator-name {
    font-family: 'Playfair Display', serif;
    font-size: 1.8rem;
    color: var(--gold);
    margin-bottom: 8px;
  }

  .creator-creds {
    font-size: 0.88rem;
    color: rgba(255,255,255,0.75);
    line-height: 1.8;
  }

  .cred-badge {
    display: inline-block;
    background: rgba(255,215,0,0.15);
    border: 1px solid rgba(255,215,0,0.4);
    border-radius: 20px;
    padding: 4px 12px;
    font-size: 0.78rem;
    font-weight: 700;
    color: var(--gold);
    margin: 3px;
  }

  .about-text .diff-list {
    list-style: none;
    margin-top: 24px;
  }

  .diff-list li {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    margin-bottom: 16px;
    font-size: 0.95rem;
    color: #444;
    line-height: 1.5;
  }

  .diff-list li::before {
    content: '✅';
    flex-shrink: 0;
    font-size: 1rem;
    margin-top: 2px;
  }

  /* ── PRICING ───────────────────────────────────────── */
  .pricing { background: var(--cream); }
  .pricing-inner { max-width: 1000px; margin: 0 auto; text-align: center; }

  .pricing-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 24px;
    margin-top: 50px;
  }

  .price-card {
    background: white;
    border-radius: 20px;
    padding: 36px 28px;
    box-shadow: 0 4px 24px rgba(0,0,0,0.08);
    position: relative;
    text-align: left;
    transition: transform 0.25s;
  }
  .price-card:hover { transform: translateY(-5px); }

  .price-card.featured {
    background: linear-gradient(135deg, var(--deep-blue), #003399);
    color: white;
    transform: scale(1.04);
    box-shadow: 0 12px 50px rgba(0,31,107,0.35);
  }
  .price-card.featured:hover { transform: scale(1.04) translateY(-5px); }

  .featured-badge {
    position: absolute;
    top: -12px; left: 50%;
    transform: translateX(-50%);
    background: var(--gold);
    color: var(--deep-blue);
    font-size: 0.75rem;
    font-weight: 900;
    padding: 4px 16px;
    border-radius: 20px;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  .price-tier { font-weight: 800; font-size: 1rem; color: var(--blue); margin-bottom: 6px; }
  .price-card.featured .price-tier { color: var(--gold); }

  .price-amount {
    font-family: 'Playfair Display', serif;
    font-size: 3rem;
    color: var(--deep-blue);
    line-height: 1;
    margin-bottom: 6px;
    font-weight: 700;
  }
  .price-card.featured .price-amount { color: white; }

  .price-desc { font-size: 0.85rem; color: var(--muted); margin-bottom: 20px; }
  .price-card.featured .price-desc { color: rgba(255,255,255,0.7); }

  .price-features { list-style: none; margin-bottom: 28px; }
  .price-features li {
    padding: 6px 0;
    font-size: 0.88rem;
    border-bottom: 1px solid #f0f0f0;
    color: #555;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .price-card.featured .price-features li { border-color: rgba(255,255,255,0.1); color: rgba(255,255,255,0.85); }
  .price-features li::before { content: '✓'; color: #00a050; font-weight: 900; }
  .price-card.featured .price-features li::before { color: var(--gold); }

  .price-btn {
    display: block;
    text-align: center;
    padding: 14px;
    border-radius: 50px;
    text-decoration: none;
    font-weight: 800;
    font-size: 0.95rem;
    transition: all 0.2s;
  }
  .price-btn-outline { background: transparent; border: 2px solid var(--blue); color: var(--blue); }
  .price-btn-outline:hover { background: var(--blue); color: white; }
  .price-btn-filled { background: var(--gold); color: var(--deep-blue); }
  .price-btn-filled:hover { background: #e6c000; }

  /* ── TESTIMONIAL / QUOTE ─────────────────────────── */
  .quote-section {
    background: var(--red);
    padding: 60px 6%;
    text-align: center;
  }

  .quote-text {
    font-family: 'Playfair Display', serif;
    font-size: clamp(1.4rem, 3vw, 2.2rem);
    font-style: italic;
    color: white;
    max-width: 800px;
    margin: 0 auto 20px;
    line-height: 1.5;
  }

  .quote-attr {
    font-size: 0.9rem;
    color: rgba(255,255,255,0.8);
    font-weight: 700;
  }

  /* ── FAQ ─────────────────────────────────────────── */
  .faq { max-width: 800px; margin: 0 auto; padding: 80px 6%; }

  .faq-item {
    border-bottom: 1px solid #eee;
    padding: 20px 0;
  }

  .faq-q {
    font-weight: 800;
    font-size: 1rem;
    color: var(--deep-blue);
    margin-bottom: 8px;
    cursor: pointer;
  }

  .faq-a {
    font-size: 0.92rem;
    color: #555;
    line-height: 1.7;
  }

  /* ── CTA BANNER ──────────────────────────────────── */
  .cta-banner {
    background: linear-gradient(135deg, var(--deep-blue), #003399, var(--deep-blue));
    padding: 80px 6%;
    text-align: center;
  }

  .cta-banner h2 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2rem, 4vw, 3rem);
    color: var(--gold);
    margin-bottom: 16px;
  }

  .cta-banner p {
    color: rgba(255,255,255,0.8);
    font-size: 1.1rem;
    max-width: 600px;
    margin: 0 auto 36px;
    line-height: 1.7;
  }

  /* ── FOOTER ──────────────────────────────────────── */
  footer {
    background: #0a0a1a;
    color: rgba(255,255,255,0.6);
    padding: 40px 6%;
    text-align: center;
  }

  footer .brand {
    font-family: 'Playfair Display', serif;
    font-size: 1.4rem;
    color: var(--gold);
    margin-bottom: 12px;
  }

  footer a { color: rgba(255,255,255,0.6); text-decoration: none; }
  footer a:hover { color: var(--gold); }

  .footer-links { display: flex; justify-content: center; gap: 24px; margin: 12px 0; flex-wrap: wrap; }

  /* ── RESPONSIVE ──────────────────────────────────── */
  @media (max-width: 768px) {
    .nav-links { display: none; }
    .about-inner { grid-template-columns: 1fr; }
    .price-card.featured { transform: none; }
  }
</style>
</head>
<body>

<!-- ─── NAV ─────────────────────────────────────────────── -->
<nav>
  <a href="#" class="nav-logo">🇷🇺 alo.micle.magic</a>
  <ul class="nav-links">
    <li><a href="#course">The Course</a></li>
    <li><a href="#includes">What's Included</a></li>
    <li><a href="#bonus">Bonus Materials</a></li>
    <li><a href="#about">About Elena</a></li>
    <li><a href="#pricing">Pricing</a></li>
    <li><a href="https://gumroad.com" target="_blank" class="nav-cta">Buy Now</a></li>
  </ul>
</nav>

<!-- ─── HERO ──────────────────────────────────────────────── -->
<section class="hero" id="top">
  <div class="hero-bg-shapes">
    <div class="hero-circle" style="width:400px;height:400px;top:-100px;right:-80px;"></div>
    <div class="hero-circle" style="width:250px;height:250px;bottom:50px;left:-50px;"></div>
    <div class="hero-circle" style="width:150px;height:150px;top:40%;right:10%;"></div>
  </div>

  <div class="flag-banner">
    <div class="fb-w"></div>
    <div class="fb-b"></div>
    <div class="fb-r"></div>
  </div>

  <h1>Russian for <span class="gold">Kids</span></h1>
  <div class="hero-cyrillic">Русский для детей</div>
  <p class="hero-subtitle">
    25 interactive lessons teaching the Cyrillic alphabet, vocabulary, conversations,
    and the rich culture of Russia. Perfect for ages 6–12.
  </p>

  <div class="hero-stats">
    <div class="hero-stat"><span class="num">25</span><span class="lbl">Lessons</span></div>
    <div class="hero-stat"><span class="num">200+</span><span class="lbl">Vocabulary Words</span></div>
    <div class="hero-stat"><span class="num">6–12</span><span class="lbl">Ages</span></div>
    <div class="hero-stat"><span class="num">33</span><span class="lbl">Cyrillic Letters</span></div>
    <div class="hero-stat"><span class="num">7</span><span class="lbl">Bonus Materials</span></div>
  </div>

  <div class="hero-buttons">
    <a href="https://gumroad.com" target="_blank" class="btn-primary">🛒 Get the Course — $79</a>
    <a href="#course" class="btn-secondary">📖 See All Lessons</a>
  </div>

  <div class="scroll-hint">↓ Explore</div>
</section>

<!-- ─── WHAT'S INCLUDED ────────────────────────────────────── -->
<section class="included" id="course">
  <div class="included-inner">
    <div class="included-head">
      <div class="section-label">Complete Curriculum</div>
      <h2 class="section-title">5 Units · 25 Lessons of Rich Learning</h2>
      <p class="section-subtitle">From the Cyrillic alphabet to Moscow landmarks — every lesson combines language, culture, and hands-on activities.</p>
    </div>

    <div class="units-grid">
      <div class="unit-card">
        <span class="unit-icon">🔤</span>
        <div class="unit-name">UNIT 1: Foundation</div>
        <div class="unit-lessons">Lessons 1–5</div>
        <ul class="lesson-list">
          <li>Alphabet Part 1 (А–К)</li>
          <li>Alphabet Part 2 (Л–Я)</li>
          <li>Numbers 1–20</li>
          <li>Colors &amp; Adjectives</li>
          <li>Basic Greetings</li>
        </ul>
      </div>
      <div class="unit-card">
        <span class="unit-icon">💬</span>
        <div class="unit-name">UNIT 2: Communication</div>
        <div class="unit-lessons">Lessons 6–10</div>
        <ul class="lesson-list">
          <li>Family Members</li>
          <li>My House</li>
          <li>Food &amp; Drinks</li>
          <li>Toys &amp; Games</li>
          <li>Weather &amp; Seasons</li>
        </ul>
      </div>
      <div class="unit-card">
        <span class="unit-icon">🌟</span>
        <div class="unit-name">UNIT 3: Life Skills</div>
        <div class="unit-lessons">Lessons 11–15</div>
        <ul class="lesson-list">
          <li>At the Zoo</li>
          <li>At the Doctor</li>
          <li>Train Station</li>
          <li>At the Airport</li>
          <li>Shopping</li>
        </ul>
      </div>
      <div class="unit-card">
        <span class="unit-icon">🎭</span>
        <div class="unit-name">UNIT 4: Culture</div>
        <div class="unit-lessons">Lessons 16–20</div>
        <ul class="lesson-list">
          <li>Famous Writers</li>
          <li>Music &amp; Musicians</li>
          <li>Ballet History</li>
          <li>Ice Skating</li>
          <li>Famous Rulers</li>
        </ul>
      </div>
      <div class="unit-card">
        <span class="unit-icon">🗺️</span>
        <div class="unit-name">UNIT 5: Geography</div>
        <div class="unit-lessons">Lessons 21–25</div>
        <ul class="lesson-list">
          <li>Russian Geography</li>
          <li>Temperatures &amp; Climate</li>
          <li>Impossible Cities</li>
          <li>Moscow — The Capital</li>
          <li>🎉 Review &amp; Celebration!</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- ─── DELIVERABLES ────────────────────────────────────────── -->
<section id="includes" style="background:white;">
  <div class="deliverables">
    <div class="included-head" style="text-align:center;">
      <div class="section-label">Per Lesson Materials</div>
      <h2 class="section-title">Everything You Need — Ready to Use</h2>
      <p class="section-subtitle">Every single lesson comes with a full set of materials — no prep required.</p>
    </div>

    <div class="deliv-grid">
      <div class="deliv-card">
        <div class="deliv-icon">📄</div>
        <div>
          <div class="deliv-title">Lesson Plan PDF</div>
          <div class="deliv-desc">Clear, structured lesson guide with timing, objectives, and step-by-step instructions for every activity.</div>
        </div>
      </div>
      <div class="deliv-card" style="border-color:#CC0000;">
        <div class="deliv-icon">📚</div>
        <div>
          <div class="deliv-title">Vocabulary List</div>
          <div class="deliv-desc">Full word list with Russian Cyrillic, phonetic pronunciation guide, and English translation.</div>
        </div>
      </div>
      <div class="deliv-card" style="border-color:#008080;">
        <div class="deliv-icon">✏️</div>
        <div>
          <div class="deliv-title">Printable Worksheets</div>
          <div class="deliv-desc">Kid-friendly activity sheets — tracing, matching, drawing, writing. Print and go!</div>
        </div>
      </div>
      <div class="deliv-card" style="border-color:#7B1FA2;">
        <div class="deliv-icon">🎧</div>
        <div>
          <div class="deliv-title">Audio Pronunciation Guide</div>
          <div class="deliv-desc">Native-quality pronunciation guide for all vocabulary words in each lesson. Hear it, then say it!</div>
        </div>
      </div>
      <div class="deliv-card" style="border-color:#E65100;">
        <div class="deliv-icon">🌍</div>
        <div>
          <div class="deliv-title">Cultural Notes</div>
          <div class="deliv-desc">Fascinating facts about Russia, its history, people, and traditions — making language come alive.</div>
        </div>
      </div>
      <div class="deliv-card" style="border-color:#FFD700;">
        <div class="deliv-icon">👩‍🏫</div>
        <div>
          <div class="deliv-title">Parent/Teacher Guide</div>
          <div class="deliv-desc">Expert tips on teaching each lesson, common mistakes to avoid, and ways to extend learning.</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ─── BONUS ──────────────────────────────────────────────── -->
<section class="bonus-section" id="bonus">
  <div class="bonus-inner">
    <div class="section-label" style="color:#FFD700;">Bonus Materials</div>
    <h2 class="section-title">7 Beautiful Bonus Resources</h2>
    <p class="section-subtitle" style="max-width:100%;">Included free with the complete course. Print them, display them, use them every day.</p>

    <div class="bonus-grid">
      <div class="bonus-card">
        <span class="bonus-icon">🔤</span>
        <div class="bonus-name">Alphabet Poster</div>
        <div class="bonus-desc">All 33 Cyrillic letters with sounds and examples. Printable A3/A4.</div>
      </div>
      <div class="bonus-card">
        <span class="bonus-icon">🔢</span>
        <div class="bonus-name">Numbers Chart 1–100</div>
        <div class="bonus-desc">Complete number reference chart in Russian, colorful and child-friendly.</div>
      </div>
      <div class="bonus-card">
        <span class="bonus-icon">🎨</span>
        <div class="bonus-name">Color Flashcards</div>
        <div class="bonus-desc">14 color cards with Russian names and memory games.</div>
      </div>
      <div class="bonus-card">
        <span class="bonus-icon">👨‍👩‍👧</span>
        <div class="bonus-name">Family Tree Template</div>
        <div class="bonus-desc">Printable family tree with Russian vocabulary labels for each role.</div>
      </div>
      <div class="bonus-card">
        <span class="bonus-icon">🗺️</span>
        <div class="bonus-name">Russia Map</div>
        <div class="bonus-desc">Interactive map with major cities, rivers, and geographical features labeled.</div>
      </div>
      <div class="bonus-card">
        <span class="bonus-icon">🏆</span>
        <div class="bonus-name">Completion Certificate</div>
        <div class="bonus-desc">Beautiful customizable certificate for course graduates. Print and frame!</div>
      </div>
      <div class="bonus-card">
        <span class="bonus-icon">📊</span>
        <div class="bonus-name">Progress Tracking Sheet</div>
        <div class="bonus-desc">Lesson-by-lesson tracker with star ratings and milestone rewards.</div>
      </div>
    </div>
  </div>
</section>

<!-- ─── QUOTE ──────────────────────────────────────────────── -->
<div class="quote-section">
  <p class="quote-text">"Каждый день немного — every day a little bit. That's all it takes to unlock a beautiful language and a remarkable culture."</p>
  <div class="quote-attr">— Elena Micle, Russian Language Major &amp; Creator of Russian for Kids</div>
</div>

<!-- ─── ABOUT ───────────────────────────────────────────────── -->
<section class="about" id="about">
  <div class="about-inner">
    <div class="about-visual">
      <div class="creator-avatar">👩‍🏫</div>
      <div class="creator-name">Elena Micle</div>
      <div class="creator-creds" style="margin-bottom:16px;">Russian Language Major · ESL Expert · Published Author · Mom</div>
      <div>
        <span class="cred-badge">Russian Language Major</span>
        <span class="cred-badge">22+ Years Teaching</span>
        <span class="cred-badge">TESOL Certified</span>
        <span class="cred-badge">Published Author ×5</span>
        <span class="cred-badge">Mom of Lexi</span>
        <span class="cred-badge">alo.micle.magic</span>
      </div>
      <div style="margin-top:20px;font-size:0.85rem;color:rgba(255,255,255,0.6);">liza.elena.micle@gmail.com</div>
    </div>

    <div class="about-text">
      <div class="section-label">About the Creator</div>
      <h2 class="section-title">Why This Course Is Different</h2>
      <p style="color:var(--muted);line-height:1.8;font-size:0.95rem;">Elena Micle has been teaching languages for over 22 years. As a Russian Language Major and mom of Lexi — who inspired this entire course — Elena knows exactly what makes kids love learning and what makes them tune out.</p>
      <ul class="diff-list">
        <li>Created by an actual Russian language major, not just a language app</li>
        <li>Designed FOR real kids — tested on Lexi herself!</li>
        <li>Culture-rich from lesson one — not just vocabulary lists</li>
        <li>Engaging, hands-on activities children actually enjoy</li>
        <li>Parent-friendly format — no Russian knowledge required</li>
        <li>Affordable pricing with lifetime access and free updates</li>
        <li>Covers grammar, culture, geography, history, and the arts</li>
      </ul>
    </div>
  </div>
</section>

<!-- ─── PRICING ─────────────────────────────────────────────── -->
<section class="pricing" id="pricing">
  <div class="pricing-inner">
    <div class="section-label">Simple, Fair Pricing</div>
    <h2 class="section-title">Choose Your License</h2>
    <p class="section-subtitle" style="margin:0 auto;">All licenses include lifetime access, all 25 lessons, all materials, and all future updates.</p>

    <div class="pricing-grid">
      <div class="price-card">
        <div class="price-tier">INDIVIDUAL LICENSE</div>
        <div class="price-amount">$79</div>
        <div class="price-desc">Perfect for home learners</div>
        <ul class="price-features">
          <li>Complete 25-lesson course</li>
          <li>All worksheets &amp; activities</li>
          <li>7 bonus materials</li>
          <li>Lifetime access</li>
          <li>Free updates</li>
          <li>1 child / family use</li>
        </ul>
        <a href="https://gumroad.com" target="_blank" class="price-btn price-btn-outline">Buy Individual — $79</a>
      </div>

      <div class="price-card featured">
        <div class="featured-badge">⭐ Most Popular</div>
        <div class="price-tier">TEACHER LICENSE</div>
        <div class="price-amount">$149</div>
        <div class="price-desc">For educators &amp; tutors</div>
        <ul class="price-features">
          <li>Everything in Individual</li>
          <li>Use with multiple students</li>
          <li>Classroom materials pack</li>
          <li>Teaching guides included</li>
          <li>Commercial use allowed</li>
          <li>Unlimited lessons taught</li>
        </ul>
        <a href="https://gumroad.com" target="_blank" class="price-btn price-btn-filled">Buy Teacher — $149</a>
      </div>

      <div class="price-card">
        <div class="price-tier">SCHOOL LICENSE</div>
        <div class="price-amount">$299</div>
        <div class="price-desc">For schools &amp; institutions</div>
        <ul class="price-features">
          <li>Everything in Teacher</li>
          <li>Unlimited students</li>
          <li>School-wide use</li>
          <li>Professional development</li>
          <li>Priority email support</li>
          <li>Custom branding option</li>
        </ul>
        <a href="https://gumroad.com" target="_blank" class="price-btn price-btn-outline">Buy School — $299</a>
      </div>
    </div>
  </div>
</section>

<!-- ─── FAQ ────────────────────────────────────────────────── -->
<div class="faq" id="faq">
  <div style="text-align:center;margin-bottom:40px;">
    <div class="section-label">Questions &amp; Answers</div>
    <h2 class="section-title">Frequently Asked Questions</h2>
  </div>

  <div class="faq-item">
    <div class="faq-q">Do I need to know Russian to teach this course?</div>
    <div class="faq-a">Absolutely not! Every lesson includes pronunciation guides, audio support, and detailed parent/teacher notes. You can learn right alongside your child. The course is designed for complete beginners of any age.</div>
  </div>
  <div class="faq-item">
    <div class="faq-q">What age group is this best for?</div>
    <div class="faq-a">The course is designed for children aged 6–12, but it's engaging enough for teens and adults too! The vocabulary and activities are paced for young learners, and the cultural content will fascinate everyone.</div>
  </div>
  <div class="faq-item">
    <div class="faq-q">How long does each lesson take?</div>
    <div class="faq-a">Each lesson is designed for 20–30 minutes of focused learning. With activities and worksheets, you might spend 45 minutes total. Consistency is more important than length — 20 minutes daily beats 2 hours once a week.</div>
  </div>
  <div class="faq-item">
    <div class="faq-q">What format are the materials in?</div>
    <div class="faq-a">The complete course is delivered as a comprehensive PDF with all 25 lessons. Bonus materials are provided as beautiful printable HTML files. You print what you need, when you need it.</div>
  </div>
  <div class="faq-item">
    <div class="faq-q">Is there a refund policy?</div>
    <div class="faq-a">Yes! If you're not satisfied within 30 days, contact Elena directly at liza.elena.micle@gmail.com for a full refund. No questions asked.</div>
  </div>
  <div class="faq-item">
    <div class="faq-q">Does this course teach reading and writing in Russian?</div>
    <div class="faq-a">Yes! The first two lessons focus entirely on the Cyrillic alphabet — both recognition and writing. By Lesson 3, students are already reading simple Russian words. Writing practice worksheets are included.</div>
  </div>
</div>

<!-- ─── CTA BANNER ─────────────────────────────────────────── -->
<div class="cta-banner">
  <h2>Ready to Start Your Russian Adventure?</h2>
  <p>Join families and teachers around the world who are discovering Russia through language, culture, and curiosity. Download today and start Lesson 1 in minutes!</p>
  <a href="https://gumroad.com" target="_blank" class="btn-primary" style="font-size:1.1rem;padding:18px 44px;">🇷🇺 Get Russian for Kids — $79</a>
  <div style="margin-top:20px;color:rgba(255,255,255,0.6);font-size:0.85rem;">Lifetime access · All 25 lessons · 7 bonus materials · Free updates</div>
</div>

<!-- ─── FOOTER ─────────────────────────────────────────────── -->
<footer>
  <div class="brand">🇷🇺 alo.micle.magic</div>
  <p>Russian for Kids — A Complete Beginner Course</p>
  <p>Created with love by Elena Micle · For Lexi and all curious kids</p>
  <div class="footer-links">
    <a href="#course">Course</a>
    <a href="#includes">Materials</a>
    <a href="#bonus">Bonus</a>
    <a href="#about">About</a>
    <a href="#pricing">Pricing</a>
    <a href="mailto:liza.elena.micle@gmail.com">Contact</a>
  </div>
  <p style="margin-top:16px;font-size:0.8rem;">© 2026 Elena Micle — All Rights Reserved · <a href="mailto:liza.elena.micle@gmail.com">liza.elena.micle@gmail.com</a></p>
</footer>

<script>
  // Smooth active nav highlighting
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 80;
      if (pageYOffset >= sectionTop) current = section.getAttribute('id');
    });
    navLinks.forEach(link => {
      link.style.color = link.getAttribute('href') === '#' + current 
        ? '#FFD700' : 'rgba(255,255,255,0.85)';
    });
  });
</script>
</body>
</html>
