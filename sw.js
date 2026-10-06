// Service worker: makes DanskKlar installable and usable offline.
// Strategy: network first for the app's own files (so updates show up as soon
// as you are online), falling back to the cached copy when offline.
// Google Fonts are cached on first use.
const VERSION = "v1";
const APP_CACHE = `danskklar-app-${VERSION}`;
const FONT_CACHE = "danskklar-fonts";

const APP_FILES = [
  "./",
  "index.html",
  "styles.css",
  "manifest.webmanifest",
  "js/data.js",
  "js/data-2020.js",
  "js/data-pd1.js",
  "js/data-pd3.js",
  "js/exams.js",
  "js/glossary.js",
  "js/app.js",
  "js/translate.js",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "icons/icon-maskable-512.png",
  "icons/apple-touch-icon.png",
  "icons/favicon-32.png"
];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(APP_CACHE).then(c => c.addAll(APP_FILES)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k.startsWith("danskklar-app-") && k !== APP_CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);

  if (url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com") {
    event.respondWith(caches.open(FONT_CACHE).then(async cache => {
      const hit = await cache.match(req);
      if (hit) return hit;
      const res = await fetch(req);
      if (res.ok || res.type === "opaque") cache.put(req, res.clone());
      return res;
    }));
    return;
  }

  if (url.origin !== self.location.origin) return;

  event.respondWith((async () => {
    const cache = await caches.open(APP_CACHE);
    try {
      const res = await fetch(req);
      if (res.ok) cache.put(req, res.clone());
      return res;
    } catch (e) {
      const hit = await cache.match(req, { ignoreSearch: true });
      if (hit) return hit;
      // Offline page navigation: the app is a single page, so serve it.
      if (req.mode === "navigate") return (await cache.match("index.html")) || (await cache.match("./"));
      throw e;
    }
  })());
});
