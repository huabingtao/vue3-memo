"use strict";(self["webpackChunkvue3_todolist"]=self["webpackChunkvue3_todolist"]||[]).push([[443],{1981:function(i,t,e){e.r(t),e.d(t,{default:function(){return x}});var l=e(3396),s=e(4870),o=e(7736),a=e(7139),n=e(9242);const c={class:"list"},r={class:"list-content"},u={class:"check-box"},d=(0,l._)("svg",{class:"icon svg-icon","aria-hidden":"true"},[(0,l._)("use",{"xlink:href":"#icon-flag"})],-1);var v=(0,l.aZ)({props:{data:null,title:null,color:null},emits:["onToggleFinish","onViewDetail","onToggleFavorite","onDeleteMatter"],setup(i,{emit:t}){(0,s.iH)([]);const e=(i,e)=>{t("onToggleFinish",i,e)},o=i=>{t("onViewDetail",i)},v=i=>{t("onToggleFavorite",i)},g=i=>{t("onDeleteMatter",i)};return(t,s)=>{const m=(0,l.up)("van-cell"),f=(0,l.up)("van-button"),h=(0,l.up)("van-swipe-cell"),F=(0,l.up)("van-checkbox-group"),p=(0,l.up)("van-empty");return(0,l.wg)(),(0,l.iD)("div",c,[(0,l._)("div",{class:"list-title",style:(0,a.j5)({color:i.color})},(0,a.zw)(i.title),5),(0,l._)("div",r,[(0,l.Wm)(F,null,{default:(0,l.w5)((()=>[(0,l.Wm)(n.W3,{name:"list",tag:"div"},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(i.data,((i,t)=>((0,l.wg)(),(0,l.j4)(h,{key:i.id,class:"list-item"},{right:(0,l.w5)((()=>[(0,l.Wm)(f,{onClick:t=>o(i),class:"btn btn-detail",square:"",type:"primary",text:"详细信息"},null,8,["onClick"]),(0,l.Wm)(f,{onClick:t=>v(i.id),class:"btn btn-favorite",square:"",type:"primary",text:i.isFavorite?"取消旗标":"旗标"},null,8,["onClick","text"]),(0,l.Wm)(f,{onClick:t=>g(i.id),class:"btn btn-delete",square:"",type:"danger",text:"删除"},null,8,["onClick"])])),default:(0,l.w5)((()=>[(0,l.Wm)(m,{onClick:l=>e(i,t)},(0,l.Nv)({title:(0,l.w5)((()=>[(0,l._)("div",u,[(0,l._)("span",{class:(0,a.C_)(["checkbox-icon",i.isFinish?"is-active":""])},null,2),(0,l._)("span",null,(0,a.zw)(i.title),1)])])),_:2},[i.isFavorite?{name:"right-icon",fn:(0,l.w5)((()=>[d]))}:void 0]),1032,["onClick"])])),_:2},1024)))),128))])),_:1})])),_:1}),i.data.length?(0,l.kq)("",!0):((0,l.wg)(),(0,l.j4)(p,{key:0,description:"暂无事项"}))])])}}});const g=v;var m=g,f=e(3369),h=e(7627),F=e(65),p=e(678),w=e(8144),S=e(5466);const k={class:"detail-container"};var y=(0,l.aZ)({setup(i){const t=(0,F.oR)(h.J),e=(0,s.iH)(null),a=(0,p.yj)();let n=(0,s.iH)([]),c=(0,s.iH)(""),r=(0,s.iH)(""),u=(0,s.iH)(""),d=(0,s.iH)(!1),v=(0,s.iH)("");const g=(0,s.iH)(null),y=Number(a.query?.status),b=(0,l.Fl)((()=>t.state.todolist)),x=(0,l.Fl)((()=>t.state.finishlist));(0,l.YP)([b,x],(()=>{T()}));const I=(i,e)=>{if(y===w.w.Todo){const l=b.value.slice();l.splice(e,1),localStorage.setItem(S.ib,JSON.stringify(l)),i.isFinish=!0,localStorage.setItem(S.A3,JSON.stringify([...x.value,i])),t.commit("setTodolist",l),t.commit("setFinishlist",[...x.value,i])}if(y===w.w.Finish){const l=x.value.slice();l.splice(e,1),i.isFinish=!1;const s=[i,...b.value];localStorage.setItem(S.A3,JSON.stringify(l)),localStorage.setItem(S.ib,JSON.stringify(s)),t.commit("setTodolist",s),t.commit("setFinishlist",l)}if(y===w.w.All||y===w.w.Flag){const{isFinish:e,id:l}=i,s=b.value.slice(),o=x.value.slice();if(e){const t=o.findIndex((i=>i.id===l));o.splice(t,1),i.isFinish=!1,s.unshift(i)}else{const t=s.findIndex((i=>i.id===l));s.splice(t,1),i.isFinish=!0,o.unshift(i)}localStorage.setItem(S.ib,JSON.stringify(s)),localStorage.setItem(S.A3,JSON.stringify(o)),t.commit("setTodolist",s),t.commit("setFinishlist",o)}},T=()=>{switch(y){case w.w.Todo:c="待办",v="#316af6",n=(0,l.Fl)((()=>t.state.todolist));break;case w.w.Finish:c="已完成",v="#767676",n=(0,l.Fl)((()=>t.state.finishlist));break;case w.w.All:c="全部",v="#51565e",n.value=[...(0,l.Fl)((()=>t.state.todolist)).value,...(0,l.Fl)((()=>t.state.finishlist)).value];break;default:c="旗标",v="#e99f2f";const i=(0,l.Fl)((()=>t.state.todolist)),e=(0,l.Fl)((()=>t.state.finishlist)),s=[...i.value,...e.value];n.value=s.filter((i=>i.isFavorite));break}};T();const O=()=>{g.value={id:0,title:"",description:"",isFavorite:"3"===a.query.status,isFinish:!1,isTrash:!1},r.value="新建事项",u.value="添加",d.value=!1,e?.value?.show()},_=i=>{g.value={...i},r.value="详细信息",u.value="完成",d.value=!0,e?.value?.show()},C=i=>{const e=b.value.slice(),l=x.value.slice(),s=e.findIndex((t=>t.id===i)),o=l.findIndex((t=>t.id===i));s>-1&&(e[s].isFavorite=!e[s].isFavorite,localStorage.setItem(S.ib,JSON.stringify(e)),t.commit("setTodolist",e)),o>-1&&(l[o].isFavorite=!l[o].isFavorite,localStorage.setItem(S.A3,JSON.stringify(l)),t.commit("setFinishlist",l))},N=i=>{const e=b.value.slice(),l=x.value.slice(),s=e.findIndex((t=>t.id===i)),o=l.findIndex((t=>t.id===i));s>-1&&(e.splice(s,1),localStorage.setItem(S.ib,JSON.stringify(e)),t.commit("setTodolist",e)),o>-1&&(l.splice(o,1),localStorage.setItem(S.A3,JSON.stringify(l)),t.commit("setFinishlist",l))};return(i,t)=>((0,l.wg)(),(0,l.iD)("div",k,[(0,l.Wm)(m,{data:(0,s.SU)(n),onOnToggleFinish:I,onOnViewDetail:_,onOnToggleFavorite:C,onOnDeleteMatter:N,title:(0,s.SU)(c),color:(0,s.SU)(v)},null,8,["data","title","color"]),0===(0,s.SU)(y)||3===(0,s.SU)(y)?((0,l.wg)(),(0,l.j4)(o.Z,{key:0,color:(0,s.SU)(v),onOnClick:O},null,8,["color"])):(0,l.kq)("",!0),(0,l.Wm)(f.Z,{ref_key:"createRef",ref:e,data:g.value,title:(0,s.SU)(r),rightBtnText:(0,s.SU)(u),isEdit:{isEdit:(0,s.SU)(d)}},null,8,["data","title","rightBtnText","isEdit"])]))}});const b=y;var x=b}}]);
//# sourceMappingURL=about.1b72e302.js.map