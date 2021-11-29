(()=>{"use strict";var e={3330:(e,t,a)=>{a(7280),a(5363),a(71);var r=a(8880),o=a(9592),n=a(3673);function s(e,t,a,r,o,s){const i=(0,n.up)("router-view");return(0,n.wg)(),(0,n.j4)(i)}const i=(0,n.aZ)({name:"App"});i.render=s;const c=i;var p=a(6465),u=a(7083),l=a(9582);const d=[{path:"/home",name:"home",component:()=>Promise.all([a.e(736),a.e(401)]).then(a.bind(a,9401)),children:[{path:"",name:"home-homepage",component:()=>Promise.all([a.e(736),a.e(80)]).then(a.bind(a,6080))},{path:"sign-in",name:"home-sign-in",component:()=>Promise.all([a.e(736),a.e(146)]).then(a.bind(a,3146))},{path:"sign-up",name:"home-sign-up",component:()=>Promise.all([a.e(736),a.e(146)]).then(a.bind(a,3146))},{path:"store",name:"home-store",component:()=>Promise.all([a.e(736),a.e(95)]).then(a.bind(a,8095)),children:[{path:"list",name:"home-store-list",component:()=>Promise.all([a.e(736),a.e(64),a.e(967)]).then(a.bind(a,6545))},{path:"search",name:"home-store-search",component:()=>Promise.all([a.e(736),a.e(968)]).then(a.bind(a,1968))}]},{path:"browse/:book_id",name:"home-browse-book",component:()=>Promise.all([a.e(736),a.e(64),a.e(301)]).then(a.bind(a,6215))},{path:"verify_email",name:"home-verify-email",component:()=>Promise.all([a.e(736),a.e(927)]).then(a.bind(a,7927))}]}],m=d,h=[{path:"/app",name:"app",component:()=>Promise.all([a.e(736),a.e(64),a.e(568)]).then(a.bind(a,541)),meta:{requiresAuth:!0},children:[{path:"read",name:"app-read",component:()=>Promise.all([a.e(736),a.e(64),a.e(714)]).then(a.bind(a,4398))},{path:"write",name:"app-write",component:()=>Promise.all([a.e(736),a.e(64),a.e(701)]).then(a.bind(a,1391))},{path:"add-manuscript",name:"app-add-manuscript",component:()=>Promise.all([a.e(736),a.e(64),a.e(871)]).then(a.bind(a,4111))},{path:"store",name:"app-store",component:()=>Promise.all([a.e(736),a.e(95)]).then(a.bind(a,8095)),children:[{path:"list",name:"app-store-list",component:()=>Promise.all([a.e(736),a.e(64),a.e(967)]).then(a.bind(a,6545))},{path:"search",name:"app-store-search",component:()=>Promise.all([a.e(736),a.e(968)]).then(a.bind(a,1968))}]},{path:"browse/:book_id",name:"app-browse-book",component:()=>Promise.all([a.e(736),a.e(64),a.e(301)]).then(a.bind(a,6215))},{path:"purchase/:book_id",name:"app-purchase-book",component:()=>Promise.all([a.e(736),a.e(513)]).then(a.bind(a,4513))},{path:"profile",name:"app-profile",component:()=>Promise.all([a.e(736),a.e(64),a.e(215)]).then(a.bind(a,4516))},{path:"change-password",name:"app-change-password",component:()=>Promise.all([a.e(736),a.e(937)]).then(a.bind(a,5937))}]}],f=h,b=[{path:"/read",name:"read-book",component:()=>Promise.all([a.e(736),a.e(64),a.e(259)]).then(a.bind(a,7338))}],g=b,y=[{path:"/write",name:"write",component:()=>Promise.all([a.e(736),a.e(64),a.e(231)]).then(a.bind(a,9014)),children:[{path:"manuscript/:manuscript_id/details",name:"write-detail",component:()=>Promise.all([a.e(736),a.e(64),a.e(301)]).then(a.bind(a,6215)),meta:{requiresAuth:!0}},{path:"manuscript/:manuscript_id/config",name:"write-config",component:()=>Promise.all([a.e(736),a.e(776)]).then(a.bind(a,2776)),meta:{requiresAuth:!0}},{path:"manuscript/:manuscript_id/overview",name:"write-overview",component:()=>Promise.all([a.e(736),a.e(64),a.e(610)]).then(a.bind(a,5494)),meta:{requiresAuth:!0}},{path:"manuscript/:manuscript_id/characters",name:"write-character",component:()=>Promise.all([a.e(736),a.e(405)]).then(a.bind(a,4405)),meta:{requiresAuth:!0}},{path:"editor",name:"write-editor",component:()=>Promise.all([a.e(736),a.e(64),a.e(760)]).then(a.bind(a,8287))}]}],v=y,w=[{path:"/",name:"base",title:"BookKay",component:()=>a.e(323).then(a.bind(a,9323)),children:[{path:"",component:()=>Promise.all([a.e(736),a.e(494)]).then(a.bind(a,2494))}]},{path:"/:pathMatch(.*)*",name:"not-found",component:()=>Promise.all([a.e(736),a.e(339)]).then(a.bind(a,7339))},{path:"/:pathMatch(.*)",name:"bad-not-found",component:()=>Promise.all([a.e(736),a.e(339)]).then(a.bind(a,7339))}],k=w.concat(m,f,g,v),P=k;var _=a(2471),Z=a(589);let A=null;const T=(0,u.BC)((function(){const e=l.PO,t=(0,l.p7)({scrollBehavior:()=>({left:0,top:0}),routes:P,history:e("/")});return t.beforeEach(((e,t,a)=>{e.matched.some((e=>e.meta.requiresAuth))?_.Z.get("refreshToken")&&Z.Z.getItem("user")?a():a({name:"home-sign-in",query:{redirect:e.fullPath}}):a()})),A=t,t}));async function x(e,t){const r="function"===typeof p["default"]?await(0,p["default"])({}):p["default"],{storeKey:n}=await Promise.resolve().then(a.bind(a,6465)),s="function"===typeof T?await T({store:r}):T;r.$router=s;const i=e(c);return i.use(o.Z,t),{app:i,store:r,storeKey:n,router:s}}var C=a(4434),M=a(8416),O=a(7153);const j={config:{},plugins:{Notify:C.Z,Cookies:_.Z,AppFullscreen:M.Z,LocalStorage:Z.Z,SessionStorage:O.Z}},S="/";async function q({app:e,router:t,store:a,storeKey:r},o){let n=!1;const s=e=>{n=!0;const a=Object(e)===e?t.resolve(e).fullPath:e;window.location.href=a},i=window.location.href.replace(window.location.origin,"");for(let p=0;!1===n&&p<o.length;p++)try{await o[p]({app:e,router:t,store:a,ssrContext:null,redirect:s,urlPath:i,publicPath:S})}catch(c){return c&&c.url?void(window.location.href=c.url):void console.error("[Quasar] boot error:",c)}!0!==n&&(e.use(t),e.use(a,r),e.mount("#q-app"))}x(r.ri,j).then((e=>Promise.all([Promise.resolve().then(a.bind(a,4112)),Promise.resolve().then(a.bind(a,5474))]).then((t=>{const a=t.map((e=>e.default)).filter((e=>"function"===typeof e));q(e,a)}))))},5474:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p,api:()=>c});var r=a(7083),o=a(52),n=a.n(o),s=a(2471);a(589),a(4434);let i="";i=" https://bookkay-backend.herokuapp.com/api/v1.0/";const c=n().create({baseURL:i}),p=(0,r.xr)((({app:e,router:t})=>{e.config.globalProperties.$axios=n(),e.config.globalProperties.$api=c,c.interceptors.request.use((e=>e)),c.interceptors.response.use((e=>e),(function(e){const a=e.config;return console.log("error request",a),console.log("error",e),console.log("error response",e.response),401===e.response.status&&"token/refresh"==a.url?(e.response.data.message="Please login again",t.push({name:"home-sign-in"}),Promise.reject(e)):401!==e.response.status||a._retry?Promise.reject(e):(a._retry=!0,c.post("token/refresh",{refresh:s.Z.get("refreshToken")}).then((e=>{if(200===e.status){const t=e.data.access;return s.Z.set("accessToken",t,{expires:"60d"}),c.defaults.headers.common["Authorization"]=`Bearer ${t}`,a.headers["Authorization"]=`Bearer ${t}`,c(a)}})))}))}))},4112:(e,t,a)=>{a.r(t),a.d(t,{default:()=>c,i18n:()=>i});var r=a(7083),o=a(5948);const n={failed:"Action failed",success:"Action was successful"},s={"en-US":n},i=(0,o.o)({locale:"en-US",messages:s}),c=(0,r.xr)((({app:e})=>{e.use(i)}))},6465:(e,t,a)=>{a.r(t),a.d(t,{default:()=>ue});var r={};a.r(r),a.d(r,{someGetter:()=>f});var o={};a.r(o),a.d(o,{someMutation:()=>b});var n={};a.r(n),a.d(n,{someAction:()=>g});var s={};a.r(s),a.d(s,{authStatus:()=>A,isLoggedIn:()=>Z,someGetter:()=>_,userProperty:()=>T});var i={};a.r(i),a.d(i,{auth_error:()=>S,auth_request:()=>O,auth_success:()=>j,logout:()=>B,setUser:()=>q,someMutation:()=>M});var c={};a.r(c),a.d(c,{deleteUser:()=>z,edit:()=>N,fetchUser:()=>F,login:()=>$,logout:()=>L,register:()=>U});var p={};a.r(p),a.d(p,{getConfigs:()=>H,isLoading:()=>D,manuscriptProperty:()=>Q,someGetter:()=>G});var u={};a.r(u),a.d(u,{edit:()=>W,setManuscript:()=>R,updateManuscript:()=>J,updatePrototype:()=>V});var l={};a.r(l),a.d(l,{addComponent:()=>Y,addManuscript:()=>oe,deleteComponent:()=>ae,editComponent:()=>te,editConfigs:()=>re,editManuscript:()=>ne,editPrototype:()=>se,getChapter:()=>ee,publishBook:()=>ce,someAction:()=>X,uploadMedia:()=>ie});var d=a(7083),m=a(7874);function h(){return{}}function f(){}function b(){}function g(){}const y={namespaced:!0,getters:r,mutations:o,actions:n,state:h};var v=a(7153),w=a(589),k=a(2471);function P(){return{status:"",refreshToken:k.Z.get("refreshToken"),accessToken:k.Z.get("accessToken"),user:w.Z.getItem("user")}}function _(){}function Z(e){return!!e.refreshToken&&!!e.user}function A(e){return e.status}const T=e=>t=>t in e.user?e.user[t]:"";var x=a(515),C=a.n(x);function M(){}function O(e){e.status="loading"}function j(e,t){e.status="success",e.accessToken=t["accessToken"],e.refreshToken=t["refreshToken"],e.user=t["user"]}function S(e){e.status="error"}function q(e,t){if(t){let r=t,o=r.books_authored;for(var a=0;a<o.length;a++){let e=o[a];e.author={},e.author.author_name=t.author_name}e.user=C()(C()({},e.user),r)}}function B(e){e.status="",e.user="",e.accessToken="",e.refreshToken=""}var E=a(5474);async function $({commit:e},t){let a,r;a=await E.api.post("users/login",t);let o=a.data;r={user:o},a=await E.api.post("token",t);let n=a.data.access,s=a.data.refresh;return r.accessToken=n,r.refreshToken=s,k.Z.set("accessToken",n,{expires:"60d",path:"/"}),k.Z.set("refreshToken",s,{expires:"60d",path:"/"}),w.Z.set("user",o),E.api.defaults.headers.common.Authorization=`Bearer ${n}`,e("auth_success",r),a}async function U({commit:e},t){let a,r;a=await E.api.post("users",t),r={user:a.data};let o=a.data;a=await E.api.post("token",t);let n=a.data.access,s=a.data.refresh;return r.accessToken=n,r.refreshToken=s,k.Z.set("accessToken",n,{expires:"60d",path:"/"}),k.Z.set("refreshToken",s,{expires:"60d",path:"/"}),w.Z.set("user",o),E.api.defaults.headers.common.Authorization=`Bearer ${n}`,e("auth_success",r),a}async function L({commit:e},t){let a,r=t["id"];a=await E.api.post(`users/${r}/logout`),e("logout");for(const o in k.Z.getAll())k.Z.remove(o);for(const o in w.Z.getAll())w.Z.remove(o);for(const o in v.Z.getAll())v.Z.remove(o);return delete E.api.defaults.headers.common.Authorization,""}async function N({commit:e,state:t},a){let r;r=await E.api.patch("users/"+t.user.id,a,{params:{expand:"~all"}}),a=r.data,w.Z.set("user",a),e("setUser",a)}function z({commit:e,state:t},a){return new Promise(((r,o)=>{E.api["delete"]("users/"+t.user.id,a).then((t=>{e("logout");for(const e in k.Z.getAll())k.Z.remove(e);for(const e in w.Z.getAll())w.Z.remove(e);for(const e in v.Z.getAll())v.Z.remove(e);delete E.api.defaults.headers.common.Authorization,r(t)})).catch((e=>{o(e)}))}))}async function F({commit:e,state:t}){let a=await E.api.get("users/"+t.user.id,{params:{expand:"~all"}}),r=a.data;w.Z.set("user",r),e("setUser",r)}const I={namespaced:!0,getters:s,mutations:i,actions:c,state:P};function K(){return{loading:!1,manuscript:v.Z.getItem("currentManuscript")}}function G(){}function D(e){return e.loading}function H(e){let t=[];const a=Object.keys(e.manuscript.configs);for(var r=0;r<a.length;r++){let o=a[r];1==e.manuscript.configs[o]&&t.push(o)}return t}const Q=e=>t=>{if(e.manuscript)return t in e.manuscript?e.manuscript[t]:""};function R(e,t){t&&(e.manuscript=t)}function J(e,t){if(t)for(const a in t)e.manuscript[a]=t[a]}function V(e,t){if(t)for(const a in t)`prototype_${a}`in e.manuscript?e.manuscript[`prototype_${a}`]=t[a]:e.manuscript[a]=t[a]}const W=(e,t)=>{t&&(e.user=t)};a(71);function X(){}async function Y({commit:e,state:t},a){let r;const o=a.component,n=a.type;a.isBook;let s="";switch(n){case"Front Matter":s="front-matters";break;case"Chapter":s="chapters";break;case"Back Matter":s="back-matters";break;default:s=n}r=await E.api.post(s,o),r=await E.api.get("default-book-prototypes/"+t.manuscript.prototype_id,{params:{expand:"~all"}});let i=r.data;return e("updatePrototype",i),v.Z.set("currentManuscript",t.manuscript),r}async function ee({commit:e,state:t},a){const r=a.type,o=a.id;let n,s=r.replaceAll("_","-")+"s/"+o;t.loading=!0,n=await E.api.get(s),n=await E.api.get("default-book-prototypes/"+t.manuscript.prototype_id,{params:{expand:"~all"}}),t.loading=!1;let i=n.data;return e("updatePrototype",i),v.Z.set("currentManuscript",t.manuscript),n}async function te({commit:e,state:t},a){const r=a.component,o=a.type,n=a.id;let s,i=o.replaceAll("_","-")+"s/"+n;s=await E.api.patch(i,r),s=await E.api.get("default-book-prototypes/"+t.manuscript.prototype_id,{params:{expand:"~all"}}),t.loading=!1;let c=s.data;return e("updatePrototype",c),v.Z.set("currentManuscript",t.manuscript),s}async function ae({commit:e,state:t},a){const r=a.type,o=a.id;let n,s=r+"s/"+o;n=await E.api["delete"](s),n=await E.api.get("default-book-prototypes/"+t.manuscript.prototype_id,{params:{expand:"~all"}});let i=n.data;return e("updatePrototype",i),v.Z.set("currentManuscript",t.manuscript),n}async function re({commit:e,state:t},a){let r,o=t.manuscript.configs.id;r=await E.api.patch("default-book-prototypes-configs/"+o,a),r=await E.api.get("default-book-prototypes/"+t.manuscript.prototype_id,{params:{expand:"~all"}});let n=r.data;return e("updatePrototype",n),v.Z.set("currentManuscript",t.manuscript),r}async function oe({commit:e,rootGetters:t},a){let r,o;r=await E.api.post("manuscripts",a);let n=r;o={manuscript_id:r.data.id,configs:a.configs},r=await E.api.post("default-book-prototypes",o);let s=r.data.component_owner_id;for(const c of a.front_matters)c.component_owner_id=s,await E.api.post("front-matters",c);for(const c of a.chapters)c.component_owner_id=s,await E.api.post("chapters",c);for(const c of a.back_matters)c.component_owner_id=s,await E.api.post("back-matters",c);r=await E.api.get("users/"+t["user/userProperty"]("id"),{params:{expand:"~all"}});let i=r.data;return e("user/setUser",i,{root:!0}),w.Z.set("user",i),n}async function ne({commit:e,state:t},a){let r;r=await E.api.patch("manuscripts/"+t.manuscript.id,a),r=await E.api.get("manuscripts/"+t.manuscript.id,{params:{expand:"~all"}});let o=r.data;return e("updateManuscript",o),v.Z.set("currentManuscript",t.manuscript),r}async function se({commit:e,state:t},a){let r,o=a["prototype"],n=a["manuscript_id"];r=await E.api.get("manuscripts/"+n,{params:{fields:"prototype_id"}});let s=r.data.prototype_id;return r=await E.api.patch("default-book-prototypes/"+s,o),r}function ie({commit:e,state:t},a){return t.loading=!0,new Promise(((e,r)=>{E.api.post("upload",a,{headers:{"Content-Type":"multipart/form-data"}}).then((a=>{t.loading=!1,e(a)})).catch((e=>{t.loading=!1,r(e)}))}))}async function ce({commit:e,state:t}){let a;a=await E.api.post(`manuscripts/${t.manuscript.id}/publish`),a=await E.api.get(`users/${w.Z.getItem("user").id}`,{params:{expand:"~all"}});let r=a.data;return e("users/setUser",r,{root:!0}),w.Z.set("user",r),a}const pe={namespaced:!0,getters:p,mutations:u,actions:l,state:K},ue=(0,d.h)((function(){const e=(0,m.MT)({modules:{example:y,user:I,write:pe},strict:!1});return e}))}},t={};function a(r){var o=t[r];if(void 0!==o)return o.exports;var n=t[r]={exports:{}};return e[r].call(n.exports,n,n.exports,a),n.exports}a.m=e,(()=>{var e=[];a.O=(t,r,o,n)=>{if(!r){var s=1/0;for(u=0;u<e.length;u++){for(var[r,o,n]=e[u],i=!0,c=0;c<r.length;c++)(!1&n||s>=n)&&Object.keys(a.O).every((e=>a.O[e](r[c])))?r.splice(c--,1):(i=!1,n<s&&(s=n));if(i){e.splice(u--,1);var p=o();void 0!==p&&(t=p)}}return t}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[r,o,n]}})(),(()=>{a.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return a.d(t,{a:t}),t}})(),(()=>{a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}})(),(()=>{a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((t,r)=>(a.f[r](e,t),t)),[]))})(),(()=>{a.u=e=>"js/"+(64===e?"chunk-common":e)+"."+{64:"6a3af77a",80:"21ab2cd3",95:"88ce3461",146:"afaf039d",215:"4ffe5bb3",231:"269531ab",259:"86a9359e",301:"92d083e1",323:"f23d1fd8",339:"4cb2289b",401:"6d7267f0",405:"7074fcae",494:"f3c4d49a",513:"2298be28",568:"b523febd",610:"9921dbe6",701:"139955a8",714:"35df9ce0",760:"ae891762",776:"d5fd5ffb",871:"e5933c64",927:"a52ddd3f",937:"5bc9005e",967:"8111b18e",968:"4e7ed4be"}[e]+".js"})(),(()=>{a.miniCssF=e=>"css/"+({143:"app",736:"vendor"}[e]||e)+"."+{80:"7e9d123f",95:"a8feb396",143:"4118757f",146:"29fd34db",215:"24f83e37",231:"1f7a2f79",259:"770ffa0c",301:"12f651ca",339:"befc69fc",405:"d30a8cf3",513:"dd2d32cf",568:"f18ff4db",610:"6dcfbc41",701:"48259781",714:"04093edb",736:"b91b1aa6",760:"72e1cd45",871:"ed1672ba",927:"2d4a6cd0",967:"1f5da09f",968:"9ed12925"}[e]+".css"})(),(()=>{a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="bookkay:";a.l=(r,o,n,s)=>{if(e[r])e[r].push(o);else{var i,c;if(void 0!==n)for(var p=document.getElementsByTagName("script"),u=0;u<p.length;u++){var l=p[u];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==t+n){i=l;break}}i||(c=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,a.nc&&i.setAttribute("nonce",a.nc),i.setAttribute("data-webpack",t+n),i.src=r),e[r]=[o];var d=(t,a)=>{i.onerror=i.onload=null,clearTimeout(m);var o=e[r];if(delete e[r],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(a))),t)return t(a)},m=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),c&&document.head.appendChild(i)}}})(),(()=>{a.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{a.p="/"})(),(()=>{var e=(e,t,a,r)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var n=n=>{if(o.onerror=o.onload=null,"load"===n.type)a();else{var s=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=s,c.request=i,o.parentNode.removeChild(o),r(c)}};return o.onerror=o.onload=n,o.href=t,document.head.appendChild(o),o},t=(e,t)=>{for(var a=document.getElementsByTagName("link"),r=0;r<a.length;r++){var o=a[r],n=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(n===e||n===t))return o}var s=document.getElementsByTagName("style");for(r=0;r<s.length;r++){o=s[r],n=o.getAttribute("data-href");if(n===e||n===t)return o}},r=r=>new Promise(((o,n)=>{var s=a.miniCssF(r),i=a.p+s;if(t(s,i))return o();e(r,i,o,n)})),o={143:0};a.f.miniCss=(e,t)=>{var a={80:1,95:1,146:1,215:1,231:1,259:1,301:1,339:1,405:1,513:1,568:1,610:1,701:1,714:1,760:1,871:1,927:1,967:1,968:1};o[e]?t.push(o[e]):0!==o[e]&&a[e]&&t.push(o[e]=r(e).then((()=>{o[e]=0}),(t=>{throw delete o[e],t})))}})(),(()=>{var e={143:0};a.f.j=(t,r)=>{var o=a.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var n=new Promise(((a,r)=>o=e[t]=[a,r]));r.push(o[2]=n);var s=a.p+a.u(t),i=new Error,c=r=>{if(a.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var n=r&&("load"===r.type?"missing":r.type),s=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+n+": "+s+")",i.name="ChunkLoadError",i.type=n,i.request=s,o[1](i)}};a.l(s,c,"chunk-"+t,t)}},a.O.j=t=>0===e[t];var t=(t,r)=>{var o,n,[s,i,c]=r,p=0;if(s.some((t=>0!==e[t]))){for(o in i)a.o(i,o)&&(a.m[o]=i[o]);if(c)var u=c(a)}for(t&&t(r);p<s.length;p++)n=s[p],a.o(e,n)&&e[n]&&e[n][0](),e[s[p]]=0;return a.O(u)},r=self["webpackChunkbookkay"]=self["webpackChunkbookkay"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var r=a.O(void 0,[736],(()=>a(3330)));r=a.O(r)})();