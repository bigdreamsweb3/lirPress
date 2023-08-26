// path: ./service-worker.js
const CACHE_NAME = "my-app-cache-v1";

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll([
        // Add URLs of resources to cache here
        "/",
        // ...
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(event.request).catch(() => {
        // Return a custom offline page or fallback response
        return caches.match("/offline.html");
      });
    })
  );
});
