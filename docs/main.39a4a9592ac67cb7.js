var e,r,t,a,o,n,l,i,u,f,s,d,p,c,h,m,v,g,b,y={629:(e,r,t)=>{Promise.all([t.e(619),t.e(970)]).then(t.bind(t,834))}},k={};function w(e){var r=k[e];if(void 0!==r)return r.exports;var t=k[e]={exports:{}};return y[e].call(t.exports,t,t.exports,w),t.exports}w.m=y,w.c=k,w.d=(e,r)=>{for(var t in r)w.o(r,t)&&!w.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},w.f={},w.e=e=>Promise.all(Object.keys(w.f).reduce(((r,t)=>(w.f[t](e,r),r)),[])),w.u=e=>e+"."+{316:"0e6c544e4572bac6",445:"dce32d661eba4c0c",591:"4a96c9f72067b9c9",596:"299eeace8decad14",619:"ef50833f68f52845",630:"829d73da1116f11e",784:"7441e57685d5530e",807:"93eefcee8fa5875f",970:"9ff18090bfd692fe"}[e]+".js",w.miniCssF=e=>e+"."+{630:"778b3250d480cbe5",807:"778b3250d480cbe5"}[e]+".css",w.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="platform:",w.l=(t,a,o,n)=>{if(e[t])e[t].push(a);else{var l,i;if(void 0!==o)for(var u=document.getElementsByTagName("script"),f=0;f<u.length;f++){var s=u[f];if(s.getAttribute("src")==t||s.getAttribute("data-webpack")==r+o){l=s;break}}l||(i=!0,(l=document.createElement("script")).type="module",l.charset="utf-8",l.timeout=120,w.nc&&l.setAttribute("nonce",w.nc),l.setAttribute("data-webpack",r+o),l.src=t),e[t]=[a];var d=(r,a)=>{l.onerror=l.onload=null,clearTimeout(p);var o=e[t];if(delete e[t],l.parentNode&&l.parentNode.removeChild(l),o&&o.forEach((e=>e(a))),r)return r(a)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=d.bind(null,l.onerror),l.onload=d.bind(null,l.onload),i&&document.head.appendChild(l)}},w.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{w.S={};var e={},r={};w.I=(t,a)=>{a||(a=[]);var o=r[t];if(o||(o=r[t]={}),!(a.indexOf(o)>=0)){if(a.push(o),e[t])return e[t];w.o(w.S,t)||(w.S[t]={});var n=w.S[t],l="platform",i=(e,r,t,a)=>{var o=n[e]=n[e]||{},i=o[r];(!i||!i.loaded&&(!a!=!i.eager?a:l>i.from))&&(o[r]={get:t,from:l,eager:!!a})},u=[];return"default"===t&&(i("@bamur/core","0.0.0",(()=>Promise.all([w.e(619),w.e(596),w.e(807)]).then((()=>()=>w(630))))),i("react-dom","18.2.0",(()=>Promise.all([w.e(316),w.e(619)]).then((()=>()=>w(316))))),i("react-responsive-carousel","3.2.23",(()=>Promise.all([w.e(445),w.e(619)]).then((()=>()=>w(445))))),i("react-router-dom","6.11.2",(()=>Promise.all([w.e(591),w.e(619)]).then((()=>()=>w(591))))),i("react","18.2.0",(()=>w.e(784).then((()=>()=>w(784)))))),e[t]=u.length?Promise.all(u).then((()=>e[t]=1)):1}}})(),(()=>{var e;if("string"==typeof import.meta.url&&(e=import.meta.url),!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),w.p=e})(),t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),a=t[1]?r(t[1]):[];return t[2]&&(a.length++,a.push.apply(a,r(t[2]))),t[3]&&(a.push([]),a.push.apply(a,r(t[3]))),a},a=(e,r)=>{e=t(e),r=t(r);for(var a=0;;){if(a>=e.length)return a<r.length&&"u"!=(typeof r[a])[0];var o=e[a],n=(typeof o)[0];if(a>=r.length)return"u"==n;var l=r[a],i=(typeof l)[0];if(n!=i)return"o"==n&&"n"==i||"s"==i||"u"==n;if("o"!=n&&"u"!=n&&o!=l)return o<l;a++}},o=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var a=1,n=1;n<e.length;n++)a--,t+="u"==(typeof(i=e[n]))[0]?"-":(a>0?".":"")+(a=2,i);return t}var l=[];for(n=1;n<e.length;n++){var i=e[n];l.push(0===i?"not("+u()+")":1===i?"("+u()+" || "+u()+")":2===i?l.pop()+" "+l.pop():o(i))}return u();function u(){return l.pop().replace(/^\((.+)\)$/,"$1")}},n=(e,r)=>{if(0 in e){r=t(r);var a=e[0],o=a<0;o&&(a=-a-1);for(var l=0,i=1,u=!0;;i++,l++){var f,s,d=i<e.length?(typeof e[i])[0]:"";if(l>=r.length||"o"==(s=(typeof(f=r[l]))[0]))return!u||("u"==d?i>a&&!o:""==d!=o);if("u"==s){if(!u||"u"!=d)return!1}else if(u)if(d==s)if(i<=a){if(f!=e[i])return!1}else{if(o?f>e[i]:f<e[i])return!1;f!=e[i]&&(u=!1)}else if("s"!=d&&"n"!=d){if(o||i<=a)return!1;u=!1,i--}else{if(i<=a||s<d!=o)return!1;u=!1}else"s"!=d&&"n"!=d&&(u=!1,i--)}}var p=[],c=p.pop.bind(p);for(l=1;l<e.length;l++){var h=e[l];p.push(1==h?c()|c():2==h?c()&c():h?n(h,r):!c())}return!!c()},l=(e,r)=>{var t=e[r];return(r=Object.keys(t).reduce(((e,r)=>!e||a(e,r)?r:e),0))&&t[r]},i=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&a(e,r)?r:e),0)},u=(e,r,t,a)=>"Unsatisfied version "+t+" from "+(t&&e[r][t].from)+" of shared singleton module "+r+" (required "+o(a)+")",f=(e,r,t,a)=>{var o=i(e,t);if(!n(a,o))throw new Error(u(e,t,o,a));return s(e[t][o])},s=e=>(e.loaded=1,e.get()),p=(d=e=>function(r,t,a,o){var n=w.I(r);return n&&n.then?n.then(e.bind(e,r,w.S[r],t,a,o)):e(r,w.S[r],t,a,o)})(((e,r,t,a)=>r&&w.o(r,t)?s(l(r,t)):a())),c=d(((e,r,t,a,o)=>r&&w.o(r,t)?f(r,0,t,a):o())),h={},m={619:()=>c("default","react",[4,18,2,0],(()=>w.e(784).then((()=>()=>w(784))))),135:()=>c("default","react-dom",[4,18,2,0],(()=>w.e(316).then((()=>()=>w(316))))),136:()=>p("default","@bamur/core",(()=>Promise.all([w.e(596),w.e(630)]).then((()=>()=>w(630))))),607:()=>c("default","react-router-dom",[4,6,11,2],(()=>w.e(591).then((()=>()=>w(591))))),596:()=>c("default","react-responsive-carousel",[1,3,2,23],(()=>w.e(445).then((()=>()=>w(445)))))},v={596:[596],619:[619],970:[135,136,607]},w.f.consumes=(e,r)=>{w.o(v,e)&&v[e].forEach((e=>{if(w.o(h,e))return r.push(h[e]);var t=r=>{h[e]=0,w.m[e]=t=>{delete w.c[e],t.exports=r()}},a=r=>{delete h[e],w.m[e]=t=>{throw delete w.c[e],r}};try{var o=m[e]();o.then?r.push(h[e]=o.then(t).catch(a)):t(o)}catch(e){a(e)}}))},g=e=>new Promise(((r,t)=>{var a=w.miniCssF(e),o=w.p+a;if(((e,r)=>{for(var t=document.getElementsByTagName("link"),a=0;a<t.length;a++){var o=(l=t[a]).getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(o===e||o===r))return l}var n=document.getElementsByTagName("style");for(a=0;a<n.length;a++){var l;if((o=(l=n[a]).getAttribute("data-href"))===e||o===r)return l}})(a,o))return r();((e,r,t,a)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=n=>{if(o.onerror=o.onload=null,"load"===n.type)t();else{var l=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.href||r,u=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=l,u.request=i,o.parentNode.removeChild(o),a(u)}},o.href=r,document.head.appendChild(o)})(e,o,r,t)})),b={179:0},w.f.miniCss=(e,r)=>{b[e]?r.push(b[e]):0!==b[e]&&{630:1,807:1}[e]&&r.push(b[e]=g(e).then((()=>{b[e]=0}),(r=>{throw delete b[e],r})))},(()=>{var e={179:0};w.f.j=(r,t)=>{var a=w.o(e,r)?e[r]:void 0;if(0!==a)if(a)t.push(a[2]);else if(/^(596|619)$/.test(r))e[r]=0;else{var o=new Promise(((t,o)=>a=e[r]=[t,o]));t.push(a[2]=o);var n=w.p+w.u(r),l=new Error;w.l(n,(t=>{if(w.o(e,r)&&(0!==(a=e[r])&&(e[r]=void 0),a)){var o=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;l.message="Loading chunk "+r+" failed.\n("+o+": "+n+")",l.name="ChunkLoadError",l.type=o,l.request=n,a[1](l)}}),"chunk-"+r,r)}};var r=(r,t)=>{var a,o,[n,l,i]=t,u=0;if(n.some((r=>0!==e[r]))){for(a in l)w.o(l,a)&&(w.m[a]=l[a]);i&&i(w)}for(r&&r(t);u<n.length;u++)o=n[u],w.o(e,o)&&e[o]&&e[o][0](),e[o]=0},t=self.webpackChunkplatform=self.webpackChunkplatform||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),w(629);