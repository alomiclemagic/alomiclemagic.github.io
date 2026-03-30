"""
youtube_description.py
alo.micle.magic — Auto YouTube Description Generator
Dropped into modules/ folder — imported by poster.py

Generates a fully optimized YouTube description for every video
the pipeline posts, including:
  - Hook paragraph (from video topic/title)
  - Timestamps placeholder
  - All store links
  - SEO keywords
  - Subscribe CTA
  - Hashtags

Usage (in poster.py):
    from modules.youtube_description import build_youtube_description
    description = build_youtube_description(title=video_title, topic=topic)
"""

import random
import re
from datetime import datetime

# ─────────────────────────────────────────────
# STORE LINKS — update if URLs change
# ─────────────────────────────────────────────
LINKS = {
    "freebie":    "https://gumroad.com/l/mokpnm",
    "tesol":      "https://gumroad.com/l/vnwjtd",
    "store":      "https://alomiclemagic.gumroad.com",
    "website":    "https://alomiclemagic.github.io",
    "amazon":     "https://www.amazon.com/author/elenamicle",
    "instagram":  "https://www.instagram.com/elena_miclebusiness",
    "tiktok":     "https://www.tiktok.com/@alomiclemagic",
    "kira_tiktok":"https://www.tiktok.com/@kiraclaude_alomiclemagic",
}

# ─────────────────────────────────────────────
# HASHTAG POOLS — rotated per video category
# ─────────────────────────────────────────────
HASHTAGS_ESL = [
    "#ESLteacher", "#homeschoolmom", "#languagelearning", "#teachingresources",
    "#englishlearning", "#ESLactivities", "#TESOL", "#englishforkids",
    "#homeschoolfamily", "#teachersofinstagram", "#EFLteacher", "#learnEnglish",
]
HASHTAGS_AI = [
    "#AIliteracy", "#KiraClaude", "#AIforKids", "#digitallearning",
    "#technologyeducation", "#STEMkids", "#futureskills", "#kidseducation",
    "#homeschoolSTEM", "#artificialintelligence", "#edtech", "#AIeducation",
]
HASHTAGS_BOOKS = [
    "#romancebooks", "#kindleromance", "#bookstagram", "#indieauthor",
    "#contemporaryromance", "#secondchanceromance", "#newbooks", "#readingcommunity",
    "#romanianauthor", "#booklovers", "#mustread", "#romancereads",
]
HASHTAGS_PARENTING = [
    "#momlife", "#singlemom", "#parentingtips", "#motherhood",
    "#raisingkids", "#momcommunity", "#parentingadvice", "#familylife",
    "#homeschooling", "#momsupport", "#parenthood", "#HAVEN",
]
HASHTAGS_GENERAL = [
    "#alomiclemagic", "#elenamicle", "#learningisfun", "#education",
    "#onlinelearning", "#teachersofyoutube", "#creativelearning",
]

def _pick_hashtags(category: str, count: int = 6) -> str:
    """Pick a mix of category-specific + general hashtags."""
    category_map = {
        "esl":       HASHTAGS_ESL,
        "ai":        HASHTAGS_AI,
        "books":     HASHTAGS_BOOKS,
        "parenting": HASHTAGS_PARENTING,
    }
    pool = category_map.get(category, HASHTAGS_ESL)
    chosen = random.sample(pool, min(count - 2, len(pool)))
    chosen += random.sample(HASHTAGS_GENERAL, 2)
    return " ".join(chosen)


# ─────────────────────────────────────────────
# HOOK TEMPLATES — rotated for variety
# ─────────────────────────────────────────────
ESL_HOOKS = [
    "In this video, I'm sharing one of my favourite classroom strategies — {title}. After 22 years of teaching ESL, this is the kind of activity I keep coming back to because it actually works.",
    "Are your students struggling to stay engaged? Today I'm showing you {title} — a technique I've used in my own ESL classroom for years to keep even the most reluctant learners interested.",
    "Teaching English should feel like an adventure, not a chore. In this video: {title} — a practical, classroom-tested idea you can use tomorrow.",
]
AI_HOOKS = [
    "AI is part of your child's world whether we explain it or not. Today, Kira Claude is here to help with {title} — in a way that actually makes sense for kids.",
    "In this video, we're exploring {title} with Kira Claude — your child's friendly AI guide. Warm, curious, and completely non-scary. Promise.",
    "Children deserve honest, age-appropriate answers about the technology shaping their world. Join Kira Claude for {title}.",
]
BOOK_HOOKS = [
    "Today I want to talk about {title} — and what it means to write stories that actually matter to the people who read them.",
    "Writing a book is one thing. Writing one you believe in completely is another. In this video: {title}.",
    "A quick update from my writing desk: {title}. If you love romance, or books about real human feelings, this one's for you.",
]
PARENTING_HOOKS = [
    "For every mum who is doing her absolute best in circumstances that aren't easy — today's video is for you. {title}.",
    "Motherhood is the hardest, most important job there is. In this video: {title} — honest, practical, no toxic positivity.",
    "If you've ever felt invisible in your own life, you're not alone. {title} — a real conversation about what mothers actually need.",
]

