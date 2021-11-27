(this.webpackJsonpuniflix=this.webpackJsonpuniflix||[]).push([[0],{166:function(e,t,a){},167:function(e,t,a){},217:function(e,t,a){},221:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),c=a(39),r=a.n(c),i=(a(166),a(167),a(328)),l=a(108),j=a(65),o=Object(l.a)({typography:{fontFamily:"Poppins",button:{fontWeight:600}},components:{MuiAppBar:{defaultProps:{enableColorOnDark:!0}}},palette:{mode:"dark",primary:{main:"#E50914"},secondary:{main:j.a[500]}}}),u=a(19),b=a(21),x=a(12),m=a(5),p=a(307),f=a(235),d=a(296),O=a(135),h=a.n(O),v=a(0),N=Object(d.a)((function(e){return{showBtn:{position:"absolute",right:"50px",bottom:"30px"},title:{position:"absolute",left:"5%",top:"40%"},description:Object(m.a)({fontWeight:900},e.breakpoints.down("sm"),{visibility:"hidden"})}}));var g=function(e){var t,a=e.film,s=N();return Object(v.jsxs)("div",{style:{position:"relative"},children:[Object(v.jsx)("img",{src:a.posterPath,alt:"",style:{position:"relative",maxHeight:500,width:"100%",objectFit:"cover"}}),Object(v.jsx)("div",{className:s.showBtn,children:Object(v.jsx)(p.a,{variant:"contained",component:u.b,to:"/films/"+a.movieId,startIcon:Object(v.jsx)(h.a,{}),children:"Preview"})}),Object(v.jsxs)("div",{className:s.title,children:[Object(v.jsx)(f.a,{variant:"h3",style:{fontWeight:900},color:"white",children:a.title}),Object(v.jsxs)(f.a,{className:s.description,variant:"h6",color:"white",children:[null===(t=a.releaseDate)||void 0===t?void 0:t.substr(0,4)," - ",a.duration||120," min"]})]})]})},y=a(52),w=a(308),C=Object(d.a)((function(e){return{paper:{margin:"10px",position:"relative",transition:"box-shadow .3s","&:hover":{boxShadow:"0 0 13px #E50914"}},img:{borderRadius:"1%",position:"relative",maxWidth:200,objectFit:"cover"},title:{bottom:"10px",left:"10px",position:"absolute"}}}));function k(e){var t=e.film,a=C();return Object(v.jsx)(u.b,{to:"/films/".concat(t.movieId),children:Object(v.jsxs)(w.a,{className:a.paper,children:[Object(v.jsx)("img",{src:t.posterPath,className:a.img,alt:"movie"}),Object(v.jsx)("div",{className:a.title,children:Object(v.jsx)(f.a,{variant:"subtitle2",color:"white"})})]})})}var I=a(83),S=a.n(I),T=a(84),A=a.n(T),D=a(14),W=a.n(D),F=a(16),P=a(61),L=a.n(P),V={url:"http://localhost:3002/rest",timeout:12e3,configHeaders:{Accept:"application/json","Content-Type":"application/json"}},q=L.a.create({baseURL:V.url,timeout:V.timeout,headers:V.configHeaders});function E(){return(E=Object(F.a)(W.a.mark((function e(t){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",q.get("/actors/"+t).then((function(e){return e.data})).catch((function(e){throw e})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function B(e){return R.apply(this,arguments)}function R(){return(R=Object(F.a)(W.a.mark((function e(t){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",q.get("/genre/"+t+"/movies").then((function(e){return e.data})).catch((function(e){throw e})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var z=a(287);function H(e){var t=e.children,a=e.disabled,s=e.onClick;return Object(v.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(v.jsx)(p.a,{variant:"default",disabled:a,onClick:s,children:t})})}function U(){var e=n.a.useContext(y.VisibilityContext),t=e.isFirstItemVisible,a=e.scrollPrev;return Object(z.a)((function(e){return e.breakpoints.down("sm")}))?null:Object(v.jsx)(H,{disabled:t,onClick:function(){return a()},children:Object(v.jsx)(S.a,{style:{color:"white"}})})}function G(){var e=n.a.useContext(y.VisibilityContext),t=e.isLastItemVisible,a=e.scrollNext;return Object(z.a)((function(e){return e.breakpoints.down("sm")}))?null:Object(v.jsx)(H,{disabled:t,onClick:function(){return a()},children:Object(v.jsx)(A.a,{style:{color:"white"}})})}var M=function(e){var t=e.genreId,a=e.title,c=n.a.useState([]),r=Object(x.a)(c,2),i=r[0],l=r[1],j=n.a.useState([]),o=Object(x.a)(j,2),u=o[0],b=o[1],m=function(e){return!!u.find((function(t){return t===e}))};return Object(s.useEffect)((function(){B(t).then((function(e){l(e)}))}),[t]),Object(v.jsxs)("div",{children:[Object(v.jsx)(f.a,{style:{color:"white",marginTop:"15px",marginLeft:"15px",textTransform:"capitalize"},variant:"h5",children:a}),Object(v.jsx)(y.ScrollMenu,{LeftArrow:U,RightArrow:G,style:{overflowX:"hidden"},children:i.map((function(e){return Object(v.jsx)(k,{itemId:e.movieId,film:e,onClick:(t=e.movieId,function(e){e.getItemById,e.scrollToItem;var a=m(t);b((function(e){return a?e.filter((function(e){return e!==t})):e.concat(t)}))}),selected:m(e.movieId)},e.movieId);var t}))})]})},Y=a(29),X=a(309),J=a(288),$=a(310),K=a(22);function Q(e){var t=e.onlyLogo,a=Object(K.c)((function(e){return e.user}));return Object(v.jsx)(J.a,{children:Object(v.jsx)(X.a,{position:"static",children:Object(v.jsxs)($.a,{children:[Object(v.jsx)(f.a,{style:{fontWeight:900},variant:"h6",sx:{flexGrow:1,textDecoration:"none",color:"white"},component:u.b,to:"/home",children:"Uniflix"}),Object(v.jsx)(v.Fragment,{children:a.token?Object(v.jsxs)("div",{children:[Object(v.jsx)(p.a,{color:"inherit",component:u.b,to:"/library",children:"Library"}),Object(v.jsx)(p.a,{color:"inherit",component:u.b,to:"/account",children:a.fullname||"Account"})]}):!t&&Object(v.jsx)(p.a,{color:"inherit",component:u.b,to:"/signin",children:"Sign In"})})]})})})}var Z=a(46);var _=Object(d.a)((function(e){return{container:{display:"flex",flexDirection:"column",flexGrow:1,height:"100%"},content:{display:"flex",flexDirection:"column",flexGrow:1},footer:{paddingLeft:"5px"}}})),ee=function(e){var t=e.children,a=e.onlyLogo,s=e.style,n=_(),c=Object(Z.a)();return Object(v.jsxs)("div",{className:n.container,style:Object(Y.a)({},s),children:[Object(v.jsx)(Q,{onlyLogo:a}),Object(v.jsx)("div",{style:{flexGrow:1,backgroundColor:c.palette.background.paper},children:t}),Object(v.jsx)("div",{className:n.footer,children:Object(v.jsx)(f.a,{variant:"caption",children:"\xa9 2021 Uniflix, All rights reserved"})})]})};a(217);function te(){return Object(v.jsx)("div",{id:"container",style:{position:"absolute",top:0,left:0,zIndex:1},children:Object(v.jsxs)("main",{letter:"X",children:[Object(v.jsxs)("div",{className:"helper-1",children:[Object(v.jsxs)("div",{className:"effect-brush",children:[Object(v.jsx)("span",{className:"fur-31"}),Object(v.jsx)("span",{className:"fur-30"}),Object(v.jsx)("span",{className:"fur-29"}),Object(v.jsx)("span",{className:"fur-28"}),Object(v.jsx)("span",{className:"fur-27"}),Object(v.jsx)("span",{className:"fur-26"}),Object(v.jsx)("span",{className:"fur-25"}),Object(v.jsx)("span",{className:"fur-24"}),Object(v.jsx)("span",{className:"fur-23"}),Object(v.jsx)("span",{className:"fur-22"}),Object(v.jsx)("span",{className:"fur-21"}),Object(v.jsx)("span",{className:"fur-20"}),Object(v.jsx)("span",{className:"fur-19"}),Object(v.jsx)("span",{className:"fur-18"}),Object(v.jsx)("span",{className:"fur-17"}),Object(v.jsx)("span",{className:"fur-16"}),Object(v.jsx)("span",{className:"fur-15"}),Object(v.jsx)("span",{className:"fur-14"}),Object(v.jsx)("span",{className:"fur-13"}),Object(v.jsx)("span",{className:"fur-12"}),Object(v.jsx)("span",{className:"fur-11"}),Object(v.jsx)("span",{className:"fur-10"}),Object(v.jsx)("span",{className:"fur-9"}),Object(v.jsx)("span",{className:"fur-8"}),Object(v.jsx)("span",{className:"fur-7"}),Object(v.jsx)("span",{className:"fur-6"}),Object(v.jsx)("span",{className:"fur-5"}),Object(v.jsx)("span",{className:"fur-4"}),Object(v.jsx)("span",{className:"fur-3"}),Object(v.jsx)("span",{className:"fur-2"}),Object(v.jsx)("span",{className:"fur-1"})]}),Object(v.jsxs)("div",{className:"effect-lumieres",children:[Object(v.jsx)("span",{className:"lamp-1"}),Object(v.jsx)("span",{className:"lamp-2"}),Object(v.jsx)("span",{className:"lamp-3"}),Object(v.jsx)("span",{className:"lamp-4"}),Object(v.jsx)("span",{className:"lamp-5"}),Object(v.jsx)("span",{className:"lamp-6"}),Object(v.jsx)("span",{className:"lamp-7"}),Object(v.jsx)("span",{className:"lamp-8"}),Object(v.jsx)("span",{className:"lamp-9"}),Object(v.jsx)("span",{className:"lamp-10"}),Object(v.jsx)("span",{className:"lamp-11"}),Object(v.jsx)("span",{className:"lamp-12"}),Object(v.jsx)("span",{className:"lamp-13"}),Object(v.jsx)("span",{className:"lamp-14"}),Object(v.jsx)("span",{className:"lamp-15"}),Object(v.jsx)("span",{className:"lamp-16"}),Object(v.jsx)("span",{className:"lamp-17"}),Object(v.jsx)("span",{className:"lamp-18"}),Object(v.jsx)("span",{className:"lamp-19"}),Object(v.jsx)("span",{className:"lamp-20"}),Object(v.jsx)("span",{className:"lamp-21"}),Object(v.jsx)("span",{className:"lamp-22"}),Object(v.jsx)("span",{className:"lamp-23"}),Object(v.jsx)("span",{className:"lamp-24"}),Object(v.jsx)("span",{className:"lamp-25"}),Object(v.jsx)("span",{className:"lamp-26"}),Object(v.jsx)("span",{className:"lamp-27"}),Object(v.jsx)("span",{className:"lamp-28"})]})]}),Object(v.jsx)("div",{className:"helper-2",children:Object(v.jsxs)("div",{className:"effect-brush",children:[Object(v.jsx)("span",{className:"fur-31"}),Object(v.jsx)("span",{className:"fur-30"}),Object(v.jsx)("span",{className:"fur-29"}),Object(v.jsx)("span",{className:"fur-28"}),Object(v.jsx)("span",{className:"fur-27"}),Object(v.jsx)("span",{className:"fur-26"}),Object(v.jsx)("span",{className:"fur-25"}),Object(v.jsx)("span",{className:"fur-24"}),Object(v.jsx)("span",{className:"fur-23"}),Object(v.jsx)("span",{className:"fur-22"}),Object(v.jsx)("span",{className:"fur-21"}),Object(v.jsx)("span",{className:"fur-20"}),Object(v.jsx)("span",{className:"fur-19"}),Object(v.jsx)("span",{className:"fur-18"}),Object(v.jsx)("span",{className:"fur-17"}),Object(v.jsx)("span",{className:"fur-16"}),Object(v.jsx)("span",{className:"fur-15"}),Object(v.jsx)("span",{className:"fur-14"}),Object(v.jsx)("span",{className:"fur-13"}),Object(v.jsx)("span",{className:"fur-12"}),Object(v.jsx)("span",{className:"fur-11"}),Object(v.jsx)("span",{className:"fur-10"}),Object(v.jsx)("span",{className:"fur-9"}),Object(v.jsx)("span",{className:"fur-8"}),Object(v.jsx)("span",{className:"fur-7"}),Object(v.jsx)("span",{className:"fur-6"}),Object(v.jsx)("span",{className:"fur-5"}),Object(v.jsx)("span",{className:"fur-4"}),Object(v.jsx)("span",{className:"fur-3"}),Object(v.jsx)("span",{className:"fur-2"}),Object(v.jsx)("span",{className:"fur-1"})]})}),Object(v.jsx)("div",{className:"helper-3",children:Object(v.jsxs)("div",{className:"effect-brush",children:[Object(v.jsx)("span",{className:"fur-31"}),Object(v.jsx)("span",{className:"fur-30"}),Object(v.jsx)("span",{className:"fur-29"}),Object(v.jsx)("span",{className:"fur-28"}),Object(v.jsx)("span",{className:"fur-27"}),Object(v.jsx)("span",{className:"fur-26"}),Object(v.jsx)("span",{className:"fur-25"}),Object(v.jsx)("span",{className:"fur-24"}),Object(v.jsx)("span",{className:"fur-23"}),Object(v.jsx)("span",{className:"fur-22"}),Object(v.jsx)("span",{className:"fur-21"}),Object(v.jsx)("span",{className:"fur-20"}),Object(v.jsx)("span",{className:"fur-19"}),Object(v.jsx)("span",{className:"fur-18"}),Object(v.jsx)("span",{className:"fur-17"}),Object(v.jsx)("span",{className:"fur-16"}),Object(v.jsx)("span",{className:"fur-15"}),Object(v.jsx)("span",{className:"fur-14"}),Object(v.jsx)("span",{className:"fur-13"}),Object(v.jsx)("span",{className:"fur-12"}),Object(v.jsx)("span",{className:"fur-11"}),Object(v.jsx)("span",{className:"fur-10"}),Object(v.jsx)("span",{className:"fur-9"}),Object(v.jsx)("span",{className:"fur-8"}),Object(v.jsx)("span",{className:"fur-7"}),Object(v.jsx)("span",{className:"fur-6"}),Object(v.jsx)("span",{className:"fur-5"}),Object(v.jsx)("span",{className:"fur-4"}),Object(v.jsx)("span",{className:"fur-3"}),Object(v.jsx)("span",{className:"fur-2"}),Object(v.jsx)("span",{className:"fur-1"})]})}),Object(v.jsx)("div",{className:"helper-4",children:Object(v.jsxs)("div",{className:"effect-brush",children:[Object(v.jsx)("span",{className:"fur-31"}),Object(v.jsx)("span",{className:"fur-30"}),Object(v.jsx)("span",{className:"fur-29"}),Object(v.jsx)("span",{className:"fur-28"}),Object(v.jsx)("span",{className:"fur-27"}),Object(v.jsx)("span",{className:"fur-26"}),Object(v.jsx)("span",{className:"fur-25"}),Object(v.jsx)("span",{className:"fur-24"}),Object(v.jsx)("span",{className:"fur-23"}),Object(v.jsx)("span",{className:"fur-22"}),Object(v.jsx)("span",{className:"fur-21"}),Object(v.jsx)("span",{className:"fur-20"}),Object(v.jsx)("span",{className:"fur-19"}),Object(v.jsx)("span",{className:"fur-18"}),Object(v.jsx)("span",{className:"fur-17"}),Object(v.jsx)("span",{className:"fur-16"}),Object(v.jsx)("span",{className:"fur-15"}),Object(v.jsx)("span",{className:"fur-14"}),Object(v.jsx)("span",{className:"fur-13"}),Object(v.jsx)("span",{className:"fur-12"}),Object(v.jsx)("span",{className:"fur-11"}),Object(v.jsx)("span",{className:"fur-10"}),Object(v.jsx)("span",{className:"fur-9"}),Object(v.jsx)("span",{className:"fur-8"}),Object(v.jsx)("span",{className:"fur-7"}),Object(v.jsx)("span",{className:"fur-6"}),Object(v.jsx)("span",{className:"fur-5"}),Object(v.jsx)("span",{className:"fur-4"}),Object(v.jsx)("span",{className:"fur-3"}),Object(v.jsx)("span",{className:"fur-2"}),Object(v.jsx)("span",{className:"fur-1"})]})})]})})}function ae(e){var t=e.match,a=n.a.useState([]),c=Object(x.a)(a,2),r=c[0],i=c[1],l=n.a.useState(!0),j=Object(x.a)(l,2),o=j[0],u=j[1];return Object(s.useEffect)((function(){var e=setTimeout((function(){u(!1)}),3e3);return function(){return clearTimeout(e)}}),[]),Object(s.useEffect)((function(){B(28).then((function(e){i(e[0])}))}),[]),Object(v.jsxs)("div",{style:{display:t?"block":"none"},children:[o&&Object(v.jsx)(te,{}),Object(v.jsxs)(ee,{children:[Object(v.jsx)(g,{film:r}),Object(v.jsx)(M,{genreId:28,title:"Adventure"})]})]})}var se=a(289),ne=a(295),ce=a(313),re=a(299),ie=a(315),le=a(304),je=a(311),oe=a(89),ue={url:"http://localhost:3003/rest",timeout:6e3,configHeaders:{Accept:"application/json","Content-Type":"application/json"}},be=L.a.create({baseURL:ue.url,timeout:ue.timeout,headers:ue.configHeaders});function xe(){return(xe=Object(F.a)(W.a.mark((function e(t){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",be.post("/users/signin",t).then((function(e){return e.data})).catch((function(e){throw e})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function me(){return(me=Object(F.a)(W.a.mark((function e(t){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",be.post("/users/signup",t).then((function(e){return e.data})).catch((function(e){throw e})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function pe(e){return fe.apply(this,arguments)}function fe(){return(fe=Object(F.a)(W.a.mark((function e(t){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return be.defaults.headers.common.Authorization="Bearer ".concat(t),e.abrupt("return",be.get("/users/me/library").then((function(e){return e.data})).catch((function(e){throw e})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function de(e){return Oe.apply(this,arguments)}function Oe(){return(Oe=Object(F.a)(W.a.mark((function e(t){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",be.post("/users/available",t).then((function(e){return e.data})).catch((function(e){throw e})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var he={url:"http://localhost:3001/rest",timeout:6e3,configHeaders:{Accept:"application/json","Content-Type":"application/json"}},ve=L.a.create({baseURL:he.url,timeout:he.timeout,headers:he.configHeaders}),Ne=function(e){var t="d";return e?ve.defaults.headers.common.Authorization="Bearer ".concat(e):(ve.defaults.headers.common.Authorization=null,t=(new Date).getTime()),t};function ge(e,t){return ye.apply(this,arguments)}function ye(){return(ye=Object(F.a)(W.a.mark((function e(t,a){var s;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=Ne(t),e.abrupt("return",ve.get("/movies/"+a+"?t="+s).then((function(e){return e.data})).catch((function(e){throw e})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function we(e,t){return Ce.apply(this,arguments)}function Ce(){return(Ce=Object(F.a)(W.a.mark((function e(t,a){var s;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=Ne(t),e.abrupt("return",ve.post("/movies/"+a+"/buy?t="+s).then((function(e){return e.data})).catch((function(e){throw e})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ke={fullname:null,email:null,token:null},Ie=Object(oe.b)({name:"user",initialState:ke,reducers:{logout:function(e){return ke},login:function(e,t){return t.payload}}}),Se=function(e){return function(t){return function(e){return xe.apply(this,arguments)}(e).then((function(e){t(De(e))}))}},Te=function(e){return function(t){return function(e){return me.apply(this,arguments)}(e).then((function(e){t(De(e))}))}},Ae=Ie.actions,De=Ae.login,We=Ae.logout,Fe=Ie.reducer,Pe=a(314);function Le(){var e=Object(b.g)(),t=Object(K.b)(),a=Object(s.useState)(),n=Object(x.a)(a,2),c=n[0],r=n[1],i=Object(s.useState)({error:!1,helperText:""}),l=Object(x.a)(i,2),j=l[0],o=l[1];return Object(v.jsx)(ee,{onlyLogo:!0,children:Object(v.jsxs)(je.a,{component:"main",maxWidth:"xs",children:[Object(v.jsx)(se.a,{}),Object(v.jsxs)(J.a,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(v.jsx)(f.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(v.jsxs)(J.a,{component:"form",onSubmit:function(a){a.preventDefault(),r(!0);var s=new FormData(a.currentTarget),n={email:s.get("email"),password:s.get("password")};t(Se(n)).then((function(){r(!1),e.push("/home")})).catch((function(e){r(!1),o(Object(Y.a)(Object(Y.a)({},j),{},{error:!0,helperText:"Wrong password"})),console.log(e)}))},noValidate:!0,sx:{mt:1},children:[Object(v.jsx)(ne.a,{margin:"normal",defaultValue:"and@mail.it",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0}),Object(v.jsx)(ne.a,{error:j.error,helperText:j.helperText,margin:"normal",defaultValue:"123456",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),Object(v.jsx)(ce.a,{control:Object(v.jsx)(re.a,{value:"remember",color:"primary"}),label:"Remember me"}),Object(v.jsx)(p.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:c?Object(v.jsx)(Pe.a,{size:20,style:{color:"white"}}):"Sign In"}),Object(v.jsxs)(le.a,{container:!0,children:[Object(v.jsx)(le.a,{item:!0,xs:!0}),Object(v.jsx)(le.a,{item:!0,children:Object(v.jsx)(ie.a,{href:"/signup",variant:"body2",children:"Don't have an account? Sign Up"})})]})]})]})]})})}var Ve=a(301),qe=a(300),Ee=a(66),Be=s.forwardRef((function(e,t){return Object(v.jsx)(qe.a,Object(Y.a)({elevation:6,ref:t,variant:"filled"},e))}));function Re(){var e=Object(b.g)(),t=Object(K.b)(),a=Object(Ee.b)(),n=a.handleSubmit,c=a.control,r=a.formState,i=r.isSubmitting;console.log("formState",r);var l=s.useState(!1),j=Object(x.a)(l,2),o=j[0],u=j[1];return Object(v.jsx)(ee,{onlyLogo:!0,children:Object(v.jsxs)(je.a,{component:"main",maxWidth:"xs",children:[Object(v.jsx)(se.a,{}),Object(v.jsx)(Ve.a,{open:o,autoHideDuration:5e3,onClose:function(e,t){"clickaway"!==t&&u(!1)},children:Object(v.jsx)(Be,{severity:"error",children:"Somethings went wrong :("})}),Object(v.jsxs)(J.a,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(v.jsx)(f.a,{component:"h1",variant:"h5",children:"Sign up"}),Object(v.jsxs)(J.a,{component:"form",noValidate:!0,onSubmit:n((function(a){console.log("validated");var s={fullname:a.firstName+" "+a.lastName,email:a.email,password:a.password};t(Te(s)).then((function(){e.push("/home")})).catch((function(e){u(!0),console.log(e)}))})),sx:{mt:3},children:[Object(v.jsxs)(le.a,{container:!0,spacing:2,children:[Object(v.jsx)(le.a,{item:!0,xs:12,sm:6,children:Object(v.jsx)(Ee.a,{name:"firstName",control:c,defaultValue:"",rules:{required:"First name required"},render:function(e){var t=e.field,a=t.onChange,s=t.value,n=e.fieldState.error;return Object(v.jsx)(ne.a,{autoComplete:"fname",label:"First Name",fullWidth:!0,value:s,onChange:a,error:!!n,helperText:n?n.message:null,required:!0})}})}),Object(v.jsx)(le.a,{item:!0,xs:12,sm:6,children:Object(v.jsx)(Ee.a,{name:"lastName",control:c,defaultValue:"",rules:{required:"Last name required"},render:function(e){var t=e.field,a=t.onChange,s=t.value,n=e.fieldState.error;return Object(v.jsx)(ne.a,{autoComplete:"lname",label:"Last Name",fullWidth:!0,value:s,onChange:a,error:!!n,helperText:n?n.message:null,required:!0})}})}),Object(v.jsx)(le.a,{item:!0,xs:12,children:Object(v.jsx)(Ee.a,{name:"email",control:c,defaultValue:"",rules:{required:"Email required",pattern:{value:/\S+@\S+\.\S+/,message:"Entered value does not match email format"},validate:{unique:function(){var e=Object(F.a)(W.a.mark((function e(t){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,de({email:t});case 2:if(e.t0=e.sent.email,e.t0){e.next=5;break}e.t0="Email already exists";case 5:return e.abrupt("return",e.t0);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},render:function(e){var t=e.field,a=t.onChange,s=t.value,n=e.fieldState.error;return Object(v.jsx)(ne.a,{label:"Email",fullWidth:!0,type:"text",value:s,onChange:a,error:!!n,helperText:n?n.message:null,autoComplete:"off",required:!0})}})}),Object(v.jsx)(le.a,{item:!0,xs:12,children:Object(v.jsx)(Ee.a,{name:"password",control:c,defaultValue:"",rules:{required:"Password required"},render:function(e){var t=e.field,a=t.onChange,s=t.value,n=e.fieldState.error;return Object(v.jsx)(ne.a,{label:"Password",fullWidth:!0,type:"password",value:s,onChange:a,error:!!n,helperText:n?n.message:null,autoComplete:"off",required:!0})}})})]}),Object(v.jsx)(p.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},disabled:i,children:i?Object(v.jsx)(Pe.a,{size:20,style:{color:"white"}}):"Sign Up"}),Object(v.jsx)(le.a,{container:!0,justifyContent:"flex-end",children:Object(v.jsx)(le.a,{item:!0,children:Object(v.jsx)(ie.a,{href:"/signin",variant:"body2",children:"Already have an account? Sign in"})})})]})]})]})})}function ze(){var e=Object(b.g)(),t=Object(K.b)(),a=Object(K.c)((function(e){return e.user}));return Object(v.jsx)(ee,{children:Object(v.jsxs)(je.a,{component:"main",maxWidth:"xs",sx:{height:"100%",display:"flex",flexDirection:"column"},children:[Object(v.jsx)(se.a,{}),Object(v.jsxs)(J.a,{sx:{marginTop:8,display:"flex",flexGrow:1,flexDirection:"column",alignItems:"center"},children:[Object(v.jsx)(f.a,{component:"h1",variant:"h5",children:"Account"}),Object(v.jsx)(J.a,{component:"form",noValidate:!0,sx:{mt:3},children:Object(v.jsxs)(le.a,{container:!0,spacing:2,children:[Object(v.jsx)(le.a,{item:!0,xs:12,sm:12,children:Object(v.jsx)(ne.a,{defaultValue:a.fullname,disabled:!0,autoComplete:"fname",name:"firstName",required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0})}),Object(v.jsx)(le.a,{item:!0,xs:12,children:Object(v.jsx)(ne.a,{defaultValue:a.email,disabled:!0,required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email"})})]})})]}),Object(v.jsx)(p.a,{fullWidth:!0,variant:"contained",sx:{mb:5},onClick:function(a){a.preventDefault(),t(function(){var e=Object(F.a)(W.a.mark((function e(t){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t(We()));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).then((function(){e.push("/home")}))},children:"Logout"})]})})}var He=a(306),Ue=a(316);function Ge(e){var t=e.actor;return Object(v.jsxs)("div",{style:{margin:"10px",position:"relative"},children:[Object(v.jsx)("img",{src:t.profilePath,alt:"",style:{borderRadius:"100%",position:"relative",width:100,height:100,objectFit:"cover"}}),Object(v.jsx)(Ue.a,{"aria-label":"add an alarm",style:{top:"0px",left:"0px",position:"absolute",width:100,height:100,color:"white"},component:u.b,to:"/actors/"+t.actorId,children:Object(v.jsx)(f.a,{variant:"caption",children:t.name})})]})}function Me(e){var t=e.cast,a=n.a.useState(t),s=Object(x.a)(a,1)[0],c=n.a.useState([]),r=Object(x.a)(c,2),i=r[0],l=r[1],j=function(e){return!!i.find((function(t){return t===e}))};return Object(v.jsxs)(J.a,{sx:{mt:3},children:[Object(v.jsx)(f.a,{style:{color:"white",textTransform:"capitalize"},variant:"h4",children:"Cast"}),Object(v.jsx)(y.ScrollMenu,{LeftArrow:Xe,RightArrow:Je,style:{overflowX:"hidden"},children:s.map((function(e){return Object(v.jsx)(Ge,{itemId:e.actorId,actor:e,onClick:(t=e.actorId,function(e){e.getItemById,e.scrollToItem;var a=j(t);l((function(e){return a?e.filter((function(e){return e!==t})):e.concat(t)}))}),selected:j(e.actorId)},e.actorId);var t}))})]})}function Ye(e){var t=e.children,a=e.disabled,s=e.onClick;return Object(v.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(v.jsx)(p.a,{variant:"default",disabled:a,onClick:s,children:t})})}function Xe(){var e=n.a.useContext(y.VisibilityContext),t=e.isFirstItemVisible,a=e.scrollPrev;return Object(v.jsx)(Ye,{disabled:t,onClick:function(){return a()},children:Object(v.jsx)(S.a,{style:{color:"white"}})})}function Je(){var e=n.a.useContext(y.VisibilityContext),t=e.isLastItemVisible,a=e.scrollNext;return Object(v.jsx)(Ye,{disabled:t,onClick:function(){return a()},children:Object(v.jsx)(A.a,{style:{color:"white"}})})}var $e=a(318),Ke=a(317),Qe=a(293),Ze=a(294);function _e(e){var t=e.onClose,a=e.open,n=e.film,c=e.setFilm,r=Object(K.b)(),i=Object(s.useState)(!1),l=Object(x.a)(i,2),j=l[0],o=l[1];return Object(v.jsxs)(Ke.a,{onClose:t,open:a,children:[Object(v.jsx)(Qe.a,{sx:{textAlign:"center"},children:n.title}),Object(v.jsx)($e.a,{children:Object(v.jsxs)(Ze.a,{component:"div",sx:{alignItems:"center",display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[Object(v.jsx)("img",{src:n.posterPath,alt:n.title,style:{borderRadius:"3%",width:200}}),Object(v.jsx)(p.a,{onClick:function(){var e;o(!0),r((e=n.movieId,function(){var t=Object(F.a)(W.a.mark((function t(a,s){var n;return W.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=s().user.token,t.abrupt("return",we(n,e));case 2:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}())).then((function(e){c((function(e){return Object(Y.a)(Object(Y.a)({},e),{},{isPurchased:!0})})),t(),o(!1)})).catch((function(e){console.log(e)}))},sx:{width:"200px",marginTop:"15px"},variant:"contained",disabled:j,children:j?Object(v.jsx)(Pe.a,{size:20,style:{color:"white"}}):"PAY ".concat(n.price)})]})})]})}function et(e){var t=e.film,a=e.setFilm,n=Object(b.g)(),c=Object(K.c)((function(e){return e.user})),r=s.useState(!1),i=Object(x.a)(r,2),l=i[0],j=i[1];return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(_e,{open:l,onClose:function(e){j(!1)},film:t,setFilm:a}),Object(v.jsx)(p.a,{onClick:function(){c.token?j(!0):n.push("/signin")},disabled:!!t.isPurchased,sx:{mt:5,mb:5,width:"200px"},variant:"contained",children:t.isPurchased?"BOUGHT":"BUY $ ".concat(t.price)})]})}var tt=a(305),at=a(321),st=a(312),nt=a(302),ct=a(319),rt=a(320);function it(e){var t=e.reviews;return Object(v.jsxs)(Ze.a,{sx:{mt:3},children:[Object(v.jsx)(f.a,{variant:"h4",children:"Reviews"}),Object(v.jsxs)(st.a,{children:[t&&0===t.length&&"No reviews yet",t&&t.map((function(e,t){return Object(v.jsx)(lt,{review:e},t)}))]})]})}function lt(e){var t=e.review;return t.content.length>300&&(t.content=t.content.substr(0,300)+" ... "),Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)(nt.a,{alignItems:"flex-start",children:[Object(v.jsx)(ct.a,{children:Object(v.jsx)(tt.a,{alt:t.author,src:"/static/images/avatar/1.jpg"})}),Object(v.jsx)(rt.a,{primary:t.author,secondary:t.content})]}),Object(v.jsx)(at.a,{variant:"inset",component:"li"})]})}function jt(){var e,t=Object(K.b)(),a=Object(b.h)().id,n=Object(s.useState)(),c=Object(x.a)(n,2),r=c[0],i=c[1];return Object(s.useEffect)((function(){console.log(r)}),[r]),Object(s.useEffect)((function(){var e;a&&t((e=a,function(){var t=Object(F.a)(W.a.mark((function t(a,s){var n;return W.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=s().user.token,console.log("token",n),t.abrupt("return",ge(n,e));case 3:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}())).then((function(e){i(e)})).catch((function(e){console.log(e)}))}),[t,a]),Object(v.jsxs)(ee,{children:[Object(v.jsxs)("div",{style:{textAlign:"center"},children:[r?Object(v.jsx)("img",{alt:r.title,style:{width:"100%",height:"400px",objectFit:"cover"},src:r.backdropPath}):Object(v.jsx)("div",{style:{textAlign:"center",margin:"0 auto"},children:Object(v.jsx)(He.a,{variant:"rectangular",height:400})}),Object(v.jsxs)("div",{style:{margin:"0 auto",marginTop:"15px"},children:[Object(v.jsx)(f.a,{variant:"h3",children:r?r.title:Object(v.jsx)(He.a,{sx:{margin:"auto"},width:400})}),Object(v.jsx)(f.a,{variant:"h6",children:r?"".concat(null===(e=r.releaseDate)||void 0===e?void 0:e.substr(0,4)," - ").concat(r.genres[0].name):Object(v.jsx)(He.a,{sx:{margin:"auto"},width:400})}),r&&Object(v.jsx)(et,{film:r,setFilm:i})]})]}),Object(v.jsxs)(je.a,{maxWidth:"md",children:[Object(v.jsxs)("div",{style:{textAlign:"justify"},children:[Object(v.jsx)(f.a,{variant:"h4",children:"Description"}),Object(v.jsx)(f.a,{variant:"body",children:r?r.overview:Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(He.a,{}),Object(v.jsx)(He.a,{}),Object(v.jsx)(He.a,{}),Object(v.jsx)(He.a,{})]})})]}),Object(v.jsxs)("div",{style:{margin:"0 auto"},children:[r&&r.cast&&Object(v.jsx)(Me,{cast:r.cast}),r&&r.reviews&&Object(v.jsx)(it,{reviews:r.reviews})]})]})]})}function ot(){return Object(v.jsx)(ee,{children:Object(v.jsxs)("div",{style:{display:"flex",flexDirection:"column",height:"100%",alignItems:"center",justifyContent:"center"},children:[Object(v.jsx)(f.a,{variant:"h1",children:"404"}),Object(v.jsx)(f.a,{variant:"h4",children:"Page not found"})]})})}var ut=a(139),bt=["component"];var xt=function(e){var t=e.component,a=Object(ut.a)(e,bt),s=Object(K.c)((function(e){return e.user})).token;return Object(v.jsx)(b.b,Object(Y.a)(Object(Y.a)({},a),{},{render:function(e){return s?Object(v.jsx)(t,Object(Y.a)({},e)):Object(v.jsx)(b.a,{to:"/signin"})}}))},mt=a(15),pt=a(323),ft=a(327),dt=a(326),Ot=a(322),ht=a(324),vt=a(325),Nt=a(136),gt=a.n(Nt);function yt(e){var t=e.movies;return Object(v.jsx)(Ot.a,{component:w.a,children:Object(v.jsxs)(pt.a,{sx:{minWidth:650},"aria-label":"simple table",children:[Object(v.jsx)(ht.a,{children:Object(v.jsxs)(vt.a,{children:[Object(v.jsx)(dt.a,{children:"Title"}),Object(v.jsx)(dt.a,{children:"Purchase Date"}),Object(v.jsx)(dt.a,{children:"Price"}),Object(v.jsx)(dt.a,{})]})}),t?Object(v.jsx)(ft.a,{children:t.map((function(e){return Object(v.jsxs)(vt.a,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[Object(v.jsx)(dt.a,{children:e.movie.title}),Object(v.jsx)(dt.a,{children:gt()(e.purchaseDate).format("DD/MM/YYYY")}),Object(v.jsx)(dt.a,{children:e.price}),Object(v.jsx)(dt.a,{children:Object(v.jsx)(p.a,{component:u.b,to:"/films/"+e.movie.movieId,children:"Show"})})]},e.movie.movieId)}))}):Object(v.jsx)(wt,{})]})})}function wt(){return Object(v.jsx)(ft.a,{children:Object(mt.a)(Array(5)).map((function(e,t){return Object(v.jsxs)(vt.a,{children:[Object(v.jsx)(dt.a,{children:Object(v.jsx)(He.a,{})}),Object(v.jsx)(dt.a,{children:Object(v.jsx)(He.a,{})}),Object(v.jsx)(dt.a,{children:Object(v.jsx)(He.a,{})}),Object(v.jsx)(dt.a,{children:Object(v.jsx)(He.a,{})}),Object(v.jsx)(dt.a,{children:Object(v.jsx)(He.a,{})})]},t)}))})}function Ct(){var e=Object(K.b)(),t=s.useState(),a=Object(x.a)(t,2),n=a[0],c=a[1];return s.useEffect((function(){e(function(){var e=Object(F.a)(W.a.mark((function e(t,a){var s;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=a().user.token,e.abrupt("return",pe(s));case 2:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()).then((function(e){c(e)}))}),[e]),Object(v.jsx)(ee,{children:Object(v.jsx)(je.a,{component:"main",maxWidth:"l",sx:{mt:5,height:"100%",display:"flex",flexDirection:"column"},children:Object(v.jsx)(yt,{movies:n})})})}function kt(){var e=Object(b.h)().actorId,t=s.useState(),a=Object(x.a)(t,2),n=a[0],c=a[1];return s.useEffect((function(){e&&function(e){return E.apply(this,arguments)}(e).then(c)}),[e]),Object(v.jsx)(ee,{children:Object(v.jsxs)(je.a,{component:"main",maxWidth:"md",sx:{height:"100%",display:"flex",flexDirection:"column"},children:[Object(v.jsx)(se.a,{}),Object(v.jsx)(J.a,{sx:{mt:5},children:n?Object(v.jsx)(It,{actor:n}):Object(v.jsx)(He.a,{variant:"circular",width:200,height:200})})]})})}function It(e){var t=e.actor;return Object(v.jsxs)(J.a,{sx:{textAlign:"center"},children:[Object(v.jsxs)(J.a,{children:[Object(v.jsx)("img",{src:t.profilePath,alt:"actor",style:{borderRadius:"100%",position:"relative",width:200,height:200,objectFit:"cover"}}),Object(v.jsx)(f.a,{variant:"h4",children:t.name})]}),Object(v.jsxs)(J.a,{sx:{mt:3,textAlign:"justify"},children:[Object(v.jsxs)(J.a,{children:[Object(v.jsx)(f.a,{sx:{mb:1},variant:"h4",children:"Description"}),Object(v.jsxs)(J.a,{sx:{display:"flex"},children:[Object(v.jsx)(f.a,{style:{fontWeight:600},children:"Name:\xa0"}),Object(v.jsx)(f.a,{children:t.name})]}),Object(v.jsxs)(J.a,{sx:{display:"flex"},children:[Object(v.jsx)(f.a,{style:{fontWeight:600},children:"Birthday:\xa0"}),Object(v.jsx)(f.a,{children:t.birthday})]}),Object(v.jsxs)(J.a,{sx:{display:"flex"},children:[Object(v.jsx)(f.a,{style:{fontWeight:600},children:"Birthplace:\xa0"}),Object(v.jsx)(f.a,{children:t.birthplace})]})]}),Object(v.jsxs)(J.a,{sx:{mt:3},children:[Object(v.jsx)(f.a,{sx:{mb:1},variant:"h4",children:"Biography"}),Object(v.jsx)(f.a,{variant:"body",children:t.biography})]})]})]})}function St(){return Object(v.jsxs)(u.a,{children:[Object(v.jsx)(b.b,{exact:!0,path:"/home",children:function(e){var t=e.match;return Object(v.jsx)(ae,{match:t})}}),Object(v.jsxs)(b.d,{children:[Object(v.jsx)(b.b,{path:"/home",children:null}),Object(v.jsx)(b.b,{exact:!0,path:"/",children:Object(v.jsx)(b.a,{to:"/home"})}),Object(v.jsx)(b.b,{path:"/actors/:actorId",component:kt}),Object(v.jsx)(b.b,{path:"/signin",component:Le}),Object(v.jsx)(b.b,{path:"/signup",component:Re}),Object(v.jsx)(xt,{path:"/account",component:ze}),Object(v.jsx)(xt,{path:"/library",component:Ct}),Object(v.jsx)(b.b,{path:"/films/:id",component:jt}),Object(v.jsx)(b.b,{path:"*",children:Object(v.jsx)(ot,{})})]})]})}var Tt=function(){return Object(v.jsxs)(i.a,{theme:o,children:[Object(v.jsx)(se.a,{}),Object(v.jsx)(St,{})]})},At=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,329)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),s(e),n(e),c(e),r(e)}))},Dt=a(26),Wt=Object(Dt.b)({user:Fe}),Ft=a(43),Pt=a(137),Lt={key:"root",version:1,storage:a.n(Pt).a},Vt=Object(Ft.g)(Lt,Wt),qt=Object(oe.a)({reducer:Vt,middleware:function(e){return e({serializableCheck:{ignoredActions:[Ft.a,Ft.f,Ft.b,Ft.c,Ft.d,Ft.e]}})}}),Et=a(138),Bt=Object(Ft.h)(qt);r.a.render(Object(v.jsx)(n.a.StrictMode,{children:Object(v.jsx)(K.a,{store:qt,children:Object(v.jsx)(Et.a,{loading:null,persistor:Bt,children:Object(v.jsx)(Tt,{})})})}),document.getElementById("root")),At()}},[[221,1,2]]]);
//# sourceMappingURL=main.633ce229.chunk.js.map