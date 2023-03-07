'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "c95130ffd332ccb376155e236ef578c8",
"assets/assets/icons/free-icon-accessories-6540298.svg": "2cad6bbc4bf90cc3de4e7911b9498c31",
"assets/assets/icons/free-icon-ankle-boot-7888906.svg": "ac3b697b3ee5ee46d3d375eeaeca983b",
"assets/assets/icons/free-icon-baby-shoes-4261418.svg": "91476019517273f32e038fbdde0e2bef",
"assets/assets/icons/free-icon-backpack-6784001.svg": "2f9804e2b78b5da972190ca43bbb9f88",
"assets/assets/icons/free-icon-ballet-shoes-5144714.svg": "f53e446eb95e7e8c6f069dd4e585c4fa",
"assets/assets/icons/free-icon-belt-1154930.svg": "68872aee2727b463d876bfaf562dbec5",
"assets/assets/icons/free-icon-blouse-7394922.svg": "7f191e962b2671e706c9cc84320d9a7e",
"assets/assets/icons/free-icon-boot-shoes-5113432.svg": "a028a1840b265f7fa0f11ff481c3dc8e",
"assets/assets/icons/free-icon-boots-24897.svg": "1f2ff25dc3f2294375928fc24b0fe5ec",
"assets/assets/icons/free-icon-boots-5420785.svg": "96d1f3fea5b39ebc3391482adde7064f",
"assets/assets/icons/free-icon-cardigan-2806221.svg": "f6199b60b9dc0664f0aa2afc0e43f476",
"assets/assets/icons/free-icon-chelsea-7364555.svg": "cd898f5a39c201e52e3d1b9146c77ccc",
"assets/assets/icons/free-icon-clogs-7398107.svg": "61565d642229507fecfed725386f8c24",
"assets/assets/icons/free-icon-clothes-shop-6686700.svg": "45da7e7687adf7111621de04f6679195",
"assets/assets/icons/free-icon-crop-top-3010767.svg": "cc13643b7374af4944cb79c760bc6e7e",
"assets/assets/icons/free-icon-dresses-5693025.svg": "868b6e63f04cbbcfcbf9ef1ed8ed75e2",
"assets/assets/icons/free-icon-espadrille-4912807.svg": "bd98670b69e550e1d14621118f293fcd",
"assets/assets/icons/free-icon-flamenco-black-female-shoe-40167.svg": "82b5bd270818e66e45a0e7ae68230ea6",
"assets/assets/icons/free-icon-gloves-1031475.svg": "8bcc806fd80e500c8ed77faea20ad635",
"assets/assets/icons/free-icon-hats-7562284.svg": "86b4fa1a6b918016c5ef4c1deef5f83d",
"assets/assets/icons/free-icon-heels-6456750.svg": "761cf5062867fcca18c11b5acd85c8c8",
"assets/assets/icons/free-icon-high-heels-24831.svg": "fc97f450d315cbbf18b8634a8fcc46d5",
"assets/assets/icons/free-icon-hiking-boots-8414629.svg": "efa343a6f1f8f758f350634fc155bfb3",
"assets/assets/icons/free-icon-hoodie-6482966.svg": "4d0e6f8ea8d6411f3cc582a6cef1e1b3",
"assets/assets/icons/free-icon-hoody-7394961.svg": "056172aaa3b26ad80d62bcebaa4f766a",
"assets/assets/icons/free-icon-jacket-2160795.svg": "43e8822107a734aab6d3bba39ccea058",
"assets/assets/icons/free-icon-jacket-life-6478222.svg": "7e9727b5db237f3aa9c63fcb754ef9da",
"assets/assets/icons/free-icon-jeans-360593.svg": "458a748e155e2cdedd9df8e31fcd5d93",
"assets/assets/icons/free-icon-jogger-pants-4435471.svg": "78dda07069df5a878e1726a9af03e23b",
"assets/assets/icons/free-icon-jogging-6878379.svg": "14024ed00f39db4640ed1ca30a57f3f5",
"assets/assets/icons/free-icon-jumper-4166535.svg": "9345ecff303b923ac482731b4d7f35ef",
"assets/assets/icons/free-icon-knitted-mittens-107481.svg": "d8148aacde7dd4eff25fc8ac89953eb8",
"assets/assets/icons/free-icon-leather-shoe-6948139.svg": "8c53ca137c05c98fa69985787daf2025",
"assets/assets/icons/free-icon-loafers-2590024.svg": "8d8bfc40113326387fd3b0ccb022f800",
"assets/assets/icons/free-icon-long-coat-2774354.svg": "337d186d4ab5b22a554a5d0834829a7b",
"assets/assets/icons/free-icon-overall-3912228.svg": "25ea929e973c3b20e7f30977e5e66710",
"assets/assets/icons/free-icon-oxford-9401425.svg": "995772fb9d5c68ac97e9c24038a08150",
"assets/assets/icons/free-icon-pant-4996473.svg": "90cac8d089864f5ce167ebf3838ca4fe",
"assets/assets/icons/free-icon-pant-8723686.svg": "cff7400e5c13fb235e8b979abb590d77",
"assets/assets/icons/free-icon-panties-6285028.svg": "c33966ad3cc4264d67dd43b60e1a7363",
"assets/assets/icons/free-icon-pants-1380205.svg": "5e439ec47e32f1010e7047bfbc0e345c",
"assets/assets/icons/free-icon-polo-shirt-3840588.svg": "233716535bc6a61bed37399a743f3705",
"assets/assets/icons/free-icon-puffer-coat-7873529.svg": "24ee9338ecda4e8a892060c9e0b1cbbb",
"assets/assets/icons/free-icon-raincoat-8415935.svg": "e5d3975989cd00494b261dba4581cb20",
"assets/assets/icons/free-icon-sandal-8516201.svg": "7c19f3a70a41d7d4fdfcef9fb020590d",
"assets/assets/icons/free-icon-sandals-4493066.svg": "8e5fd127fc045e8bf623aa6ed18e2522",
"assets/assets/icons/free-icon-scarf-5699681.svg": "f83b42edcea4938fdc86cc8070675ef4",
"assets/assets/icons/free-icon-scarf-6428227.svg": "205b9c0b8b07f02337ca783d3b8b1564",
"assets/assets/icons/free-icon-shirt-2405570.svg": "2322691a75101e4ea3164dccbf32b26b",
"assets/assets/icons/free-icon-shoe-3531727.svg": "1740e8259ce7380461322634064c8c1c",
"assets/assets/icons/free-icon-shoe-8567049.svg": "85d6b28f5b31a23ba66543b4696e56a6",
"assets/assets/icons/free-icon-shoe-9530484.svg": "73b254c058cb7b6f24a414721556daa7",
"assets/assets/icons/free-icon-shoes-9348929.svg": "fd06f9ae5766f9730dcaa7f5cc3d8c9d",
"assets/assets/icons/free-icon-shoes-9348935.svg": "57178b24df32d5fc80757fe08b799ec3",
"assets/assets/icons/free-icon-shorts-4354884.svg": "fc6c94d334be8837a0edf5ec9d87f267",
"assets/assets/icons/free-icon-skirt-5571173.svg": "f33a8a3aa38483b0b67e3bd31ccd509b",
"assets/assets/icons/free-icon-sneakers-362764.svg": "e22a131e8e6d5a9b8676c3cc7e27043b",
"assets/assets/icons/free-icon-socks-4707474.svg": "3779c1be772a6b9e770738b26756b658",
"assets/assets/icons/free-icon-sport-1898377.svg": "7d9d231d61d4cf80573cdc627a545c38",
"assets/assets/icons/free-icon-sport-wear-7133058.svg": "440e7e1d435a15888fa62cdfaeb5b720",
"assets/assets/icons/free-icon-stocking-592527.svg": "c7d369cd1b928b9276262bbfc2e1d833",
"assets/assets/icons/free-icon-swimsuit-2806579.svg": "d2a740d845fa06fec47a32228c1bc28f",
"assets/assets/icons/free-icon-tshirt-4435427.svg": "eec6b514ba2356e014b00f5e1b371052",
"assets/assets/icons/free-icon-turtleneck-2806290.svg": "80012c276e6fb7b18667fb24139b0e1f",
"assets/assets/icons/free-icon-underpants-5120176.svg": "499c9ef3c4ac60f981cbffcc7a442b20",
"assets/assets/icons/free-icon-undershirt-3531921.svg": "9319a8e585cbe4120ae11c18a651437d",
"assets/assets/icons/free-icon-vest-1898291.svg": "f1b74c2a638da5281921f9125b92525c",
"assets/assets/icons/free-icon-wellies-8807451.svg": "25561fc7fbf2a039c52caa7221e0493b",
"assets/assets/icons/free-icon-windbreaker-4758377.svg": "73429b9830f29ffc09956d119b7d541c",
"assets/assets/icons/free-icon-winter-jacket-2774339.svg": "36c15afca3f0a1a755a5169b36c07920",
"assets/assets/icons/free-icon-woman-bag-547321.svg": "5c8052e9a7d7526cb928fdecc4daa2ef",
"assets/assets/images/any-clothes.jpg": "b58b6cb49e4724532cd448c494331a7c",
"assets/assets/images/clothes_shop.jpg": "f8441dbefbfb5545af9bc81fa58ed6db",
"assets/assets/images/delivery.jpg": "c1332984ebe8ae1152331cf1f7afce9c",
"assets/assets/images/empty.png": "323de9164e3fa0029ab2ae1331bef1fd",
"assets/assets/images/flower.jpg": "01b7e0ae9c3d6e5f90cde26d30961a3a",
"assets/assets/images/sale.jpg": "9bce14de09aac5ef2b6dc6a3eb62e5f4",
"assets/assets/images/shop.png": "31ce3ddf655424423bd98805bdefdbc2",
"assets/assets/svg/call.svg": "34f679486127b3be2763de15b7f34878",
"assets/assets/svg/drawer_menu.svg": "f0ec3c21834183d1caf5993892e28854",
"assets/assets/svg/favorite.svg": "27b40c8c43cb66ec62f66db8508faf16",
"assets/assets/svg/filter.svg": "caf83beb5cd1120a22dea2a0464ef590",
"assets/assets/svg/profile.svg": "dc1fa075a50d0cd4f7acff9e9d29d082",
"assets/assets/svg/search.svg": "13eae2f4cb859d611d331fc14585d6b6",
"assets/assets/svg/store.svg": "307d4838f06e04a40a109f052cf65fbb",
"assets/assets/svg/verified.svg": "6a6c3352e6250dfeb08ac04aac77be9d",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "2e96c8bc68603bf3a9c95c243f15517d",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "90db557240f761eb95a343b47d514208",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/Icon-192.png": "ff4a7a4cf2036ab74e650c7e24b70f9d",
"icons/Icon-512.png": "60c52f9c8eeef416c3672be9df3515fb",
"icons/Icon-maskable-192.png": "ff4a7a4cf2036ab74e650c7e24b70f9d",
"icons/Icon-maskable-512.png": "60c52f9c8eeef416c3672be9df3515fb",
"index.html": "c98f42a93121df4d8f5a4887ac80bd84",
"/": "c98f42a93121df4d8f5a4887ac80bd84",
"main.dart.js": "6fdce4e89cf80e07237c6e8d26873fe9",
"manifest.json": "0f8c42e509b4ad773e11acb47c22328b",
"version.json": "58286c2712c8b02d9bd2b1c7627573a3"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
