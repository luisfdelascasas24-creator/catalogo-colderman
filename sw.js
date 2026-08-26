// Service worker mínimo para el Catálogo Colderman.
// Su único propósito es cumplir el requisito técnico de los navegadores
// para poder "instalar" la web como app (ícono en pantalla de inicio).
// No guarda nada en caché todavía: cada vez que se abre, carga todo
// fresco desde internet (igual que una pestaña normal del navegador).

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // Sin caché por ahora: deja pasar todas las peticiones normalmente.
  event.respondWith(fetch(event.request));
});
