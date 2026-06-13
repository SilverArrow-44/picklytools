# Pickly — Changelog

## v2.2 — 2026-06-13 (Performance, analytics, retention)

### Analytics
- Google Analytics 4 (G-PRMM0HXRCG) added to all 23 pages
- Privacy policy updated with GA4 + Cloudflare analytics sections

### Performance
- `dns-prefetch` for googletagmanager.com + pagead2.googlesyndication.com on all pages
- `will-change:transform` on `.bg-fx` and `.bg-fx::before` — GPU layer for animated background
- `.grain` promoted to GPU layer via `transform:translateZ(0)`
- Nav `backdrop-filter` reduced from `blur(14px)` → `blur(8px)` for smoother scroll
- `Cache-Control: no-cache` on `/*` in `_headers` — Cloudflare edge always serves fresh HTML

### Retention
- Share button added to Coin Flip — contextual text per flip mode, native share + clipboard fallback
- Share button added to Rock Paper Scissors — round and match result sharing
- Service worker (`sw.js`) added — all 18 tools cached for offline play; enables PWA home screen install

### Housekeeping
- sitemap.xml lastmod refreshed to 2026-06-13

## v2.1 — 2026-06-11 (AdSense readiness + retention)

### AdSense / trust
- Removed all visible "Ad space / plug in AdSense" placeholder boxes
  from homepage + 18 tool pages (replaced with HTML comments)
- SpinIt: removed fake sticky ad rail (120×600), bottom ad banner,
  and misleading "✕ Close ads" button — HTML, CSS, and JS
- Removed unused .ad-wrap/.ad-lbl/.ad-box CSS from all pages
- AdSense head script (ca-pub-7937234001453997) kept live on all pages

### Retention / UX
- New "Recently used tools" — every tool page records its slug to
  localStorage (pickly_recent); homepage shows "Jump back in" chips
- Timezones: added "Try these next" related-tools block (was the only
  tool page without one)
- Homepage: removed 18 meaningless "● Live" badges from tool cards

### Housekeeping
- sitemap.xml lastmod refreshed to 2026-06-11
- QA: all inline JS parses, zero broken internal links, HTML balanced,
  zero placeholder strings remain

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
