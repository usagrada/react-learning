(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[73],{6251:function(n,i,c){"use strict";c.r(i),c.d(i,{default:function(){return l}});var e=c(6265),t=c(5893),u=c(7294),o=function n(i){!function(n,i){if(!(n instanceof i))throw new TypeError("Cannot call a class as a function")}(this,n),(0,e.Z)(this,"num",void 0),this.num=i},l=function(){var n,i=(0,u.useState)(null),c=i[0],e=i[1];(0,u.useEffect)((function(){console.log("a is initialize"),e(new o(1))}),[]);var l=(0,u.useState)(0),r=l[0],s=l[1];(0,u.useEffect)((function(){console.log("a is change")}),[c,null===c||void 0===c?void 0:c.num]);var f=(0,u.useRef)();(0,u.useEffect)((function(){f.current=new o(1)}),[]);return(0,t.jsxs)("div",{style:{margin:"10%"},children:[(0,t.jsx)("h1",{onClick:function(){console.log("click"),e((function(n){return n||null}))},children:"State Learning"}),(0,t.jsx)("div",{children:null===c||void 0===c?void 0:c.num}),(0,t.jsx)("button",{onClick:function(){console.log("click2"),e((function(n){return n?(n.num+=1,n):null}))},children:"click2"}),(0,t.jsxs)("button",{onClick:function(){s(r+1)},children:["cnt: ",r]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{children:"ref example"}),(0,t.jsx)("div",{children:null===(n=f.current)||void 0===n?void 0:n.num}),(0,t.jsx)("div",{children:(0,t.jsx)("button",{onClick:function(){f.current&&(f.current.num+=1,console.log("effected"))},children:"+"})})]})]})}},943:function(n,i,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/state/class",function(){return c(6251)}])}},function(n){n.O(0,[774,888,179],(function(){return i=943,n(n.s=i);var i}));var i=n.O();_N_E=i}]);