"use strict";(self["webpackChunkbookkay"]=self["webpackChunkbookkay"]||[]).push([[482],{7414:(e,t,a)=>{a.r(t),a.d(t,{default:()=>g});var r=a(3673);function s(e,t,a,s,o,u){const n=(0,r.up)("splash-screen"),l=(0,r.up)("router-view"),p=(0,r.up)("q-page-container"),c=(0,r.up)("bottom-nav"),h=(0,r.up)("q-footer"),i=(0,r.up)("q-layout");return(0,r.wg)(),(0,r.j4)(i,{view:"hHh lpR fFf"},{default:(0,r.w5)((()=>[(0,r.Wm)(p,{class:"q-mb-xl"},{default:(0,r.w5)((()=>[(0,r.Wm)(n),(0,r.Wm)(l)])),_:1}),(0,r.Wm)(h,null,{default:(0,r.w5)((()=>[(0,r.Wm)(c)])),_:1})])),_:1})}var o=a(1566),u=a(2730);const n={components:{BottomNav:o.Z,SplashScreen:u.Z},mounted(){this.$store.dispatch("user/fetchUser")},data(){return{tab:"write"}},methods:{fetchUser(){this.$api.get("users/"+this.$store.getters["user/userProperty"]("id"),{params:{expand:"~all"}}).then((e=>{const t=e.data;this.$store.commit("user/setUser",t),this.$q.localStorage.set("user",t)}))}}};var l=a(3066),p=a(3812),c=a(614),h=a(9570),i=a(3747),m=a(8240),d=a(5096),Z=a(2025),f=a(2652),Q=a(1762),b=a(7547),w=a(208),k=a(7518),v=a.n(k);n.render=s;const g=n;v()(n,"components",{QLayout:l.Z,QHeader:p.Z,QAjaxBar:c.Z,QToolbar:h.Z,QToolbarTitle:i.Z,QBtn:m.Z,QAvatar:d.Z,QSpace:Z.Z,QPageContainer:f.Z,QFooter:Q.Z,QTabs:b.Z,QRouteTab:w.Z})}}]);