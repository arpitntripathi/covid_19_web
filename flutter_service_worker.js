'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "1c2e0e6e199632f946fba122a794b2ab",
"assets/assets/fonts/Poppins/Poppins-Bold.ttf": "c23534acbeddbaadfd0ab2d2bbfdfc84",
"assets/assets/fonts/Poppins/Poppins-Medium.ttf": "ba95810b56f476990ca71d15139d5111",
"assets/assets/fonts/Poppins/Poppins-Regular.ttf": "41e8dead03fb979ecc23b8dfb0fef627",
"assets/assets/icons/coronadr.svg": "e0fdd863ea9d3ad6aad6e52cc7fe892f",
"assets/assets/icons/Drcorona.svg": "0b69305f217703417b73e12788582625",
"assets/assets/icons/dropdown.svg": "70fc16109943ff2e85a6de0dc642f55a",
"assets/assets/icons/forward.svg": "5c2d6cee9721171641879317f77a80ed",
"assets/assets/icons/Intersection.svg": "5ece1160ef8cb66c7cb5827a3d607966",
"assets/assets/icons/map.svg": "8485173948f7175eb05dc60f8cb002fe",
"assets/assets/icons/maps-and-flags.svg": "585aaefbf745b4af59510090bcfd23a4",
"assets/assets/icons/menu.svg": "c1a2951f731bbbaec7cf1a67024ca575",
"assets/assets/icons/shape_small.svg": "96f20fd0365aa6df846581b0baecdb21",
"assets/assets/images/caugh.png": "9639f120b671705cabbb5416e00f8e01",
"assets/assets/images/fever.png": "6ff9628a44a28b363593cae1ff6a6248",
"assets/assets/images/headache.png": "7aacf91147e3571ac3aab07b9e7149f3",
"assets/assets/images/map.png": "e07af100194efbbbbae66dfdc0478ee5",
"assets/assets/images/virus.png": "bfbf6f56ed6350e51156698abf5c708b",
"assets/assets/images/wash_hands.png": "403b264a110f0af9db5b9c47288ec3dd",
"assets/assets/images/wear_mask.png": "7ac433e98ec358e3a57b51073a304921",
"assets/FontManifest.json": "9e4f9001fac9aecb58c21a3af674d3a0",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "982d169648efdd42595a755ff0a17763",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "6fb746f96c89cd0195f08c3ac63e1f9d",
"/": "6fb746f96c89cd0195f08c3ac63e1f9d",
"main.dart.js": "45b5918980501c7f4e2acab78608f7f8",
"manifest.json": "47ec9d6caf6330b74e8806bc6b0b9d9c"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
