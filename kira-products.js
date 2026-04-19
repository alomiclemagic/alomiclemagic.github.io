// ============================================
// KIRA PRODUCT BRAIN — alo.micle.magic catalog
// 34 products, structured for semantic matching
// ============================================

const KIRA_PRODUCTS = [

  // ── FICTION ─────────────────────────────────
  {
    id: 1,
    title: "Ce am lăsat în urmă",
    category: "fiction",
    language: "ro",
    audience: ["romanian readers", "adult fiction", "contemporary fiction"],
    tags: ["romanian novel", "fiction", "drama", "Elena Micle", "roman"],
    price: 5,
    currency: "USD",
    url: "https://alomiclemagic.gumroad.com/l/itpjzj",
    description: "Roman contemporan românesc în 11 capitole, scris de Elena Micle. O poveste emoționantă despre ce lăsăm în urmă și ce purtăm cu noi.",
    pitch: "Un roman românesc autentic, emoționant, scris cu suflet de Elena Micle."
  },
  {
    id: 13,
    title: "Electric Blue — Launch Special (Chapters 1–6)",
    category: "fiction",
    language: "en",
    audience: ["romance readers", "adult fiction"],
    tags: ["romance novel", "english fiction", "Bucharest Hearts", "Elena Micle", "limited"],
    price: 3.99,
    currency: "USD",
    url: "https://alomiclemagic.gumroad.com/l/ynbcrz",
    description: "Launch special offer for Electric Blue chapters 1–6, a romance novel set in Bucharest by Elena Micle.",
    pitch: "Escape into a passionate Bucharest romance — grab the launch special while it lasts."
  },
  {
    id: 14,
    title: "Electric Blue — Chapter Bundle (1–6)",
    category: "fiction",
    language: "en",
    audience: ["romance readers", "adult fiction"],
    tags: ["romance novel", "english fiction", "Bucharest Hearts", "Elena Micle"],
    price: 4.99,
    currency: "USD",
    url: "https://gumroad.com/products/kkyxct",
    description: "Complete chapter bundle 1–6 of Electric Blue, a romance novel by Elena Micle.",
    pitch: "Six chapters of heat, heart, and Bucharest nights."
  },

  // ── AI LITERACY ─────────────────────────────
  {
    id: 7,
    title: "Understanding Claude — A Kid's Complete Guide to AI (25 Lessons) — SCHOOL LICENSE",
    category: "ai-literacy",
    license: "school",
    language: "en",
    audience: ["schools", "educators", "districts", "homeschool co-ops"],
    tags: ["AI literacy", "kids", "Claude", "school", "technology", "future skills"],
    price: 299,
    currency: "USD",
    url: "https://gumroad.com/products/cgfkso",
    description: "25-lesson AI literacy course for kids about Claude and AI. School/district license for unlimited classroom use.",
    pitch: "Give your whole school the AI literacy foundation every child needs — 25 lessons, school-wide license."
  },
  {
    id: 8,
    title: "Understanding Claude — A Kid's Complete Guide to AI — TEACHER LICENSE",
    category: "ai-literacy",
    license: "teacher",
    language: "en",
    audience: ["teachers", "individual classrooms"],
    tags: ["AI literacy", "kids", "Claude", "teacher", "technology"],
    price: 149,
    currency: "USD",
    url: "https://alomiclemagic.gumroad.com/l/syzdu",
    description: "25-lesson AI literacy course for kids — teacher/classroom license.",
    pitch: "Bring AI literacy into your classroom with 25 ready-to-teach lessons."
  },
  {
    id: 9,
    title: "Understanding Claude — A Kid's Complete Guide to AI — INDIVIDUAL LICENSE",
    category: "ai-literacy",
    license: "individual",
    language: "en",
    audience: ["parents", "homeschoolers", "individual families"],
    tags: ["AI literacy", "kids", "Claude", "homeschool", "parents", "technology"],
    price: 79,
    currency: "USD",
    url: "https://alomiclemagic.gumroad.com/l/txbjp",
    description: "25-lesson AI literacy course for kids — individual/family license.",
    pitch: "Help your child understand AI before AI shapes their world — 25 lessons for home use."
  },

  // ── RUSSIAN FOR KIDS ─────────────────────────
  {
    id: 2,
    title: "Russia Map Activity",
    category: "language-learning",
    language: "en",
    audience: ["kids", "parents", "teachers", "homeschoolers"],
    tags: ["Russia", "map", "activity", "free", "geography", "kids"],
    price: 0,
    currency: "USD",
    url: "https://alomiclemagic.gumroad.com/l/mokpnm",
    description: "Free Russia map activity worksheet for kids. Great intro to Russian geography.",
    pitch: "Free download — a fun map activity to spark your child's curiosity about Russia."
  },
  {
    id: 10,
    title: "Russian for Kids — Complete Beginners Course — SCHOOL LICENSE",
    category: "language-learning",
    language: "en",
    audience: ["schools", "language programs", "districts"],
    tags: ["Russian", "kids", "language", "beginners", "school", "foreign language"],
    price: 299,
    currency: "USD",
    url: "https://alomiclemagic.gumroad.com/l/gfrsen",
    description: "Complete Russian language course for young beginners — school/district license.",
    pitch: "Launch a Russian program in your school with a complete, ready-to-teach beginner course."
  },
  {
    id: 11,
    title: "Russian for Kids — Complete Beginners Course — TEACHER LICENSE",
    category: "language-learning",
    language: "en",
    audience: ["language teachers", "classroom teachers"],
    tags: ["Russian", "kids", "language", "beginners", "teacher"],
    price: 149,
    currency: "USD",
    url: "https://alomiclemagic.gumroad.com/l/svjtnz",
    description: "Complete Russian language course for young beginners — teacher/classroom license.",
    pitch: "Everything you need to teach Russian to young beginners, ready from day one."
  },
  {
    id: 12,
    title: "Russian for Kids — Complete Beginners Course — INDIVIDUAL LICENSE",
    category: "language-learning",
    language: "en",
    audience: ["parents", "homeschoolers", "families"],
    tags: ["Russian", "kids", "language", "beginners", "homeschool", "family"],
    price: 79,
    currency: "USD",
    url: "https://alomiclemagic.gumroad.com/l/rdvsj",
    description: "Complete Russian language course for young beginners — individual/family license.",
    pitch: "Teach your child Russian at home with a complete, structured beginner course."
  },

  // ── BUNDLES: Russian + AI Literacy ──────────
  {
    id: 3,
    title: "Russian for Kids + Understanding Claude — SCHOOL LICENSE",
    category: "bundle",
    language: "en",
    audience: ["schools", "districts", "language + tech programs"],
    tags: ["Russian", "AI literacy", "bundle", "school", "future skills", "language"],
    price: 499,
    currency: "USD",
    url: "https://alomiclemagic.gumroad.com/l/vijhd",
    description: "School license bundle combining Russian for Kids + Understanding Claude AI course. Language + AI literacy — the two most future-ready skills in one.",
    pitch: "Two future-ready skills in one bundle: language + AI literacy, school-wide license."
  },
  {
    id: 4,
    title: "Russian for Kids + Understanding Claude — TEACHER LICENSE",
    category: "bundle",
    language: "en",
    audience: ["teachers", "classroom educators"],
    tags: ["Russian", "AI literacy", "bundle", "teacher", "future skills"],
    price: 239,
    currency: "USD",
    url: "https://alomiclemagic.gumroad.com/l/intfwu",
    description: "Teacher license bundle: Russian for Kids + Understanding Claude AI literacy course.",
    pitch: "Teach language AND AI in your classroom — the ultimate future-skills combo."
  },
  {
    id: 5,
    title: "Russian for Kids + Understanding Claude — INDIVIDUAL LICENSE",
    category: "bundle",
    language: "en",
    audience: ["parents", "homeschoolers", "families"],
    tags: ["Russian", "AI literacy", "bundle", "homeschool", "parents", "future skills"],
    price: 129,
    currency: "USD",
    url: "https://alomiclemagic.gumroad.com/l/wqvyu",
    description: "Individual license bundle: Russian for Kids + Understanding Claude AI literacy course.",
    pitch: "Give your child two superpowers: a new language and AI understanding — at home."
  },

  // ── MEMBERSHIP ───────────────────────────────
  {
    id: 6,
    title: "Mom's Command Center — Membership",
    category: "membership",
    language: "en",
    audience: ["moms", "mothers", "parents", "busy parents", "overwhelmed moms"],
    tags: ["membership", "moms", "support", "community", "monthly", "parenting", "organization"],
    price: 19.99,
    currency: "USD",
    billing: "monthly",
    url: "https://alomiclemagic.gumroad.com/l/crpbiv",
    description: "Monthly membership for moms — a command center for the modern mother. Resources, support, community.",
    pitch: "Stop surviving. Start commanding. Your monthly support system as a mom."
  },

  // ── TESOL / TEACHER TRAINING ─────────────────
  {
    id: 16,
    title: "Complete TESOL Certification Course — Become a Certified ESL Teacher",
    category: "tesol",
    language: "en",
    audience: ["adults", "career changers", "educators", "ESL teachers", "aspiring teachers"],
    tags: ["TESOL", "ESL", "certification", "teaching", "career", "professional development"],
    price: 398,
    currency: "USD",
    url: "https://gumroad.com/products/vnwjtd",
    description: "Complete TESOL certification course to become a certified ESL teacher. Professional development for career changers and educators.",
    pitch: "Get TESOL certified and open the door to teaching English anywhere in the world."
  },

  // ── ESL GRAMMAR BUNDLES ──────────────────────
  {
    id: 17,
    title: "Romanian and Serbian Ultimate Bundle",
    category: "esl-resources",
    language: "en",
    audience: ["ESL teachers", "Romanian speakers", "Serbian speakers"],
    tags: ["ESL", "grammar", "Romanian", "Serbian", "bundle", "worksheets"],
    price: 59.99,
    currency: "USD",
    url: "https://alomiclemagic.gumroad.com/l/iqdfpl",
    description: "Ultimate bundle of ESL grammar resources for both Romanian and Serbian speakers.",
    pitch: "The complete ESL grammar toolkit for Romanian and Serbian language classrooms — one bundle, everything included."
  },
  {
    id: 18,
    title: "ESL Grammar Essentials Bundle — Serbian Version",
    category: "esl-resources",
    language: "en",
    audience: ["ESL teachers", "Serbian speakers", "Serbian classrooms"],
    tags: ["ESL", "grammar", "Serbian", "bundle", "worksheets"],
    price: 34.99,
    currency: "USD",
    url: "https://alomiclemagic.gumroad.com/l/fylmy",
    description: "Complete ESL grammar essentials bundle for Serbian-speaking students.",
    pitch: "All the ESL grammar your Serbian-speaking students need, in one ready-to-use bundle."
  },
  {
    id: 19,
    title: "Complete ESL Grammar — Romanian Bundle",
    category: "esl-resources",
    language: "en",
    audience: ["ESL teachers", "Romanian speakers", "Romanian classrooms"],
    tags: ["ESL", "grammar", "Romanian", "bundle"],
    price: 34.99,
    currency: "USD",
    url: "https://alomiclemagic.gumroad.com/l/zdoci",
    description: "Complete ESL grammar bundle for Romanian-speaking students.",
    pitch: "The full ESL grammar toolkit designed for Romanian-speaking learners."
  },
  {
    id: 20,
    title: "Complete ESL Worksheets — Romanian Bundle",
    category: "esl-resources",
    language: "en",
    audience: ["ESL teachers", "Romanian classrooms"],
    tags: ["ESL", "worksheets", "Romanian", "bundle"],
    price: 19.99,
    currency: "USD",
    url: "https://alomiclemagic.gumroad.com/l/nuufad",
    description: "Complete bundle of ESL worksheets for Romanian-speaking students.",
    pitch: "Print-and-teach ESL worksheets built for Romanian learners."
  },
  {
    id: 21,
    title: "ESL Grammar Essentials Pack 2 — Romanian and Serbian Versions",
    category: "esl-resources",
    language: "en",
    audience: ["ESL teachers", "Romanian and Serbian classrooms"],
    tags: ["ESL", "grammar", "Romanian", "Serbian", "pack 2"],
    price: 34.99,
    currency: "USD",
    url: "https://alomiclemagic.gumroad.com/l/frzdrze",
    description: "ESL Grammar Essentials Pack 2 — includes both Romanian and Serbian versions.",
    pitch: "Level up your ESL classroom with Pack 2 — both Romanian and Serbian editions included."
  },
  {
    id: 22,
    title: "ESL Grammar Essentials Pack 2 — Serbian Version",
    category: "esl-resources",
    language: "en",
    audience: ["ESL teachers", "Serbian classrooms"],
    tags: ["ESL", "grammar", "Serbian", "pack 2"],
    price: 19.99,
    currency: "USD",
    url: "https://alomiclemagic.gumroad.com/l/btukoh",
    description: "ESL Grammar Essentials Pack 2 — Serbian version.",
    pitch: "ESL grammar pack 2, perfectly adapted for Serbian-speaking students."
  },
  {
    id: 23,
    title: "ESL Grammar Essentials Pack 2 — Romanian Version",
    category: "esl-resources",
    language: "en",
    audience: ["ESL teachers", "Romanian classrooms"],
    tags: ["ESL", "grammar", "Romanian", "pack 2"],
    price: 19.99,
    currency: "USD",
    url: "https://alomiclemagic.gumroad.com/l/khdqg",
    description: "ESL Grammar Essentials Pack 2 — Romanian version.",
    pitch: "ESL grammar pack 2, built for Romanian-speaking learners."
  },
  {
    id: 24,
    title: "ESL Grammar Essentials Pack 1 — Romanian Version",
    category: "esl-resources",
    language: "en",
    audience: ["ESL teachers", "Romanian classrooms"],
    tags: ["ESL", "grammar", "Romanian", "pack 1"],
    price: 19.99,
    currency: "USD",
    url: "https://alomiclemagic.gumroad.com/l/kdgwo",
    description: "ESL Grammar Essentials Pack 1 — Romanian version.",
    pitch: "Start here: the foundational ESL grammar pack for Romanian-speaking students."
  },
  {
    id: 25,
    title: "ESL Grammar Essentials Pack 1 — Romanian and Serbian Versions",
    category: "esl-resources",
    language: "en",
    audience: ["ESL teachers", "Romanian and Serbian classrooms"],
    tags: ["ESL", "grammar", "Romanian", "Serbian", "pack 1"],
    price: 34.99,
    currency: "USD",
    url: "https://alomiclemagic.gumroad.com/l/hsudq",
    description: "ESL Grammar Essentials Pack 1 — includes both Romanian and Serbian versions.",
    pitch: "The ESL grammar foundation pack — both Romanian and Serbian editions in one."
  },
  {
    id: 26,
    title: "ESL Grammar Essentials Pack 1 — Serbian Version",
    category: "esl-resources",
    language: "en",
    audience: ["ESL teachers", "Serbian classrooms"],
    tags: ["ESL", "grammar", "Serbian", "pack 1"],
    price: 19.99,
    currency: "USD",
    url: "https://alomiclemagic.gumroad.com/l/njiuut",
    description: "ESL Grammar Essentials Pack 1 — Serbian version.",
    pitch: "The ESL grammar starting point for Serbian-speaking learners."
  },

  // ── LIFE SKILLS ──────────────────────────────
  {
    id: 27,
    title: "Complete Classroom Life Skills Bundle — Both Courses — TEACHER LICENSE",
    category: "life-skills",
    language: "en",
    audience: ["teachers", "classrooms", "character education"],
    tags: ["life skills", "classroom", "character", "social skills", "teacher", "bundle"],
    price: 79.99,
    currency: "USD",
    url: "https://alomiclemagic.gumroad.com/l/aspwcj",
    description: "Complete bundle of both life skills courses for classroom use — teacher license.",
    pitch: "Two complete life skills courses in one — everything your classroom needs for character education."
  },
  {
    id: 28,
    title: "Complete Classroom Life Skills Bundle — INDIVIDUAL LICENSE",
    category: "life-skills",
    language: "en",
    audience: ["parents", "homeschoolers", "families"],
    tags: ["life skills", "individual", "character", "social skills", "homeschool"],
    price: 49.99,
    currency: "USD",
    url: "https://alomiclemagic.gumroad.com/l/edsdka",
    description: "Complete life skills bundle for individual/home use.",
    pitch: "Give your child the life skills no school teaches — both courses, home license."
  },

  // ── MANNERS & SOCIAL SKILLS ──────────────────
  {
    id: 29,
    title: "Raising Respectful Humans — Manners & Social Skills Course — SCHOOL LICENSE",
    category: "life-skills",
    language: "en",
    audience: ["schools", "districts", "character education programs"],
    tags: ["manners", "social skills", "respect", "character", "school", "kids"],
    price: 199.99,
    currency: "USD",
    url: "https://alomiclemagic.gumroad.com/l/ozrbn",
    description: "Complete manners and social skills course for schools — school/district license.",
    pitch: "Build a culture of respect school-wide — complete manners and social skills program."
  },
  {
    id: 30,
    title: "Raising Respectful Humans — TEACHER LICENSE",
    category: "life-skills",
    language: "en",
    audience: ["teachers", "individual classrooms"],
    tags: ["manners", "social skills", "respect", "teacher", "character"],
    price: 49.99,
    currency: "USD",
    url: "https://alomiclemagic.gumroad.com/l/xxvyjpa",
    description: "Manners and social skills course — teacher/classroom license.",
    pitch: "Teach real-world respect and manners in your classroom, lesson by lesson."
  },
  {
    id: 31,
    title: "Raising Respectful Humans — INDIVIDUAL LICENSE",
    category: "life-skills",
    language: "en",
    audience: ["parents", "families", "homeschoolers"],
    tags: ["manners", "social skills", "respect", "parents", "kids", "homeschool"],
    price: 29.99,
    currency: "USD",
    url: "https://alomiclemagic.gumroad.com/l/oyllc",
    description: "Manners and social skills course for individual/family use.",
    pitch: "Raise a kind, respectful child — a complete course for parents and homeschoolers."
  },

  // ── MONEY / FINANCIAL LITERACY ───────────────
  {
    id: 32,
    title: "The Ultimate Kids' Money Guide — SCHOOL LICENSE",
    category: "financial-literacy",
    language: "en",
    audience: ["schools", "districts", "financial literacy programs"],
    tags: ["money", "financial literacy", "kids", "school", "entrepreneurship"],
    price: 199.99,
    currency: "USD",
    url: "https://alomiclemagic.gumroad.com/l/zrmjy",
    description: "Ultimate financial literacy guide for kids — school/district license.",
    pitch: "Teach kids about money before money teaches them hard lessons — school-wide license."
  },
  {
    id: 33,
    title: "The Ultimate Kids' Money Guide — TEACHER LICENSE",
    category: "financial-literacy",
    language: "en",
    audience: ["teachers", "classrooms"],
    tags: ["money", "financial literacy", "kids", "teacher"],
    price: 49.99,
    currency: "USD",
    url: "https://alomiclemagic.gumroad.com/l/htaawi",
    description: "Ultimate financial literacy guide for kids — teacher/classroom license.",
    pitch: "Give your students real money skills — a complete classroom course on financial literacy."
  },
  {
    id: 34,
    title: "The Ultimate Kids' Money Guide — INDIVIDUAL LICENSE",
    category: "financial-literacy",
    language: "en",
    audience: ["parents", "families", "homeschoolers"],
    tags: ["money", "financial literacy", "kids", "parents", "homeschool"],
    price: 29.99,
    currency: "USD",
    url: "https://alomiclemagic.gumroad.com/l/qyoeiv",
    description: "Ultimate financial literacy guide for kids — individual/family license.",
    pitch: "Raise a money-smart kid — the ultimate guide for parents and homeschoolers."
  },

  // ── COMMUNITY / SUPPORT ──────────────────────
  {
    id: 15,
    title: "Support HAVEN — Help Single Moms in Crisis",
    category: "community",
    language: "en",
    audience: ["donors", "supporters", "community", "advocates"],
    tags: ["donation", "single moms", "support", "HAVEN", "community", "charity"],
    price: 5,
    currency: "USD",
    note: "pay-what-you-want from $5",
    url: "https://alomiclemagic.gumroad.com/l/qqmwlu",
    description: "Support the HAVEN program — helping single moms in crisis. Pay-what-you-want from $5.",
    pitch: "One mom helping other moms — your support changes a life."
  }
];

// ── CATEGORY DESCRIPTIONS for Kira ──────────────
const KIRA_CATEGORIES = {
  "fiction": "Romanian and English novels by Elena Micle",
  "ai-literacy": "Courses teaching children about AI and Claude",
  "language-learning": "Russian language courses for kids",
  "bundle": "Combined course bundles for maximum value",
  "membership": "Monthly membership program for moms",
  "tesol": "Professional TESOL teacher certification",
  "esl-resources": "ESL grammar and worksheet packs for Romanian and Serbian speakers",
  "life-skills": "Social skills, manners, and life skills courses",
  "financial-literacy": "Money and financial literacy courses for kids",
  "community": "Support and donation programs"
};

// ── LICENSE GUIDE for Kira ───────────────────────
const LICENSE_GUIDE = {
  "school": "Unlimited use across the whole school or district",
  "teacher": "Use in one teacher's classroom",
  "individual": "Personal/family/homeschool use"
};

if (typeof module !== 'undefined') module.exports = { KIRA_PRODUCTS, KIRA_CATEGORIES, LICENSE_GUIDE };
