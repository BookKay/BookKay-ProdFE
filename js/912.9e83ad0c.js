"use strict";(self["webpackChunkbookkay"]=self["webpackChunkbookkay"]||[]).push([[912],{9912:(o,e,s)=>{s.r(e),s.d(e,{default:()=>S});s(246);var i=s(3673),a=s(2323);const t=o=>((0,i.dD)("data-v-03047693"),o=o(),(0,i.Cn)(),o),r={class:"container"},c={class:"card"},n={class:"shoeBackground"},l=t((()=>(0,i._)("div",{class:"gradients"},[(0,i._)("div",{class:"gradient",color:"blue"}),(0,i._)("div",{class:"gradient",color:"red"}),(0,i._)("div",{class:"gradient second",color:"green"}),(0,i._)("div",{class:"gradient",color:"orange"}),(0,i._)("div",{class:"gradient",color:"black"})],-1))),u=t((()=>(0,i._)("h1",{class:"bookkay"},"BookKay",-1))),p=["src"],d={class:"info"},h={class:"bookName"},m={class:"small ellipsis-3-lines"},k={class:"description"},b=t((()=>(0,i._)("h3",{class:"title"},"Product Info",-1))),g={class:"text ellipsis-3-lines"},v={class:"buy-price"},_={class:"price"},y=t((()=>(0,i._)("i",{class:"fas fa-dollar-sign"},null,-1)));function f(o,e,s,t,f,$){const w=(0,i.up)("q-btn"),q=(0,i.up)("q-page");return(0,i.wg)(),(0,i.j4)(q,null,{default:(0,i.w5)((()=>[(0,i._)("div",r,[(0,i._)("div",c,[(0,i._)("div",n,[l,u,(0,i._)("img",{src:f.book.front_cover,alt:"Background Image",class:"background-img"},null,8,p),(0,i.Wm)(w,{icon:"share",ripple:{early:!0},class:"share",onClick:$.copyLink},null,8,["onClick"])]),(0,i._)("div",d,[(0,i._)("div",h,[(0,i._)("h3",m,(0,a.zw)(f.book.title),1)]),(0,i._)("div",k,[b,(0,i._)("p",g,(0,a.zw)(f.book.description),1)]),(0,i._)("div",v,[(0,i.Wm)(w,{icon:"shopping_cart",label:"Let's Buy",ripple:{early:!0},class:"buy",onClick:$.purchase},null,8,["onClick"]),(0,i._)("div",_,[y,(0,i._)("h1",null,(0,a.zw)(0==f.book.price?"Free":f.book.price),1)])])])])])])),_:1})}s(5363);var $=s(1914);const w={name:"BookPurchasePage",data(){return{book:{title:"Best Book LOL hohoo a very lonnnnnnnnnngggg title",author_name:"Kevin",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris velit lacus, ultricies et tempus sit amet, pharetra eu dolor. Quisque in dui ligula. Nulla scelerisque ut nisl sed lacinia. Curabitur sit amet erat diam. Fusce luctus imperdiet velit ut efficitur. Suspendisse placerat efficitur finibus. Donec imperdiet molestie massa sit amet venenatis. Mauris tempor commodo finibus.",id:"1111",price:0,front_cover:"https://res.cloudinary.com/bookkay/image/upload/v1625766495/BookKay/Front%20Cover/front_cover_da876a3a-e012-11eb-a5b9-ba6b82820b1a.png"},domainName:"bookkay.com"}},computed:{getShopURL(){const o=this.$router.resolve({name:"app-browse-book",params:{book_id:this.book.id}});return o.href}},beforeMount(){this.$api.get("books/"+this.$route.params.book_id).then((o=>{const e=o.data;this.book=e}))},methods:{async purchase(){try{await this.$api.post(`books/${this.$route.params.book_id}/purchase`);let o=await this.$api.get("users/"+this.$store.getters["user/userProperty"]("id"),{params:{expand:"~all"}});const e=o.data;this.$store.commit("user/setUser",e),this.$q.localStorage.set("user",e),this.$router.replace({name:"app-read"}),this.$q.notify({color:"positive",position:"top",message:`You have successfully bought ${this.book.title}. Hope you enjoy it.`,icon:"error"})}catch(o){this.$q.notify({color:"negative",position:"top",message:"Error when purchasing book",icon:"error"})}},async copyLink(){const o=this.domainName+this.getShopURL;try{await(0,$.Z)(o),this.$q.notify({icon:"done",color:"positive",message:"URL copied to clipboard"})}catch{this.$q.notify({icon:"error",color:"negative",message:"There was an error when copying to clipboard"})}}}};var q=s(4260),B=s(4379),C=s(8240),L=s(7518),P=s.n(L);const N=(0,q.Z)(w,[["render",f],["__scopeId","data-v-03047693"]]),S=N;P()(w,"components",{QPage:B.Z,QBtn:C.Z})}}]);