# Pickly — Free Fun Decision & Party Tools

picklytools.com — 12 free browser-based tools. No sign-up, no apps, no fuss.

## Live Tools
| Tool | URL | Monthly searches |
|---|---|---|
| Decision Spinner | /spinit/ | 450K |
| Timezone Planner | /timezones/ | 180K |
| Coin Flip | /coinflip/ | 1.2M |
| Random Number | /randomnumber/ | 2.1M |
| Team Picker | /teampicker/ | 320K |
| What Should I Eat | /whattoeat/ | 1.8M |
| Magic 8 Ball | /magic8ball/ | 4.5M |
| Would You Rather | /wouldyourather/ | 3.8M |
| Rock Paper Scissors | /rockpaperscissors/ | 3.2M |
| Truth or Dare | /truthordare/ | 2.9M |
| Never Have I Ever | /neverhaveiever/ | 2.1M |
| Slot Machine | /slotmachine/ | 620K |

## Scores (Lighthouse mobile)
- Performance: 99/100
- Accessibility: 100/100
- Best Practices: 88–92/100 (Cloudflare bot script outside our control)
- SEO: 100/100

## Tech stack
- Pure HTML/CSS/JS — no framework, no build step
- Deployed on Cloudflare Pages (auto-deploys from GitHub main branch)
- Fonts: bunny.net (GDPR-compliant Google Fonts mirror, zero cookies)
- Analytics: Cloudflare Web Analytics (optional)

## File structure
```
/                    → Homepage
/spinit/             → Decision Spinner
/timezones/          → Timezone Planner
/coinflip/           → Coin Flip
/randomnumber/       → Random Number Generator
/teampicker/         → Team Picker
/whattoeat/          → What Should I Eat
/magic8ball/         → Magic 8 Ball
/wouldyourather/     → Would You Rather
/rockpaperscissors/  → Rock Paper Scissors
/truthordare/        → Truth or Dare
/neverhaveiever/     → Never Have I Ever
/slotmachine/        → Slot Machine
/privacy/            → Privacy Policy
/terms/              → Terms of Use
/contact/            → Contact
404.html             → Custom 404 page
_headers             → Cloudflare security + cache headers
sitemap.xml          → All 16 pages with lastmod dates
robots.txt           → Allow all, references sitemap
page.css             → Shared CSS (used by support pages)
manifest.webmanifest → PWA manifest
```

## When AdSense is approved
1. Get your publisher ID (ca-pub-XXXXXXXXXXXXXXXXX)
2. In each tool page, find the commented AdSense script and uncomment it
3. Replace `ca-pub-XXXXXXXX` with your real publisher ID
4. Commit and push — Cloudflare auto-deploys

## Contact
picklytools@gmail.com
