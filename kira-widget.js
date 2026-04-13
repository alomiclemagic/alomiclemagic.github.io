/* ============================================================
   KIRA WIDGET v3 — alo.micle.magic AI Sales Assistant
   FULL CATALOG — Gumroad + Real Amazon ASINs
   Place before </body>: <script src="kira-widget.js"></script>
   ============================================================ */
(function () {
  if (document.getElementById("kira-root")) return;

  const style = document.createElement("style");
  style.textContent = `
    #kira-bubble { position:fixed;bottom:28px;right:28px;z-index:99999;width:60px;height:60px;border-radius:50%;cursor:pointer;background:linear-gradient(135deg,#7c3aed,#a855f7,#ec4899);box-shadow:0 4px 24px rgba(139,92,246,.55);display:flex;align-items:center;justify-content:center;font-size:26px;border:none;outline:none;transition:transform .2s,box-shadow .2s;animation:kira-float 3s ease-in-out infinite; }
    #kira-bubble:hover{transform:scale(1.1);box-shadow:0 6px 32px rgba(139,92,246,.75);}
    #kira-badge{position:absolute;top:-2px;right:-2px;width:18px;height:18px;border-radius:50%;background:#4ade80;border:2px solid #0f0c29;animation:kira-pulse 2s ease infinite;}
    #kira-window{position:fixed;bottom:102px;right:28px;z-index:99998;width:370px;height:560px;background:rgba(15,12,41,.97);border:1px solid rgba(139,92,246,.35);border-radius:20px;box-shadow:0 8px 60px rgba(139,92,246,.25);display:flex;flex-direction:column;overflow:hidden;font-family:Georgia,serif;transition:opacity .25s,transform .25s;transform-origin:bottom right;}
    #kira-window.kira-hidden{opacity:0;transform:scale(.88) translateY(16px);pointer-events:none;}
    #kira-header{padding:14px 16px;background:linear-gradient(135deg,rgba(88,28,220,.45),rgba(49,10,108,.35));border-bottom:1px solid rgba(139,92,246,.2);display:flex;align-items:center;gap:10px;}
    #kira-avatar{width:40px;height:40px;border-radius:50%;flex-shrink:0;background:linear-gradient(135deg,#7c3aed,#a855f7,#ec4899);display:flex;align-items:center;justify-content:center;font-size:20px;box-shadow:0 0 16px rgba(168,85,247,.5);animation:kira-float 3s ease-in-out infinite;}
    #kira-header-text{flex:1;}
    #kira-name{font-size:15px;font-weight:bold;background:linear-gradient(90deg,#e9d5ff,#f9a8d4,#bfdbfe);background-size:200% auto;-webkit-background-clip:text;-webkit-text-fill-color:transparent;animation:kira-shimmer 4s linear infinite;}
    #kira-sub{font-size:10px;color:rgba(196,181,253,.65);font-family:sans-serif;margin-top:1px;}
    #kira-close{background:none;border:none;color:rgba(196,181,253,.6);font-size:20px;cursor:pointer;padding:0 4px;}
    #kira-close:hover{color:white;}
    #kira-langs{padding:6px 14px;background:rgba(88,28,220,.1);border-bottom:1px solid rgba(139,92,246,.1);display:flex;gap:5px;flex-wrap:wrap;align-items:center;}
    .kira-lang-label{font-size:9px;color:rgba(196,181,253,.45);font-family:sans-serif;}
    .kira-lang-pill{font-size:9px;padding:1px 7px;border-radius:20px;background:rgba(139,92,246,.15);border:1px solid rgba(139,92,246,.25);color:rgba(196,181,253,.8);font-family:sans-serif;}
    #kira-messages{flex:1;overflow-y:auto;padding:14px;display:flex;flex-direction:column;gap:12px;scrollbar-width:thin;scrollbar-color:rgba(139,92,246,.3) transparent;}
    .kira-msg-row{display:flex;align-items:flex-start;gap:8px;animation:kira-fadein .3s ease;}
    .kira-msg-row.user{flex-direction:row-reverse;}
    .kira-msg-icon{width:26px;height:26px;border-radius:50%;flex-shrink:0;background:linear-gradient(135deg,#7c3aed,#ec4899);display:flex;align-items:center;justify-content:center;font-size:12px;}
    .kira-bubble-msg{max-width:80%;padding:10px 13px;font-size:13px;line-height:1.65;color:rgba(255,255,255,.92);}
    .kira-bubble-msg.assistant{border-radius:16px 16px 16px 4px;background:rgba(255,255,255,.06);border:1px solid rgba(139,92,246,.2);}
    .kira-bubble-msg.user{border-radius:16px 16px 4px 16px;background:linear-gradient(135deg,#7c3aed,#a855f7);font-family:sans-serif;box-shadow:0 3px 16px rgba(124,58,237,.4);}
    .kira-bubble-msg a{color:#c4b5fd;}
    .kira-typing{display:flex;gap:4px;align-items:center;padding:10px 13px;}
    .kira-dot{width:6px;height:6px;border-radius:50%;background:#a855f7;animation:kira-pulse 1.2s ease infinite;}
    .kira-dot:nth-child(2){animation-delay:.2s;}.kira-dot:nth-child(3){animation-delay:.4s;}
    #kira-suggestions{padding:0 14px 4px;display:flex;flex-direction:column;gap:5px;}
    .kira-suggest{font-size:11px;padding:5px 11px;border-radius:16px;cursor:pointer;background:rgba(139,92,246,.12);border:1px solid rgba(139,92,246,.3);color:rgba(196,181,253,.85);font-family:sans-serif;text-align:left;transition:all .2s;width:fit-content;}
    .kira-suggest:hover{background:rgba(139,92,246,.28);transform:translateY(-1px);}
    #kira-input-area{padding:10px 14px 12px;border-top:1px solid rgba(139,92,246,.2);background:rgba(15,12,41,.95);}
    #kira-input-row{display:flex;gap:8px;align-items:flex-end;background:rgba(255,255,255,.05);border:1px solid rgba(139,92,246,.3);border-radius:14px;padding:8px 12px;}
    #kira-input{flex:1;background:transparent;border:none;outline:none;resize:none;color:rgba(255,255,255,.9);font-size:13px;font-family:sans-serif;line-height:1.5;max-height:90px;overflow-y:auto;}
    #kira-input::placeholder{color:rgba(196,181,253,.4);}
    #kira-send{width:32px;height:32px;border-radius:10px;border:none;cursor:pointer;background:linear-gradient(135deg,#7c3aed,#a855f7);color:white;font-size:15px;transition:all .2s;flex-shrink:0;display:flex;align-items:center;justify-content:center;}
    #kira-send:disabled{background:rgba(139,92,246,.2);cursor:not-allowed;}
    #kira-send:not(:disabled):hover{transform:scale(1.08);box-shadow:0 0 16px rgba(139,92,246,.6);}
    #kira-footer{text-align:center;margin-top:6px;font-size:9px;color:rgba(196,181,253,.25);font-family:sans-serif;}
    @keyframes kira-float{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}
    @keyframes kira-pulse{0%,100%{opacity:1}50%{opacity:.35}}
    @keyframes kira-shimmer{0%{background-position:-200% center}100%{background-position:200% center}}
    @keyframes kira-fadein{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}
    @media(max-width:420px){#kira-window{width:calc(100vw - 24px);right:12px;bottom:90px;}#kira-bubble{right:16px;bottom:16px;}}
  `;
  document.head.appendChild(style);

  const SYSTEM = `You are Kira, the warm and brilliant AI sales assistant for Elena Micle's brand "alo.micle.magic."
Elena is a Romanian educator with 22+ years experience, TESOL-certified, published author, digital entrepreneur. Her work is her legacy for her daughter Lexi.

YOUR PERSONALITY: Warm, enthusiastic, genuinely helpful — like a brilliant friend, never pushy. Joyful, encouraging, a little playful. Keep responses 3-5 sentences. Always end with a warm open question.

CRITICAL LANGUAGE RULE: Detect visitor's language from first message and respond in that SAME language throughout. Romanian→Romanian. French→French. Spanish→Spanish. German→German. Italian→Italian. English→English.

════════════════════════════════
ELENA'S COMPLETE PRODUCT CATALOG
════════════════════════════════

📗 ROMANIAN LITERARY FICTION
• "Ce am lăsat în urmă" – Roman literar, 11 capitole, Elena Micle
  → https://alomiclemagic.gumroad.com/l/itpjzj | $5

📖 AMAZON BOOKS — direct links:
• Electric Blue (Romance Novel) — Kindle $2.99 → https://www.amazon.com/dp/B0GPM47VBT
  Paperback $15 → https://www.amazon.com/dp/B0GPNJ2QVC | Hardcover $28.99 → https://www.amazon.com/dp/B0GR9CR7MD
• One More Valentine (Bucharest Hearts #1, steamy reunion romance) — Kindle $2.99 → https://www.amazon.com/dp/B0GJPTJNVP | Paperback $7 → https://www.amazon.com/dp/B0GJYN9W87
• Stories for My Daughter (bedtime collection, 10 tales) — Kindle $4 → https://www.amazon.com/dp/B0GGZ8YSKF | Paperback $16.99 → https://www.amazon.com/dp/B0GH32M19K | Hardcover $35 → https://www.amazon.com/dp/B0GHGFJT6F
• Letters to My Daughter (mother-daughter journal, 70 prompts) — Paperback $13 → https://www.amazon.com/dp/B0GHWWPCPM
• Understanding Claude: A Kid's Guide to AI Friends — Kindle $4 → https://www.amazon.com/dp/B0GJ3ZP7ZK | Paperback $12.99 → https://www.amazon.com/dp/B0GJ5V174X | Hardcover $22 → https://www.amazon.com/dp/B0GJ5CKG5D
• The Parent's Survival Guide (ages 8-12) — Kindle $2.99 → https://www.amazon.com/dp/B0GK4WXL7S | Paperback $9.99 → https://www.amazon.com/dp/B0GK8HBNWB
• Russian for Kids Student Activity Workbook (25 lessons, ages 6-12) — Paperback $12.99 → https://www.amazon.com/dp/B0GQM2S33M

📚 ESL / GRAMMAR (Gumroad):
• TESOL Certification Course → https://gumroad.com/products/vnwjtd | $398
• ESL Grammar Pack 1 – RO+SR bundle → https://alomiclemagic.gumroad.com/l/hsudq | $34.99
• ESL Grammar Pack 1 – Romanian → https://alomiclemagic.gumroad.com/l/kdgwo | $19.99
• ESL Grammar Pack 1 – Serbian → https://alomiclemagic.gumroad.com/l/njiuut | $19.99
• ESL Grammar Pack 2 – RO+SR bundle → https://alomiclemagic.gumroad.com/l/frzdrze | $34.99
• ESL Grammar Pack 2 – Romanian → https://alomiclemagic.gumroad.com/l/khdqg | $19.99
• ESL Grammar Pack 2 – Serbian → https://alomiclemagic.gumroad.com/l/btukoh | $19.99
• Complete ESL Grammar Bundle – Romanian → https://alomiclemagic.gumroad.com/l/zdoci | $34.99
• Complete ESL Worksheets Bundle – Romanian → https://alomiclemagic.gumroad.com/l/nuufad | $19.99
• Romanian & Serbian Ultimate Bundle → https://alomiclemagic.gumroad.com/l/iqdfpl | $59.99

🤖 AI LITERACY — "Understanding Claude: Kid's Complete Guide" (25 lessons, Gumroad course):
• School License → https://gumroad.com/products/cgfkso | $299
• Teacher License → https://alomiclemagic.gumroad.com/l/syzdu | $149
• Individual License → https://alomiclemagic.gumroad.com/l/txbjp | $79

🇷🇺 RUSSIAN FOR KIDS — Complete Beginner Course (Gumroad):
• School License → https://alomiclemagic.gumroad.com/l/gfrsen | $299
• Teacher License → https://alomiclemagic.gumroad.com/l/svjtnz | $149
• Individual License → https://alomiclemagic.gumroad.com/l/rdvsj | $79
• Russia Map Activity (FREE!) → https://alomiclemagic.gumroad.com/l/mokpnm ⭐

🚀 MEGA BUNDLE — Russian for Kids + Understanding Claude:
• School → https://alomiclemagic.gumroad.com/l/vijhd | $499
• Teacher → https://alomiclemagic.gumroad.com/l/intfwu | $239
• Individual → https://alomiclemagic.gumroad.com/l/wqvyu | $129

👶 LIFE SKILLS:
• Raising Respectful Humans: School → https://alomiclemagic.gumroad.com/l/ozrbn | $199.99 | Teacher → https://alomiclemagic.gumroad.com/l/xxvyjpa | $49.99 | Individual → https://alomiclemagic.gumroad.com/l/oyllc | $29.99
• Kids Money Guide: School → https://alomiclemagic.gumroad.com/l/zrmjy | $199.99 | Teacher → https://alomiclemagic.gumroad.com/l/htaawi | $49.99 | Individual → https://alomiclemagic.gumroad.com/l/qyoeiv | $29.99
• Life Skills Bundle (both): Teacher → https://alomiclemagic.gumroad.com/l/aspwcj | $79.99 | Individual → https://alomiclemagic.gumroad.com/l/edsdka | $49.99

👩‍👧 FOR MOMS:
• Mom's Command Center (membership) → https://alomiclemagic.gumroad.com/l/crpbiv | $19.99/month
• Support HAVEN (single moms) → https://alomiclemagic.gumroad.com/l/qqmwlu | $5+

💙 ROMANCE on Gumroad:
• Electric Blue Launch Special (Ch.1-6) → https://alomiclemagic.gumroad.com/l/ynbcrz | $3.99
• Electric Blue Chapter Bundle → https://gumroad.com/products/kkyxct | $4.99

════════════════════════════════
SMART SALES RULES
════════════════════════════════
LICENSE MATCHING: school/district→School. teacher/classroom→Teacher. parent/home/my child→Individual.

BY VISITOR TYPE:
• ESL teacher → ESL Grammar Pack + TESOL course
• Parent: Russian for child → Individual license + free Russia Map Activity first
• Parent: AI literacy → Understanding Claude Individual + mention Mega Bundle
• School admin → School licenses, stress value
• Romance reader → Electric Blue ($2.99 Kindle) as entry, then mention One More Valentine
• Mom feeling overwhelmed → Mom's Command Center
• Gift for child → Stories for My Daughter or Letters to My Daughter on Amazon
• Undecided → FREE Russia Map Activity always
• Romanian reader → "Ce am lăsat în urmă" $5 Gumroad

ALWAYS offer FREE Russia Map Activity to undecided visitors.
Store: https://alomiclemagic.gumroad.com | Website: https://alomiclemagic.github.io

You represent Elena's heart, 22 years of teaching, and her legacy for Lexi. Every visitor matters. 💜`;

  const SUGGESTIONS = [
    "I'm an English teacher — what's for me?",
    "I want Russian lessons for my child",
    "Recommend a romance novel",
    "Caut resurse pentru profesori",
    "I need a gift for my daughter",
  ];

  let messages = [{ role:"assistant", content:"Hi there! ✨ I'm Kira, Elena's AI assistant. Whether you're a teacher, a parent, a romance reader, or just curious — I'm here to help you find exactly what you need. What brings you here today?" }];
  let loading = false, suggestionsShown = true;

  const root = document.createElement("div");
  root.id = "kira-root";
  root.innerHTML = `
    <button id="kira-bubble" title="Chat with Kira ✨" aria-label="Open Kira">✨<div id="kira-badge"></div></button>
    <div id="kira-window" class="kira-hidden" role="dialog">
      <div id="kira-header">
        <div id="kira-avatar">✨</div>
        <div id="kira-header-text">
          <div id="kira-name">Kira ✦ alo.micle.magic</div>
          <div id="kira-sub">🌍 Multilingual AI Assistant • 40+ products</div>
        </div>
        <button id="kira-close">×</button>
      </div>
      <div id="kira-langs">
        <span class="kira-lang-label">SPEAKS:</span>
        <span class="kira-lang-pill">🇬🇧 EN</span><span class="kira-lang-pill">🇷🇴 RO</span>
        <span class="kira-lang-pill">🇫🇷 FR</span><span class="kira-lang-pill">🇪🇸 ES</span>
        <span class="kira-lang-pill">🇩🇪 DE</span><span class="kira-lang-pill">🇮🇹 IT</span>
        <span class="kira-lang-pill">& more</span>
      </div>
      <div id="kira-messages"></div>
      <div id="kira-suggestions"></div>
      <div id="kira-input-area">
        <div id="kira-input-row">
          <textarea id="kira-input" rows="1" placeholder="Write in any language... / Scrie în orice limbă..."></textarea>
          <button id="kira-send" disabled>→</button>
        </div>
        <div id="kira-footer">Kira by alo.micle.magic • Powered by Claude AI • 24/7 🌍</div>
      </div>
    </div>`;
  document.body.appendChild(root);

  const bubble=document.getElementById("kira-bubble"), win=document.getElementById("kira-window"),
    msgsEl=document.getElementById("kira-messages"), suggestEl=document.getElementById("kira-suggestions"),
    inputEl=document.getElementById("kira-input"), sendBtn=document.getElementById("kira-send"),
    closeBtn=document.getElementById("kira-close");
  let isOpen=false;

  function renderMessages(){
    msgsEl.innerHTML="";
    messages.forEach(m=>{
      const row=document.createElement("div"); row.className="kira-msg-row "+m.role;
      const fmt=m.content.replace(/https?:\/\/[^\s<)]+/g,url=>`<a href="${url}" target="_blank" rel="noopener">${url}</a>`).replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/\n/g,"<br>");
      row.innerHTML=m.role==="assistant"?`<div class="kira-msg-icon">✨</div><div class="kira-bubble-msg assistant">${fmt}</div>`:`<div class="kira-bubble-msg user">${fmt}</div>`;
      msgsEl.appendChild(row);
    });
    msgsEl.scrollTop=msgsEl.scrollHeight;
  }

  function renderSuggestions(){
    suggestEl.innerHTML="";
    if(!suggestionsShown||messages.length>1) return;
    const lbl=document.createElement("div"); lbl.style.cssText="font-size:9px;color:rgba(196,181,253,.4);font-family:sans-serif;padding:0 0 3px 0;"; lbl.textContent="Quick starts:"; suggestEl.appendChild(lbl);
    SUGGESTIONS.forEach(s=>{ const btn=document.createElement("button"); btn.className="kira-suggest"; btn.textContent=s; btn.onclick=()=>sendMessage(s); suggestEl.appendChild(btn); });
  }

  function showTyping(){ const row=document.createElement("div"); row.className="kira-msg-row"; row.id="kira-typing-row"; row.innerHTML=`<div class="kira-msg-icon">✨</div><div class="kira-bubble-msg assistant kira-typing"><div class="kira-dot"></div><div class="kira-dot"></div><div class="kira-dot"></div></div>`; msgsEl.appendChild(row); msgsEl.scrollTop=msgsEl.scrollHeight; }
  function hideTyping(){ const r=document.getElementById("kira-typing-row"); if(r) r.remove(); }

  async function sendMessage(text){
    const msg=(text||inputEl.value).trim(); if(!msg||loading) return;
    suggestionsShown=false; inputEl.value=""; inputEl.style.height="auto"; sendBtn.disabled=true;
    messages.push({role:"user",content:msg}); renderMessages(); renderSuggestions();
    loading=true; showTyping();
    try{
      const res=await fetch("https://api.groq.com/openai/v1/chat/completions",{
  method:"POST",
  headers:{"Content-Type":"application/json","Authorization":"Bearer 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"},
  body:JSON.stringify({model:"llama-3.1-8b-instant",messages:[{role:"system",content:SYSTEM},...messages.map(m=>({role:m.role,content:m.content}))],max_tokens:1000})});
const data=await res.json();
const reply=data.choices?.[0]?.message?.content||"Something went wrong — please try again! 💙";
      hideTyping(); messages.push({role:"assistant",content:reply}); renderMessages();
    }catch{ hideTyping(); messages.push({role:"assistant",content:"Oops! Something went wrong. Please try again 💙"}); renderMessages(); }
    finally{ loading=false; }
  }

  function toggleChat(){
    isOpen=!isOpen; win.classList.toggle("kira-hidden",!isOpen);
    const badge=document.getElementById("kira-badge"); bubble.textContent=isOpen?"×":"✨"; if(badge) bubble.appendChild(badge);
    if(isOpen){ renderMessages(); renderSuggestions(); setTimeout(()=>inputEl.focus(),200); }
  }

  bubble.addEventListener("click",toggleChat); closeBtn.addEventListener("click",toggleChat);
  inputEl.addEventListener("input",function(){ this.style.height="auto"; this.style.height=Math.min(this.scrollHeight,90)+"px"; sendBtn.disabled=!this.value.trim(); });
  inputEl.addEventListener("keydown",e=>{ if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();sendMessage();} });
  sendBtn.addEventListener("click",()=>sendMessage());
})();
