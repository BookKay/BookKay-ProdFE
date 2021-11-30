"use strict";(self["webpackChunkbookkay"]=self["webpackChunkbookkay"]||[]).push([[968],{1968:(e,t,a)=>{a.r(t),a.d(t,{default:()=>I});var o=a(3673),s=a(8880),i=a(2323);const l=e=>((0,o.dD)("data-v-67c5008b"),e=e(),(0,o.Cn)(),e),n={class:"main-container flex flex-center"},r={key:0,class:"transition-container_loading"},c={class:"list-container"},d={key:1,class:"transition-container_books"},u={class:"list-container"},p=["src"],m={key:2,class:"transition-container_not-found"},k=l((()=>(0,o._)("img",{src:"svg/page_not_found.svg",alt:"Page Not Found",class:"not-found-img"},null,-1))),h=l((()=>(0,o._)("div",{class:"text-h2 text",style:{opacity:"0.4"}}," Oops. No Books Found... ",-1)));function w(e,t,a,l,w,b){const f=(0,o.up)("q-skeleton"),_=(0,o.up)("q-item-section"),g=(0,o.up)("q-item-label"),y=(0,o.up)("q-item"),v=(0,o.up)("q-separator"),W=(0,o.up)("q-list"),x=(0,o.up)("q-icon"),q=(0,o.up)("q-btn"),Z=(0,o.Q2)("ripple");return(0,o.wg)(),(0,o.iD)("div",n,[(0,o.Wm)(s.W3,{tag:"span",appear:"","enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut",class:"transition-container"},{default:(0,o.w5)((()=>[w.loading?((0,o.wg)(),(0,o.iD)("div",r,[(0,o._)("div",c,[(0,o.Wm)(W,null,{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(w.placeholderArray,(e=>((0,o.wg)(),(0,o.iD)("div",{key:e},[(0,o.wy)((0,o.Wm)(y,{style:{"border-radius":"30px"},dense:""},{default:(0,o.w5)((()=>[(0,o.Wm)(_,{thumbnail:""},{default:(0,o.w5)((()=>[(0,o.Wm)(f,{type:"circle"})])),_:1}),(0,o.Wm)(_,null,{default:(0,o.w5)((()=>[(0,o.Wm)(g,null,{default:(0,o.w5)((()=>[(0,o.Wm)(f,{type:"rect"})])),_:1}),(0,o.Wm)(g,{caption:"",lines:"2"},{default:(0,o.w5)((()=>[(0,o.Wm)(f,{type:"text"})])),_:1})])),_:1})])),_:1},512),[[Z,void 0,void 0,{early:!0}]]),(0,o.Wm)(v,{spaced:"",inset:""})])))),128))])),_:1})])])):w.books.length>0?((0,o.wg)(),(0,o.iD)("div",d,[(0,o._)("div",u,[(0,o.Wm)(W,null,{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(w.books,((e,t)=>((0,o.wg)(),(0,o.iD)("div",{key:t},[(0,o.wy)((0,o.Wm)(y,{clickable:"",style:{"border-radius":"30px"},onClick:t=>b.bookClicked(e),dense:""},{default:(0,o.w5)((()=>[(0,o.Wm)(_,{thumbnail:""},{default:(0,o.w5)((()=>[(0,o._)("img",{src:e.front_cover,class:"front-cover-img"},null,8,p)])),_:2},1024),(0,o.Wm)(_,null,{default:(0,o.w5)((()=>[(0,o.Wm)(g,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,i.zw)(e.title),1)])),_:2},1024),(0,o.Wm)(g,{caption:"",lines:"2"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,i.zw)(e.author_name),1)])),_:2},1024)])),_:2},1024),(0,o.Wm)(_,{side:""},{default:(0,o.w5)((()=>[(0,o.Wm)(x,{name:"keyboard_arrow_right",color:"black"})])),_:1})])),_:2},1032,["onClick"]),[[Z,void 0,void 0,{early:!0}]]),(0,o.Wm)(v,{spaced:"",inset:""})])))),128))])),_:1})])])):((0,o.wg)(),(0,o.iD)("div",m,[k,h,(0,o.Wm)(q,{class:"q-mt-lg",style:{width:"150px"},color:"black","text-color":"blue",rounded:"",outline:"",to:{name:"app-store-list"},ripple:{early:!0},label:"Go Back","no-caps":""})]))])),_:1})])}a(7280);const b={name:"BookShopSearch",data(){return{loading:!0,searchText:"",placeholderArray:["","","","",""],books:[]}},async mounted(){await this.fetchBooks(this.$route.query.search)},async beforeRouteUpdate(e,t,a){await this.fetchBooks(e.query.search),a()},methods:{async fetchBooks(e){this.loading=!0,this.searchText=e;let t=await this.$api.get("books/search",{params:{word:this.searchText,fields:"id,title,author_name,front_cover"}});this.books=t.data.results,this.loading=!1},bookClicked(e){let t;t=this.$store.getters["user/isLoggedIn"]?"app-browse-book":"home-browse-book",this.$router.push({name:t,params:{book_id:e.id}})}}};var f=a(4260),_=a(7011),g=a(3414),y=a(2035),v=a(4103),W=a(2350),x=a(5869),q=a(4554),Z=a(8240),D=a(6489),Q=a(7518),B=a.n(Q);const C=(0,f.Z)(b,[["render",w],["__scopeId","data-v-67c5008b"]]),I=C;B()(b,"components",{QList:_.Z,QItem:g.Z,QItemSection:y.Z,QSkeleton:v.ZP,QItemLabel:W.Z,QSeparator:x.Z,QIcon:q.Z,QBtn:Z.Z}),B()(b,"directives",{Ripple:D.Z})}}]);