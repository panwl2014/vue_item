(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4f35c3c8"],{"13d5":function(t,n,r){"use strict";var a=r("23e7"),e=r("d58f").left,i=r("a640"),c=r("ae40"),u=i("reduce"),o=c("reduce",{1:0});a({target:"Array",proto:!0,forced:!u||!o},{reduce:function(t){return e(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},"54ec":function(t,n,r){"use strict";r.r(n);var a=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"page-buy"},[r("div",{staticClass:"price-part"},[r("span",[t._v("商品总价:")]),r("strong",{staticClass:"price"},[t._v("￥"+t._s(t.allPrice))])]),r("div",{staticClass:"list-part"},[r("p",{staticClass:"title"},[t._v("购买商品")]),t._l(t.data,(function(t){return r("Product",{key:t._id,attrs:{data:t}})}))],2),r("div",{staticClass:"btns-part"},[r("span",{on:{touchend:function(n){return t.$router.back()}}},[t._v("取消购买")]),r("span",[t._v("立即购买")])])])},e=[],i=(r("13d5"),r("be6f")),c={data:function(){return{data:[]}},components:{Product:i["a"]},methods:{carList:function(){var t=this;this.$http.post("/data/car/list").then((function(n){var r=n.data;console.log(r),0==r.error&&(t.data=r.data)}))}},computed:{allPrice:function(){var t=this.data.reduce((function(t,n){return t+n.price*n.num}),0);return t}},created:function(){this.carList()}},u=c,o=(r("8a1f"),r("2877")),s=Object(o["a"])(u,a,e,!1,null,"5afb8892",null);n["default"]=s.exports},"5b53":function(t,n,r){},"8a1f":function(t,n,r){"use strict";var a=r("5b53"),e=r.n(a);e.a},a640:function(t,n,r){"use strict";var a=r("d039");t.exports=function(t,n){var r=[][t];return!!r&&a((function(){r.call(null,n||function(){throw 1},1)}))}},ae40:function(t,n,r){var a=r("83ab"),e=r("d039"),i=r("5135"),c=Object.defineProperty,u={},o=function(t){throw t};t.exports=function(t,n){if(i(u,t))return u[t];n||(n={});var r=[][t],s=!!i(n,"ACCESSORS")&&n.ACCESSORS,f=i(n,0)?n[0]:o,d=i(n,1)?n[1]:void 0;return u[t]=!!r&&!e((function(){if(s&&!a)return!0;var t={length:-1};s?c(t,1,{enumerable:!0,get:o}):t[1]=1,r.call(t,f,d)}))}},d58f:function(t,n,r){var a=r("1c0b"),e=r("7b0b"),i=r("44ad"),c=r("50c4"),u=function(t){return function(n,r,u,o){a(r);var s=e(n),f=i(s),d=c(s.length),l=t?d-1:0,p=t?-1:1;if(u<2)while(1){if(l in f){o=f[l],l+=p;break}if(l+=p,t?l<0:d<=l)throw TypeError("Reduce of empty array with no initial value")}for(;t?l>=0:d>l;l+=p)l in f&&(o=r(o,f[l],l,s));return o}};t.exports={left:u(!1),right:u(!0)}}}]);
//# sourceMappingURL=chunk-4f35c3c8.5a5e01c7.js.map