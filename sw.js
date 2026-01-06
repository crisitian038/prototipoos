const CACHE_NAME = 'offline-cache-v1';
// Lista de archivos a guardar
const OFFLINE_ASSETS = ['/offline.html', '/logo.png']; 
const OFFLINE_PAGE = '/offline.html';

// 1. Instalar: Usamos addAll para el arreglo de archivos
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // IMPORTANTE: Usar addAll para arreglos
      return cache.addAll(OFFLINE_ASSETS);
    })
  );
  self.skipWaiting();
});

// 2. Activar
self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// 3. Interceptar peticiones
self.addEventListener('fetch', (event) => {
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request).catch(() => {
        return caches.open(CACHE_NAME).then((cache) => {
          // Aquí devolvemos específicamente la página HTML
          return cache.match(OFFLINE_PAGE);
        });
      })
    );
  } else {
    // Esto permite que el logo.png se cargue desde el caché si la página offline lo pide
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  }
});