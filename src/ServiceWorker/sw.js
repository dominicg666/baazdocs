import { handleMessageFromClient } from './Utilities/messageHandler';
import setupWorkbox from './setupWorkbox';
import registerRoutes from './registerRoutes';
import registerMessageHandlers from './registerMessageHandlers';
import { cacheVersion } from '../constants/constants';

setupWorkbox();

registerRoutes();

registerMessageHandlers();



self.addEventListener('message', e => {
    const { type, payload } = e.data;

    handleMessageFromClient(type, payload, e);
});



self.addEventListener('activate', function (event) {
  var cachesToKeep = [
      `workbox-runtime-${location.origin}/-${cacheVersion}-${location.origin}/`,
      `images-${cacheVersion}-${location.origin}/`,
      `css-${cacheVersion}-${location.origin}/`,
      `js-${cacheVersion}`
    ];

  event.waitUntil(
      caches.keys().then(function (keyList) {
          return Promise.all(keyList.map(function (key) {
              if (cachesToKeep.indexOf(key) === -1) {
                  return caches.delete(key);
              }
          }));
      })
  );
});


// self.addEventListener('activate', function(event) {
//     event.waitUntil(
//       caches.keys().then(function(cacheNames) {
//         return Promise.all(
//           cacheNames.filter(function(cacheName) {
//             // Return true if you want to remove this cache,
//             // but remember that caches are shared across
//             // the whole origin
//           }).map(function(cacheName) {
//             return caches.delete(cacheName);
//           })
//         );
//       })
//     );
//   });
