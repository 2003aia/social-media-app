(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{210:function(e,t,n){e.exports={profile:"profile_profile__2g4Gc"}},226:function(e,t,n){},329:function(e,t,n){},346:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(56),i=n.n(r),s=(n(329),n(1)),o=n.n(s),l=n(8),j=n(40),d=n(11),u=n(6),b=(n(226),n(261)),O=n(263),x=n(163),h=n(50),p=n(264),v=Object(b.a)({apiKey:"AIzaSyBHvp0BBGhc2vYgJx52cgs2MsUHNYjxRvM",authDomain:"test-10282.firebaseapp.com",databaseURL:"https://test-10282-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"test-10282",storageBucket:"test-10282.appspot.com",messagingSenderId:"382090774299",appId:"1:382090774299:web:d297d0a0780ec20ede35be"}),f=Object(x.b)(v),m=(Object(O.a)(v),Object(h.e)(v)),g=Object(p.a)(v),w=(n(251),n(440)),y=n(443),k=n(266),S=n(174),C=n.n(S),U=n(170),I=n.n(U),T=n(272),E=n.n(T),_=n(24),W=n(453),L=n(271),z=n.n(L),B=n(434),R=n(454),M=n(430),N=n(449),G=n(428),P=n(448),A=n(452),F=n(213),D=n(436),H=n(419),q=n(415),J=n(451),V=n(418),Y=n(120),K=Y.c,X=n(3),Q=function(e){var t,n,c,r=e.comment,i=e.post,s=(K((function(e){return e.post.user})),Object(a.useState)(!1)),j=Object(d.a)(s,2),u=j[0],b=j[1],O=null===r||void 0===r||null===(t=r.likes)||void 0===t?void 0:t.find((function(e){var t;return e==(null===(t=f.currentUser)||void 0===t?void 0:t.uid)}));return Object(X.jsxs)("div",{style:{marginBottom:-10},children:[Object(X.jsxs)(D.a,{alignItems:"flex-start",style:{},children:[Object(X.jsx)(J.a,{children:Object(X.jsx)(w.a,{alt:"Remy Sharp",src:r.author_avatar})}),Object(X.jsx)(q.a,{primary:r.author_nickname,secondary:Object(X.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(X.jsxs)("div",{style:{width:160,wordWrap:"break-word"},children:[Object(X.jsx)(F.a,{sx:{display:"block"},component:"span",variant:"body2",color:"text.primary",children:I()(r.created).fromNow()}),r.message]}),Object(X.jsx)("div",{style:{width:80,justifyContent:"end",display:"flex"},children:Object(X.jsxs)(A.a,{disableSpacing:!0,children:[Object(X.jsx)(y.a,{onClick:Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===r.id||void 0===(null===(t=f.currentUser)||void 0===t?void 0:t.uid)){e.next=8;break}if(!O){e.next=6;break}return e.next=4,Object(h.g)(Object(h.d)(m,"posts/".concat(i.id,"/comments"),r.id),{likes:Object(h.a)(f.currentUser.uid)},{merge:!0});case 4:e.next=8;break;case 6:return e.next=8,Object(h.g)(Object(h.d)(m,"posts/".concat(i.id,"/comments"),r.id),{likes:Object(h.b)(f.currentUser.uid)},{merge:!0});case 8:case"end":return e.stop()}}),e)}))),"aria-label":"add to favorites",children:Object(X.jsx)(C.a,{style:{color:O?"red":"inherit"}})}),null===r||void 0===r||null===(n=r.likes)||void 0===n?void 0:n.length,(null===(c=f.currentUser)||void 0===c?void 0:c.uid)==r.author_id?Object(X.jsx)(y.a,{onClick:Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===r.id||void 0===(null===(t=f.currentUser)||void 0===t?void 0:t.uid)){e.next=6;break}return b(!0),e.next=4,Object(h.g)(Object(h.d)(m,"posts",i.id),{totalMessages:Object(h.f)(-1)},{merge:!0});case 4:return e.next=6,Object(h.c)(Object(h.d)(m,"posts/".concat(i.id,"/comments"),r.id)).then((function(){return b(!1)}));case 6:case"end":return e.stop()}}),e)}))),"aria-label":"add to favorites",children:1==u?Object(X.jsx)(W.a,{}):Object(X.jsx)(V.a,{})}):null]})})]})})]}),Object(X.jsx)(H.a,{variant:"inset",component:"li",style:{marginTop:-20}})]},r.id)},Z=n(268),$=n.n(Z),ee=n(269),te=n.n(ee),ne={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",boxShadow:24,p:4},ae=function(e){var t,n=e.open,c=e.setOpen,r=(e.id,e.post),i=Object(a.useState)([]),s=Object(d.a)(i,2),u=s[0],b=s[1],O=Object(a.useState)(""),x=Object(d.a)(O,2),h=x[0],p=x[1],v=K((function(e){return e.post.user}));return Object(a.useEffect)((function(){var e=Object(_.l)(Object(_.c)(m,"posts/".concat(r.id,"/comments")),Object(_.i)(10));Object(_.j)(e,(function(e){var t=[];e.forEach((function(e){console.log(e.data().text,"doc"),t.push(Object(j.a)(Object(j.a)({},e.data()),{},{id:e.id,post:r}))})),b(t),console.log(t,"list")}))}),[]),console.log(r.totalMessages,"posttotal"),Object(X.jsx)("div",{style:{marginTop:30,display:"flex",flexWrap:"wrap",justifyContent:"space-evenly",overflow:"auto",alignItems:"start"},children:Object(X.jsx)(B.a,{open:n,onClose:function(){return c(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(X.jsxs)(R.a,{sx:ne,children:[Object(X.jsx)(re,{post:r}),Object(X.jsxs)("div",{style:{display:"flex",justifyContent:"space-evenly",marginBottom:20},children:[Object(X.jsx)(M.a,{InputProps:{startAdornment:Object(X.jsx)(N.a,{position:"start",children:Object(X.jsx)(w.a,{src:null===v||void 0===v?void 0:v.avatar,sx:{width:25,height:25},children:null===v||void 0===v||null===(t=v.nickname)||void 0===t?void 0:t.charAt(0)})})},value:h,onChange:function(e){return p(e.currentTarget.value)},fullWidth:!0,style:{marginLeft:10},label:"create message",variant:"standard",name:"create"}),Object(X.jsx)(y.a,{onClick:Object(l.a)(o.a.mark((function e(){var t,n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(_.e)(Object(_.c)(m,"posts/".concat(r.id,"/comments"))),a=Object(_.e)(m,"posts",r.id),e.next=4,Object(_.m)(n,{author_avatar:null===v||void 0===v?void 0:v.avatar,author_id:null===(t=f.currentUser)||void 0===t?void 0:t.uid,author_nickname:v.nickname,message:h,created:(new Date).toISOString()});case 4:return e.next=6,Object(_.n)(a,{totalMessages:Object(_.h)(1)}).then((function(){return p("")}));case 6:case"end":return e.stop()}}),e)}))),children:""!==h?Object(X.jsx)(G.a,{title:"save",children:Object(X.jsx)($.a,{})}):Object(X.jsx)(G.a,{title:"create",children:Object(X.jsx)(te.a,{})})})]}),Object(X.jsx)(P.a,{sx:{width:"100%",maxWidth:360,bgcolor:"background.paper",marginTop:-2},children:u.map((function(e){return Object(X.jsx)(Q,{comment:e,post:r})}))})]})})})},ce=n(431),re=function(e){var t,n,c,r,i=e.post,s=Object(a.useState)(!1),j=Object(d.a)(s,2),u=(j[0],j[1],Object(a.useState)(!1)),b=Object(d.a)(u,2),O=b[0],x=b[1],h=Object(a.useState)(!1),p=Object(d.a)(h,2),v=p[0],g=p[1],S=(K((function(e){return e.post.user})),null===i||void 0===i||null===(t=i.likes)||void 0===t?void 0:t.find((function(e){var t;return e==(null===(t=f.currentUser)||void 0===t?void 0:t.uid)})));return Object(X.jsx)(X.Fragment,{children:Object(X.jsxs)(ce.a.Event,{children:[Object(X.jsx)(ce.a.Label,{children:Object(X.jsx)(w.a,{sx:{bgcolor:k.a[300]},src:null===i||void 0===i?void 0:i.avatar,"aria-label":"recipe",children:null===i||void 0===i||null===(n=i.author_nickname)||void 0===n?void 0:n.charAt(0)})}),Object(X.jsxs)(ce.a.Content,{children:[Object(X.jsxs)(ce.a.Summary,{children:[Object(X.jsx)(ce.a.User,{children:i.author_nickname}),Object(X.jsx)(ce.a.Date,{children:I()(null===i||void 0===i?void 0:i.created).fromNow()})]}),Object(X.jsx)(ce.a.Extra,{text:!0,children:i.text}),i.image_url?Object(X.jsx)(ce.a.Extra,{images:!0,children:Object(X.jsx)("a",{children:Object(X.jsx)("img",{style:{width:150},src:i.image_url})})}):null,Object(X.jsxs)(ce.a.Meta,{children:[Object(X.jsx)(y.a,{onClick:Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===i.id||void 0===(null===(t=f.currentUser)||void 0===t?void 0:t.uid)){e.next=8;break}if(!S){e.next=6;break}return e.next=4,Object(_.m)(Object(_.e)(m,"posts",i.id),{likes:Object(_.a)(f.currentUser.uid)},{merge:!0});case 4:e.next=8;break;case 6:return e.next=8,Object(_.m)(Object(_.e)(m,"posts",i.id),{likes:Object(_.b)(f.currentUser.uid)},{merge:!0});case 8:case"end":return e.stop()}}),e)}))),"aria-label":"add to favorites",children:Object(X.jsx)(C.a,{style:{color:S?"red":"inherit"}})}),null===i||void 0===i||null===(c=i.likes)||void 0===c?void 0:c.length,Object(X.jsx)(y.a,{"aria-label":"share",onClick:function(){return g(!0)},children:Object(X.jsx)(z.a,{})}),i.totalMessages,Object(X.jsx)(y.a,{onClick:Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(i.id,"userId"),x(!0),null===i.user_id){e.next=5;break}return e.next=5,Object(_.d)(Object(_.e)(m,"posts/".concat(null===i||void 0===i?void 0:i.id,"/comments"))).then(Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(_.d)(Object(_.e)(m,"posts",null===i||void 0===i?void 0:i.id)).then((function(){x(!1)}));case 2:case"end":return e.stop()}}),e)}))));case 5:case"end":return e.stop()}}),e)}))),"aria-label":"delete",children:1==O?Object(X.jsx)(W.a,{}):(null===f||void 0===f||null===(r=f.currentUser)||void 0===r?void 0:r.uid)==(null===i||void 0===i?void 0:i.user_id)?Object(X.jsx)(E.a,{}):null}),Object(X.jsx)(ae,{open:v,setOpen:g,id:null===i||void 0===i?void 0:i.id,post:i})]})]})]})})};function ie(e){e.index,e.currentId;var t=e.posts;return Object(X.jsx)("div",{style:{marginTop:20,display:"flex",justifyContent:"center",alignItems:"center"},children:Object(X.jsx)(ce.a,{children:null===t||void 0===t?void 0:t.map((function(e){return Object(X.jsx)(re,{post:e})}))})})}var se=n(30),oe=n(91),le=n(12),je=n(347),de=n(447),ue=n(445),be=n(444),Oe=n(53),xe=n(437),he=n(446),pe=n(289),ve=n(284),fe=n.n(ve),me=n(285),ge=n.n(me),we=n(234),ye=n.n(we),ke=n(162),Se=n.n(ke),Ce=n(233),Ue=n.n(Ce),Ie=n(286),Te=n.n(Ie),Ee=n(435),_e=n(429),We=n(438),Le=function(){var e=Object(a.useState)(""),t=Object(d.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),i=Object(d.a)(r,2),s=i[0],j=i[1],u=Object(a.useState)(""),b=Object(d.a)(u,2),O=b[0],p=b[1],v=Object(a.useState)(""),g=Object(d.a)(v,2),w=g[0],y=g[1],k=Object(a.useState)(""),S=Object(d.a)(k,2),C=S[0],U=S[1],I=Object(a.useState)(""),T=Object(d.a)(I,2),E=T[0],_=T[1],W=Object(se.f)();return console.log(n),Object(X.jsx)("div",{className:"ui container",style:{background:"#fff"},children:Object(X.jsx)("div",{style:{marginTop:30,paddingBottom:200,display:"flex",justifyContent:"center"},children:Object(X.jsx)(Ee.a,{children:Object(X.jsxs)(Ee.a.Content,{children:[Object(X.jsx)(Ee.a.Header,{children:"SignUp"}),Object(X.jsxs)(_e.a,{style:{width:300,marginTop:30},children:[Object(X.jsxs)(_e.a.Group,{widths:"equal",children:[Object(X.jsx)(_e.a.Input,{value:n,onChange:function(e){c(e.target.value)},fluid:!0,label:"email",placeholder:"email"}),Object(X.jsx)(_e.a.Input,{value:C,onChange:function(e){U(e.target.value)},fluid:!0,label:"nickname",placeholder:"nickname"})]}),Object(X.jsxs)(_e.a.Group,{widths:"equal",children:[Object(X.jsx)(_e.a.Input,{value:E,onChange:function(e){_(e.target.value)},fluid:!0,label:"age",placeholder:"age"}),Object(X.jsx)(_e.a.Input,{value:s,onChange:function(e){j(e.target.value)},fluid:!0,label:"password",placeholder:"password"})]}),Object(X.jsx)(Ee.a.Content,{extra:!0,children:Object(X.jsx)("div",{className:"ui two buttons",children:Object(X.jsx)(We.a,{basic:!0,color:"green",onClick:function(){Object(x.a)(f,n,s).then(Object(l.a)(o.a.mark((function e(){var t,a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===(null===(t=f.currentUser)||void 0===t?void 0:t.uid)){e.next=5;break}return c=null===(a=f.currentUser)||void 0===a?void 0:a.uid,console.log("firestore"),e.next=5,Object(h.g)(Object(h.d)(m,"users",c),{email:n,nickname:C,age:E}).then((function(){W("/home/")})).catch((function(e){"auth/email-already-exists"==e.code&&console.log("email already exists")}));case 5:case"end":return e.stop()}}),e)}))))},children:"submit"})})})]}),Object(X.jsx)(Ee.a.Header,{style:{marginTop:30},children:"Login"}),Object(X.jsxs)(_e.a,{style:{width:300,marginTop:30},children:[Object(X.jsxs)(_e.a.Group,{widths:"equal",children:[Object(X.jsx)(_e.a.Input,{value:O,onChange:function(e){p(e.target.value)},fluid:!0,label:"email",placeholder:"email"}),Object(X.jsx)(_e.a.Input,{value:w,onChange:function(e){y(e.target.value)},fluid:!0,label:"password",placeholder:"password"})]}),Object(X.jsx)(Ee.a.Content,{extra:!0,children:Object(X.jsx)("div",{className:"ui two buttons",children:Object(X.jsx)(We.a,{basic:!0,color:"green",onClick:function(){Object(x.c)(f,O,w).then((function(){return W("/home/")})).catch((function(e){console.log(e,"signed in error")}))},children:"submit"})})})]})]})})})})},ze=n(439),Be=n(423),Re=n(278),Me=n.n(Re),Ne=n(424),Ge=n(276),Pe=n.n(Ge),Ae=n(425),Fe=n(426),De=n(277),He=n.n(De),qe=function(e){e.visible,e.setVisible;var t=e.open,n=e.setOpen;return Object(X.jsxs)(ze.a,{variant:"permanent",open:t,onClose:function(){return n(!1)},sx:Object(u.a)({width:240,flexShrink:0},"& .MuiDrawer-paper",{width:240,boxSizing:"border-box"}),children:[Object(X.jsx)(be.a,{}),Object(X.jsxs)(ue.a,{sx:{overflow:"auto"},children:[Object(X.jsx)(P.a,{children:["HOME","LOGIN","EXIT"].map((function(e,t){return Object(X.jsx)(oe.b,{to:0==t?"/todoapp/home/":"/todoapp/login",children:Object(X.jsxs)(D.a,{button:!0,onClick:function(){return function(e){2==e&&f.signOut(),console.log(e,"index")}(t)},children:[Object(X.jsx)(Be.a,{children:0==t?Object(X.jsx)(Ne.a,{}):1==t?Object(X.jsx)(Pe.a,{}):Object(X.jsx)(He.a,{})}),Object(X.jsx)(q.a,{primary:e})]},e)})}))}),Object(X.jsx)(H.a,{}),Object(X.jsx)(P.a,{children:["PROFILE","SETTINGS"].map((function(e,t){return Object(X.jsx)(oe.b,{to:0==t?"/todoapp/profile/":1==t?"/todoapp/settings":"/todoapp/login",children:Object(X.jsxs)(D.a,{button:!0,children:[Object(X.jsx)(Be.a,{children:t%2===0?Object(X.jsx)(Me.a,{}):Object(X.jsx)(Se.a,{})}),Object(X.jsx)(q.a,{primary:e})]},e)})}))})]})]})},Je=function(e){e.index,e.currentId,e.posts;var t=Object(a.useState)(""),n=Object(d.a)(t,2),c=n[0],r=n[1],i=Object(a.useState)([]),s=Object(d.a)(i,2),o=s[0],l=s[1];return Object(a.useEffect)((function(){var e=Object(_.l)(Object(_.c)(m,"posts"),Object(_.o)("text","==",c),Object(_.k)("created","desc"),Object(_.i)(10));Object(_.j)(e,(function(e){var t=[];e.forEach((function(e){console.log(e.data().text,"doc"),t.push(Object(j.a)(Object(j.a)({},e.data()),{},{id:e.id}))})),console.log(t,"list"),l(t)}))}),[c]),Object(X.jsxs)(ze.a,{variant:"permanent",sx:Object(u.a)({width:270,flexShrink:0},"& .MuiDrawer-paper",{width:270,boxSizing:"border-box"}),anchor:"right",children:[Object(X.jsx)(be.a,{}),Object(X.jsx)(ue.a,{sx:{overflow:"auto"},children:Object(X.jsxs)(P.a,{children:[Object(X.jsx)(D.a,{children:Object(X.jsx)(M.a,{value:c,onChange:function(e){r(e.currentTarget.value)},fullWidth:!0,id:"input-with-icon-textfield",label:"Search...",InputProps:{startAdornment:Object(X.jsx)(N.a,{position:"start",children:Object(X.jsx)(Ae.a,{})}),endAdornment:Object(X.jsx)(X.Fragment,{children:c.length>0?Object(X.jsx)(N.a,{position:"start",children:Object(X.jsx)(y.a,{onClick:function(){r("")},children:Object(X.jsx)(Fe.a,{})})}):null})},variant:"standard"})}),o.length>0?Object(X.jsx)(D.a,{children:Object(X.jsx)(ie,{posts:o})}):Object(X.jsx)("div",{style:{fontSize:19,color:"#c6cccf",fontWeight:"900",display:"flex",justifyContent:"center"},children:"type something..."})]})})]})},Ve=n(291),Ye=n(432),Ke=n(450),Xe=n(283),Qe=n.n(Xe),Ze=n(282),$e=n.n(Ze),et=n(281),tt=n.n(et),nt=n(211),at=n(442),ct=n(280),rt=n.n(ct),it=n(84),st=Object(le.a)("input")({display:"none"}),ot=function(e){var t=e.setOpenCreatePost,n=K((function(e){return e.post.user})),c=Object(a.useState)(null),r=Object(d.a)(c,2),i=r[0],s=r[1],u=Object(a.useRef)(),b=Object(n),O=Object(a.useState)(!1),x=Object(d.a)(O,2),h=x[0],p=x[1],v=function(){var e=Object(l.a)(o.a.mark((function e(){var t,n,a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=i){e.next=2;break}return e.abrupt("return",null);case 2:return n=Object(it.c)(g,"files/".concat(null===(t=f.currentUser)||void 0===t?void 0:t.uid,"/").concat(i.name)),a=Object(it.d)(n,i,{contentType:"image/png"}),e.prev=4,e.next=7,a;case 7:return e.next=9,Object(it.a)(n);case 9:return c=e.sent,e.abrupt("return",c);case 13:return e.prev=13,e.t0=e.catch(4),console.log(e.t0),e.abrupt("return",null);case 17:case"end":return e.stop()}}),e,null,[[4,13]])})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(l.a)(o.a.mark((function e(){var n,a,c,r,s,l,d;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),e.next=3,v();case 3:if(null==(a=e.sent)&&i&&(a=i),void 0===(null===(n=f.currentUser)||void 0===n?void 0:n.uid)){e.next=11;break}return null===(c=f.currentUser)||void 0===c?void 0:c.uid,d=Object(_.e)(Object(_.c)(m,"posts")),console.log("values form",Object(j.a)(Object(j.a)({},null===u||void 0===u||null===(r=u.current)||void 0===r?void 0:r.values),{},{image_url:a})),e.next=11,Object(_.m)(d,Object(j.a)(Object(j.a)({},null===u||void 0===u||null===(s=u.current)||void 0===s?void 0:s.values),{},{image_url:a,image_name:void 0==(null===i||void 0===i?void 0:i.name)?null:null===i||void 0===i?void 0:i.name,user_id:null===(l=f.currentUser)||void 0===l?void 0:l.uid,author_nickname:void 0==(null===b||void 0===b?void 0:b.nickname)?null:null===b||void 0===b?void 0:b.nickname,avatar:void 0==(null===b||void 0===b?void 0:b.avatar)?null:null===b||void 0===b?void 0:b.avatar,created:(new Date).toISOString()})).then((function(){console.log("created"),p(!1),t(!1)}));case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(X.jsxs)("div",{style:{padding:10},children:[Object(X.jsx)("div",{style:{display:"flex",overflow:"auto",justifyContent:"center"},children:null!==i?Object(X.jsx)("div",{style:{width:300,height:300,display:"flex",justifyContent:"space-evenly"},children:Object(X.jsx)("img",{style:{width:200,height:400},alt:"imagePost",src:null!==i&&void 0!==i?URL.createObjectURL(void 0!==i?i:""):""})}):Object(X.jsx)(rt.a,{sx:{width:200,height:200,color:"#e0e0e0"}})}),Object(X.jsx)(nt.c,{initialValues:{text:""},onSubmit:function(e){w(),console.log(e,"values")},innerRef:u,children:Object(X.jsxs)(nt.b,{children:[Object(X.jsx)(nt.a,{maxRows:4,multiline:!0,variant:"standard",fullWidth:!0,label:"text",as:M.a,name:"text",placeholder:"text"}),Object(X.jsx)("br",{}),Object(X.jsx)("br",{}),Object(X.jsxs)("label",{style:{width:"100%"},htmlFor:"contained-button-file",children:[Object(X.jsx)(st,{id:"contained-button-file",name:"file",onChange:function(e){var t=e.target.files[0];s(t)},accept:"image/*",multiple:!0,type:"file"}),Object(X.jsx)(at.a,{fullWidth:!0,variant:"contained",color:"inherit",component:"span",children:"Upload image"})]}),Object(X.jsx)("br",{}),Object(X.jsx)("br",{}),1==h?Object(X.jsx)(W.a,{}):Object(X.jsx)(at.a,{variant:"contained",color:"success",type:"submit",fullWidth:!0,children:"post"})]})})]})},lt=n(455),jt=n(427),dt=Object(le.a)("input")({display:"none"}),ut=function(e){var t,n,c=e.edit,r=e.image,i=e.setImage,s=e.setEdit,j=K((function(e){return e.post.user})),u=Object(j),b=Object(a.useState)(null===(t=f.currentUser)||void 0===t?void 0:t.email),O=Object(d.a)(b,2),x=O[0],h=O[1],p=Object(a.useState)(null===u||void 0===u?void 0:u.nickname),v=Object(d.a)(p,2),w=v[0],k=v[1],S=Object(a.useState)(!1),C=Object(d.a)(S,2),U=C[0],I=C[1],T=function(){var e=Object(l.a)(o.a.mark((function e(){var t,n,a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=r){e.next=2;break}return e.abrupt("return",null);case 2:return n=Object(it.c)(g,"files/".concat(null===(t=f.currentUser)||void 0===t?void 0:t.uid,"/avatar")),a=Object(it.d)(n,r,{contentType:"image/png"}),e.prev=4,e.next=7,a;case 7:return e.next=9,Object(it.a)(n);case 9:return c=e.sent,e.abrupt("return",c);case 13:return e.prev=13,e.t0=e.catch(4),console.log(e.t0),e.abrupt("return",null);case 17:case"end":return e.stop()}}),e,null,[[4,13]])})));return function(){return e.apply(this,arguments)}}();return Object(X.jsxs)(X.Fragment,{children:[Object(X.jsx)(B.a,{open:c,onClose:function(){return s(!1)},children:Object(X.jsx)(R.a,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"auto",bgcolor:"background.paper",boxShadow:24,p:4},children:Object(X.jsxs)(lt.a,{sx:{m:-1},children:[Object(X.jsx)(y.a,{onClick:function(){return s(!1)},style:{marginLeft:"70%"},children:Object(X.jsx)(jt.a,{})}),Object(X.jsxs)("label",{style:{width:"100%"},htmlFor:"contained-button-file",children:[Object(X.jsx)(dt,{id:"contained-button-file",name:"file",onChange:function(e){var t=e.target.files[0];i(t)},accept:"image/*",multiple:!0,type:"file"}),Object(X.jsx)(at.a,{fullWidth:!0,style:{width:"100%"},variant:"contained",component:"span",children:"Upload image"})]}),Object(X.jsx)("br",{}),Object(X.jsx)(M.a,{color:"success",fullWidth:!0,name:"email",label:"email",variant:"standard",value:x,onChange:function(e){h(e.currentTarget.value)}}),Object(X.jsx)("br",{}),Object(X.jsx)(M.a,{color:"success",fullWidth:!0,name:"email",label:"nickname",variant:"standard",value:w,onChange:function(e){k(e.currentTarget.value)}}),Object(X.jsx)("br",{}),1==U?Object(X.jsx)(W.a,{}):Object(X.jsx)(at.a,{style:{width:"100%"},onClick:Object(l.a)(o.a.mark((function e(){var t,n,a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===(null===(t=f.currentUser)||void 0===t?void 0:t.uid)){e.next=9;break}return I(!0),e.next=4,T();case 4:return null==(a=e.sent)&&r&&(a=r),c=Object(_.e)(m,"users",null===(n=f.currentUser)||void 0===n?void 0:n.uid),e.next=9,Object(_.n)(c,{email:x,nickname:w,avatar:a}).then((function(){I(!1)}));case 9:case"end":return e.stop()}}),e)}))),fullWidth:!0,children:"submit"})]})})}),Object(X.jsx)("h2",{style:{wordWrap:"break-word",width:200,color:"#585859"},children:(null===(n=f.currentUser)||void 0===n?void 0:n.email)||"user"}),Object(X.jsx)("h3",{style:{wordWrap:"break-word",width:200,color:"#585859"},children:null===u||void 0===u?void 0:u.nickname})]})},bt=n(210),Ot=n.n(bt);function xt(e){var t=e.children,n=e.value,a=e.index,c=Object(Ve.a)(e,["children","value","index"]);return Object(X.jsx)("div",Object(j.a)(Object(j.a)({role:"tabpanel",hidden:n!==a,id:"simple-tabpanel-".concat(a),"aria-labelledby":"simple-tab-".concat(a)},c),{},{children:n===a&&Object(X.jsx)(ue.a,{sx:{p:2},children:Object(X.jsx)("div",{children:t})})}))}var ht=function(e){e.posts;var t,n=Object(a.useState)(0),c=Object(d.a)(n,2),r=c[0],i=c[1],s=Object(a.useState)(null),o=Object(d.a)(s,2),l=o[0],u=(o[1],Object(a.useState)(!1)),b=Object(d.a)(u,2),O=b[0],x=b[1],h=Object(a.useState)(!1),p=Object(d.a)(h,2),v=p[0],g=p[1],y=(Boolean(l),Object(a.useState)([])),k=Object(d.a)(y,2),S=k[0],C=k[1],U=K((function(e){return e.post.user})),I=Object(a.useState)(null),T=Object(d.a)(I,2),E=T[0],W=T[1];return Object(a.useEffect)((function(){var e;if(void 0!==(null===f||void 0===f||null===(e=f.currentUser)||void 0===e?void 0:e.uid)){var t,n=Object(_.l)(Object(_.c)(m,"posts"),Object(_.o)("user_id","==",null===(t=f.currentUser)||void 0===t?void 0:t.uid),Object(_.k)("created","desc"),Object(_.i)(10));Object(_.j)(n,(function(e){var t=[];e.forEach((function(e){console.log(e.data().text,"doc"),t.push(Object(j.a)(Object(j.a)({},e.data()),{},{id:e.id}))})),C(t)}))}}),[]),Object(X.jsxs)("div",{className:Ot.a.profile,children:[Object(X.jsxs)("div",{className:Ot.a.first,children:[null!==E?Object(X.jsx)(w.a,{style:{width:200,height:200},alt:"imagePost",src:null!==E&&void 0!==E?URL.createObjectURL(void 0!==E?E:""):""}):Object(X.jsx)(w.a,{alt:"userAvatar",src:null===U||void 0===U?void 0:U.avatar,sx:{width:200,height:200},children:null===(t=U.nickname)||void 0===t?void 0:t.charAt(0)}),Object(X.jsx)(ut,{setEdit:x,edit:O,image:E,setImage:W}),Object(X.jsx)(We.a,{onClick:function(){x(!0)},style:{width:"100%",maxWidth:200,marginTop:10},children:1==O?"cancel":"Edit profile"})]}),Object(X.jsxs)("div",{className:Ot.a.second,children:[Object(X.jsxs)(Ye.a,{indicatorColor:"primary",variant:"fullWidth",textColor:"inherit",value:r,onChange:function(e,t){i(t)},"aria-label":"icon label tabs example",children:[Object(X.jsx)(Ke.a,{style:{color:"#585859"},icon:Object(X.jsx)(tt.a,{}),label:"POSTS"}),Object(X.jsx)(Ke.a,{style:{color:"#585859"},icon:Object(X.jsx)($e.a,{}),label:"SETTINGS"}),Object(X.jsx)(Ke.a,{style:{color:"#585859"},icon:Object(X.jsx)(Qe.a,{}),label:"NEARBY"})]}),Object(X.jsxs)(xt,{value:r,index:0,children:[Object(X.jsx)(We.a,{fluid:!0,onClick:function(e){g(!0)},children:"create new post"}),Object(X.jsx)(B.a,{open:v,onClose:function(){return g(!1)},children:Object(X.jsx)(R.a,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"auto",bgcolor:"background.paper",boxShadow:24,p:4},children:Object(X.jsx)(ot,{setOpenCreatePost:g})})}),Object(X.jsx)(ie,{posts:S})]}),Object(X.jsx)(xt,{value:r,index:1,children:"Item Two"}),Object(X.jsx)(xt,{value:r,index:2,children:"Item Three"})]})]})},pt=n(194),vt=Object(pt.b)({name:"post",initialState:{colors:["black","pink","red","orange","yellow","olive","green","teal","blue","violet","purple","brown"],index:0,user:{}},reducers:{postData:function(e,t){e.user=t.payload}}}),ft=vt.actions.postData,mt=vt.reducer,gt=Object(le.a)("div")((function(e){var t=e.theme;return Object(u.a)({position:"relative",borderRadius:t.shape.borderRadius,backgroundColor:Object(je.a)(t.palette.common.white,.15),"&:hover":{backgroundColor:Object(je.a)(t.palette.common.white,.25)},marginRight:t.spacing(2),marginLeft:0,width:"100%"},t.breakpoints.up("sm"),{marginLeft:t.spacing(3),width:"auto"})})),wt=Object(le.a)("div")((function(e){return{padding:e.theme.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}})),yt=Object(le.a)(Oe.c)((function(e){var t=e.theme;return{color:"inherit","& .MuiInputBase-input":Object(u.a)({padding:t.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(t.spacing(4),")"),transition:t.transitions.create("width"),width:"100%"},t.breakpoints.up("md"),{width:"20ch"})}}));var kt=function(){var e,t,n=Object(a.useState)(3),c=Object(d.a)(n,2),r=c[0],i=(c[1],Object(a.useState)(0)),s=Object(d.a)(i,2),u=s[0],b=(s[1],Object(a.useState)([])),O=Object(d.a)(b,2),x=(O[0],O[1],Object(a.useState)([])),h=Object(d.a)(x,2),p=h[0],v=h[1],g=Object(a.useState)(!1),w=Object(d.a)(g,2),k=w[0],S=w[1],C=Object(a.useState)([]),U=Object(d.a)(C,2),I=(U[0],U[1],Object(se.f)()),T=Object(Y.b)();Object(a.useEffect)((function(){var e=Object(_.l)(Object(_.c)(m,"posts"),Object(_.k)("created","desc"),Object(_.i)(10));Object(_.j)(e,(function(e){var t=[];e.forEach((function(e){console.log(e.data().text,"doc"),t.push(Object(j.a)(Object(j.a)({},e.data()),{},{id:e.id}))})),console.log(t,"list"),v(t)})),function(){var e=Object(l.a)(o.a.mark((function e(){var t,n,a,c,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===(null===(t=f.currentUser)||void 0===t?void 0:t.uid)){e.next=8;break}return a=null===(n=f.currentUser)||void 0===n?void 0:n.uid,c=Object(_.e)(m,"users",a),e.next=5,Object(_.f)(c);case 5:r=e.sent,console.log(r.data(),"usersnap"),r.exists()&&T(ft(r.data()));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[null===(e=f.currentUser)||void 0===e?void 0:e.uid]),console.log(null===(t=f.currentUser)||void 0===t?void 0:t.uid,"id"),Object(a.useEffect)((function(){null!==f.currentUser?I("/todoapp/home"):I("/todoapp/login")}),[f.currentUser]);var E=Object(a.useState)(null),W=Object(d.a)(E,2),L=W[0],z=W[1],B=Object(a.useState)(null),R=Object(d.a)(B,2),M=R[0],N=R[1],G=(Boolean(L),Boolean(M)),P=function(){N(null)},A="primary-search-account-menu-mobile",D=Object(X.jsxs)(pe.a,{anchorEl:M,anchorOrigin:{vertical:"top",horizontal:"right"},id:A,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:G,onClose:P,children:[Object(X.jsxs)(he.a,{children:[Object(X.jsx)(y.a,{size:"large","aria-label":"show 4 new mails",color:"inherit",children:Object(X.jsx)(xe.a,{badgeContent:4,color:"error",children:Object(X.jsx)(Se.a,{})})}),Object(X.jsx)("p",{children:"messages"})]}),Object(X.jsxs)(he.a,{children:[Object(X.jsx)(y.a,{size:"large","aria-label":"show 17 new notifications",color:"inherit",children:Object(X.jsx)(xe.a,{badgeContent:17,color:"error",children:Object(X.jsx)(Ue.a,{})})}),Object(X.jsx)("p",{children:"notification"})]}),Object(X.jsx)(oe.b,{to:"/profile",children:Object(X.jsxs)(he.a,{children:[Object(X.jsx)(y.a,{size:"large","aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",color:"inherit",children:Object(X.jsx)(ye.a,{})}),Object(X.jsx)("p",{children:"profile"})]})})]});return Object(X.jsxs)("div",{style:{background:"#fff"},children:[Object(X.jsxs)(ue.a,{sx:{flexGrow:1},children:[Object(X.jsx)(de.a,{sx:{zIndex:function(e){return e.zIndex.drawer+1}},style:{},position:"fixed",children:Object(X.jsxs)(be.a,{children:[Object(X.jsx)(y.a,{size:"large",edge:"start",color:"inherit",onClick:function(){S(!0)},sx:{mr:10},children:Object(X.jsx)(fe.a,{})}),Object(X.jsx)(F.a,{variant:"h6",noWrap:!0,component:"div",sx:{display:{xs:"none",sm:"block"}},children:"User"}),Object(X.jsxs)(gt,{children:[Object(X.jsx)(wt,{children:Object(X.jsx)(ge.a,{})}),Object(X.jsx)(yt,{placeholder:"Search\u2026",inputProps:{"aria-label":"search"}})]}),Object(X.jsx)(ue.a,{sx:{flexGrow:1}}),Object(X.jsxs)(ue.a,{sx:{display:{xs:"none",md:"flex"}},children:[Object(X.jsx)(y.a,{size:"large","aria-label":"show 4 new mails",color:"inherit",children:Object(X.jsx)(xe.a,{badgeContent:4,color:"error",children:Object(X.jsx)(Se.a,{})})}),Object(X.jsx)(y.a,{size:"large","aria-label":"show 17 new notifications",color:"secondary",children:Object(X.jsx)(xe.a,{badgeContent:17,color:"error",children:Object(X.jsx)(Ue.a,{})})}),Object(X.jsx)(oe.b,{to:"/profile",children:Object(X.jsx)(y.a,{size:"large",edge:"end","aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",onClick:function(e){z(e.currentTarget)},color:"inherit",children:Object(X.jsx)(ye.a,{style:{color:"#fff"}})})})]}),Object(X.jsx)(ue.a,{sx:{display:{xs:"flex",md:"none"}},children:Object(X.jsx)(y.a,{size:"large","aria-label":"show more","aria-controls":A,"aria-haspopup":"true",onClick:function(e){N(e.currentTarget)},color:"inherit",children:Object(X.jsx)(Te.a,{})})})]})}),D]}),Object(X.jsx)(qe,{visible:k,setVisible:S}),Object(X.jsx)(Je,{posts:p,currentId:r,index:u}),Object(X.jsx)(be.a,{}),Object(X.jsx)(ue.a,{component:"main",sx:{flexGrow:1,p:3},children:Object(X.jsxs)(se.c,{children:[Object(X.jsx)(se.a,{path:"/todoapp/home/",element:Object(X.jsx)("div",{style:{paddingBottom:30,textAlign:"center",height:"100vh",marginTop:10,overflow:"auto",display:"table",tableLayout:"fixed",width:"100%"},children:Object(X.jsx)(ie,{posts:p,currentId:r,index:u})})}),Object(X.jsx)(se.a,{element:Object(X.jsx)(Le,{}),path:"/todoapp/login"}),Object(X.jsx)(se.a,{element:Object(X.jsx)(ht,{posts:p}),path:"/todoapp/profile"})]})})]})},St=Object(pt.a)({reducer:{post:mt}}),Ct=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,456)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};i.a.render(Object(X.jsx)(c.a.StrictMode,{children:Object(X.jsx)(Y.a,{store:St,children:Object(X.jsx)(oe.a,{children:Object(X.jsx)(kt,{})})})}),document.getElementById("root")),Ct()}},[[346,1,2]]]);
//# sourceMappingURL=main.51d99ef6.chunk.js.map