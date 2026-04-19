// ============================================
// KIRA WIDGET v2.0 — Semantic Brain Edition
// alo.micle.magic — by Elena Micle
// ============================================

(function () {
  "use strict";

  // ── PRODUCT BRAIN ────────────────────────────
  const PRODUCTS = [
    { id:1,  title:"Ce am lăsat în urmă (roman românesc)", price:"$5", url:"https://alomiclemagic.gumroad.com/l/itpjzj", tags:"romanian novel fiction drama roman Elena Micle contemporary", audience:"romanian readers adults fiction lovers", category:"fiction" },
    { id:2,  title:"Russia Map Activity (FREE)", price:"FREE", url:"https://alomiclemagic.gumroad.com/l/mokpnm", tags:"russia map activity free worksheet geography kids", audience:"kids parents teachers homeschoolers", category:"freebie" },
    { id:3,  title:"Russian for Kids + Understanding Claude Bundle — SCHOOL LICENSE", price:"$499", url:"https://alomiclemagic.gumroad.com/l/vijhd", tags:"russian AI literacy bundle school district future skills language technology", audience:"schools districts administrators", category:"bundle" },
    { id:4,  title:"Russian for Kids + Understanding Claude Bundle — TEACHER LICENSE", price:"$239", url:"https://alomiclemagic.gumroad.com/l/intfwu", tags:"russian AI literacy bundle teacher classroom future skills", audience:"teachers classroom educators", category:"bundle" },
    { id:5,  title:"Russian for Kids + Understanding Claude Bundle — INDIVIDUAL LICENSE", price:"$129", url:"https://alomiclemagic.gumroad.com/l/wqvyu", tags:"russian AI literacy bundle homeschool family parents future skills", audience:"parents homeschoolers families", category:"bundle" },
    { id:6,  title:"Mom's Command Center — Monthly Membership", price:"$19.99/mo", url:"https://alomiclemagic.gumroad.com/l/crpbiv", tags:"membership moms mothers community support monthly organization overwhelmed busy", audience:"moms mothers parents women", category:"membership" },
    { id:7,  title:"Understanding Claude — AI for Kids (25 Lessons) — SCHOOL LICENSE", price:"$299", url:"https://gumroad.com/products/cgfkso", tags:"AI literacy Claude kids artificial intelligence school district technology future", audience:"schools districts", category:"ai-literacy" },
    { id:8,  title:"Understanding Claude — AI for Kids — TEACHER LICENSE", price:"$149", url:"https://alomiclemagic.gumroad.com/l/syzdu", tags:"AI literacy Claude kids teacher classroom technology", audience:"teachers", category:"ai-literacy" },
    { id:9,  title:"Understanding Claude — AI for Kids — INDIVIDUAL LICENSE", price:"$79", url:"https://alomiclemagic.gumroad.com/l/txbjp", tags:"AI literacy Claude kids homeschool parents family technology", audience:"parents homeschoolers families", category:"ai-literacy" },
    { id:10, title:"Russian for Kids — Complete Beginners Course — SCHOOL LICENSE", price:"$299", url:"https://alomiclemagic.gumroad.com/l/gfrsen", tags:"Russian language kids beginners school district foreign language", audience:"schools districts", category:"language" },
    { id:11, title:"Russian for Kids — Complete Beginners Course — TEACHER LICENSE", price:"$149", url:"https://alomiclemagic.gumroad.com/l/svjtnz", tags:"Russian language kids beginners teacher classroom", audience:"teachers", category:"language" },
    { id:12, title:"Russian for Kids — Complete Beginners Course — INDIVIDUAL LICENSE", price:"$79", url:"https://alomiclemagic.gumroad.com/l/rdvsj", tags:"Russian language kids beginners homeschool family parents", audience:"parents homeschoolers", category:"language" },
    { id:13, title:"Electric Blue — Launch Special Chapters 1–6", price:"$3.99", url:"https://alomiclemagic.gumroad.com/l/ynbcrz", tags:"romance novel fiction english Bucharest Hearts Elena Micle limited special", audience:"romance readers adults", category:"fiction" },
    { id:14, title:"Electric Blue — Chapter Bundle 1–6", price:"$4.99", url:"https://gumroad.com/products/kkyxct", tags:"romance novel fiction english Bucharest Hearts Elena Micle", audience:"romance readers adults", category:"fiction" },
    { id:15, title:"Support HAVEN — Help Single Moms in Crisis", price:"$5+", url:"https://alomiclemagic.gumroad.com/l/qqmwlu", tags:"donation single moms support community HAVEN charity helping", audience:"donors supporters community", category:"community" },
    { id:16, title:"Complete TESOL Certification Course", price:"$398", url:"https://gumroad.com/products/vnwjtd", tags:"TESOL ESL certification teaching career professional development adult teacher training", audience:"adults career changers aspiring teachers educators", category:"tesol" },
    { id:17, title:"Romanian and Serbian Ultimate ESL Bundle", price:"$59.99", url:"https://alomiclemagic.gumroad.com/l/iqdfpl", tags:"ESL grammar Romanian Serbian bundle worksheets ultimate", audience:"ESL teachers Romanian Serbian speakers", category:"esl" },
    { id:18, title:"ESL Grammar Essentials Bundle — Serbian Version", price:"$34.99", url:"https://alomiclemagic.gumroad.com/l/fylmy", tags:"ESL grammar Serbian bundle worksheets", audience:"ESL teachers Serbian classrooms", category:"esl" },
    { id:19, title:"Complete ESL Grammar — Romanian Bundle", price:"$34.99", url:"https://alomiclemagic.gumroad.com/l/zdoci", tags:"ESL grammar Romanian bundle complete", audience:"ESL teachers Romanian classrooms", category:"esl" },
    { id:20, title:"Complete ESL Worksheets — Romanian Bundle", price:"$19.99", url:"https://alomiclemagic.gumroad.com/l/nuufad", tags:"ESL worksheets Romanian bundle printable", audience:"ESL teachers Romanian classrooms", category:"esl" },
    { id:21, title:"ESL Grammar Essentials Pack 2 — Romanian & Serbian", price:"$34.99", url:"https://alomiclemagic.gumroad.com/l/frzdrze", tags:"ESL grammar Romanian Serbian pack 2 bundle", audience:"ESL teachers bilingual classrooms", category:"esl" },
    { id:22, title:"ESL Grammar Essentials Pack 2 — Serbian", price:"$19.99", url:"https://alomiclemagic.gumroad.com/l/btukoh", tags:"ESL grammar Serbian pack 2", audience:"ESL teachers Serbian classrooms", category:"esl" },
    { id:23, title:"ESL Grammar Essentials Pack 2 — Romanian", price:"$19.99", url:"https://alomiclemagic.gumroad.com/l/khdqg", tags:"ESL grammar Romanian pack 2", audience:"ESL teachers Romanian classrooms", category:"esl" },
    { id:24, title:"ESL Grammar Essentials Pack 1 — Romanian", price:"$19.99", url:"https://alomiclemagic.gumroad.com/l/kdgwo", tags:"ESL grammar Romanian pack 1 beginners", audience:"ESL teachers Romanian classrooms", category:"esl" },
    { id:25, title:"ESL Grammar Essentials Pack 1 — Romanian & Serbian", price:"$34.99", url:"https://alomiclemagic.gumroad.com/l/hsudq", tags:"ESL grammar Romanian Serbian pack 1 bundle beginners", audience:"ESL teachers bilingual classrooms", category:"esl" },
    { id:26, title:"ESL Grammar Essentials Pack 1 — Serbian", price:"$19.99", url:"https://alomiclemagic.gumroad.com/l/njiuut", tags:"ESL grammar Serbian pack 1 beginners", audience:"ESL teachers Serbian classrooms", category:"esl" },
    { id:27, title:"Complete Classroom Life Skills Bundle — TEACHER LICENSE", price:"$79.99", url:"https://alomiclemagic.gumroad.com/l/aspwcj", tags:"life skills classroom teacher character social emotional learning both courses bundle", audience:"teachers classroom educators", category:"life-skills" },
    { id:28, title:"Complete Classroom Life Skills Bundle — INDIVIDUAL LICENSE", price:"$49.99", url:"https://alomiclemagic.gumroad.com/l/edsdka", tags:"life skills individual homeschool parents family character social emotional", audience:"parents homeschoolers families", category:"life-skills" },
    { id:29, title:"Raising Respectful Humans — Manners & Social Skills — SCHOOL LICENSE", price:"$199.99", url:"https://alomiclemagic.gumroad.com/l/ozrbn", tags:"manners social skills respect character school district kids raising", audience:"schools districts character programs", category:"life-skills" },
    { id:30, title:"Raising Respectful Humans — TEACHER LICENSE", price:"$49.99", url:"https://alomiclemagic.gumroad.com/l/xxvyjpa", tags:"manners social skills respect teacher classroom character", audience:"teachers", category:"life-skills" },
    { id:31, title:"Raising Respectful Humans — INDIVIDUAL LICENSE", price:"$29.99", url:"https://alomiclemagic.gumroad.com/l/oyllc", tags:"manners social skills respect parents family homeschool kids", audience:"parents homeschoolers families", category:"life-skills" },
    { id:32, title:"The Ultimate Kids' Money Guide — SCHOOL LICENSE", price:"$199.99", url:"https://alomiclemagic.gumroad.com/l/zrmjy", tags:"money financial literacy kids school district entrepreneurship savings", audience:"schools districts", category:"money" },
    { id:33, title:"The Ultimate Kids' Money Guide — TEACHER LICENSE", price:"$49.99", url:"https://alomiclemagic.gumroad.com/l/htaawi", tags:"money financial literacy kids teacher classroom entrepreneurship", audience:"teachers", category:"money" },
    { id:34, title:"The Ultimate Kids' Money Guide — INDIVIDUAL LICENSE", price:"$29.99", url:"https://alomiclemagic.gumroad.com/l/qyoeiv", tags:"money financial literacy kids parents family homeschool", audience:"parents homeschoolers families", category:"money" },
  ];

  // ── BUILD SYSTEM PROMPT ──────────────────────
  function buildSystemPrompt(lang) {
    const catalog = PRODUCTS.map(p =>
      `[${p.id}] ${p.title} | ${p.price} | ${p.url} | Audience: ${p.audience} | Tags: ${p.tags}`
    ).join("\n");

    const base = `You are Kira — a warm, intelligent AI sales assistant for alo.micle.magic, the digital brand of Elena Micle: TESOL-certified educator, published author, and founder.

YOUR PERSONALITY: Warm, smart, never pushy. You feel like a knowledgeable friend who genuinely wants to help. You match the visitor's energy.

YOUR MISSION: Understand what the visitor needs (their situation, their role — parent? teacher? school? romance reader?) and recommend the BEST matching product from the catalog. You are a semantic brain — you match by MEANING, not keywords.

PRODUCT CATALOG (34 products):
${catalog}

SMART MATCHING RULES:
- Always ask ONE clarifying question if the need is unclear (Are you shopping for a classroom or at home? School or personal use?)
- License logic: SCHOOL = unlimited school use, TEACHER = one classroom, INDIVIDUAL = home/personal/homeschool
- If someone is overwhelmed/burned out/mom → Mom's Command Center membership
- If someone wants to teach English → TESOL course
- If someone asks about AI for kids → Understanding Claude courses
- If someone wants a Romanian novel → Ce am lăsat în urmă
- If someone wants romance in English → Electric Blue
- Always include the direct Gumroad URL when recommending
- If someone asks for a free option → Russia Map Activity
- When recommending bundles, highlight the VALUE (what they get vs. buying separately)

LANGUAGE: Detect visitor language and respond in the SAME language. You speak: English, Romanian, French, Spanish, Italian, German, Serbian.

FORMAT: Keep responses SHORT and warm. Max 3–4 sentences + product recommendation with link. Never list all products. NEVER be salesy or pushy.`;

    return base;
  }

  // ── GROQ API CALL ────────────────────────────
  const GROQ_MODEL = "llama-3.1-8b-instant";

  async function askKira(messages, lang) {
    const systemPrompt = buildSystemPrompt(lang);
    const response = await fetch("https://kira-api.liza-elena-micle.workers.dev/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: GROQ_MODEL,
        messages: [
          { role: "system", content: systemPrompt },
          ...messages
        ],
        max_tokens: 300,
        temperature: 0.7
      })
    });
    const data = await response.json();
    return data.choices?.[0]?.message?.content || "I'm having a moment — please try again! 💙";
  }

  // ── LANGUAGE DETECTION ───────────────────────
  function detectLanguage(text) {
    const t = text.toLowerCase();
    if (/\b(salut|bună|mulțumesc|vreau|sunt|îmi|dacă|pentru|înainte)\b/.test(t)) return "ro";
    if (/\b(bonjour|merci|je|vous|pour|est|les)\b/.test(t)) return "fr";
    if (/\b(hola|gracias|quiero|para|como|que)\b/.test(t)) return "es";
    if (/\b(ciao|grazie|voglio|sono|per|come)\b/.test(t)) return "it";
    if (/\b(hallo|danke|ich|sie|für|ist)\b/.test(t)) return "de";
    if (/\b(zdravo|hvala|imam|želim)\b/.test(t)) return "sr";
    return "en";
  }

  // ── WIDGET STYLES ────────────────────────────
  const STYLES = `
    #kira-launcher {
      position: fixed;
      bottom: 24px;
      right: 24px;
      z-index: 9999;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 10px;
      font-family: 'Segoe UI', system-ui, sans-serif;
    }
    #kira-bubble {
      background: linear-gradient(135deg, #ff6b35, #ff8c42);
      color: white;
      padding: 10px 16px;
      border-radius: 20px 20px 4px 20px;
      font-size: 13px;
      font-weight: 500;
      box-shadow: 0 4px 20px rgba(255,107,53,0.4);
      cursor: pointer;
      max-width: 220px;
      line-height: 1.4;
      animation: kira-bounce 2s ease-in-out infinite;
    }
    @keyframes kira-bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-4px); }
    }
    #kira-btn {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: linear-gradient(135deg, #ff6b35, #e84d1c);
      border: none;
      cursor: pointer;
      box-shadow: 0 4px 20px rgba(255,107,53,0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 26px;
      transition: transform 0.2s;
    }
    #kira-btn:hover { transform: scale(1.08); }
    #kira-window {
      position: fixed;
      bottom: 100px;
      right: 24px;
      width: 340px;
      max-height: 520px;
      background: #1a1a2e;
      border-radius: 16px;
      box-shadow: 0 20px 60px rgba(0,0,0,0.5);
      display: none;
      flex-direction: column;
      overflow: hidden;
      z-index: 9998;
      border: 1px solid rgba(255,107,53,0.3);
    }
    #kira-window.open { display: flex; }
    #kira-header {
      background: linear-gradient(135deg, #ff6b35, #e84d1c);
      padding: 14px 16px;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    #kira-avatar {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background: rgba(255,255,255,0.25);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
    }
    #kira-header-text { flex: 1; }
    #kira-header-text strong { color: white; font-size: 14px; display: block; }
    #kira-header-text span { color: rgba(255,255,255,0.8); font-size: 11px; }
    #kira-close {
      background: none;
      border: none;
      color: white;
      font-size: 20px;
      cursor: pointer;
      padding: 0;
      line-height: 1;
    }
    #kira-messages {
      flex: 1;
      overflow-y: auto;
      padding: 16px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      scrollbar-width: thin;
      scrollbar-color: #ff6b35 #1a1a2e;
    }
    .kira-msg {
      max-width: 85%;
      padding: 10px 14px;
      border-radius: 14px;
      font-size: 13px;
      line-height: 1.5;
      word-wrap: break-word;
    }
    .kira-msg a {
      color: #ff8c42;
      text-decoration: underline;
    }
    .kira-msg.kira { background: #16213e; color: #e0e0e0; border-radius: 4px 14px 14px 14px; align-self: flex-start; }
    .kira-msg.user { background: linear-gradient(135deg, #ff6b35, #e84d1c); color: white; border-radius: 14px 14px 4px 14px; align-self: flex-end; }
    .kira-typing { display: flex; gap: 4px; padding: 12px 14px; align-items: center; }
    .kira-typing span { width: 7px; height: 7px; background: #ff6b35; border-radius: 50%; animation: kira-dot 1.2s ease-in-out infinite; }
    .kira-typing span:nth-child(2) { animation-delay: 0.2s; }
    .kira-typing span:nth-child(3) { animation-delay: 0.4s; }
    @keyframes kira-dot { 0%,80%,100%{transform:scale(0.6);opacity:0.5} 40%{transform:scale(1);opacity:1} }
    #kira-input-area {
      padding: 12px;
      border-top: 1px solid rgba(255,255,255,0.08);
      display: flex;
      gap: 8px;
    }
    #kira-input {
      flex: 1;
      background: #16213e;
      border: 1px solid rgba(255,107,53,0.3);
      border-radius: 20px;
      color: white;
      padding: 8px 14px;
      font-size: 13px;
      outline: none;
      transition: border-color 0.2s;
    }
    #kira-input:focus { border-color: #ff6b35; }
    #kira-input::placeholder { color: rgba(255,255,255,0.3); }
    #kira-send {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background: linear-gradient(135deg, #ff6b35, #e84d1c);
      border: none;
      color: white;
      cursor: pointer;
      font-size: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform 0.2s;
      flex-shrink: 0;
    }
    #kira-send:hover { transform: scale(1.1); }
    @media (max-width: 400px) {
      #kira-window { width: calc(100vw - 32px); right: 16px; bottom: 90px; }
    }
  `;

  // ── INJECT STYLES ────────────────────────────
  const styleEl = document.createElement("style");
  styleEl.textContent = STYLES;
  document.head.appendChild(styleEl);

  // ── BUILD WIDGET HTML ────────────────────────
  const launcher = document.createElement("div");
  launcher.id = "kira-launcher";
  launcher.innerHTML = `
    <div id="kira-bubble">✨ Hi! I'm Kira — ask me anything about our products!</div>
    <button id="kira-btn" aria-label="Chat with Kira">🤖</button>
  `;
  document.body.appendChild(launcher);

  const chatWindow = document.createElement("div");
  chatWindow.id = "kira-window";
  chatWindow.innerHTML = `
    <div id="kira-header">
      <div id="kira-avatar">✨</div>
      <div id="kira-header-text">
        <strong>Kira</strong>
        <span>alo.micle.magic assistant</span>
      </div>
      <button id="kira-close">×</button>
    </div>
    <div id="kira-messages"></div>
    <div id="kira-input-area">
      <input id="kira-input" type="text" placeholder="Ask me anything..." autocomplete="off" />
      <button id="kira-send">➤</button>
    </div>
  `;
  document.body.appendChild(chatWindow);

  // ── STATE ────────────────────────────────────
  let messages = [];
  let detectedLang = "en";
  let isOpen = false;
  let isTyping = false;
  let bubbleHidden = false;

  // ── HELPERS ──────────────────────────────────
  const msgContainer = () => document.getElementById("kira-messages");

  function addMessage(text, role) {
    const div = document.createElement("div");
    div.className = `kira-msg ${role}`;
    // Convert URLs to links
    div.innerHTML = text.replace(
      /(https?:\/\/[^\s<]+)/g,
      '<a href="$1" target="_blank" rel="noopener">$1</a>'
    );
    msgContainer().appendChild(div);
    msgContainer().scrollTop = msgContainer().scrollHeight;
  }

  function showTyping() {
    const div = document.createElement("div");
    div.className = "kira-msg kira kira-typing";
    div.id = "kira-typing-indicator";
    div.innerHTML = "<span></span><span></span><span></span>";
    msgContainer().appendChild(div);
    msgContainer().scrollTop = msgContainer().scrollHeight;
  }

  function hideTyping() {
    const ind = document.getElementById("kira-typing-indicator");
    if (ind) ind.remove();
  }

  async function sendMessage(text) {
    if (!text.trim() || isTyping) return;
    isTyping = true;

    // Detect language from first user message
    if (messages.length === 0) {
      detectedLang = detectLanguage(text);
    }

    addMessage(text, "user");
    messages.push({ role: "user", content: text });

    const input = document.getElementById("kira-input");
    input.value = "";
    input.disabled = true;

    showTyping();

    try {
      const reply = await askKira(messages, detectedLang);
      hideTyping();
      addMessage(reply, "kira");
      messages.push({ role: "assistant", content: reply });
    } catch (e) {
      hideTyping();
      addMessage("Oops, something went wrong! Please try again. 💙", "kira");
    }

    input.disabled = false;
    input.focus();
    isTyping = false;
  }

  function openChat() {
    isOpen = true;
    chatWindow.classList.add("open");
    document.getElementById("kira-bubble").style.display = "none";
    bubbleHidden = true;

    if (messages.length === 0) {
      const greetings = {
        en: "Hi! 👋 I'm Kira, your guide to alo.micle.magic. Are you a parent, teacher, or looking for something specific today?",
        ro: "Salut! 👋 Sunt Kira, asistenta ta pentru alo.micle.magic. Ești părinte, profesor, sau cauți ceva anume?",
        fr: "Bonjour! 👋 Je suis Kira. Êtes-vous parent, enseignant ou cherchez-vous quelque chose de spécifique?",
        es: "¡Hola! 👋 Soy Kira. ¿Eres padre, maestro o buscas algo específico hoy?",
        de: "Hallo! 👋 Ich bin Kira. Sind Sie Elternteil, Lehrer oder suchen Sie etwas Bestimmtes?",
      };
      const greeting = greetings[detectedLang] || greetings.en;
      setTimeout(() => {
        addMessage(greeting, "kira");
        messages.push({ role: "assistant", content: greeting });
      }, 300);
    }
    document.getElementById("kira-input").focus();
  }

  function closeChat() {
    isOpen = false;
    chatWindow.classList.remove("open");
    if (!bubbleHidden) {
      document.getElementById("kira-bubble").style.display = "block";
    }
  }

  // ── EVENT LISTENERS ──────────────────────────
  document.getElementById("kira-btn").addEventListener("click", () => {
    isOpen ? closeChat() : openChat();
  });
  document.getElementById("kira-bubble").addEventListener("click", openChat);
  document.getElementById("kira-close").addEventListener("click", closeChat);
  document.getElementById("kira-send").addEventListener("click", () => {
    sendMessage(document.getElementById("kira-input").value);
  });
  document.getElementById("kira-input").addEventListener("keydown", (e) => {
    if (e.key === "Enter") sendMessage(e.target.value);
  });

  // ── AUTO-HIDE BUBBLE ─────────────────────────
  setTimeout(() => {
    const bubble = document.getElementById("kira-bubble");
    if (bubble && !isOpen) {
      bubble.style.opacity = "0";
      bubble.style.transition = "opacity 0.5s";
      setTimeout(() => {
        if (!isOpen) bubble.style.display = "none";
      }, 500);
    }
  }, 8000);

})();
