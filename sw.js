const C='crossscan-beta435-offline-v1';
const A=['./','./index.html','./manifest.webmanifest','./vendor/zxing-browser.min.js','./icons/icon-192.png','./icons/icon-512.png','./icons/icon-maskable-512.png'];
self.addEventListener('install',e=>e.waitUntil((async()=>{const c=await caches.open(C);await c.addAll(A);self.skipWaiting()})()));
self.addEventListener('activate',e=>e.waitUntil((async()=>{for(const k of await caches.keys())if(k!==C)await caches.delete(k);await self.clients.claim()})()));
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  if(e.request.mode==='navigate'){
    e.respondWith((async()=>{
      try{
        const r=await fetch(e.request,{cache:'no-store'});
        const c=await caches.open(C);c.put('./index.html',r.clone()).catch(()=>{});
        return r;
      }catch(err){return (await caches.match('./index.html'))||(await caches.match('./'))}
    })());
    return;
  }
  e.respondWith((async()=>{
    const x=await caches.match(e.request);if(x)return x;
    const r=await fetch(e.request);
    const c=await caches.open(C);c.put(e.request,r.clone()).catch(()=>{});
    return r;
  })());
});