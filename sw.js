const CACHE_NAME = "jiayuhere-20260822a";
const APP_SHELL = [
  "/",
  "/index.html",
  "/en/",
  "/offline/",
  "/en/offline/",
  "/resume/",
  "/en/resume/",
  "/assets/styles.css?v=20260822a",
  "/assets/script.js?v=20260822a",
  "/assets/images/github-avatar.jpg",
  "/assets/images/app-icon-192.png",
  "/assets/images/app-icon-512.png",
  "/assets/images/app-icon-maskable-512.png",
  "/favicon.ico?v=20260822a",
  "/site.webmanifest"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((names) => Promise.all(names.filter((name) => name !== CACHE_NAME).map((name) => caches.delete(name))))
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  const url = new URL(request.url);
  if (request.method !== "GET" || url.origin !== self.location.origin) return;

  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
          return response;
        })
        .catch(async () => (await caches.match(request)) || caches.match(url.pathname.startsWith("/en/") ? "/en/offline/" : "/offline/"))
    );
    return;
  }

  event.respondWith(
    caches.match(request).then((cached) => {
      const network = fetch(request).then((response) => {
        if (response.ok) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
        }
        return response;
      });
      return cached || network;
    })
  );
});
