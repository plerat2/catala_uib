
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('catala_uib-cache').then(function(cache) {
            return cache.addAll([
                'index.html',
                'styles.css',
                'script.js',
                'manifest.json',
                '054941e8e8.png',
                '44353085f7.png',
                'c5be267bc4.png'
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});
