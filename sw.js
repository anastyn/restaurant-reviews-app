/* Note: Keep the cache time on the service worker short or zero, otherwise the updates to this file might take a while
 * to be reloaded to the browser.
 * All requests for this file will go through the browser cache first.
 * The maximum cache time for service worker is 24h, anything longer will be ignored and set to 24h by the browser.
 *
 * Methods below use event.waitUntil, which enqueues other events such as fetch while the parameter function is running
 *
 * */
const staticCacheName = 'restaurant-reviews-static-v4';

/**
 * Cache all static resources.
 */
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(staticCacheName).then(function(cache) {
      const itemUrls = [];
      for (let index = 1; index <= 10; index++) {
        // restaurant review page
        itemUrls.push(`/restaurant.html?id=${index}`);
        // restaurant images
        itemUrls.push(`img/${index}-large.jpg`);
        itemUrls.push(`img/${index}-large_2x.jpg`);
        itemUrls.push(`img/${index}-medium.jpg`);
        itemUrls.push(`img/${index}-medium_2x.jpg`);
        itemUrls.push(`img/${index}-small.jpg`);
      }

      // addAll is atomic
      // uses fetch under the hood, so the requests will go via the browser cache first (something to keep in mind)
      return cache.addAll([
        /* HTML */
        '/',
        '/index.html',
        '/restaurant.html',
        /* Javascript */
        'js/main.js',
        'js/dbhelper.js',
        'js/picture_factory.js',
        'js/restaurant_info.js',
        'js/gmap-offline.js',
        /* CSS */
        'css/styles.css',
        'css/normalize.min.css',
        /* Fonts */
        'https://fonts.googleapis.com/css?family=Playfair+Display|Roboto',
        /* in the stage 1 the data is static so we can cache it */
        'data/restaurants.json',
        ...itemUrls
      ]);
    })
  )
});

/**
 * Delete all previous cache versions when a new service worker is activated.
 */
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.filter((cacheName) => {
          cacheName.startsWith('restaurant-reviews-') &&
          cacheName !== staticCacheName
        }).map((cacheName) => {
          caches.delete(cacheName)
        })
      )
    })
  );
});

/**
 * Check the cache first before fetching from a server.
 */
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(
      (response) => response || fetch(event.request)
    ).catch(function() {
      // If both fail, show a generic fallback:
      console.error('Resource not available offline', event.request);
      if (event.request.url.startsWith('https://maps.googleapis.com/maps/api/js')) {
        return caches.match('/js/gmap-offline.js');
      }
      return new Response('Not available');
    })
  );
});
