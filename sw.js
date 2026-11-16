// Saga is now Iris: this replaces the old offline service worker at /saga/ and removes itself,
// so phones that saved the old app open the redirect (and then the new app) instead of a cached copy.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.filter((k) => /workbox-precache/.test(k)).map((k) => caches.delete(k)));
      await self.registration.unregister();
      const clients = await self.clients.matchAll({ type: 'window' });
      clients.forEach((c) => c.navigate(c.url));
    })(),
  );
});
