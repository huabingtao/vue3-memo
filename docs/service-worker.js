if(!self.define){let e,s={};const o=(o,n)=>(o=new URL(o+".js",n).href,s[o]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=o,e.onload=s,document.head.appendChild(e)}else e=o,importScripts(o),s()})).then((()=>{let e=s[o];if(!e)throw new Error(`Module ${o} didn’t register its module`);return e})));self.define=(n,i)=>{const u=e||("document"in self?document.currentScript.src:"")||location.href;if(s[u])return;let r={};const l=e=>o(e,u),c={module:{uri:u},exports:r,require:l};s[u]=Promise.all(n.map((e=>c[e]||l(e)))).then((e=>(i(...e),r)))}}define(["./workbox-2d118ab0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"vue3-todolist"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/vue3-memo/css/about.3ad9b4f7.css",revision:null},{url:"/vue3-memo/css/app.db4a485d.css",revision:null},{url:"/vue3-memo/css/chunk-vendors.8c076a2c.css",revision:null},{url:"/vue3-memo/iconfont.js",revision:"8fdccfb0cdba290ec815da0593cfa6ec"},{url:"/vue3-memo/index.html",revision:"b00e0e78bd6bd15cf6aa563208f96b5c"},{url:"/vue3-memo/js/about.8ee7e153.js",revision:null},{url:"/vue3-memo/js/app.9d9db6aa.js",revision:null},{url:"/vue3-memo/js/chunk-vendors.1a3ad746.js",revision:null},{url:"/vue3-memo/manifest.json",revision:"ca9ca6dba386986ba560379b0aea6d52"}],{})}));
//# sourceMappingURL=service-worker.js.map