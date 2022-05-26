"use strict";(self["webpackChunkbookkay"]=self["webpackChunkbookkay"]||[]).push([[378],{1534:(e,o,s)=>{s.r(o),s.d(o,{default:()=>w});var a=s(3673),t=s(2323);const n=e=>((0,a.dD)("data-v-7efac0dc"),e=e(),(0,a.Cn)(),e),i={key:0},r=n((()=>(0,a._)("h2",{class:"sub-heading"},[(0,a.Uk)("Best of the "),(0,a._)("b",null,"day!")],-1))),d={class:"row"},l={key:0,class:"col"},c={key:0,class:"books-list"},h={class:"sub-heading"},k={key:1};function b(e,o,s,n,b,f){const m=(0,a.up)("book-standout-card"),u=(0,a.up)("book-list-swipeable"),g=(0,a.up)("linking-card");return(0,a.wg)(),(0,a.iD)(a.HY,null,[Object.keys(b.bestOfTheDay).length>0?((0,a.wg)(),(0,a.iD)("div",i,[r,(0,a._)("div",d,[(0,a.Wm)(m,{book:b.bestOfTheDay,btnLabel:"Read",onBtnClicked:f.onPrimaryClicked,class:"col"},null,8,["book","onBtnClicked"]),e.$q.screen.lt.md?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",l))])])):(0,a.kq)("",!0),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(b.genres,(e=>((0,a.wg)(),(0,a.iD)("div",{key:e.name},[b.books[e.name].length>0?((0,a.wg)(),(0,a.iD)("div",c,[(0,a._)("h2",h,(0,t.zw)(e.informal_description),1),(0,a.Wm)(u,{books:b.books[e.name],primaryLabel:"Read",onPrimaryClicked:f.onPrimaryClicked,secondaryLabel:"Details",onSecondaryClicked:f.onSecondaryClicked},null,8,["books","onPrimaryClicked","onSecondaryClicked"])])):b.loading?((0,a.wg)(),(0,a.iD)("div",k)):(0,a.kq)("",!0)])))),128)),(0,a._)("div",null,[(0,a.Wm)(g,{class:"refresh-link",mainText:"Haven't found any book that catches your eye?",text:"Let's refresh then! ",img:"svg/exciting_news.svg",label:"Let's refresh!",onBtnClicked:f.refresh},null,8,["onBtnClicked"])])],64)}s(71);var f=s(4496),m=s(5542),u=s(8514);const g={name:"BookShopList",components:{BookListSwipeable:f.Z,LinkingCard:m.Z,BookStandoutCard:u.Z},data(){return{bestOfTheDay:{},books:{},loading:!0,genres:[]}},async mounted(){let e=await this.$api.get("genres"),o=e.data.results;for(const s of o)this.genres.push({name:s.name,informal_description:s.informal_description}),this.books[s.name]=[];await this.fetchBooks(),await this.fetchBestOfTheDay()},methods:{async refresh(){let e=document.getElementById("shop-heading");e.scrollIntoView({behavior:"smooth"}),await this.fetchBooks()},async fetchBooks(){this.loading=!0;for(const e of this.genres)this.books[e.name]=[];for(const e of this.genres){let o=await this.$api.get("books/genre",{params:{name:e.name,fields:"id,title,author_name,front_cover"}}),s=o.data;for(const a of s)this.books[e.name].push(a)}this.loading=!1},async fetchBestOfTheDay(){let e=await this.$api.get("books/best_of_the_day",{params:{fields:"id,title,author_name,description,front_cover"}});this.bestOfTheDay=e.data[0]},onPrimaryClicked(e){this.$router.push({name:"read-book",query:{book_id:e.id}})},onSecondaryClicked(e){let o;o=this.$store.getters["user/isLoggedIn"]?"app-browse-book":"home-browse-book",this.$router.push({name:o,params:{book_id:e.id}})}}};var y=s(4260);const p=(0,y.Z)(g,[["render",b],["__scopeId","data-v-7efac0dc"]]),w=p}}]);