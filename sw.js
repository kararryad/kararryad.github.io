const CACHE_NAME = 'qaa-riad-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/files/assets/logo.png',
    '/files/672.bin',
    '/files/900.bin',
    '/hosts/672.html',
    '/hosts/900.html'
];

// تثبيت الكاتش وتخزين الملفات
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

// اعتراض الطلبات وتقديمها من الكاتش إذا كانت موجودة
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
});