def _pick_hook(title: str, category: str) -> str:
    hook_map = {
        "esl":       ESL_HOOKS,
        "ai":        AI_HOOKS,
        "books":     BOOK_HOOKS,
        "parenting": PARENTING_HOOKS,
    }
    pool = hook_map.get(category, ESL_HOOKS)
    template = random.choice(pool)
    return template.format(title=title)


# ─────────────────────────────────────────────
# MAIN BUILDER
# ─────────────────────────────────────────────
def build_youtube_description(
    title: str,
    category: str = "esl",
    custom_hook: str = None,
    include_book_links: bool = True,
) -> str:
    """
    Build a fully optimized YouTube description.

    Args:
        title:        Video title (used in hook paragraph)
        category:     One of: "esl", "ai", "books", "parenting"
        custom_hook:  Optional override for the opening paragraph
        include_book_links: Whether to include Amazon book links

    Returns:
        Full description string, ready to post to YouTube.
    """

    hook = custom_hook if custom_hook else _pick_hook(title, category)
    hashtags = _pick_hashtags(category)
    year = datetime.now().year

    book_section = ""
    if include_book_links:
        book_section = f"""
📚 MY BOOKS ON AMAZON
→ Electric Blue (Romance): {LINKS["amazon"]}
→ One More Valentine (Romance): {LINKS["amazon"]}
→ Stories for My Daughter: {LINKS["amazon"]}
→ Understanding Claude — AI for Kids: {LINKS["amazon"]}
→ Russian for Kids Workbook: {LINKS["amazon"]}
Browse all → {LINKS["amazon"]}
"""

    description = f"""{hook}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎁 FREE RESOURCE — Russia Map ESL Activity (no signup needed):
→ {LINKS["freebie"]}

🛒 ALL RESOURCES & COURSES (Gumroad store):
→ {LINKS["store"]}

🎓 TESOL Complete Guide:
→ {LINKS["tesol"]}
{book_section}
🌐 WEBSITE: {LINKS["website"]}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TIMESTAMPS:
0:00 — Introduction
(Timestamps will vary per video — update manually if needed)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
👋 ABOUT ELENA
I'm Elena — TESOL-certified English teacher with 22+ years of classroom
experience, published author, and creator of alo.micle.magic. I make ESL
resources for teachers and homeschool families, AI literacy content for kids
(with Kira Claude 🤖), and books for children and romance readers.

📱 FIND ME EVERYWHERE:
→ Instagram: {LINKS["instagram"]}
→ TikTok: {LINKS["tiktok"]}
→ Kira Claude TikTok: {LINKS["kira_tiktok"]}
→ Website: {LINKS["website"]}

🔔 SUBSCRIBE for weekly ESL activities, teaching tips, and AI literacy
content for kids — and hit the bell so you never miss an upload!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
© {year} Elena Micle | alo.micle.magic
All resources are original and classroom-tested.

{hashtags} #alomiclemagic #elenamicle #education
"""
    return description.strip()


# ─────────────────────────────────────────────
# CATEGORY AUTO-DETECTOR
# (uses video title keywords to pick category)
# ─────────────────────────────────────────────
def detect_category(title: str) -> str:
    """
    Automatically detect the video category from the title.
    Uses whole-word matching to avoid false positives.
    Falls back to 'esl' if unsure.
    """
    title_lower = title.lower()

    def has_word(word):
        return bool(re.search(r"\b" + re.escape(word) + r"\b", title_lower))

    # AI — only match standalone word "ai" or known AI phrases/names
    ai_phrases = ["artificial intelligence", "machine learning", "kira claude",
                  "kira", "robot", "chatgpt"]
    if re.search(r"\bai\b", title_lower) or any(p in title_lower for p in ai_phrases):
        return "ai"

    book_words = ["book", "novel", "romance", "valentine", "story",
                  "stories", "letter", "reading", "author", "writing"]
    if any(has_word(w) for w in book_words) or "electric blue" in title_lower:
        return "books"

    parenting_words = ["mom", "mum", "mother", "parent", "haven", "daughter",
                       "lexi", "single", "family", "raising"]
    if any(has_word(w) for w in parenting_words):
        return "parenting"

    return "esl"  # default


# ─────────────────────────────────────────────
# QUICK TEST
# ─────────────────────────────────────────────
if __name__ == "__main__":
    test_title = "3 ESL Activities My Students Always Ask to Do Again"
    cat = detect_category(test_title)
    desc = build_youtube_description(title=test_title, category=cat)
    print(f"Category detected: {cat}")
    print("─" * 60)
    print(desc)
