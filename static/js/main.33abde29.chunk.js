(this.webpackJsonpmathMagicians=this.webpackJsonpmathMagicians||[]).push([[0],{20:function(t,e,n){},34:function(t,e,n){},35:function(t,e,n){},36:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(21),i=n.n(r),l=n(17),s=n(2),o=n(39),u=n(5),j=n(37),b=n(38),x=n(40),m=n(10),d=n(11),h=(n(20),n(3)),O=n(19),f=n.n(O);function p(t,e,n){var a=f()(t),c=f()(e);if("+"===n)try{return a.plus(c).toString()}catch(r){return"0"}if("-"===n)try{return a.minus(c).toString()}catch(r){return"0"}if("x"===n)try{return a.times(c).toString()}catch(r){return"0"}if("\xf7"===n)try{return a.div(c).toString()}catch(r){return"0"}if("%"===n)try{return a.mod(c).toString()}catch(r){return"0"}throw Error("Unknown operation '".concat(n,"'"))}var k=n(0),N=function(){var t=Object(a.useState)({total:null,next:"",result:"0",operation:null}),e=Object(u.a)(t,2),n=e[0],c=e[1],r=function(t){return t.next?t.next:null!==t.total?t.total:"0"},i=function(t){var e=n.next,a={total:n.total,next:e,operation:n.operation};try{var i=function(t,e){return"AC"===e?{total:null,next:null,operation:null}:e.match(/[0-9]+/)?"0"===e&&"0"===t.next?{}:t.operation?t.next?Object(h.a)(Object(h.a)({},t),{},{next:t.next+e}):Object(h.a)(Object(h.a)({},t),{},{next:e}):t.next?{next:t.next+e,total:null}:{next:e,total:null}:"."===e?t.next?t.next.includes(".")?Object(h.a)({},t):Object(h.a)(Object(h.a)({},t),{},{next:"".concat(t.next,".")}):t.operation?{next:"0."}:t.total?t.total.includes(".")?{}:{total:"".concat(t.total,".")}:{total:"0."}:"="===e?t.next&&t.operation?{total:p(t.total,t.next,t.operation),next:null,operation:null}:{}:"+/-"===e?t.next?Object(h.a)(Object(h.a)({},t),{},{next:(-1*parseFloat(t.next)).toString()}):t.total?Object(h.a)(Object(h.a)({},t),{},{total:(-1*parseFloat(t.total)).toString()}):{}:t.next||!t.total||t.operation?t.operation?t.total&&!t.next?Object(h.a)(Object(h.a)({},t),{},{operation:e}):{total:p(t.total,t.next,t.operation),next:null,operation:e}:t.next?{total:t.next,next:null,operation:e}:{operation:e}:Object(h.a)(Object(h.a)({},t),{},{operation:e})}(a,t);c({result:r(i),next:i.next,total:i.total,operation:i.operation})}catch(l){c({result:"Error",next:"",total:null,operation:null})}},l=n.result;return Object(k.jsx)(k.Fragment,{children:Object(k.jsxs)("div",{className:"container",children:[Object(k.jsx)(j.a,{children:Object(k.jsx)(b.a,{children:Object(k.jsx)("h1",{children:"Magic Calculator"})})}),Object(k.jsx)(j.a,{children:Object(k.jsx)(b.a,{xs:12,children:Object(k.jsx)(x.a,{className:"display",children:l})})}),Object(k.jsx)(j.a,{children:Object(k.jsx)(b.a,{})}),Object(k.jsx)(j.a,{className:"number-container",children:Object(k.jsxs)(b.a,{xs:12,className:"number-container",children:[Object(k.jsx)(x.a,{className:"button numkb",onClick:function(){return i("AC")},children:"AC"}),Object(k.jsx)(x.a,{className:"button numkb",onClick:function(){return i("+/-")},children:"+/-"}),Object(k.jsx)(x.a,{className:"button numkb",onClick:function(){return i("%")},children:Object(k.jsx)(m.a,{icon:d.d})}),Object(k.jsx)(x.a,{className:"button symbols",onClick:function(){return i("\xf7")},children:Object(k.jsx)(m.a,{icon:d.a})})]})}),Object(k.jsx)(j.a,{children:Object(k.jsxs)(b.a,{xs:12,className:"number-container",children:[Object(k.jsx)(x.a,{className:"button numkb",onClick:function(){return i("7")},children:"7"}),Object(k.jsx)(x.a,{className:"button numkb",onClick:function(){return i("8")},children:"8"}),Object(k.jsx)(x.a,{className:"button numkb",onClick:function(){return i("9")},children:"9"}),Object(k.jsx)(x.a,{className:"button symbols",onClick:function(){return i("x")},children:Object(k.jsx)(m.a,{icon:d.f})})]})}),Object(k.jsx)(j.a,{children:Object(k.jsxs)(b.a,{xs:12,className:"number-container",children:[Object(k.jsx)(x.a,{className:"button numkb",onClick:function(){return i("4")},children:"4"}),Object(k.jsx)(x.a,{className:"button numkb",onClick:function(){return i("5")},children:"5"}),Object(k.jsx)(x.a,{className:"button numkb",onClick:function(){return i("6")},children:"6"}),Object(k.jsx)(x.a,{className:"button symbols",onClick:function(){return i("-")},children:Object(k.jsx)(m.a,{icon:d.c})})]})}),Object(k.jsx)(j.a,{children:Object(k.jsxs)(b.a,{xs:12,className:"number-container",children:[Object(k.jsx)(x.a,{className:"button numkb",onClick:function(){return i("1")},children:"1"}),Object(k.jsx)(x.a,{className:"button numkb",onClick:function(){return i("2")},children:"2"}),Object(k.jsx)(x.a,{className:"button numkb",onClick:function(){return i("3")},children:"3"}),Object(k.jsx)(x.a,{className:"button symbols",onClick:function(){return i("+")},children:Object(k.jsx)(m.a,{icon:d.e})})]})}),Object(k.jsx)(j.a,{children:Object(k.jsxs)(b.a,{xs:12,className:"number-container",children:[Object(k.jsx)(x.a,{className:"button btn-zero numkb",onClick:function(){return i("0")},children:"0"}),Object(k.jsx)(x.a,{className:"button numkb",onClick:function(){return i(".")},children:"."}),Object(k.jsx)(x.a,{className:"button symbols",onClick:function(){return i("=")},children:Object(k.jsx)(m.a,{icon:d.b})})]})})]})})},C=function(){return Object(k.jsx)(k.Fragment,{children:Object(k.jsx)("header",{children:Object(k.jsxs)("nav",{className:"navbar",href:"#home",children:[Object(k.jsx)("a",{className:"navbar-brand",href:"/",children:"\ud83d\udd2e Math Magicians"}),Object(k.jsxs)("ul",{className:"nav-ul",children:[Object(k.jsx)("li",{className:"nav-li",children:Object(k.jsx)("a",{className:"nav-li",href:"/",children:"Home"})}),Object(k.jsx)("li",{className:"nav-li",children:Object(k.jsx)("a",{className:"nav-li",href:"/Calculator",children:"Calculator"})}),Object(k.jsx)("li",{className:"nav-li",children:Object(k.jsx)("a",{className:"nav-li",href:"/Myself",children:"Contact me"})})]})]})})})},g=function(){return Object(k.jsx)(k.Fragment,{children:Object(k.jsxs)("div",{className:"home-page",children:[Object(k.jsx)("h1",{children:"\ud83d\udd2e Math MathMagicians"}),Object(k.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adip iscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]})})};var v=function(){return Object(k.jsx)(k.Fragment,{children:Object(k.jsxs)("div",{children:[Object(k.jsx)("h1",{children:"Myself"}),Object(k.jsx)("p",{children:"I am a software engineer with a passion for building products that solve problems. I am currently working at as a software engineer. I am a graduate of the University of California, Berkeley with a concentration in Computer Science."})]})})};n(34);var y=function(){return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(C,{}),Object(k.jsx)(o.a,{children:Object(k.jsxs)(s.c,{children:[Object(k.jsx)(s.a,{path:"/",element:Object(k.jsx)(g,{}),exact:!0}),Object(k.jsx)(s.a,{path:"/Calculator",element:Object(k.jsx)(N,{})}),Object(k.jsx)(s.a,{path:"/Myself",element:Object(k.jsx)(v,{})})]})})]})};n(35);i.a.render(Object(k.jsx)(c.a.StrictMode,{children:Object(k.jsx)(l.a,{children:Object(k.jsx)(y,{})})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.33abde29.chunk.js.map