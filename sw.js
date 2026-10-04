const C='shelf-v10',F=['./','index.html','manifest.json','icon.png','https://cdn.jsdelivr.net/npm/zxing-wasm@2.2.0/dist/iife/reader/index.js'];
self.addEventListener('install',e=>e.waitUntil(caches.open(C).then(c=>Promise.all(F.map(u=>c.add(u).catch(()=>{})))).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{if(/openlibrary|googleapis|archive\.org|crossref|hathitrust/.test(e.request.url))return;e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(n=>{const c=n.clone();caches.open(C).then(x=>x.put(e.request,c));return n}).catch(()=>caches.match('index.html'))))});
