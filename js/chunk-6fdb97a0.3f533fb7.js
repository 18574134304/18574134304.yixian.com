(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6fdb97a0"],{1068:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"q-page"},[a("navBar",{attrs:{title:"搜索菜品"}}),a("div",{staticClass:"query"},[a("div",{staticClass:"box"},[a("svg",{staticClass:"icon search-icon",attrs:{"aria-hidden":"true"}},[a("use",{attrs:{"xlink:href":"#icon-sousuo"}})]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],attrs:{autofocus:"",autocomplete:"off",autocorrect:"off",type:"text",placeholder:"想吃什么搜一搜"},domProps:{value:t.value},on:{input:[function(e){e.target.composing||(t.value=e.target.value)},t.handelInput]}}),a("van-icon",{directives:[{name:"show",rawName:"v-show",value:t.value,expression:"value"}],staticClass:"clear-icon",attrs:{name:"cross"},on:{click:function(e){t.value=""}}})],1)]),a("div",{staticClass:"content"},[a("div",{directives:[{name:"show",rawName:"v-show",value:!t.value&&t.stroage,expression:"!value && stroage"}],staticClass:"stroage"},[a("div",{staticClass:"stroage-header"},[a("span",[t._v("历史搜索")]),a("van-icon",{staticClass:"clear-stroage",attrs:{name:"delete-o"},on:{click:t.clearStorage}})],1),a("div",{staticClass:"stroage-content"},t._l(t.stroage,(function(e,o){return a("a",{key:o,attrs:{href:"javascript:;"},on:{click:function(a){t.value=e}}},[t._v(t._s(e))])})),0)]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.value,expression:"value"}],ref:"queryScroll",staticClass:"box"},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.data.length,expression:"data.length"}],staticClass:"food-content"},[a("food-item",{attrs:{food:t.data},on:{handelFocus:t.showKey}})],1),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.data.length,expression:"!data.length"}],staticClass:"msg"},[a("p",[t._v("该商店内没有相关的商品哦~")]),a("span",[t._v("更多商品开发中，敬请期待")])]),a("loading",{directives:[{name:"show",rawName:"v-show",value:t.isLoading,expression:"isLoading"}],attrs:{loadingType:2}})],1)]),a("key-board",{attrs:{key_flag:t.show,item:t.item},on:{onHide:t.closeKey}}),a("shopCart",{directives:[{name:"show",rawName:"v-show",value:t.data.length&&t.fot_falg,expression:"data.length && fot_falg"}]})],1)},n=[],i=(a("4de4"),a("4160"),a("c975"),a("d3b7"),a("ac1f"),a("3ca3"),a("5319"),a("159b"),a("ddb0"),a("2b3d"),a("96cf"),a("1da1")),r=a("5530"),s=a("d968"),c=a("6d9e"),l=a("bf93"),u=a("92fe"),d=a("653e"),h=a("2f62"),f={components:{navBar:s["a"],loading:l["a"],foodItem:u["a"],shopCart:d["a"],keyBoard:c["a"]},data:function(){return{value:"",data:[],isLoading:!1,show:!1,fot_falg:!0,item:{},stroage:null,timer:null,f_height:document.documentElement.clientHeight,t_height:document.documentElement.clientHeight}},methods:Object(r["a"])(Object(r["a"])({},Object(h["c"])(["setFood"])),{},{getCart:function(){var t=JSON.parse(localStorage.cart),e=[];t.filter((function(t){return e.push(t.foodId)})),this.$store.state.foodList=t,this.food.forEach((function(a){-1!=e.indexOf(a.foodId)?a.foodNumber=t[e.indexOf(a.foodId)].foodNumber:a.foodNumber=0}))},query:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a,o,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=new URLSearchParams,a.append("shopId",t.$store.state.shopId),a.append("userToken",""),e.next=5,t.$http.post("/user/postSelectFoodAndTypeByUserInShop",a);case 5:o=e.sent,n=o.data,t.setFood(n),t.getCart();case 9:case"end":return e.stop()}}),e)})))()},showKey:function(t){this.item=t,this.show=!0},closeKey:function(t){this.show=t},handelInput:function(){this.value=this.value.replace(/\s/g,"")},getSearchFood:function(){var t=this;this.data=[],this.isLoading&&(this.isLoading=!1),this.isLoading=!0,this.food&&(this.food.filter((function(e){-1!=e.foodName.indexOf(t.value)&&t.data.push(e)})),this.$nextTick((function(){t.scroll?t.scroll.refresh():t.scroll=new t.$BScroll(t.$refs.queryScroll,{click:!0,bounce:!1})})),setTimeout((function(){t.isLoading=!1}),250))},clearStorage:function(){var t=this;this.$confirm({title:"提示",message:"确定清空搜索记录吗?"}).then((function(){localStorage.removeItem("shop_storage"),t.stroage=null})).catch((function(){}))}}),created:function(){var t=this;window.onresize=function(){return function(){t.f_height=document.body.clientHeight}()},this.food?this.getCart():this.query(),JSON.parse(localStorage.getItem("shop_storage"))&&(this.stroage=JSON.parse(localStorage.getItem("shop_storage")))},computed:Object(r["a"])({},Object(h["d"])(["food"])),watch:{value:function(t){var e=this;if(!t)return this.data=[];this.getSearchFood(),this.timer||(this.timer=setTimeout((function(){var a=JSON.parse(localStorage.getItem("shop_storage"));a?-1===a.indexOf(t)&&(e.value&&a.unshift(e.value),localStorage.shop_storage=JSON.stringify(a)):e.value&&(localStorage.shop_storage=JSON.stringify([e.value])),e.stroage=JSON.parse(localStorage.getItem("shop_storage")),e.timer=null}),1e3))},food:{handler:function(t){var e=[];return t.forEach((function(t){t.foodNumber>=1&&e.push(t)})),this.$store.commit("setFoodList",e)},deep:!0},f_height:function(){this.t_height>this.f_height?this.fot_falg=!1:this.fot_falg=!0}}},v=f,g=(a("6a0e"),a("2877")),p=Object(g["a"])(v,o,n,!1,null,"746b3b63",null);e["default"]=p.exports},"10c6":function(t,e,a){},5319:function(t,e,a){"use strict";var o=a("d784"),n=a("825a"),i=a("7b0b"),r=a("50c4"),s=a("a691"),c=a("1d80"),l=a("8aa5"),u=a("14c3"),d=Math.max,h=Math.min,f=Math.floor,v=/\$([$&'`]|\d\d?|<[^>]*>)/g,g=/\$([$&'`]|\d\d?)/g,p=function(t){return void 0===t?t:String(t)};o("replace",2,(function(t,e,a,o){var m=o.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,w=o.REPLACE_KEEPS_$0,b=m?"$":"$0";return[function(a,o){var n=c(this),i=void 0==a?void 0:a[t];return void 0!==i?i.call(a,n,o):e.call(String(n),a,o)},function(t,o){if(!m&&w||"string"===typeof o&&-1===o.indexOf(b)){var i=a(e,t,this,o);if(i.done)return i.value}var c=n(t),f=String(this),v="function"===typeof o;v||(o=String(o));var g=c.global;if(g){var S=c.unicode;c.lastIndex=0}var x=[];while(1){var k=u(c,f);if(null===k)break;if(x.push(k),!g)break;var C=String(k[0]);""===C&&(c.lastIndex=l(f,r(c.lastIndex),S))}for(var y="",$=0,N=0;N<x.length;N++){k=x[N];for(var O=String(k[0]),I=d(h(s(k.index),f.length),0),E=[],L=1;L<k.length;L++)E.push(p(k[L]));var T=k.groups;if(v){var j=[O].concat(E,I,f);void 0!==T&&j.push(T);var J=String(o.apply(void 0,j))}else J=_(O,f,I,E,T,o);I>=$&&(y+=f.slice($,I)+J,$=I+O.length)}return y+f.slice($)}];function _(t,a,o,n,r,s){var c=o+t.length,l=n.length,u=g;return void 0!==r&&(r=i(r),u=v),e.call(s,u,(function(e,i){var s;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return a.slice(0,o);case"'":return a.slice(c);case"<":s=r[i.slice(1,-1)];break;default:var u=+i;if(0===u)return e;if(u>l){var d=f(u/10);return 0===d?e:d<=l?void 0===n[d-1]?i.charAt(1):n[d-1]+i.charAt(1):e}s=n[u-1]}return void 0===s?"":s}))}}))},"6a0e":function(t,e,a){"use strict";a("b4bd")},"857a":function(t,e,a){var o=a("1d80"),n=/"/g;t.exports=function(t,e,a,i){var r=String(o(t)),s="<"+e;return""!==a&&(s+=" "+a+'="'+String(i).replace(n,"&quot;")+'"'),s+">"+r+"</"+e+">"}},"88fb":function(t,e,a){"use strict";a("10c6")},9911:function(t,e,a){"use strict";var o=a("23e7"),n=a("857a"),i=a("af03");o({target:"String",proto:!0,forced:i("link")},{link:function(t){return n(this,"a","href",t)}})},af03:function(t,e,a){var o=a("d039");t.exports=function(t){return o((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},b4bd:function(t,e,a){},d968:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"nav"},[a("div",{staticClass:"b"},[a("van-icon",{staticClass:"nav-arrow-left",attrs:{name:"arrow-left"},on:{click:t.navigator}}),a("div",{staticClass:"nav-title"},[t._v(t._s(t.title))])],1)])},n=[],i=(a("ac1f"),a("5319"),a("9911"),{props:["title","link","location_search_id"],methods:{navigator:function(){"/"===this.link?(this.$store.commit("checkTab",2),this.$router.go(-1)):"/index"===this.link?(console.log("ok"),this.$router.replace({path:"/index",query:{shop_id:this.location_search_id}})):this.$router.go(-1)}}}),r=i,s=(a("88fb"),a("2877")),c=Object(s["a"])(r,o,n,!1,null,"3579abc0",null);e["a"]=c.exports}}]);