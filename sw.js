const CACHE_NAME='hero-chart-v1';
const ASSETS=['./minecraft_hero_app.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./apple-touch-icon.png'];
self.addEventListener('install', event=>{
  event.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.addAll(ASSETS)));
  self.skipWaiting();
});
self.addEventListener('activate', event=>{
  event.waitUntil(self.clients.claim());
});
self.addEventListener('fetch', event=>{
  event.respondWith(caches.match(event.request).then(resp=>resp || fetch(event.request).catch(()=>caches.match('./minecraft_hero_app.html'))));
});