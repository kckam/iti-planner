(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{56:function(t,e,n){t.exports=n(91)},91:function(t,e,n){"use strict";n.r(e);var r=n(1),a=n.n(r),o=n(47),i=n.n(o),c=n(2),u=n(14),l=n(11),s=n(13),f=n(15),d=n(54),h=n(16),p=(n(48),n(28)),m=n.n(p);function v(){v=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(L){c=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var a=e&&e.prototype instanceof f?e:f,o=Object.create(a.prototype),i=new _(r||[]);return o._invoke=function(t,e,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return k()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var c=x(i,n);if(c){if(c===s)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=l(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===s)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}(t,n,i),o}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(L){return{type:"throw",arg:L}}}t.wrap=u;var s={};function f(){}function d(){}function h(){}var p={};c(p,a,function(){return this});var m=Object.getPrototypeOf,g=m&&m(m(E([])));g&&g!==e&&n.call(g,a)&&(p=g);var y=h.prototype=f.prototype=Object.create(p);function b(t){["next","throw","return"].forEach(function(e){c(t,e,function(t){return this._invoke(e,t)})})}function w(t,e){var r;this._invoke=function(a,o){function i(){return new e(function(r,i){!function r(a,o,i,c){var u=l(t[a],t,o);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then(function(t){r("next",t,i,c)},function(t){r("throw",t,i,c)}):e.resolve(f).then(function(t){s.value=t,i(s)},function(t){return r("throw",t,i,c)})}c(u.arg)}(a,o,r,i)})}return r=r?r.then(i,i):i()}}function x(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=l(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,s;var a=r.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function E(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:k}}function k(){return{value:void 0,done:!0}}return d.prototype=h,c(y,"constructor",h),c(h,"constructor",d),d.displayName=c(h,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,c(t,i,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},b(w.prototype),c(w.prototype,o,function(){return this}),t.AsyncIterator=w,t.async=function(e,n,r,a,o){void 0===o&&(o=Promise);var i=new w(u(e,n,r,a),o);return t.isGeneratorFunction(n)?i:i.next().then(function(t){return t.done?t.value:i.next()})},b(y),c(y,i,"Generator"),c(y,a,function(){return this}),c(y,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=E,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),u=n.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,s):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),O(n),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;O(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:E(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),s}},t}var g,y=function(t){return{type:"ADD_TO_CART",payload:t}},b=function(){return function(){var t=Object(h.a)(v().mark(function t(e,n){var r;return v().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.a.getItem("cards");case 2:r=t.sent,e({type:"LOAD_CARDS",payload:r});case 4:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}()},w=function(){return{type:"NEXT_DAY"}},x=function(){return{type:"PREV_DAY"}},j=n(17),O=l.c.ul(g||(g=Object(u.a)(["\n  position: relative;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n\n  .iti-cards__item {\n    position: absolute;\n    background: #fff;\n    height: 510px;\n    width: 300px;\n    max-width: 90%;\n    max-height: 90%;\n    padding: 1rem;\n    border-radius: 10px;\n    will-change: transform;\n    touch-action: none;\n\n    img {\n      user-drag: none;\n      width: 100%;\n      height: 100%;\n      object-fit: cover;\n    }\n\n    &:nth-child(-n + 5) {\n      box-shadow: 0 12.5px 100px -10px rgb(50 50 73 / 40%),\n        0 10px 10px -10px rgb(50 50 73 / 30%);\n    }\n  }\n"]))),_=function(t){return{x:0,y:t%10*-4,scale:1,rot:0,delay:100*t+1e3}},E=function(t){return{x:0,rot:0,scale:1.5,y:-1e3}};var k,L=function(t){var e=t.data,n=t.setLoaded,o=t.loaded,i=Object(s.useSprings)(e.length,function(t){return Object(f.a)({},_(t),{from:E(t)})}),u=Object(c.a)(i,2),l=u[0],h=u[1],p=Object(j.b)(),m=Object(d.a)(function(t){var e=Object(c.a)(t.args,1)[0],n=t.down,r=Object(c.a)(t.movement,1)[0],a=Object(c.a)(t.direction,1)[0],o=t.velocity,i=o>.01,u=a<0?-1:1;h.start(function(t){if(e===t){var a=document.querySelector(".category__item"),c=!n&&i,l=c?(200+a.offsetWidth)*u:n?r:0,s=r/100+(c?100*u*o:0),f=n?1.1:1;return c&&u>0&&p(y(t)),{x:l,rot:s,scale:f,delay:void 0,config:{friction:50,tension:n?800:c?200:500}}}}),console.log(a)});return Object(r.useEffect)(function(){o&&h.start(function(t){return{from:{x:0,y:0,scale:1,rot:20*Math.random()-10}}})},[e]),Object(r.useEffect)(function(){n(!0)},[]),a.a.createElement(O,null,l.map(function(t,n){return a.a.createElement(s.animated.li,Object.assign({},m(n),{key:"".concat(Math.random()),className:"iti-cards__item",style:Object(f.a)({},t,{transform:Object(s.to)([t.rot,t.scale],function(t,e){return"rotateX(30deg) rotateY(".concat(t/10,"deg) rotateZ(").concat(t,"deg) ")})})}),a.a.createElement("img",{src:e[n]}))}))},N=function(){return Object(j.b)()},T=j.c,S=l.c.section(k||(k=Object(u.a)(["\n  position: relative;\n  height: calc(100vh - 100px);\n  padding: 1rem;\n  overflow: auto;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n\n  img {\n    max-width: 100%;\n    max-height: 100%;\n  }\n  .category {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(300px, 450px));\n    grid-gap: 1rem;\n    justify-content: center;\n    margin: auto 0;\n\n    @media only screen and (max-width: 600px) {\n      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n    }\n\n    &__item {\n      text-align: center;\n      border: 1px solid red;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      height: 500px;\n      will-change: transform;\n      /* padding: 50% 1rem; */\n    }\n  }\n"])));var A=function(){var t=Object(r.useState)(!1),e=Object(c.a)(t,2),n=e[0],o=e[1],i=T(function(t){return t.cards}),u=Object(s.useSprings)(i.length,function(t){return{from:{scale:.8},to:{scale:1},delay:100*t+500}}),l=Object(c.a)(u,2),f=l[0];return l[1],a.a.createElement(S,null,a.a.createElement(s.animated.ul,{className:"category"},f.map(function(t,e){return a.a.createElement(s.animated.li,{className:"category__item",style:t},a.a.createElement(L,{data:i[e].cards,loaded:n,setLoaded:o}))})))};var D,R,q=function(){return a.a.createElement("div",null,"123")},C=Object(l.b)(D||(D=Object(u.a)(["\n@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;1,400&display=swap');\n\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\n* {\n\tbox-sizing: border-box;\n}\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n    font-family: 'Open Sans', sans-serif;\n\tbackground: ",";\n\tcolor: ",";\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n.app {\n\t/* padding: 2rem; */\n}"])),function(t){return t.theme.body},function(t){return t.theme.text}),I=l.c.header(R||(R=Object(u.a)(["\n  height: 50px;\n  background: #000;\n  color: #fff;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 1rem;\n\n  .header-nav {\n    color: red;\n  }\n\n  .header__title {\n  }\n"])));var P,G=function(){var t=T(function(t){return t.cart}),e=N();return a.a.createElement(I,{className:"header"},a.a.createElement("div",{className:"header-nav header-nav__prev",onClick:function(){e(x())}},"Prev"),a.a.createElement("h1",{className:"header__title"},"DAY ",t&&t.findIndex(function(t){return t.active})+1),a.a.createElement("div",{className:"header-nav header-nav__next",onClick:function(){e(w())}},"Next"))},Y=l.c.header(P||(P=Object(u.a)(["\n  height: 50px;\n  background: #000;\n  color: #fff;\n  display: flex;\n\n  .footer__nav {\n    flex: 1;\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    &--active {\n      background: #ccc;\n    }\n\n    &:first-child {\n      border-right: 1px solid #888;\n    }\n  }\n"])));var M=function(t){var e=t.nav,n=t.setNav;return a.a.createElement(Y,null,Object.keys(W).map(function(t){return a.a.createElement("div",{key:t,onClick:function(){n(W[t])},className:"footer__nav ".concat(e===W[t]?"footer__nav--active":"")},W[t])}))},F={body:"#fff",text:"#000"},W={HOME:"home",CART:"cart"};var H=function(){var t=Object(r.useState)(W.HOME),e=Object(c.a)(t,2),n=e[0],o=e[1],i=N(),u=Object(s.useTransition)(n,{from:{opacity:0,transform:"translate3d(100%,0,0)"},enter:{opacity:1,transform:"translate3d(0%,0,0)"},leave:{display:"none"}});return Object(r.useEffect)(function(){i(b())},[]),a.a.createElement(l.a,{theme:F},a.a.createElement("div",{className:"app"},a.a.createElement(C,null),a.a.createElement("div",null,a.a.createElement(G,null),u(function(t,e){return e===W.HOME?a.a.createElement(s.animated.div,{style:t},a.a.createElement(A,null)):a.a.createElement(s.animated.div,{style:t},a.a.createElement(q,null))}),a.a.createElement(M,{nav:n,setNav:o}))))},V=n(55),X=n(7),z=n(12),J=[{label:"a",cards:["https://upload.wikimedia.org/wikipedia/commons/5/53/RWS_Tarot_16_Tower.jpg","https://upload.wikimedia.org/wikipedia/commons/5/53/RWS_Tarot_16_Tower.jpg","https://dummyimage.com/600x400/000/fff","https://dummyimage.com/200x400/000/fff"]},{label:"ad",cards:["https://upload.wikimedia.org/wikipedia/commons/5/53/RWS_Tarot_16_Tower.jpg","https://upload.wikimedia.org/wikipedia/commons/5/53/RWS_Tarot_16_Tower.jpg","https://dummyimage.com/600x400/000/fff","https://dummyimage.com/200x400/000/fff"]}],B=[{active:!0,cards:[]}],Z=Object(z.b)({cards:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J;switch((arguments.length>1?arguments[1]:void 0).type){case"REMOVE_CARD":default:return t}},cart:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"LOAD_CARDS":return e.payload||B;case"ADD_TO_CART":var n=t.map(function(t){return t.active?Object(f.a)({},t,{cards:[].concat(Object(X.a)(t.cards),[e.payload])}):t});return m.a.setItem("cards",n),n;case"NEXT_DAY":var r=t.findIndex(function(t){return t.active})+1;return void 0===t[r]?[].concat(Object(X.a)(t.map(function(t){return Object(f.a)({},t,{active:!1})})),B):t.map(function(t,e){return Object(f.a)({},t,{active:e===r})});case"PREV_DAY":var a=t.findIndex(function(t){return t.active})-1;return a<0?t:void 0===typeof t[a]?[].concat(Object(X.a)(t.map(function(t){return Object(f.a)({},t,{active:!1})})),B):t.map(function(t,e){return Object(f.a)({},t,{active:e===a})});default:return t}}}),K=n(24);n.d(e,"store",function(){return U});var Q=i.a.createRoot(document.getElementById("root")),U=Object(V.a)({reducer:Z,middleware:[K.a]});Q.render(a.a.createElement(j.a,{store:U},a.a.createElement(H,null)))}},[[56,1,2]]]);
//# sourceMappingURL=main.ce6ee064.chunk.js.map