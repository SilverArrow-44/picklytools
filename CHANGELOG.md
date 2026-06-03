# Pickly — Changelog

## v2.0 — 2026-06-03 (Enterprise QA Audit)

### Phase 1 — Sync & Fixes
- Footer: all 12 tools listed in Tools + Games columns
- CTA banner: "12 free tools live now"
- SEO titles: all 16 pages 40–65 chars, keyword-optimised
- Meta descriptions: all 16 pages 140–160 chars
- Fixed Truth or Dare: CSS .back class collision (mirrored nav button)
- Fixed Would You Rather: duplicate .opt CSS rule (broken flex layout)

### Phase 2 — Performance (Lighthouse 99/100)
- Google Fonts → bunny.net (GDPR-compliant, zero cookies)
- Removed webkitAudioContext (6 pages) — deprecated API
- AudioContext null guard on 5 sound-enabled pages
- Confetti lazy-loaded (loads only on first win)
- Inline JS minified with terser — 21KB saved
- og-image.png: 163KB → 39KB (75% reduction)
- font-size-adjust fallback @font-face (reduces CLS)
- requestIdleCallback wrapping non-critical homepage JS
- FAQPage JSON-LD schema added to 11 tool pages
- <main> landmark added to all 16 pages
- Heading hierarchy fixed (footer h5→p, feature h4→h3)
- Sitemap lastmod dates added

### Phase 3 — AdSense Readiness (39/39 checks)
- Privacy policy: added email, Cloudflare disclosure, ad settings link
- SpinIt: added /contact/ link to footer
- Slot machine: strengthened "no real money" disclaimer
- All 13 tool pages: 1 ad slot each, labelled ADVERTISEMENT
- AdSense script commented on all pages (awaiting publisher ID)
- Contact form: honeypot field added

### Phase 4 — SEO
- FAQPage schema on 11 pages (FAQ rich results eligible)
- Related tools internal links in content body (not just footer)
- Timezones title: keyword-first "Timezone Meeting Planner…"
- Google Search Console: verified, sitemap submitted
- Top 3 pages indexing requested

### Phase 5 — Security
- HSTS: max-age=31536000; includeSubDomains; preload
- All other headers present: X-Frame-Options, X-Content-Type-Options,
  Referrer-Policy, Permissions-Policy (interest-cohort included)

### Phase 6 — Mobile UI/UX
- All 12 tools tested at mobile width — no layout bugs
- All input font-sizes at 16px (no iOS Safari zoom)
- overflow-x:hidden on all pages (no horizontal scroll)
- prefers-reduced-motion supported on all pages

## v1.0 — 2025 (Initial launch)
- 12 tools: SpinIt, Timezones, Coin Flip, RNG, Team Picker,
  What to Eat, Magic 8 Ball, Would You Rather, RPS,
  Truth or Dare, Never Have I Ever, Slot Machine
