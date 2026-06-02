# Pickly — picklytools.com

A collection of free, fast, fun online decision and party tools. Static site (HTML/CSS/JS, no build step), deployed on Cloudflare Pages.

## Live tools (12)
- **/** — landing page (tool hub)
- **/spinit/** — decision spinner / random picker wheel
- **/timezones/** — timezone meeting planner for remote teams
- **/coinflip/** — coin flip (single, multi, best-of-3/5 series)
- **/randomnumber/** — random number generator + dice roller
- **/teampicker/** — fair random team splitter
- **/whattoeat/** — meal decider with cuisine/diet filters
- **/magic8ball/** — classic Magic 8 Ball with all 20 answers
- **/wouldyourather/** — party game with vote % split
- **/rockpaperscissors/** — vs computer, best-of-3 and best-of-5
- **/truthordare/** — family / friends / spicy modes
- **/neverhaveiever/** — tap-through party prompts
- **/slotmachine/** — fruit reel slot machine (fun only, no money)

## Supporting pages
- /privacy/ — Privacy Policy (required for Google AdSense)
- /terms/ — Terms of Use
- /contact/ — Contact + feedback form
- /404.html — custom not-found page

## How it's built
- Pure static files. No framework, no build step. What's in this repo ships directly.
- Shared styles for sub-pages live in `page.css`.
- SEO/PWA: `sitemap.xml`, `robots.txt`, `manifest.webmanifest`, `favicon.svg`, icons, `og-image.png`.
- `_headers` sets Cloudflare security + caching headers automatically.

## Deploy
Connected to Cloudflare Pages. Push to `main` → auto-deploys to picklytools.com in ~30s.

## Contact / feedback email
picklytools@gmail.com (set in `contact/index.html` and `spinit/index.html`)

## AdSense
When approved, paste the publisher code into the marked `<!-- AdSense -->` spots in each page.

## Notes
See CHANGELOG.md for version history.
