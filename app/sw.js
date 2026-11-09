const SHELL='gc-shell-v17', AUDIO='gc-audio-v1';
const FILES=['./','index.html','manifest.webmanifest','icon-192.png','icon-512.png','icon-180.png','katex/katex.min.css','katex/katex.min.js','katex/auto-render.min.js','d/keys.json','d/audio.bin','d/words.a1.bin','d/math.az.bin','d/math.en.bin','d/math.ru.bin','d/olymp.az.bin','d/olymp.en.bin','d/olymp.ru.bin'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(SHELL).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==SHELL&&k!==AUDIO).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  const url=new URL(e.request.url);
  if(e.request.method!=='GET'||url.origin!==location.origin) return;
  if(url.pathname.includes('/app/a/')){ e.respondWith(caches.open(AUDIO).then(c=>c.match(url.pathname)).then(hit=>hit||fetch(e.request))); return; }
  if(e.request.mode==='navigate'||url.pathname.includes('/app/d/')){
    e.respondWith(fetch(e.request).then(r=>{if(r.ok){const cp=r.clone();caches.open(SHELL).then(c=>c.put(url.pathname===location.pathname?e.request:url.pathname,cp))}return r}).catch(()=>caches.match(url.pathname).then(r=>r||caches.match(e.request)).then(r=>r||caches.match('index.html'))));
    return;
  }
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));
});
