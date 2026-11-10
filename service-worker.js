const CACHE_NAME = "lox-muzik-shell-v53";
const APP_SHELL = [
  "./index.html?v=email-confirmation-1",
  "./style.css?v=email-confirmation-1",
  "./app.js?v=email-confirmation-role-1",
  "./songs/catalog.js",
  "./LOX-MUZIK_4000px_square.png",
  "./imgs/IMG-20261024-WA0040.jpg",
  "./imgs/welcome-radio.jpg",
  "./imgs/lox-muzik-download-cover.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME)
    .then((cache) => cache.addAll(APP_SHELL))
    .then(() => self.skipWaiting()));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(caches.keys()
    .then((cacheNames) => Promise.all(cacheNames
      .filter((cacheName) => cacheName.startsWith("lox-muzik-shell-") && cacheName !== CACHE_NAME)
      .map((cacheName) => caches.delete(cacheName))))
    .then(() => self.clients.claim()));
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET" || new URL(request.url).origin !== self.location.origin) return;

  event.respondWith(caches.match(request, { ignoreSearch: true }).then((cachedResponse) => {
    if (cachedResponse) return cachedResponse;
    return fetch(request).catch((error) => {
      if (request.mode === "navigate") {
        return caches.match("./index.html", { ignoreSearch: true }).then((offlinePage) => {
          if (offlinePage) return offlinePage;
          throw error;
        });
      }
      throw error;
    });
  }));
});
