const CACHE='ms-pma-v3';
const ASSETS=[
 '1_index.html','2_styles.css','3_script.js','4_manifest.json','5_sw.js',
 '7_education.html','10_tools.html','28_offline.html','6_team.html','8_intake.html','9_thankyou.html',
 '13_topics_arbitration.html','14_topics_administrative.html','15_topics_liens.html','16_topics_seizure.html','17_topics_sovereign.html',
 '18_topics_negotiable.html','19_topics_boe.html','20_topics_categories.html','21_topics_torts.html','22_topics_human-rights.html', '23_img_michael.svg','24_img_amara.svg','25_img_devon.svg','26_img_yara.svg','27_img_chen.svg'
];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)));self.skipWaiting();});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.map(k=>k===CACHE?null:caches.delete(k)))));self.clients.claim();});
self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).catch(()=>caches.match('28_offline.html'))));});