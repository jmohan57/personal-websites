if(!self.define){let e,i={};const a=(a,t)=>(a=new URL(a+".js",t).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(t,n)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let c={};const r=e=>a(e,s),o={module:{uri:s},exports:c,require:r};i[s]=Promise.all(t.map((e=>o[e]||r(e)))).then((e=>(n(...e),c)))}}define(["./workbox-7c2a5a06"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/README.md",revision:"78249dcec626e904163177b5b0e60088"},{url:"/_next/static/1u_KdX_Sof777ZMG7HV8F/_buildManifest.js",revision:"d13caa22ef9908741289b99f44f91aa8"},{url:"/_next/static/1u_KdX_Sof777ZMG7HV8F/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/154.2c4cfb9710da4694.js",revision:"2c4cfb9710da4694"},{url:"/_next/static/chunks/218.bbc81ab7fe0b250a.js",revision:"bbc81ab7fe0b250a"},{url:"/_next/static/chunks/245.e4aa6731f09b4313.js",revision:"e4aa6731f09b4313"},{url:"/_next/static/chunks/249.84d1a3fa9f3db97d.js",revision:"84d1a3fa9f3db97d"},{url:"/_next/static/chunks/267.04e695f4bd38dfdc.js",revision:"04e695f4bd38dfdc"},{url:"/_next/static/chunks/269.f7c54b7b22d27bb7.js",revision:"f7c54b7b22d27bb7"},{url:"/_next/static/chunks/302.b1e1768119ee951d.js",revision:"b1e1768119ee951d"},{url:"/_next/static/chunks/335.96adef2a661c6483.js",revision:"96adef2a661c6483"},{url:"/_next/static/chunks/34.5a5140147a0843b5.js",revision:"5a5140147a0843b5"},{url:"/_next/static/chunks/368.20076c45d4c74824.js",revision:"20076c45d4c74824"},{url:"/_next/static/chunks/398.4414c5d731bb2e36.js",revision:"4414c5d731bb2e36"},{url:"/_next/static/chunks/437.de0a1ec585169da5.js",revision:"de0a1ec585169da5"},{url:"/_next/static/chunks/596.46a780a4387c1870.js",revision:"46a780a4387c1870"},{url:"/_next/static/chunks/614.1adf168435750df6.js",revision:"1adf168435750df6"},{url:"/_next/static/chunks/69.ca7b57a710039c1a.js",revision:"ca7b57a710039c1a"},{url:"/_next/static/chunks/698.6343bfd066c936de.js",revision:"6343bfd066c936de"},{url:"/_next/static/chunks/699.e25f4c8273650353.js",revision:"e25f4c8273650353"},{url:"/_next/static/chunks/701.d64779c40060eca5.js",revision:"d64779c40060eca5"},{url:"/_next/static/chunks/715.12d74cfe0a9cd519.js",revision:"12d74cfe0a9cd519"},{url:"/_next/static/chunks/753.4b7977dd74b8cd53.js",revision:"4b7977dd74b8cd53"},{url:"/_next/static/chunks/833.57ab72b8819e9c65.js",revision:"57ab72b8819e9c65"},{url:"/_next/static/chunks/881.5cf9d76dde2a44fd.js",revision:"5cf9d76dde2a44fd"},{url:"/_next/static/chunks/891.89b735a99e10f35f.js",revision:"89b735a99e10f35f"},{url:"/_next/static/chunks/953.ac8b054f018ec4ca.js",revision:"ac8b054f018ec4ca"},{url:"/_next/static/chunks/c16184b3.c53d38dcb6743935.js",revision:"c53d38dcb6743935"},{url:"/_next/static/chunks/framework-63157d71ad419e09.js",revision:"63157d71ad419e09"},{url:"/_next/static/chunks/main-78da73162803b7ef.js",revision:"78da73162803b7ef"},{url:"/_next/static/chunks/pages/404-9d9b017bbbc32106.js",revision:"9d9b017bbbc32106"},{url:"/_next/static/chunks/pages/500-abe132bb251f303f.js",revision:"abe132bb251f303f"},{url:"/_next/static/chunks/pages/_error-2cc5c76b30a7946a.js",revision:"2cc5c76b30a7946a"},{url:"/_next/static/chunks/pages/articles-a938b1a3ebf363b0.js",revision:"a938b1a3ebf363b0"},{url:"/_next/static/chunks/pages/articles/title.articles-754cf77a8f56d5e8.js",revision:"754cf77a8f56d5e8"},{url:"/_next/static/chunks/pages/docs-999dcf4ab8002467.js",revision:"999dcf4ab8002467"},{url:"/_next/static/chunks/pages/docs/title.docs-3f26e3a1c0c7cd92.js",revision:"3f26e3a1c0c7cd92"},{url:"/_next/static/chunks/pages/icons-ef8baa018aadc320.js",revision:"ef8baa018aadc320"},{url:"/_next/static/chunks/pages/index-d504970b1ee1585e.js",revision:"d504970b1ee1585e"},{url:"/_next/static/chunks/pages/projects-1aae5ced14ac06d6.js",revision:"1aae5ced14ac06d6"},{url:"/_next/static/chunks/pages/projects/title.projects-51703862a9490ee3.js",revision:"51703862a9490ee3"},{url:"/_next/static/chunks/pages/settings-ad81c917e465c340.js",revision:"ad81c917e465c340"},{url:"/_next/static/chunks/pages/settings/title.settings-9cef46d5a67d4312.js",revision:"9cef46d5a67d4312"},{url:"/_next/static/chunks/pages/signin-93da69d0ca07a2fd.js",revision:"93da69d0ca07a2fd"},{url:"/_next/static/chunks/pages/signin/title.signin-ca16c76ad95100c6.js",revision:"ca16c76ad95100c6"},{url:"/_next/static/chunks/pages/title.404-d07e4b22de31ae83.js",revision:"d07e4b22de31ae83"},{url:"/_next/static/chunks/pages/title.500-7a5a17eafe9ad1cf.js",revision:"7a5a17eafe9ad1cf"},{url:"/_next/static/chunks/pages/title.index-dd1d81d1d85936b8.js",revision:"dd1d81d1d85936b8"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-55a0db1c25d35757.js",revision:"55a0db1c25d35757"},{url:"/_next/static/css/1242274ebc43d894.css",revision:"1242274ebc43d894"},{url:"/_next/static/css/15202505d4f4afa3.css",revision:"15202505d4f4afa3"},{url:"/_next/static/css/38f0e2aa1c0cc3db.css",revision:"38f0e2aa1c0cc3db"},{url:"/_next/static/css/38fbea898be38f21.css",revision:"38fbea898be38f21"},{url:"/_next/static/css/3e56046674704777.css",revision:"3e56046674704777"},{url:"/_next/static/css/45a0e815a8be0c63.css",revision:"45a0e815a8be0c63"},{url:"/_next/static/css/6d1ac84401be40fa.css",revision:"6d1ac84401be40fa"},{url:"/_next/static/css/9c6d7ee53a0f1f9f.css",revision:"9c6d7ee53a0f1f9f"},{url:"/_next/static/css/a73ec98fdf0b8bce.css",revision:"a73ec98fdf0b8bce"},{url:"/_next/static/css/c05e2242919aa01a.css",revision:"c05e2242919aa01a"},{url:"/_next/static/css/e6b44d4ca92f9a19.css",revision:"e6b44d4ca92f9a19"},{url:"/_next/static/css/ea2b85eeae4947cd.css",revision:"ea2b85eeae4947cd"},{url:"/_next/static/media/devicon.2305a813.ttf",revision:"2305a813"},{url:"/_next/static/media/devicon.79c69bc7.woff",revision:"79c69bc7"},{url:"/_next/static/media/devicon.912e12c4.eot",revision:"912e12c4"},{url:"/_next/static/media/devicon.d86112e0.svg",revision:"d86112e0"},{url:"/_next/static/media/fira-code-cyrillic-400-normal.6086e63f.woff2",revision:"6086e63f"},{url:"/_next/static/media/fira-code-cyrillic-400-normal.f71d35d9.woff",revision:"f71d35d9"},{url:"/_next/static/media/fira-code-cyrillic-600-normal.7ed7feaf.woff2",revision:"7ed7feaf"},{url:"/_next/static/media/fira-code-cyrillic-600-normal.f763b0db.woff",revision:"f763b0db"},{url:"/_next/static/media/fira-code-cyrillic-ext-400-normal.b1f07e82.woff2",revision:"b1f07e82"},{url:"/_next/static/media/fira-code-cyrillic-ext-400-normal.ef7fdcef.woff",revision:"ef7fdcef"},{url:"/_next/static/media/fira-code-cyrillic-ext-600-normal.268f7242.woff2",revision:"268f7242"},{url:"/_next/static/media/fira-code-cyrillic-ext-600-normal.c9bdaa09.woff",revision:"c9bdaa09"},{url:"/_next/static/media/fira-code-greek-400-normal.6fc14851.woff",revision:"6fc14851"},{url:"/_next/static/media/fira-code-greek-400-normal.95d4e83c.woff2",revision:"95d4e83c"},{url:"/_next/static/media/fira-code-greek-600-normal.17a4f747.woff2",revision:"17a4f747"},{url:"/_next/static/media/fira-code-greek-600-normal.bb7ea979.woff",revision:"bb7ea979"},{url:"/_next/static/media/fira-code-greek-ext-400-normal.0e1cf7e2.woff",revision:"0e1cf7e2"},{url:"/_next/static/media/fira-code-greek-ext-400-normal.707deac8.woff2",revision:"707deac8"},{url:"/_next/static/media/fira-code-greek-ext-600-normal.8abe59f1.woff2",revision:"8abe59f1"},{url:"/_next/static/media/fira-code-greek-ext-600-normal.ef2e4be3.woff",revision:"ef2e4be3"},{url:"/_next/static/media/fira-code-latin-400-normal.1f45a4c0.woff2",revision:"1f45a4c0"},{url:"/_next/static/media/fira-code-latin-400-normal.46f7536f.woff",revision:"46f7536f"},{url:"/_next/static/media/fira-code-latin-600-normal.9ed64187.woff2",revision:"9ed64187"},{url:"/_next/static/media/fira-code-latin-600-normal.c65d4f1a.woff",revision:"c65d4f1a"},{url:"/_next/static/media/fira-code-latin-ext-400-normal.544f78b8.woff2",revision:"544f78b8"},{url:"/_next/static/media/fira-code-latin-ext-400-normal.95d3893b.woff",revision:"95d3893b"},{url:"/_next/static/media/fira-code-latin-ext-600-normal.6f2021a1.woff",revision:"6f2021a1"},{url:"/_next/static/media/fira-code-latin-ext-600-normal.b836a3c5.woff2",revision:"b836a3c5"},{url:"/_next/static/media/inter-cyrillic-400-normal.5122dff0.woff2",revision:"5122dff0"},{url:"/_next/static/media/inter-cyrillic-400-normal.8cbf7092.woff",revision:"8cbf7092"},{url:"/_next/static/media/inter-cyrillic-700-normal.2de493a5.woff",revision:"2de493a5"},{url:"/_next/static/media/inter-cyrillic-700-normal.8b03fbd1.woff2",revision:"8b03fbd1"},{url:"/_next/static/media/inter-cyrillic-800-normal.c9f7c98d.woff",revision:"c9f7c98d"},{url:"/_next/static/media/inter-cyrillic-800-normal.f0070c7d.woff2",revision:"f0070c7d"},{url:"/_next/static/media/inter-cyrillic-ext-400-normal.06b6faa3.woff2",revision:"06b6faa3"},{url:"/_next/static/media/inter-cyrillic-ext-400-normal.0c785d16.woff",revision:"0c785d16"},{url:"/_next/static/media/inter-cyrillic-ext-700-normal.7c668daa.woff2",revision:"7c668daa"},{url:"/_next/static/media/inter-cyrillic-ext-700-normal.cdcfe7b2.woff",revision:"cdcfe7b2"},{url:"/_next/static/media/inter-cyrillic-ext-800-normal.4dbf28ad.woff",revision:"4dbf28ad"},{url:"/_next/static/media/inter-cyrillic-ext-800-normal.f40e584a.woff2",revision:"f40e584a"},{url:"/_next/static/media/inter-greek-400-normal.21a04137.woff",revision:"21a04137"},{url:"/_next/static/media/inter-greek-400-normal.d1deb2fe.woff2",revision:"d1deb2fe"},{url:"/_next/static/media/inter-greek-700-normal.54b722f0.woff2",revision:"54b722f0"},{url:"/_next/static/media/inter-greek-700-normal.5e91a9da.woff",revision:"5e91a9da"},{url:"/_next/static/media/inter-greek-800-normal.c17e275b.woff",revision:"c17e275b"},{url:"/_next/static/media/inter-greek-800-normal.fd6e481c.woff2",revision:"fd6e481c"},{url:"/_next/static/media/inter-greek-ext-400-normal.2271c2a1.woff2",revision:"2271c2a1"},{url:"/_next/static/media/inter-greek-ext-400-normal.9ad92a78.woff",revision:"9ad92a78"},{url:"/_next/static/media/inter-greek-ext-700-normal.2751ce59.woff",revision:"2751ce59"},{url:"/_next/static/media/inter-greek-ext-700-normal.5fb4f9ba.woff2",revision:"5fb4f9ba"},{url:"/_next/static/media/inter-greek-ext-800-normal.0344056d.woff",revision:"0344056d"},{url:"/_next/static/media/inter-greek-ext-800-normal.c7813f38.woff2",revision:"c7813f38"},{url:"/_next/static/media/inter-latin-400-normal.493934f7.woff2",revision:"493934f7"},{url:"/_next/static/media/inter-latin-400-normal.5a243e9a.woff",revision:"5a243e9a"},{url:"/_next/static/media/inter-latin-700-normal.7ddf3c11.woff2",revision:"7ddf3c11"},{url:"/_next/static/media/inter-latin-700-normal.dd56dd48.woff",revision:"dd56dd48"},{url:"/_next/static/media/inter-latin-800-normal.1c3ff413.woff2",revision:"1c3ff413"},{url:"/_next/static/media/inter-latin-800-normal.4ec1c074.woff",revision:"4ec1c074"},{url:"/_next/static/media/inter-latin-ext-400-normal.261aa6d4.woff2",revision:"261aa6d4"},{url:"/_next/static/media/inter-latin-ext-400-normal.97c153a0.woff",revision:"97c153a0"},{url:"/_next/static/media/inter-latin-ext-700-normal.07491ea2.woff2",revision:"07491ea2"},{url:"/_next/static/media/inter-latin-ext-700-normal.94e2d7d5.woff",revision:"94e2d7d5"},{url:"/_next/static/media/inter-latin-ext-800-normal.8bb395b7.woff2",revision:"8bb395b7"},{url:"/_next/static/media/inter-latin-ext-800-normal.94943489.woff",revision:"94943489"},{url:"/_next/static/media/inter-vietnamese-400-normal.668d9df6.woff",revision:"668d9df6"},{url:"/_next/static/media/inter-vietnamese-400-normal.ebde713a.woff2",revision:"ebde713a"},{url:"/_next/static/media/inter-vietnamese-700-normal.00e401a9.woff2",revision:"00e401a9"},{url:"/_next/static/media/inter-vietnamese-700-normal.f538ca8b.woff",revision:"f538ca8b"},{url:"/_next/static/media/inter-vietnamese-800-normal.1925759d.woff2",revision:"1925759d"},{url:"/_next/static/media/inter-vietnamese-800-normal.f2b1a298.woff",revision:"f2b1a298"},{url:"/favicon/browserconfig.xml",revision:"882ec3bbe43efaf87e3e9d7e2eb9cdc2"},{url:"/favicon/favicon-org.ico",revision:"ff4fc7292ce1dd803c91bfe3763ef172"},{url:"/favicon/favicon.ico",revision:"cedaa9e7614d06bad32274bf453e57d7"},{url:"/favicon/favicon.jpg",revision:"4c6106c357ec5701eecb0e98a9d71fbf"},{url:"/favicon/safari-pinned-tab.svg",revision:"378a916e4ac7925c7f20e231b3162392"},{url:"/img/dataism-24-black.svg",revision:"3e43f89f61ac977a22e4b529aa9ff534"},{url:"/img/dataism-24.svg",revision:"cf22b8801a9289aeb3b4ecbcabb063f5"},{url:"/img/github_icon.png",revision:"ec3a60c8c6539a07eb70b52f6737ea6e"},{url:"/img/google_icon.png",revision:"4100c1990034b377da8f7e7ce946bc11"},{url:"/img/img-mock.png",revision:"1de7aa94d10b793f83a49886cc700810"},{url:"/img/jobs.png",revision:"784a706919b46d338d528f7644b5934d"},{url:"/img/logo.jpg",revision:"4c6106c357ec5701eecb0e98a9d71fbf"},{url:"/img/logo_rounded.png",revision:"04148444c916aa0e474772df776689af"},{url:"/img/muhammadfiaz.jpeg",revision:"7cde18389a01fa0943c26b28027b58b7"},{url:"/img/neurolink.png",revision:"117f0d8f76b0e9039a2474da789fde13"},{url:"/img/user.jpg",revision:"9f6de95c7c2717a54608b98ac3b6dc58"},{url:"/img/user2.jpg",revision:"802f160a48ef08e445ed5527df4eba5a"},{url:"/manifest.json",revision:"f2c1eba2e07b990199ba0cab04aced31"},{url:"/portfolio.jpg",revision:"2d6c39c2586bb074d1d0fda3b50c0ed1"},{url:"/robots.txt",revision:"e9b1b9e7f88a5425b0314658a6145b72"},{url:"/sitemap-0.xml",revision:"f4f87de4c63c61b2c0d59921f6500bf1"},{url:"/sitemap.xml",revision:"346b11d63d7ae0741a1fb80f3404c7f0"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:i,event:a,state:t})=>i&&"opaqueredirect"===i.type?new Response(i.body,{status:200,statusText:"OK",headers:i.headers}):i}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const i=e.pathname;return!i.startsWith("/api/auth/")&&!!i.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
