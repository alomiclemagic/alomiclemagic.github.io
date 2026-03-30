# YouTube Auto-Description Update
## alo.micle.magic — Faceless Video Pipeline

### What this update does
Every video your pipeline posts to YouTube will now automatically get
a full, SEO-optimized description including:
- A category-matched hook paragraph (ESL / AI / Books / Parenting)
- Your Russia Map freebie link
- Your Gumroad store link
- Your TESOL guide link
- All your book links (Amazon Author page)
- Your website, Instagram, TikTok, and Kira Claude TikTok
- Subscribe CTA
- Rotating niche hashtags (6 per video, never the same combination)

Zero manual work after setup. Every future video gets this automatically.

---

### FILES IN THIS PACKAGE

| File | Action |
|------|--------|
| `modules/youtube_description.py` | **ADD** to your /modules/ folder |
| `PATCH_INSTRUCTIONS.py` | Read this — shows exactly what 2 lines to change in poster.py |

---

### HOW TO DEPLOY (2 minutes)

**Step 1 — Upload the new module**
In your GitHub repo:
- Go to the `modules/` folder
- Click "Add file" → "Upload files"
- Upload `youtube_description.py`
- Commit: "Add YouTube auto-description module"

**Step 2 — Patch poster.py**
Open `modules/poster.py` in GitHub (click the file → pencil icon to edit).

Add at the top (with your other imports):
```python
from modules.youtube_description import build_youtube_description, detect_category
```

Find the line where description is set in your YouTube upload body
(search for `'description'`). Replace whatever is there with:
```python
'description': build_youtube_description(
    title=title,
    category=detect_category(title),
),
```

Commit: "Auto-generate YouTube descriptions from video title"

**Step 3 — Done.**
Your next GitHub Actions run (10:00 UTC) will post with full descriptions.

---

### CUSTOMISING

To update your links (e.g. if Gumroad URL changes), edit the `LINKS` dict
at the top of `youtube_description.py`. All descriptions update instantly.

To add a new content category:
1. Add hook templates to the relevant list (ESL_HOOKS, AI_HOOKS, etc.)
2. Add keywords to `detect_category()`

---

### TESTING LOCALLY (optional)
```bash
cd your-repo-folder
python3 modules/youtube_description.py
```
Prints a sample description to your terminal.

---

Built for alo.micle.magic by Claude 💙
