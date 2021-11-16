"use strict";(self["webpackChunkbookkay"]=self["webpackChunkbookkay"]||[]).push([[937],{5937:(s,e,o)=>{o.r(e),o.d(e,{default:()=>P});var r=o(3673),a=o(8880);const t=(0,r.Uk)(" Please enter your current password. "),l=(0,r.Uk)(" Please enter your new password. ");function d(s,e,o,d,n,i){const p=(0,r.up)("q-icon"),w=(0,r.up)("q-input"),u=(0,r.up)("q-btn"),c=(0,r.up)("q-step"),h=(0,r.up)("q-stepper"),m=(0,r.up)("q-page");return(0,r.wg)(),(0,r.j4)(m,{class:"flex flex-center"},{default:(0,r.w5)((()=>[(0,r.Wm)(h,{modelValue:n.step,"onUpdate:modelValue":e[7]||(e[7]=s=>n.step=s),ref:"stepper",color:"primary","header-nav":"",animated:""},{default:(0,r.w5)((()=>[(0,r.Wm)(c,{name:1,title:"Current Password",icon:"settings",error:!n.correct_password,done:n.step>1},{default:(0,r.w5)((()=>[t,(0,r.Wm)(w,{modelValue:n.old_password,"onUpdate:modelValue":e[1]||(e[1]=s=>n.old_password=s),filled:"",ref:"old_password",type:n.showPwd?"text":"password",label:"Password",class:"q-ma-md","lazy-rules":"",rules:[s=>null!==s&&""!==s||"Please type your password",s=>s.length<=100||"Password must not exceeds 100",s=>s.length>8||"Password must exceeds 8"],onKeyup:(0,a.D2)(i.checkPassword,["enter"])},{append:(0,r.w5)((()=>[(0,r.Wm)(p,{name:n.showPwd?"visibility_off":"visibility",class:"cursor-pointer",onClick:e[0]||(e[0]=s=>n.showPwd=!n.showPwd)},null,8,["name"])])),_:1},8,["modelValue","type","rules","onKeyup"]),(0,r.Wm)(u,{label:"Check Password",color:"primary",onClick:i.checkPassword},null,8,["onClick"])])),_:1},8,["error","done"]),(0,r.Wm)(c,{name:2,title:"New Password",icon:"vpn_key",done:n.step>2},{default:(0,r.w5)((()=>[l,(0,r.Wm)(w,{modelValue:n.password,"onUpdate:modelValue":e[3]||(e[3]=s=>n.password=s),filled:"",ref:"password",type:n.showPwd?"text":"password",label:"Password",class:"q-ma-md","lazy-rules":"",rules:[s=>null!==s&&""!==s||"Please type your password",s=>s.length<=100||"Password must not exceeds 100",s=>s.length>8||"Password must exceeds 8"],onKeyup:e[4]||(e[4]=(0,a.D2)((e=>s.$refs.password2.focus()),["enter"]))},{append:(0,r.w5)((()=>[(0,r.Wm)(p,{name:n.showPwd?"visibility_off":"visibility",class:"cursor-pointer",onClick:e[2]||(e[2]=s=>n.showPwd=!n.showPwd)},null,8,["name"])])),_:1},8,["modelValue","type","rules"]),(0,r.Wm)(w,{modelValue:n.password2,"onUpdate:modelValue":e[6]||(e[6]=s=>n.password2=s),filled:"",ref:"password2",type:n.showPwd?"text":"password",label:"Reenter Password",class:"q-ma-md","lazy-rules":"",rules:[s=>null!==s&&""!==s||"Please type your password",s=>s.length<=100||"Password must not exceeds 100",s=>s.length>8||"Password must exceeds 8"],onKeyup:(0,a.D2)(i.submitPassword,["enter"])},{append:(0,r.w5)((()=>[(0,r.Wm)(p,{name:n.showPwd?"visibility_off":"visibility",class:"cursor-pointer",onClick:e[5]||(e[5]=s=>n.showPwd=!n.showPwd)},null,8,["name"])])),_:1},8,["modelValue","type","rules","onKeyup"]),(0,r.Wm)(u,{label:"Change Password",color:"primary",onClick:i.submitPassword},null,8,["onClick"])])),_:1},8,["done"])])),_:1},8,["modelValue"])])),_:1})}const n={name:"ChangePasswordPage",mounted(){this.$q.notify({color:"orange",position:"top",message:"You can change your password only within 1 hour after you have logged in.",timeout:1e4,icon:"warning"})},data(){return{step:1,showPwd:!1,old_password:"",password:"",password2:"",correct_password:!1}},methods:{checkPassword(){this.$refs.old_password.validate(),this.$refs.old_password.hasError||this.$store.dispatch("user/login",{email:this.$store.state.user.user.email,password:this.old_password}).then((s=>{console.log(s),this.correct_password=!0,this.step=2})).catch((s=>{this.loading=!1,this.$q.notify({color:"negative",position:"top",message:s.response.data.message||"Something went wrong",icon:"error"})}))},submitPassword(){this.$refs.password.validate(),this.$refs.password2.validate(),this.correct_password?this.$refs.password.hasError||this.$refs.password2.hasError||this.$store.dispatch("user/edit",{password:this.password}).then((s=>{this.$q.notify({icon:"done",color:"positive",message:"Password Changed"}),this.$router.push({name:"app-profile"})})).catch((s=>{this.loading=!1,this.$q.notify({color:"negative",position:"top",message:s.response.data.message||"Please relogin to edit your credentials",icon:"error"})})):this.step=1}}};var i=o(4379),p=o(3518),w=o(6552),u=o(4689),c=o(4554),h=o(8240),m=o(7518),y=o.n(m);n.render=d;const P=n;y()(n,"components",{QPage:i.Z,QStepper:p.Z,QStep:w.Z,QInput:u.Z,QIcon:c.Z,QBtn:h.Z})}}]);