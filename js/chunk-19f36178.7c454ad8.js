(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-19f36178"],{5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,a){var i=a("1d80"),s=a("5899"),c="["+s+"]",n=RegExp("^"+c+c+"*"),o=RegExp(c+c+"*$"),r=function(t){return function(e){var a=String(i(e));return 1&t&&(a=a.replace(n,"")),2&t&&(a=a.replace(o,"")),a}};t.exports={start:r(1),end:r(2),trim:r(3)}},6470:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tabbar"},t._l(t.tabList,(function(e){return a("a",{key:e.index,staticClass:"tab-item",class:t.tabActive===e.index?"active":"",attrs:{href:"javascript:void(0);"},on:{click:function(a){return t.handelClick(e.link,e.index)}}},[a("van-icon",{staticClass:"icon",attrs:{name:t.tabActive===e.index?e.active_icon:e.icon,size:"24"}}),a("div",{staticClass:"tab-msg"},[t._v(t._s(e.name))])],1)})),0)},s=[],c=(a("a9e3"),{props:{tabActive:{type:Number,default:1}},data:function(){return{tabList:[{name:"首页",icon:"wap-home-o",active_icon:"wap-home",index:1,link:"/home"},{name:"购物车",icon:"shopping-cart-o",active_icon:"shopping-cart",index:2,link:"/cart"},{name:"我的",icon:"manager-o",index:3,active_icon:"manager",link:"/mine"}]}},methods:{handelClick:function(t,e){this.tabActive!==e&&this.$router.push(t)}}}),n=c,o=(a("c8f1"),a("2877")),r=Object(o["a"])(n,i,s,!1,null,"62898362",null);e["a"]=r.exports},7156:function(t,e,a){var i=a("861d"),s=a("d2bb");t.exports=function(t,e,a){var c,n;return s&&"function"==typeof(c=e.constructor)&&c!==a&&i(n=c.prototype)&&n!==a.prototype&&s(t,n),t}},"7cb0":function(t,e,a){"use strict";a("9f10")},"9f10":function(t,e,a){},a434:function(t,e,a){"use strict";var i=a("23e7"),s=a("23cb"),c=a("a691"),n=a("50c4"),o=a("7b0b"),r=a("65f0"),l=a("8418"),d=a("1dde"),f=a("ae40"),u=d("splice"),p=f("splice",{ACCESSORS:!0,0:0,1:2}),v=Math.max,h=Math.min,g=9007199254740991,m="Maximum allowed length exceeded";i({target:"Array",proto:!0,forced:!u||!p},{splice:function(t,e){var a,i,d,f,u,p,b=o(this),_=n(b.length),C=s(t,_),k=arguments.length;if(0===k?a=i=0:1===k?(a=0,i=_-C):(a=k-2,i=h(v(c(e),0),_-C)),_+a-i>g)throw TypeError(m);for(d=r(b,i),f=0;f<i;f++)u=C+f,u in b&&l(d,f,b[u]);if(d.length=i,a<i){for(f=C;f<_-i;f++)u=f+i,p=f+a,u in b?b[p]=b[u]:delete b[p];for(f=_;f>_-i+a;f--)delete b[f-1]}else if(a>i)for(f=_-i;f>C;f--)u=f+i-1,p=f+a-1,u in b?b[p]=b[u]:delete b[p];for(f=0;f<a;f++)b[f+C]=arguments[f+2];return b.length=_-i+a,d}})},a9e3:function(t,e,a){"use strict";var i=a("83ab"),s=a("da84"),c=a("94ca"),n=a("6eeb"),o=a("5135"),r=a("c6b6"),l=a("7156"),d=a("c04e"),f=a("d039"),u=a("7c73"),p=a("241c").f,v=a("06cf").f,h=a("9bf2").f,g=a("58a8").trim,m="Number",b=s[m],_=b.prototype,C=r(u(_))==m,k=function(t){var e,a,i,s,c,n,o,r,l=d(t,!1);if("string"==typeof l&&l.length>2)if(l=g(l),e=l.charCodeAt(0),43===e||45===e){if(a=l.charCodeAt(2),88===a||120===a)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:i=2,s=49;break;case 79:case 111:i=8,s=55;break;default:return+l}for(c=l.slice(2),n=c.length,o=0;o<n;o++)if(r=c.charCodeAt(o),r<48||r>s)return NaN;return parseInt(c,i)}return+l};if(c(m,!b(" 0o1")||!b("0b1")||b("+0x1"))){for(var N,y=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof y&&(C?f((function(){_.valueOf.call(a)})):r(a)!=m)?l(new b(k(e)),a,y):k(e)},x=i?p(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),I=0;x.length>I;I++)o(b,N=x[I])&&!o(y,N)&&h(y,N,v(b,N));y.prototype=_,_.constructor=y,n(s,m,y)}},bf93:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:"loading"+t.loadingType},[1===t.loadingType?a("div",{staticClass:"spinner"},[a("div",{staticClass:"rect1"}),a("div",{staticClass:"rect2"}),a("div",{staticClass:"rect3"}),a("div",{staticClass:"rect4"}),a("div",{staticClass:"rect5"})]):2===t.loadingType?a("van-loading",{attrs:{color:"#fff",size:"40"}}):3===t.loadingType?a("div",{staticClass:"box"},[a("i",{staticClass:"icon"})]):4===t.loadingType?a("div",{staticClass:"pay-loading"},[a("div",{staticClass:"loader",class:t.paySuccess?"check":"loading"}),a("span",{class:{suc:t.paySuccess}},[t._v(" "+t._s(t.paySuccess?"支付成功":"支付中")+" "),t.paySuccess?t._e():a("i")])]):5===t.loadingType?a("div",{staticClass:"box"},[a("i",{staticClass:"icon"})]):t._e()],1)},s=[],c=(a("a9e3"),{props:{loadingType:{type:Number,default:1},paySuccess:{type:Boolean,default:!1}},name:"Loading",watch:{paySuccess:function(){console.log("ok")}}}),n=c,o=(a("f41f"),a("2877")),r=Object(o["a"])(n,i,s,!1,null,"25c8e68a",null);e["a"]=r.exports},c8f1:function(t,e,a){"use strict";a("defd")},ce92:function(t,e,a){},da83:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"cart"}},[t._m(0),t.$store.state.token?[t.flag&&!t.isLoading?a("div",{staticClass:"content"},t._l(t.cartList,(function(e,i){return a("div",{key:i,staticClass:"cart"},[a("div",{staticClass:"title"},[a("van-checkbox",{attrs:{"checked-color":"#2cb5a5"},on:{click:function(a){return t.checkAll(e)}},model:{value:e.checked,callback:function(a){t.$set(e,"checked",a)},expression:"item.checked"}},[a("div",{staticClass:"shopname"},[t._v(t._s(e.shopName))])])],1),a("div",{staticClass:"box"},t._l(e.list,(function(i){return a("div",{key:i.foodId,staticClass:"item"},[a("van-checkbox",{attrs:{"checked-color":"#2cb5a5",name:i.foodId},on:{click:function(a){return t.handelClick(e)}},model:{value:i.checked,callback:function(e){t.$set(i,"checked",e)},expression:"item1.checked"}},[a("div",{staticClass:"info"},[a("div",{staticClass:"left"},[a("img",{attrs:{src:i.foodPicVal}})]),a("div",{staticClass:"right"},[a("p",{staticClass:"tit"},[t._v(t._s(i.foodName))]),a("p",{staticClass:"message"},[t._v(t._s(i.foodMessage))]),a("div",{staticClass:"bot"},[a("span",{staticClass:"price"},[t._v("￥"+t._s(i.foodPice))]),a("div",{staticClass:"btn-group"},[a("a",{staticClass:"sub",attrs:{href:"javascript:void(0);"},on:{click:function(a){return a.stopPropagation(),t.sub(e,i)}}},[t._v("▬")]),a("span",{staticClass:"ipt-count"},[t._v(t._s(i.foodNumber))]),a("a",{staticClass:"add",attrs:{href:"javascript:void(0);"},on:{click:function(a){return a.stopPropagation(),t.add(e,i)}}},[t._v("✚")])])])])])])],1)})),0)])})),0):t._e(),t.cartList.length?t._e():a("div",{staticStyle:{"font-size":"20px",margin:"30px 0","text-align":"center"}},[t._v(" 没有点菜数据 ")])]:a("div",{staticClass:"nl"},[a("router-link",{staticClass:"gologin",attrs:{to:"/login"}},[t._v("去登陆")])],1),t.isLoading?a("loading",{attrs:{loadingType:3}}):t._e(),a("tab-bar",{attrs:{tabActive:2}})],2)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"nav"},[a("h2",[t._v("购物车")])])}],c=(a("4de4"),a("4160"),a("a434"),a("a9e3"),a("ac1f"),a("5319"),a("159b"),a("6470")),n=a("bf93"),o={components:{tabBar:c["a"],Loading:n["a"]},data:function(){return{cartList:[],flag:!1,isLoading:!0}},methods:{checkAll:function(t){t.list.filter((function(e){return e.checked=t.checked}))},handelClick:function(t){var e=0;t.list.filter((function(t){return t.checked?e+=1:""})),e===t.list.length?t.checked=!0:t.checked=!1},sub:function(t,e){this.$store.commit("setShopId",t.id),e.foodNumber=Number(e.foodNumber-=1),this.$store.commit("set_All_foodList",t.list)},add:function(t,e){this.$store.commit("setShopId",t.id),e.foodNumber=Number(e.foodNumber+=1),this.$store.commit("set_All_foodList",t.list)}},created:function(){var t=this;setTimeout((function(){t.isLoading=!1,t.$store.state.token||(t.$toast("请登录"),t.$router.replace("/login"))}),300);var e=JSON.parse(localStorage.getItem("Allcart"));e&&(this.flag=!0,this.cartList=e)},watch:{cartList:{handler:function(){this.cartList.forEach((function(t,e,a){t.list.length?t.list.filter((function(t,e,a){0==t.foodNumber&&a.splice(e,1)})):a.splice(e,1)})),localStorage.setItem("Allcart",JSON.stringify(this.cartList))},deep:!0}}},r=o,l=(a("7cb0"),a("2877")),d=Object(l["a"])(r,i,s,!1,null,"668194c2",null);e["default"]=d.exports},defd:function(t,e,a){},f41f:function(t,e,a){"use strict";a("ce92")}}]);