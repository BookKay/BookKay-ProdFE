"use strict";(self["webpackChunkbookkay"]=self["webpackChunkbookkay"]||[]).push([[742],{742:(e,s,a)=>{a.r(s),a.d(s,{default:()=>y});var r=a(3673),t=a(8880);const o=(0,r._)("h2",{class:"q-ma-lg"},"Come Join Us!",-1);function l(e,s,a,l,n,i){const u=(0,r.up)("q-separator"),d=(0,r.up)("q-input"),m=(0,r.up)("q-icon"),p=(0,r.up)("q-spinner-hourglass"),h=(0,r.up)("q-btn"),w=(0,r.up)("q-form"),c=(0,r.up)("q-card"),f=(0,r.up)("q-page");return(0,r.wg)(),(0,r.j4)(f,{class:"flex flex-center"},{default:(0,r.w5)((()=>[(0,r.Wm)(c,{class:"q-my-md"},{default:(0,r.w5)((()=>[o,(0,r.Wm)(u,{inset:""}),(0,r.Wm)(w,{class:"q-ma-lg",onSubmit:(0,t.iM)(i.onSubmit,["prevent","stop"]),onReset:(0,t.iM)(i.onReset,["prevent","stop"])},{default:(0,r.w5)((()=>[(0,r.Wm)(d,{modelValue:n.user.username,"onUpdate:modelValue":s[0]||(s[0]=e=>n.user.username=e),ref:"username",filled:"",label:"Username",class:"q-ma-md","lazy-rules":"",rules:[e=>null!==e&&""!==e||"Please type your username",e=>e.length<=100||"Username must not be greater than 100"],onKeydown:s[1]||(s[1]=(0,t.D2)((0,t.iM)((s=>e.$refs.email.focus()),["prevent"]),["enter"]))},null,8,["modelValue","rules"]),(0,r.Wm)(d,{modelValue:n.user.email,"onUpdate:modelValue":s[2]||(s[2]=e=>n.user.email=e),ref:"email",filled:"",type:"email",label:"Email",class:"q-ma-md","lazy-rules":"",rules:[e=>null!==e&&""!==e||"Please type your email",e=>e.length<=100||"Email must be smaller than 100",e=>-1!=e.indexOf("@")||"Please type a real email"],onKeydown:s[3]||(s[3]=(0,t.D2)((0,t.iM)((s=>e.$refs.password.focus()),["prevent"]),["enter"]))},null,8,["modelValue","rules"]),(0,r.Wm)(d,{modelValue:n.user.password,"onUpdate:modelValue":s[5]||(s[5]=e=>n.user.password=e),filled:"",ref:"password",type:n.showPwd?"text":"password",label:"Password",class:"q-ma-md","lazy-rules":"",rules:[e=>null!==e&&""!==e||"Please type your password",e=>e.length<=100||"Password must not exceeds 100",e=>e.length>8||"Password must exceeds 8"],onKeydown:s[6]||(s[6]=(0,t.D2)((0,t.iM)((s=>e.$refs.password2.focus()),["prevent"]),["enter"]))},{append:(0,r.w5)((()=>[(0,r.Wm)(m,{name:n.showPwd?"visibility_off":"visibility",class:"cursor-pointer",onClick:s[4]||(s[4]=e=>n.showPwd=!n.showPwd)},null,8,["name"])])),_:1},8,["modelValue","type","rules"]),(0,r.Wm)(d,{modelValue:n.password2,"onUpdate:modelValue":s[8]||(s[8]=e=>n.password2=e),filled:"",ref:"password2",type:n.showPwd?"text":"password",label:"Reenter Password",class:"q-ma-md","lazy-rules":"ondemand",rules:[e=>null!==e&&""!==e||"Please type your password",e=>e.length<=100||"Must not exceed 100",e=>e.length>8||"Password must exceeds 8",e=>e==this.user.password||"Password not same"]},{append:(0,r.w5)((()=>[(0,r.Wm)(m,{name:n.showPwd?"visibility_off":"visibility",class:"cursor-pointer",onClick:s[7]||(s[7]=e=>n.showPwd=!n.showPwd)},null,8,["name"])])),_:1},8,["modelValue","type","rules"]),(0,r.Wm)(h,{label:"Register",type:"submit",color:"primary",class:"q-ma-md"},{default:(0,r.w5)((()=>["loading"==i.authStatus?((0,r.wg)(),(0,r.j4)(p,{key:0,color:"white",size:"1.2em"})):(0,r.kq)("",!0)])),_:1})])),_:1},8,["onSubmit","onReset"]),(0,r.Wm)(h,{label:"Already one of us? Login now!",type:"submit",color:"primary",flat:"",class:"q-mx-md q-my-lg",to:{name:"home-sign-in"}})])),_:1})])),_:1})}a(7280),a(5363);const n={name:"SignInPage",data(){return{showPwd:!1,password2:"",user:{username:"",author_name:"",email:"",password:""},loading:!1}},computed:{authStatus(){return this.$store.getters["user/authStatus"]}},beforeMount(){this.$store.getters["user/isLoggedIn"]&&this.$router.push({name:"app-read"})},methods:{onSubmit(){this.$refs.username.validate(),this.$refs.email.validate(),this.$refs.password.validate(),this.$refs.password2.validate(),this.$refs.username.hasError||this.$refs.email.hasError||this.$refs.password.hasError||this.$refs.password2.hasError?this.formHasError=!0:(this.loading=!0,this.user.author_name=this.user.username,console.log(this.user),this.$store.dispatch("user/register",this.user).then((e=>{this.loading=!1,this.$q.notify({icon:"done",color:"positive",message:"Welcome!!!"}),this.$router.replace({name:"app-read"})})).catch((e=>{let s=e.response.data.email[0],a=s.charAt(0).toUpperCase()+s.slice(1);this.loading=!1,this.$q.notify({color:"negative",position:"top",message:a||"Something went wrong",icon:"error",actions:[{label:"Login Instead?",color:"white",handler:()=>{this.$router.push({name:"home-sign-in"})}}]})})))},onReset(){this.email=null,this.password=null,this.$refs.email.resetValidation(),this.$refs.password.resetValidation()}}};var i=a(4379),u=a(151),d=a(5869),m=a(8689),p=a(4689),h=a(4554),w=a(8240),c=a(3282),f=a(7518),g=a.n(f);n.render=l;const y=n;g()(n,"components",{QPage:i.Z,QCard:u.Z,QSeparator:d.Z,QForm:m.Z,QInput:p.Z,QIcon:h.Z,QBtn:w.Z,QSpinnerHourglass:c.Z})}}]);