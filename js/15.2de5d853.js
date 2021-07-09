(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[15],{6328:function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("q-layout",{attrs:{view:"hHh LpR fFf"}},[r("q-header",{staticClass:"bg-white",attrs:{elevated:""}},[r("q-toolbar",[r("q-btn",{attrs:{dense:"",flat:"",round:"",icon:"menu",color:"primary"},on:{click:function(e){t.left=!t.left}}}),r("q-toolbar-title",[r("q-btn",{attrs:{flat:"",color:"orange-3",to:{name:"home-homepage"}}},[r("q-avatar",{staticClass:"q-ma-xs gt-sm"},[r("img",{attrs:{src:"icons/favicon-128x128.png"}})]),r("h6",{staticClass:"q-ma-xs text-capitalize"},[t._v("BookKay")])],1)],1),r("q-space"),r("div",[r("q-btn",{attrs:{color:"orange-3",round:"",padding:"xs",to:{name:"app-profile"}}},[r("q-avatar",{attrs:{size:"40px"}},[r("img",{attrs:{src:"https://c.pxhere.com/photos/c0/74/robin_bird_japanese_robin_wildlife_animal_nature_red_erithacus-693111.jpg!d"}})])],1)],1)],1)],1),r("q-drawer",{attrs:{side:"left",overlay:"",behavior:"mobile",bordered:""},model:{value:t.left,callback:function(e){t.left=e},expression:"left"}},[r("div",{staticClass:"q-ma-md q-mt-xl"},[this.$store.getters["user/isLoggedIn"]?r("q-tree",{ref:"navTree",staticClass:"col-12 col-sm-6 text-body1",attrs:{nodes:t.navigations,"node-key":"name",selected:t.selected},on:{"update:selected":[function(e){t.selected=e},t.handleSelected]}}):t._e()],1)]),r("q-page-container",[r("router-view")],1),r("q-footer",{staticClass:"bg-transparent text-white row",attrs:{bordered:""}},[r("q-tabs",{staticClass:"bg-white text-black shadow-2 col",attrs:{align:"justify","indicator-color":"transparent","active-color":"primary"},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[r("q-route-tab",{attrs:{name:"read",icon:"book",label:"Read",to:{name:"app-read"}}}),r("q-route-tab",{attrs:{name:"write",icon:"brush",label:"Write",to:{name:"app-write"}}}),r("q-route-tab",{attrs:{name:"shop",icon:"local_library",label:"Shop",to:{name:"app-store"}}})],1)],1)],1)},a=[],n=(r("b0c0"),r("caad"),r("2532"),r("b64b"),r("07ac"),r("7db0"),r("a434"),r("4de4"),r("4e82"),r("c740"),r("99af"),r("ac1f"),r("1276"),{beforeMount:function(){var t=this;this.$route.params.manuscript_id&&this.$api.get("manuscripts/"+this.$route.params.manuscript_id).then((function(e){var r=e.data;t.$store.commit("write/setManuscript",r);try{t.$q.sessionStorage.set("currentManuscript",r)}catch(i){console.log("err",i)}}));var e=this.$route.name;if(e.includes("write-editor")){var r=Object.keys(this.$route.query)[0],i=Object.values(this.$route.query)[0],a=e+"/"+r+"/"+i;this.selected=a,this.currentSelected=a}else this.selected=this.$route.name,this.currentSelected=this.$route.name},updated:function(){if(this.$store.getters["user/isLoggedIn"]){var t="read-book/manuscript_id/"+this.$store.getters["write/manuscriptProperty"]("id");if(this.navigations.find((function(e){return e.name===t}))||this.navigations.splice(1,0,{label:"Preview",name:t}),this.$store.getters["write/manuscriptProperty"]("configs").contain_character&&!this.navigations.find((function(t){return"Character"===t.label}))){var e={label:"Character",name:"write-character"};this.navigations.splice(2,0,e)}else!this.$store.getters["write/manuscriptProperty"]("configs").contain_character&&this.navigations.find((function(t){return"Character"===t.label}))&&this.navigations.splice(2,1);if(this.$store.getters["write/manuscriptProperty"]("configs").contain_front_matter){var r=this.navigations.find((function(t){return"Book"===t.label})).children;r.find((function(t){return"Front Matter"==t.type}))&&(r=r.filter((function(t){return"Front Matter"!=t.type})));var i=this.$store.getters["write/manuscriptProperty"]("front_matters");i.sort(this.compareIndex);for(var a=i.length-1;a>=0;a--){var n=i[a];r.unshift({label:n.title,name:"write-editor/front_matter/"+n.id,type:"Front Matter",query:{front_matter:n.id}})}this.navigations.find((function(t){return"Book"===t.label})).children=r}else{r=this.navigations.find((function(t){return"Book"===t.label})).children;r=r.filter((function(t){return"Front Matter"!=t.type})),this.navigations.find((function(t){return"Book"===t.label})).children=r}if(this.$store.getters["write/manuscriptProperty"]("configs").contain_chapter){r=this.navigations.find((function(t){return"Book"===t.label})).children;r.find((function(t){return"Chapter"==t.type}))&&(r=r.filter((function(t){return"Chapter"!=t.type})));var s=this.$store.getters["write/manuscriptProperty"]("chapters");s.sort(this.compareIndex);var o=r.findIndex((function(t){return"Back Matter"==t.type}));for(a=0;a<s.length;a++){var c=s[a];-1==o?r.push({label:c.title,name:"write-editor/chapter/"+c.id,type:"Chapter"}):(r.splice(o,0,{label:c.title,name:"write-editor/chapter/"+c.id,type:"Chapter"}),o++)}r=r.filter((function(t){return"Main Body Text"!=t.label})),this.navigations.find((function(t){return"Book"===t.label})).children=r}else{r=this.navigations.find((function(t){return"Book"===t.label})).children;if(r=r.filter((function(t){return"Chapter"!=t.type})),this.navigations.find((function(t){return"Book"===t.label})).children=r,!r.find((function(t){return"Main Body Text"===t.label}))){o=r.findIndex((function(t){return"Back Matter"==t.type}));-1==o?r.push({label:"Main Body Text",name:"write-editor/manuscript/"+this.$store.getters["write/manuscriptProperty"]("id"),type:"Manuscript"}):(r.splice(o,0,{label:"Main Body Text",name:"write-editor/manuscript/"+this.$store.getters["write/manuscriptProperty"]("id"),type:"Manuscript"}),o++)}}if(this.$store.getters["write/manuscriptProperty"]("configs").contain_back_matter){r=this.navigations.find((function(t){return"Book"===t.label})).children;r.find((function(t){return"Back Matter"==t.type}))&&(r=r.filter((function(t){return"Back Matter"!=t.type})));var l=this.$store.getters["write/manuscriptProperty"]("back_matters");l.sort(this.compareIndex);for(a=0;a<l.length;a++){var u=l[a];r.push({label:u.title,name:"write-editor/back_matter/"+u.id,type:"Back Matter"})}this.navigations.find((function(t){return"Book"===t.label})).children=r}else{r=this.navigations.find((function(t){return"Book"===t.label})).children;r=r.filter((function(t){return"Back Matter"!=t.type})),this.navigations.find((function(t){return"Book"===t.label})).children=r}}},data:function(){return{left:!1,tab:"write",navigations:[{label:"Configs",name:"write-config"},{label:"Book",name:"write-overview",children:[]}],selected:"",currentSelected:""}},watch:{$route:function(t){switch(this.$route.name){case"write-config":this.selected="write-config";break;case"read-book":this.selected="read-book/manuscript_id/"+this.$store.getters["write/manuscriptProperty"]("id");break;case"write-overview":this.selected="write-overview";break;case"write-editor":var e=Object.keys(this.$route.query)[0],r=this.$route.query[e];this.selected="write-editor/".concat(e,"/").concat(r);break;default:}}},methods:{handleSelected:function(){if(null==this.selected)this.selected=this.currentSelected;else if(this.currentSelected=this.selected,this.currentSelected.includes("/")){var t=this.currentSelected.split("/")[0],e=this.currentSelected.split("/")[1],r=this.currentSelected.split("/")[2],i={};i[e]=r,this.$router.push({name:t,query:i})}else this.$router.push({name:this.currentSelected,params:{manuscript_id:this.$store.getters["write/manuscriptProperty"]("id")}})},compareIndex:function(t,e){return t.index<e.index?-1:t.index>e.index?1:0}}}),s=n,o=r("2877"),c=r("4d5a"),l=r("e359"),u=r("65c6"),d=r("9c40"),h=r("6ac5"),p=r("cb32"),f=r("2c91"),b=r("9404"),m=r("7f41"),g=r("09e3"),v=r("7ff0"),w=r("429b"),y=r("7867"),k=r("eebe"),$=r.n(k),_=Object(o["a"])(s,i,a,!1,null,null,null);e["default"]=_.exports;$()(_,"components",{QLayout:c["a"],QHeader:l["a"],QToolbar:u["a"],QBtn:d["a"],QToolbarTitle:h["a"],QAvatar:p["a"],QSpace:f["a"],QDrawer:b["a"],QTree:m["a"],QPageContainer:g["a"],QFooter:v["a"],QTabs:w["a"],QRouteTab:y["a"]})}}]);