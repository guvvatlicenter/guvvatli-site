const SHELL='gc-shell-v1', AUDIO='ga-audio-v1';
const FILES=['./','index.html','math.json','manifest.webmanifest','icon-192.png','icon-512.png','icon-180.png','../audio/tracks.json'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(SHELL).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==SHELL&&k!==AUDIO).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
async function rangeFrom(cached,req){
  const range=req.headers.get('range'); if(!range) return cached;
  const buf=await cached.arrayBuffer(); const size=buf.byteLength;
  const m=/bytes=(\d*)-(\d*)/.exec(range); let s=m&&m[1]?parseInt(m[1]):0; let e=m&&m[2]?parseInt(m[2]):size-1;
  if(!m||!m[1]&&m[2]){s=size-parseInt(m[2]);e=size-1}
  e=Math.min(e,size-1);
  return new Response(buf.slice(s,e+1),{status:206,headers:{'Content-Type':'audio/mpeg','Content-Range':`bytes ${s}-${e}/${size}`,'Content-Length':String(e-s+1),'Accept-Ranges':'bytes'}});
}
self.addEventListener('fetch',e=>{
  const url=new URL(e.request.url);
  if(e.request.method!=='GET'||url.origin!==location.origin) return;
  if(url.pathname.includes('/media/')){
    e.respondWith(caches.open(AUDIO).then(c=>c.match(url.pathname)).then(hit=>hit?rangeFrom(hit,e.request):fetch(e.request)));
    return;
  }
  if(url.pathname.endsWith('.json')||e.request.mode==='navigate'){
    e.respondWith(fetch(e.request).then(r=>{const cp=r.clone();caches.open(SHELL).then(c=>c.put(e.request,cp));return r}).catch(()=>caches.match(e.request).then(r=>r||caches.match('index.html'))));
    return;
  }
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));
});
