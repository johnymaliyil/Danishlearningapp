// Service worker: makes DanskKlar installable and usable offline.
// Strategy: network first for the app's own files (so updates show up as soon
// as you are online), falling back to the cached copy when offline.
// Google Fonts are cached on first use.
const VERSION = "v20";
const APP_CACHE = `danskklar-app-${VERSION}`;
const FONT_CACHE = "danskklar-fonts";

const APP_FILES = [
  "./",
  "index.html",
  "styles.css",
  "manifest.webmanifest",
  "js/data.js",
  "js/data-2020.js",
  "js/data-pd2-extra.js",
  "js/data-2019.js",
  "js/data-2012.js",
  "js/data-2013.js",
  "js/data-2014.js",
  "js/data-2016.js",
  "js/data-2018.js",
  "js/data-2013nd.js",
  "js/data-2014nd.js",
  "js/data-2016m.js",
  "js/data-2017m.js",
  "js/data-2012nd.js",
  "js/data-2015m.js",
  "js/data-2018m.js",
  "js/data-pd1.js",
  "js/data-pd3.js",
  "js/data-pd3-modul.js",
  "js/exams.js",
  "js/games.js",
  "js/templates.js",
  "js/model-translations.js",
  "js/grammar.js",
  "js/glossary.js",
  "js/app.js",
  "js/translate.js",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "icons/icon-maskable-512.png",
  "icons/apple-touch-icon.png",
  "icons/favicon-32.png",
  "images/pd2-2012/teknologi-1.jpg",
  "images/pd2-2012/teknologi-2.jpg",
  "images/pd2-2012/rygning-1.jpg",
  "images/pd2-2012/rygning-2.jpg",
  "images/pd2-2012/frivilligt-1.jpg",
  "images/pd2-2012/frivilligt-2.jpg",
  "images/pd2-2013/soeskende-1.jpg",
  "images/pd2-2013/soeskende-2.jpg",
  "images/pd2-2013/by-land-1.jpg",
  "images/pd2-2013/by-land-2.jpg",
  "images/pd2-2013/hjaelpsomhed-1.jpg",
  "images/pd2-2013/hjaelpsomhed-2.jpg",
  "images/pd2-2014/fester-1.jpg",
  "images/pd2-2014/fester-2.jpg",
  "images/pd2-2014/paa-tur-1.jpg",
  "images/pd2-2014/paa-tur-2.jpg",
  "images/pd2-2014/flytte-1.jpg",
  "images/pd2-2014/flytte-2.jpg",
  "images/pd2-2013-nd/aktive-aeldre-1.jpg",
  "images/pd2-2013-nd/aktive-aeldre-2.jpg",
  "images/pd2-2013-nd/gaver-1.jpg",
  "images/pd2-2013-nd/gaver-2.jpg",
  "images/pd2-2013-nd/penge-1.jpg",
  "images/pd2-2013-nd/penge-2.jpg",
  "images/pd2-2014-nd/at-vaere-sammen-med-andre-1.jpg",
  "images/pd2-2014-nd/at-vaere-sammen-med-andre-2.jpg",
  "images/pd2-2014-nd/fritidsinteresser-1.jpg",
  "images/pd2-2014-nd/fritidsinteresser-2.jpg",
  "images/pd2-2014-nd/dyr-1.jpg",
  "images/pd2-2014-nd/dyr-2.jpg",
  "images/pd2-2012-nd/mobiltelefoner-1.jpg",
  "images/pd2-2012-nd/mobiltelefoner-2.jpg",
  "images/pd2-2012-nd/transport-1.jpg",
  "images/pd2-2012-nd/transport-2.jpg",
  "images/pd2-2012-nd/venner-1.jpg",
  "images/pd2-2012-nd/venner-2.jpg",
  "images/pd2-2015-m/at-faa-danske-venner-1.jpg",
  "images/pd2-2015-m/at-faa-danske-venner-2.jpg",
  "images/pd2-2015-m/morgen-1.jpg",
  "images/pd2-2015-m/morgen-2.jpg",
  "images/pd2-2015-m/sund-eller-usund-mad-1.jpg",
  "images/pd2-2015-m/sund-eller-usund-mad-2.jpg"
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
