webpackJsonp([11],{429:function(l,n,u){"use strict";function a(l){return o._21(0,[(l()(),o.Z(0,0,null,null,27,"ion-content",[["scroll","false"]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,m.b,m.a)),o.Y(1,4374528,null,0,v.a,[k.a,Z.a,j.a,o.j,o.z,Y.a,y.a,o.u,[2,C.a],[2,P.a]],null,null),(l()(),o._19(-1,1,["\n  "])),(l()(),o.Z(3,0,null,1,0,"div",[["class","splash-bg"]],null,null,null,null,null)),(l()(),o._19(-1,1,["\n  "])),(l()(),o.Z(5,0,null,1,4,"div",[["class","splash-info"]],null,null,null,null,null)),(l()(),o._19(-1,null,["\n    "])),(l()(),o.Z(7,0,null,null,1,"div",[["class","splash-intro"]],null,null,null,null,null)),(l()(),o._19(-1,null,["\n\n    "])),(l()(),o._19(-1,null,["\n  "])),(l()(),o._19(-1,1,["\n  "])),(l()(),o.Z(11,0,null,1,15,"div",[["class","p-5"],["padding",""]],null,null,null,null,null)),(l()(),o._19(-1,null,["\n    "])),(l()(),o.Z(13,0,null,null,5,"button",[["block",""],["class","login"],["color","dark"],["ion-button",""],["outline",""],["round",""]],null,[[null,"click"]],function(l,n,u){var a=!0;if("click"===n){a=!1!==l.component.login()&&a}return a},z.b,z.a)),o.Y(14,1097728,null,0,w.a,[[8,""],k.a,o.j,o.z],{color:[0,"color"],outline:[1,"outline"],round:[2,"round"],block:[3,"block"]},null),(l()(),o._19(-1,0,["\n      "])),(l()(),o.Z(16,0,null,0,1,"ion-icon",[["name","log-in"],["role","img"]],[[2,"hide",null]],null,null,null,null)),o.Y(17,147456,null,0,M.a,[k.a,o.j,o.z],{name:[0,"name"]},null),(l()(),o._19(-1,0,["\n    "])),(l()(),o._19(-1,null,["\n    "])),(l()(),o.Z(20,0,null,null,5,"button",[["block",""],["class","signup"],["color","dark"],["ion-button",""],["outline",""],["round",""]],null,[[null,"click"]],function(l,n,u){var a=!0;if("click"===n){a=!1!==l.component.signup()&&a}return a},z.b,z.a)),o.Y(21,1097728,null,0,w.a,[[8,""],k.a,o.j,o.z],{color:[0,"color"],outline:[1,"outline"],round:[2,"round"],block:[3,"block"]},null),(l()(),o._19(-1,0,["\n      "])),(l()(),o.Z(23,0,null,0,1,"ion-icon",[["name","person-add"],["role","img"]],[[2,"hide",null]],null,null,null,null)),o.Y(24,147456,null,0,M.a,[k.a,o.j,o.z],{name:[0,"name"]},null),(l()(),o._19(-1,0,["\n    "])),(l()(),o._19(-1,null,["\n  "])),(l()(),o._19(-1,1,["\n"])),(l()(),o._19(-1,null,["\n"]))],function(l,n){l(n,14,0,"dark","","","");l(n,17,0,"log-in");l(n,21,0,"dark","","","");l(n,24,0,"person-add")},function(l,n){l(n,0,0,o._11(n,1).statusbarPadding,o._11(n,1)._hasRefresher);l(n,16,0,o._11(n,17)._hidden);l(n,23,0,o._11(n,24)._hidden)})}Object.defineProperty(n,"__esModule",{value:!0});var o=u(0),e=(u(2),u(104)),t=(u(161),u(166),u(287)),i=function(){function l(l,n,u){this.navCtrl=l,this.storage=n,this.toastCtrl=u}return l.prototype.login=function(){var l=this;this.storage.get("userName").then(function(n){if(console.log("username"),console.log(n),null==n)l.navCtrl.push("LoginPage");else{l.toastCtrl.create({message:"You already logged in",duration:3e3}).present(),l.navCtrl.push("TranslationLanguageMenuPage")}})},l.prototype.signup=function(){var l=!1;this.storage.get("userName").then(function(n){null!=n&&(l=!0)}),this.navCtrl.push(0==l?"SignupPage":t.b)},l}(),r=function(){return function(){}}(),s=u(276),c=u(277),_=u(278),d=u(279),g=u(280),b=u(281),p=u(282),f=u(283),h=u(284),m=u(285),v=u(28),k=u(3),Z=u(5),j=u(12),Y=u(11),y=u(32),C=u(6),P=u(26),z=u(55),w=u(27),M=u(56),N=u(167),L=u(107),S=o.X({encapsulation:2,styles:[],data:{}}),W=o.V("page-welcome",i,function(l){return o._21(0,[(l()(),o.Z(0,0,null,null,1,"page-welcome",[],null,null,null,a,S)),o.Y(1,49152,null,0,i,[P.a,N.a,L.a],null,null)],null,null)},{},{},[]),F=u(15),J=u(23),O=u(68),R=u(69),T=u(71),V=u(70),X=u(34),q=u(105),x=u(162),A=u(50);u.d(n,"WelcomePageModuleNgFactory",function(){return B});var B=o.W(r,[],function(l){return o._7([o._8(512,o.i,o.S,[[8,[s.a,c.a,_.a,d.a,g.a,b.a,p.a,f.a,h.a,W]],[3,o.i],o.s]),o._8(4608,F.k,F.j,[o.r,[2,F.u]]),o._8(4608,J.r,J.r,[]),o._8(4608,J.d,J.d,[]),o._8(4608,O.b,O.a,[]),o._8(4608,R.a,R.b,[]),o._8(4608,T.b,T.a,[]),o._8(4608,V.b,V.a,[]),o._8(4608,X.a,X.a,[q.a,O.b,R.a,T.b,V.b,X.b,X.c]),o._8(512,F.b,F.b,[]),o._8(512,J.p,J.p,[]),o._8(512,J.g,J.g,[]),o._8(512,J.n,J.n,[]),o._8(512,x.a,x.a,[]),o._8(512,x.b,x.b,[]),o._8(512,e.a,e.a,[]),o._8(512,r,r,[]),o._8(256,A.a,i,[]),o._8(256,X.c,void 0,[]),o._8(256,X.b,void 0,[])])})}});