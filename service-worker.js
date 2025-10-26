const CACHE_NAME = "todo-pwa-v1";
const ASSETS = [
         "index.html",
         "manifest.json",
         "icon-192.png",
         "icon-512.png",
         "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
];

self.addEventListener("install", (e) => {
         e.waitUntil(
                  caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
         );
});

self.addEventListener("fetch", (e) => {
         e.respondWith(
                  caches.match(e.request).then((res) => res || fetch(e.request))
         );
});
