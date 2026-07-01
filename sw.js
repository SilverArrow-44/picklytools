// Pickly Service Worker — v2 (2026-06-30)
// Caches the shell + all tool pages for offline play.
// Strategy: Cache-first for assets, network-first for HTML.
// Bump CACHE on every release so returning visitors get fresh pages.

const CACHE = 'pickly-v2-20260630';

const SHELL = [
  '/',
  '/favicon.svg',
  '/icon-192.png',
  '/manifest.webmanifest',
  '/spinit/',
  '/timezones/',
  '/coinflip/',
  '/randomnumber/',
  '/teampicker/',
  '/whattoeat/',
  '/magic8ball/',
  '/wouldyourather/',
  '/rockpaperscissors/',
  '/truthordare/',
  '/neverhaveiever/',
  '/slotmachine/',
  '/compatibility/',
  '/agecalculator/',
  '/bmi/',
  '/datecalculator/',
  '/discount/',
  '/mortgage/',
  '/redflagquiz/',
  '/toxicometer/',
  '/tipcalculator/',
  '/salestax/',
  '/businessdays/',
  '/secretsanta/',
  '/bracketgenerator/',
  '/timezoneoverlap/',
];

// Install: cache the shell
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting())
  );
});

// Activate: delete old caches
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Fetch: network-first for HTML, cache-first for assets
self.addEventListener('fetch', e => {
  const { request } = e;
  const url = new URL(request.url);

  // Only handle same-origin requests
  if (url.origin !== location.origin) return;

  // HTML pages: try network, fall back to cache
  if (request.mode === 'navigate') {
    e.respondWith(
      fetch(request)
        .then(res => {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(request, clone));
          return res;
        })
        .catch(() => caches.match(request).then(r => r || caches.match('/')))
    );
    return;
  }

  // Assets: cache-first
  e.respondWith(
    caches.match(request).then(cached => {
      if (cached) return cached;
      return fetch(request).then(res => {
        if (res.ok) {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(request, clone));
        }
        return res;
      });
    })
  );
});
