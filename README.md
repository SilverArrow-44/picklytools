# Pickly — picklytools.com

A collection of free, fast, fun online decision tools. Static site (HTML/CSS/JS, no build step), deployed on Cloudflare Pages.

## Live tools
- **/** — landing page (tool hub)
- **/spinit/** — decision spinner / random picker wheel
- **/timezones/** — timezone overlap finder + converter for remote teams

## Supporting pages
- /privacy/ — Privacy Policy (required for Google AdSense)
- /terms/ — Terms of Use
- /contact/ — Contact + feedback form
- /404.html — custom not-found page

## How it's built
- Pure static files. No framework, no build step. What's in this repo is exactly what ships.
- Shared styles for sub-pages live in `page.css`. The landing page, spinner, and timezone tool have their own inline styles.
- SEO/PWA assets: `sitemap.xml`, `robots.txt`, `manifest.webmanifest`, `favicon.svg`, icons, `og-image.png`.
- `_headers` sets security + caching rules (read automatically by Cloudflare Pages).

## Deploy
Connected to Cloudflare Pages. Pushing to the `main` branch on GitHub auto-deploys to picklytools.com.

## Before going fully live (one-time)
- Replace `hello@picklytools.com` with your real email in `contact/index.html` and `spinit/index.html`.
- When approved for AdSense, paste the ad code into the marked `<!-- AdSense -->` spots.

## Notes to self / change log
See CHANGELOG.md.
