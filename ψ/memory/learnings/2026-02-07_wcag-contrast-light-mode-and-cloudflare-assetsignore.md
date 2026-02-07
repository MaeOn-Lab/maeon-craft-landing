---
title: WCAG Contrast in Light Mode + Cloudflare .assetsignore Pattern
tags: [wcag, accessibility, contrast, light-mode, cloudflare, wrangler, deploy, css]
created: 2026-02-07
source: rrr: maeon-craft-landing
---

# WCAG Contrast in Light Mode + Cloudflare .assetsignore Pattern

## Lesson 1: Calculate WCAG Contrast Ratios Before Deploying

When creating a light mode palette, always check contrast ratios BEFORE shipping:

| Color | On Background | Ratio | WCAG AA |
|-------|---------------|-------|---------|
| #c4b49e (text-stone) | #f7f5f0 (cream) | 2.1:1 | FAIL |
| #9a8a74 (text-stone-muted) | #f7f5f0 (cream) | 3.2:1 | FAIL |
| #6b5e52 (fixed stone) | #f5f0e8 (cream) | 5.5:1 | PASS |
| #78695a (fixed muted) | #f5f0e8 (cream) | 4.8:1 | PASS |

**Rule**: Minimum 4.5:1 for normal text, 3:1 for large text (18px+ or 14px bold).

Dark mode colors that look fine on dark backgrounds will almost always fail on light backgrounds. Remap them explicitly with `html.light .text-xxx` overrides.

## Lesson 2: Cloudflare Workers + Static Output .assetsignore

When using `@astrojs/cloudflare` with `output: 'static'`:

- Wrangler errors on `_worker.js` directory in dist (server-side code exposure risk)
- **Don't** put `.assetsignore` in `dist/` — builds overwrite it
- **Do** put `.assetsignore` in `public/` — Astro copies it to dist on build

```
# public/.assetsignore
_worker.js
```

## Lesson 3: Oracle Data Audit Before Content

When building a landing page for an Oracle project:
1. Read `ψ/memory/recipes/` FIRST
2. Read `ψ/archive/` for chat/communication data
3. Read retrospectives for actual event timelines
4. THEN write page content from real data

Fake placeholder data wastes deploy cycles and violates "Nothing is Deleted" principle if committed.

---
*Added via Oracle Learn*
