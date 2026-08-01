
self.addEventListener('install', e => {
    e.waitUntil(
        caches.open('ps4-store').then(cache => {
            return cache.addAll([
                '/',
                '/index.html',
                '/includes/style.css',
                '/includes/script.js',
                '/src/main.js'
            ]);
        })
    );
});
self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request).then(response => response || fetch(e.request))
    );
});
