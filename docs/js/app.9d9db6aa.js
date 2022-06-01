(function(){"use strict";var e={5466:function(e,t,n){n.d(t,{$:function(){return o},A3:function(){return r},BO:function(){return a},ib:function(){return i},zV:function(){return s}});const o="__list__",i="__todo__",r="__finish__",s="__trash__",a="__ID__"},8144:function(e,t,n){var o;n.d(t,{w:function(){return o}}),function(e){e[e["Todo"]=0]="Todo",e[e["Finish"]=1]="Finish",e[e["All"]=2]="All",e[e["Flag"]=3]="Flag"}(o||(o={}))},9090:function(e,t,n){n(9101);var o=n(7165),i=(n(6562),n(344)),r=(n(606),n(1643)),s=(n(6871),n(96)),a=(n(7505),n(2594)),l=(n(8778),n(9224)),u=(n(5825),n(176)),c=(n(4536),n(1194)),d=(n(7322),n(6631)),f=(n(2443),n(1876)),m=(n(323),n(1667)),h=(n(4439),n(9608)),v=(n(2460),n(4861)),g=(n(4346),n(1207)),p=n(9242),w=n(3396);function b(e,t){const n=(0,w.up)("router-view");return(0,w.wg)(),(0,w.j4)(n)}var y=n(89);const _={},k=(0,y.Z)(_,[["render",b]]);var C=k,S=n(5431);(0,S.z)("/vue3-memo/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var O=n(678);const T={class:"home"};function F(e,t,n,o,i,r){const s=(0,w.up)("switch-theme"),a=(0,w.up)("grid"),l=(0,w.up)("add-btn"),u=(0,w.up)("create-view"),c=(0,w.up)("router-view");return(0,w.wg)(),(0,w.iD)("div",T,[(0,w.Wm)(s),(0,w.Wm)(a,{onOnClick:e.onClickGirdItem},null,8,["onOnClick"]),(0,w.Wm)(l,{color:"#316af6",onOnClick:e.openCreateView},null,8,["onOnClick"]),(0,w.Wm)(u,{ref:"createRef"},null,512),(0,w.Wm)(c,null,{default:(0,w.w5)((({Component:e})=>[(0,w.Wm)(p.uT,{appear:"",name:"slide"},{default:(0,w.w5)((()=>[((0,w.wg)(),(0,w.j4)((0,w.LL)(e)))])),_:2},1024)])),_:1})])}var Z=n(7742),D=n(4870),j=n(7139),I=n(65),V=n(7627),x=n(8144);const A=["onClick"],N={class:"grid-icon"},W={class:"grid-icon-content"},B={class:"icon svg-icon","aria-hidden":"true"},E=["xlink:href"],J={class:"grid-item-title"},q={class:"grid-count"};var P=(0,w.aZ)({emits:["onClick"],setup(e,{emit:t}){const n=(0,I.oR)(V.J);let o=(0,D.iH)([]);const i=(0,w.Fl)((()=>n.state.todolist)),r=(0,w.Fl)((()=>n.state.finishlist));(0,w.YP)(i,(()=>{a()})),(0,w.YP)(r,(()=>{a()}));const s=()=>{const e=i.value.filter((e=>e.isFavorite)),t=r.value.filter((e=>e.isFavorite));return e.length+t.length},a=()=>{o.value=[{title:"待办",status:x.w.Todo,icon:"icon-todo",count:i.value.length},{title:"已完成",status:x.w.Finish,icon:"icon-done",count:r.value.length},{title:"全部",icon:"icon-all",status:x.w.All,count:i.value.length+r.value.length},{title:"旗标",status:x.w.Flag,icon:"icon-flag",count:s()}]};a();const l=e=>{t("onClick",e)};return(e,t)=>{const n=(0,w.up)("van-grid-item"),i=(0,w.up)("van-grid");return(0,w.wg)(),(0,w.j4)(i,{gutter:10,"column-num":1,clickable:"",class:"grid-wrap"},{default:(0,w.w5)((()=>[((0,w.wg)(!0),(0,w.iD)(w.HY,null,(0,w.Ko)((0,D.SU)(o),(t=>((0,w.wg)(),(0,w.j4)(n,{key:t.icon},{default:(0,w.w5)((()=>[(0,w._)("div",{class:"grid-item",onClick:e=>l(t.status)},[(0,w._)("div",N,[(0,w.WI)(e.$slots,"icon",{},(()=>[(0,w._)("div",W,[((0,w.wg)(),(0,w.iD)("svg",B,[(0,w._)("use",{"xlink:href":`#${t.icon}`},null,8,E)]))])])),(0,w.WI)(e.$slots,"text",{},(()=>[(0,w._)("span",J,(0,j.zw)(t.title),1)]))]),(0,w._)("div",q,(0,j.zw)(t.count),1)],8,A)])),_:2},1024)))),128))])),_:3})}}});const H=P;var z=H;const L={class:"them"},M={"xlink:href":"#icon-sun"},U={"xlink:href":"#icon-moon"};function R(e,t,n,o,i,r){return(0,w.wg)(),(0,w.iD)("div",L,[((0,w.wg)(),(0,w.iD)("svg",{onClick:t[0]||(t[0]=(...e)=>r.toggleThem&&r.toggleThem(...e)),class:"icon svg-icon","aria-hidden":"true"},[(0,w.wy)((0,w._)("use",M,null,512),[[p.F8,"light"===i.theme]]),(0,w.wy)((0,w._)("use",U,null,512),[[p.F8,"dark"===i.theme]])]))])}var Y={data(){return{theme:"light"}},created(){this.toggleThem()},methods:{toggleThem(){"light"===this.theme?(this.theme="dark",window.document.documentElement.setAttribute("data-theme",this.theme)):(this.theme="light",window.document.documentElement.setAttribute("data-theme",this.theme))}}};const $=(0,y.Z)(Y,[["render",R]]);var G=$;const K={class:"search"};function Q(e,t,n,o,i,r){const s=(0,w.up)("van-search");return(0,w.wg)(),(0,w.iD)("div",K,[(0,w.Wm)(s,{modelValue:o.query,"onUpdate:modelValue":t[0]||(t[0]=e=>o.query=e),placeholder:"请输入搜索关键词"},null,8,["modelValue"])])}function X(e,t){const n=(0,D.iH)(e.modelValue);return(0,w.YP)(n,(e=>{t("update:modelValue",e)})),{query:n}}var ee={name:"TopSearch",props:{placeholder:{type:String,default:"请输入"},modelValue:String},emits:["submit","update:modelValue"],setup(e,{emit:t}){const{query:n}=X(e,t),o=()=>{t("submit")};return{query:n,submit:o}}};const te=(0,y.Z)(ee,[["render",Q]]);var ne=te,oe=n(7488),ie=(0,w.aZ)({name:"Home",components:{TopSearch:ne,Grid:z,SwitchTheme:G,AddBtn:Z.Z,CreateView:oe.Z},setup(){const e=(0,D.iH)(""),t=(0,D.iH)(),n=(0,I.oR)(V.J),o=(0,O.tv)(),i=(0,w.Fl)((()=>n.state.todolist)),r=()=>{console.log("submit:")},s=e=>{o.push(`/list?status=${e}`)},a=()=>{t?.value?.show()};return{createRef:t,query:e,submit:r,openCreateView:a,todolist:i,onClickGirdItem:s}}});const re=(0,y.Z)(ie,[["render",F]]);var se=re;const ae=[{path:"/",name:"home",component:se,children:[{path:"/list",name:"ListView",component:()=>n.e(443).then(n.bind(n,1801))}]}],le=(0,O.p7)({history:(0,O.r5)(),routes:ae});var ue=le;const ce=(0,p.ri)(C);ce.use(o.Z).use(i.Z).use(r.Z).use(s.Z).use(a.Z).use(l.Z).use(u.Z).use(c.Z).use(d.Z).use(f.Z).use(m.Z).use(h.Z).use(v.Z).use(g.Z),ce.use(V.h,V.J).use(ue).mount("#app")},7627:function(e,t,n){n.d(t,{J:function(){return r},h:function(){return s}});var o=n(65),i=n(5466);const r=Symbol(),s=(0,o.MT)({state:{list:JSON.parse(localStorage.getItem(i.$)||"[]"),todolist:JSON.parse(localStorage.getItem(i.ib)||"[]"),finishlist:JSON.parse(localStorage.getItem(i.A3)||"[]"),trashlist:JSON.parse(localStorage.getItem(i.zV)||"[]")},mutations:{setList(e,t){e.list=t},setTodolist(e,t){e.todolist=t},setFinishlist(e,t){e.finishlist=t}},actions:{addTodoItem({commit:e,state:t},n){const o=t.todolist.slice();o.push(n),e("setTodolist",o)}}})},7742:function(e,t,n){n.d(t,{Z:function(){return w}});var o=n(3396),i=n(7139),r=n(4870),s=n(678);const a=e=>((0,o.dD)("data-v-999e7950"),e=e(),(0,o.Cn)(),e),l={key:0,class:"btn-icon"},u=a((()=>(0,o._)("svg",{class:"icon svg-icon","aria-hidden":"true"},[(0,o._)("use",{"xlink:href":"#icon-add-flag"})],-1))),c=[u],d={key:1,class:"btn-icon"},f=a((()=>(0,o._)("svg",{class:"icon svg-icon","aria-hidden":"true"},[(0,o._)("use",{"xlink:href":"#icon-add"})],-1))),m=[f],h=a((()=>(0,o._)("div",{class:"btn-text"},"新建事项",-1)));var v=(0,o.aZ)({props:{color:null},emits:["onClick"],setup(e,{emit:t}){const n=(0,s.yj)(),a=()=>{t("onClick")},u=n?.query?.status||"0";return(t,n)=>((0,o.wg)(),(0,o.iD)("div",{class:"btn",style:(0,i.j5)({color:e.color}),onClick:a},["3"===(0,r.SU)(u)?((0,o.wg)(),(0,o.iD)("div",l,c)):((0,o.wg)(),(0,o.iD)("div",d,m)),h],4))}}),g=n(89);const p=(0,g.Z)(v,[["__scopeId","data-v-999e7950"]]);var w=p},7488:function(e,t,n){n.d(t,{Z:function(){return _}});var o=n(3396),i=n(7139);const r={class:"create"},s={class:"create-head"},a={class:"title"},l={class:"create-field"},u={class:"create-favorite"},c=(0,o._)("svg",{class:"icon svg-icon","aria-hidden":"true"},[(0,o._)("use",{"xlink:href":"#icon-flag-hui"})],-1);function d(e,t,n,d,f,m){const h=(0,o.up)("van-field"),v=(0,o.up)("van-cell-group"),g=(0,o.up)("van-switch"),p=(0,o.up)("van-cell"),w=(0,o.up)("van-popup");return(0,o.wg)(),(0,o.j4)(w,{show:d.visible,"onUpdate:show":t[5]||(t[5]=e=>d.visible=e),round:"",position:"bottom",teleport:"#app",style:{height:"90%"}},{default:(0,o.w5)((()=>[(0,o._)("div",r,[(0,o._)("div",s,[(0,o._)("div",{class:"cancel",onClick:t[0]||(t[0]=(...e)=>d.toggleCreateModal&&d.toggleCreateModal(...e))},"取消"),(0,o._)("div",a,(0,i.zw)(n.title),1),(0,o._)("div",{class:(0,i.C_)(["add",d.submitBtnClass]),onClick:t[1]||(t[1]=(...e)=>d.onSubmit&&d.onSubmit(...e))},(0,i.zw)(n.rightBtnText),3)]),(0,o._)("div",l,[(0,o.Wm)(v,{inset:""},{default:(0,o.w5)((()=>[(0,o.Wm)(h,{class:"create-input",modelValue:d.formData.title,"onUpdate:modelValue":t[2]||(t[2]=e=>d.formData.title=e),modelModifiers:{trim:!0},placeholder:"标题"},null,8,["modelValue"]),(0,o.Wm)(h,{class:"create-input",modelValue:d.formData.description,"onUpdate:modelValue":t[3]||(t[3]=e=>d.formData.description=e),modelModifiers:{trim:!0},rows:"5",autosize:"",type:"textarea",placeholder:"备注","show-word-limit":""},null,8,["modelValue"])])),_:1})]),(0,o._)("div",u,[(0,o.Wm)(v,{inset:""},{default:(0,o.w5)((()=>[(0,o.Wm)(p,{center:"",title:"旗标"},{icon:(0,o.w5)((()=>[c])),"right-icon":(0,o.w5)((()=>[(0,o.Wm)(g,{modelValue:d.formData.isFavorite,"onUpdate:modelValue":t[4]||(t[4]=e=>d.formData.isFavorite=e),size:"24"},null,8,["modelValue"])])),_:1})])),_:1})])])])),_:1},8,["show"])}var f=n(4870),m=n(7627),h=n(5466),v=n(65),g=n(678);function p(e){const t=(0,g.yj)(),n=(0,f.iH)({id:0,title:"",description:"",isFavorite:"3"===t.query.status,isFinish:!1,isTrash:!1}),i=(0,f.iH)(""),r=(0,f.iH)(null),s=(0,v.oR)(m.J),a=(0,o.Fl)((()=>s.state.todolist)),l=(0,o.Fl)((()=>s.state.finishlist));(0,o.YP)((()=>n?.value?.title),(e=>{i.value=e?"is-active":""}));const u=()=>{n.value={id:0,title:"",description:"",isFavorite:"3"===t.query.status,isFinish:!1,isTrash:!1}},c=e=>{const t=a.value.slice();return t.unshift(e),localStorage.setItem(h.ib,JSON.stringify(t)),t},d=e=>{const t=a.value.slice(),n=t.findIndex((t=>t.id===e.id));return t[n]=e,localStorage.setItem(h.ib,JSON.stringify(t)),t},p=e=>{const t=l.value.slice(),n=t.findIndex((t=>t.id===e.id));return t[n]=e,localStorage.setItem(h.A3,JSON.stringify(t)),t},w=e=>{let t=localStorage.getItem(h.BO)||"0";t=Number(JSON.parse(t))+1,localStorage.setItem(h.BO,JSON.stringify(t)),e.id=t},b=()=>{const e=n.value,t=""!==e.title;t&&(e.id?_(e):y(e))},y=t=>{w(t),c(t),s.dispatch("addTodoItem",t),u(),e()},_=n=>{const o=()=>{const e=t.query.status,o=n.id;return"0"===e?"todo":"1"===e?"finish":a.value.findIndex((e=>e.id===o))>-1?"todo":l.value.findIndex((e=>e.id===o))>-1&&"finish"};switch(o()){case"todo":s.commit("setTodolist",d(n));break;case"finish":s.commit("setFinishlist",p(n));break;default:break}u(),e()},k=e=>{n.value={...e}};return{formData:n,submitBtnClass:i,onSubmit:b,createRef:r,createData:k}}var w={props:{data:{type:Object},title:{type:String,default:"新建事项"},rightBtnText:{type:String,default:"添加"}},setup(e){const t=(0,f.iH)(!1),n=()=>{t.value=!t.value},i=()=>{t.value=!0},r=()=>{t.value=!1};(0,o.YP)(e,(e=>{u(e.data)}));const{formData:s,submitBtnClass:a,onSubmit:l,createData:u}=p(r);return{formData:s,visible:t,show:i,hidden:r,toggleCreateModal:n,submitBtnClass:a,onSubmit:l}}},b=n(89);const y=(0,b.Z)(w,[["render",d]]);var _=y}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,o,i,r){if(!o){var s=1/0;for(c=0;c<e.length;c++){o=e[c][0],i=e[c][1],r=e[c][2];for(var a=!0,l=0;l<o.length;l++)(!1&r||s>=r)&&Object.keys(n.O).every((function(e){return n.O[e](o[l])}))?o.splice(l--,1):(a=!1,r<s&&(s=r));if(a){e.splice(c--,1);var u=i();void 0!==u&&(t=u)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[o,i,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/about.8ee7e153.js"}}(),function(){n.miniCssF=function(e){return"css/about.3ad9b4f7.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="vue3-todolist:";n.l=function(o,i,r,s){if(e[o])e[o].push(i);else{var a,l;if(void 0!==r)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var d=u[c];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+r){a=d;break}}a||(l=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",t+r),a.src=o),e[o]=[i];var f=function(t,n){a.onerror=a.onload=null,clearTimeout(m);var i=e[o];if(delete e[o],a.parentNode&&a.parentNode.removeChild(a),i&&i.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(f.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=f.bind(null,a.onerror),a.onload=f.bind(null,a.onload),l&&document.head.appendChild(a)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/vue3-memo/"}(),function(){var e=function(e,t,n,o){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var r=function(r){if(i.onerror=i.onload=null,"load"===r.type)n();else{var s=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=s,l.request=a,i.parentNode.removeChild(i),o(l)}};return i.onerror=i.onload=r,i.href=t,document.head.appendChild(i),i},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var i=n[o],r=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(r===e||r===t))return i}var s=document.getElementsByTagName("style");for(o=0;o<s.length;o++){i=s[o],r=i.getAttribute("data-href");if(r===e||r===t)return i}},o=function(o){return new Promise((function(i,r){var s=n.miniCssF(o),a=n.p+s;if(t(s,a))return i();e(o,a,i,r)}))},i={143:0};n.f.miniCss=function(e,t){var n={443:1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=o(e).then((function(){i[e]=0}),(function(t){throw delete i[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,o){var i=n.o(e,t)?e[t]:void 0;if(0!==i)if(i)o.push(i[2]);else{var r=new Promise((function(n,o){i=e[t]=[n,o]}));o.push(i[2]=r);var s=n.p+n.u(t),a=new Error,l=function(o){if(n.o(e,t)&&(i=e[t],0!==i&&(e[t]=void 0),i)){var r=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.src;a.message="Loading chunk "+t+" failed.\n("+r+": "+s+")",a.name="ChunkLoadError",a.type=r,a.request=s,i[1](a)}};n.l(s,l,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var i,r,s=o[0],a=o[1],l=o[2],u=0;if(s.some((function(t){return 0!==e[t]}))){for(i in a)n.o(a,i)&&(n.m[i]=a[i]);if(l)var c=l(n)}for(t&&t(o);u<s.length;u++)r=s[u],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(c)},o=self["webpackChunkvue3_todolist"]=self["webpackChunkvue3_todolist"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(9090)}));o=n.O(o)})();
//# sourceMappingURL=app.9d9db6aa.js.map