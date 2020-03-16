const cacheName = 'cache-v1';
const precacheResources = [
        './style.css',
        './dist/index.js',
        './images/Marvel-Logo.png'
];

self.addEventListener('install', event => {
    console.log('Service worker install event!');
    event.waitUntil(
        caches.open(cacheName)
            .then(cache => {
                return cache.addAll(precacheResources);
            })
    );
});

self.addEventListener('activate', event => {
    console.log('Service worker activate event!');
});

self.addEventListener('fetch', event => {
    console.log('Fetch intercepted for:', event.request.url);
    event.respondWith(caches.match(event.request)
        .then(cachedResponse => {
            if (cachedResponse) {
                return cachedResponse;
            }
            return fetch(event.request);
        })
    );
});

// self.addEventListener('install', event => event.waitUntil(
//     caches.open('msh-cache-v1')
//     .then(cache => cache.addAll([
//         '/home',
//         'style.css',
//         'dist/index.js',
//         'images/Marvel-Logo.png',
//         "offline/"
//     ]))
//     .then(self.skipWaiting())
// ))

// self.addEventListener('activate', event => {
//     console.log('Service worker activate event!');
// })

// self.addEventListener('fetch', event => {
//     const request = event.request
//     if (request.mode === 'navigate') {
//         event.respondWith(
//             fetch(request)
//                 .then(response => cachePage(request, response))
//                 .catch(err => getCachedPage(request))
//                 .catch(err => fetchCoreFile('offline/'))
//         )
//     } else {
//         event.respondWith(
//             fetch(request)
//                 .catch(err => fetchCoreFile(request.url))
//                 .catch(err => fetchCoreFile('offline/'))
//         )
//     }
// })

// function fetchCoreFile(url) {
//     return caches.open('msh-cache-v1')
//         .then(cache => cache.match(url))
//         .then(response => response ? response : Promise.reject());
// }

// function getCachedPage(request) {
//     return caches.open('msh-cache-v1')
//         .then(cache => cache.match(request))
//         .then(response => response ? response : Promise.reject());
// }

// function cachePage(request, response) {
//     const clonedResponse = response.clone();
//     caches.open('msh-cache-v1')
//         .then(cache => cache.put(request, clonedResponse));
//     return response
// }