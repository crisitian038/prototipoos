// sw.js - Versión universal
const CACHE_NAME = 'app-cache-v1';
const GITHUB_REPO = 'https://github.com/crisitian038/prototipoos.git'; 

// Obtener la ruta base dinámicamente
function getBasePath() {
    // Si estamos en github.io, incluir el nombre del repo
    if (self.location.hostname.includes('github.io')) {
        return `/${GITHUB_REPO}`;
    }
    return '';
}

const BASE_PATH = getBasePath();

const STATIC_ASSETS = [
    `${BASE_PATH}/logo.png`,
    `${BASE_PATH}/404.html`,
    `${BASE_PATH}/offline.html`
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(STATIC_ASSETS))
    );
});

self.addEventListener('fetch', (event) => {
    const request = event.request;
    
    if (request.mode === 'navigate') {
        event.respondWith(
            fetch(request)
                .then(response => {
                    // Si es error 404, mostrar nuestra página
                    if (response.status === 404) {
                        return showCustom404();
                    }
                    return response;
                })
                .catch(error => {
                    // Offline
                    const url = new URL(request.url);
                    const path = url.pathname;
                    
                    // Lista de rutas válidas
                    const validPaths = [
                        `${BASE_PATH}/`,
                        `${BASE_PATH}/index.html`,
                        `${BASE_PATH}/login.html`,
                        `${BASE_PATH}/admin.html`
                    ];
                    
                    if (validPaths.includes(path)) {
                        return showOfflinePage();
                    } else {
                        return showCustom404();
                    }
                })
        );
    }
});

async function showCustom404() {
    const cache = await caches.open(CACHE_NAME);
    const cached = await cache.match(`${BASE_PATH}/404.html`);
    return cached || new Response('Página no encontrada', { status: 404 });
}

async function showOfflinePage() {
    const cache = await caches.open(CACHE_NAME);
    const cached = await cache.match(`${BASE_PATH}/offline.html`);
    return cached || new Response('Sin conexión', { status: 200 });
}