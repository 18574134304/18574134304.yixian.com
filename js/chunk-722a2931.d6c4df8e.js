(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-722a2931"],{"10c6":function(e,t,s){},"29d5":function(e,t,s){"use strict";s("96d7")},"2bb8":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"addAddress"}},[s("nav-bar",{attrs:{title:e.title}}),s("h2",{staticClass:"title"},[e._v("联系人")]),s("div",{staticClass:"box"},[s("div",{staticClass:"item"},[s("span",{staticClass:"label"},[e._v("姓名")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.address.name,expression:"address.name"}],attrs:{type:"text",maxlength:"10",placeholder:"请输入姓名",oninput:"value=value.replace(/\\s+/g, '')"},domProps:{value:e.address.name},on:{input:function(t){t.target.composing||e.$set(e.address,"name",t.target.value)}}})]),s("div",{staticClass:"item"},[s("span",{staticClass:"label"},[e._v("手机")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.address.tel,expression:"address.tel"}],attrs:{type:"text",placeholder:"请输入手机号",maxlength:"11",oninput:"value=value.replace(/[^\\d]/g,'')"},domProps:{value:e.address.tel},on:{input:function(t){t.target.composing||e.$set(e.address,"tel",t.target.value)}}})])]),s("h2",{staticClass:"title"},[e._v("收货地址")]),s("div",{staticClass:"box"},[s("div",{staticClass:"item check-address",on:{click:e.checkAddress}},[s("div",{staticClass:"c van-ellipsis",staticStyle:{"line-height":"2"}},[s("span",{staticClass:"label"},[e._v("地区")]),s("span",{staticClass:"address"},[s("van-icon",{staticClass:"address-icon",attrs:{name:"location-o"}}),e._v(" "+e._s(e.address.address)+" ")],1)]),s("van-icon",{staticClass:"arrow-right",attrs:{name:"arrow"}})],1),s("div",{staticClass:"item"},[s("span",{staticClass:"label"},[e._v("详细")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.address.addressMessage,expression:"address.addressMessage"}],attrs:{type:"text",placeholder:"例：16号楼427室"},domProps:{value:e.address.addressMessage},on:{input:function(t){t.target.composing||e.$set(e.address,"addressMessage",t.target.value)}}})])]),s("div",{staticStyle:{"margin-top":"36px"}},[s("a",{staticClass:"btn submit",attrs:{href:"javascript:void(0);"},on:{click:e.submit}},[e._v("保存")]),e.editFlag?s("a",{staticClass:"btn del",attrs:{href:"javascript:void(0);"},on:{click:e.del}},[e._v("删除")]):e._e(),s("a",{staticClass:"btn cancel",attrs:{href:"javascript:void(0);"},on:{click:function(t){return e.$router.go(-1)}}},[e._v("返回")])])],1)},r=[],d=(s("b0c0"),s("d3b7"),s("ac1f"),s("3ca3"),s("5319"),s("498a"),s("ddb0"),s("2b3d"),s("96cf"),s("1da1")),i=s("d968"),n={components:{navBar:i["a"]},data:function(){return{payFlag:!1,editFlag:!1,title:"添加收货地址",addressId:"",userToken:"",address:{name:"",tel:"",address:"选择地区",addressMessage:"",lng:"",lat:""}}},methods:{checkAddress:function(){var e=JSON.parse(localStorage.getItem("param"));if(!e)return this.$router.replace("/address");e.editAddress||(e.editAddress={}),e.editAddress.name=this.address.name,e.editAddress.tel=this.address.tel,e.editAddress.addressMessage=this.address.addressMessage,this.editFlag?e.editAddress.edit=!0:e.editAddress.edit=!1,localStorage.setItem("param",JSON.stringify(e)),this.$router.push({path:"/checkAddress",query:{type:"address"}})},del:function(){var e=this;this.$confirm({message:"地址删除后无法恢复\n确认删除吗",beforeClose:function(t,s){"confirm"===t?setTimeout(e.del_address(s),1e3):s()}})},del_address:function(e){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function s(){var a,r,d;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return a=new URLSearchParams,a.append("userToken",t.userToken),a.append("id",t.addressId),s.next=5,t.$http.post("/user/postDeleteAddressByUser",a);case 5:r=s.sent,d=r.data,console.log(d),"000000"===d.messageStatus&&setTimeout((function(){e();var s=JSON.parse(localStorage.getItem("param"));s&&s.pay_picker_poi&&delete s.pay_picker_poi,localStorage.setItem("param",JSON.stringify(s)),t.$router.replace("/address")}),500);case 9:case"end":return s.stop()}}),s)})))()},verify_address:function(e){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function s(){var a,r,d;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return a=t,s.next=3,t.$http.post("/user/postAddAddressBeforeCheck",e);case 3:r=s.sent,d=r.data,d&&"000000"===d.messageStatus?"allow"===d.message?t.addAddress(1):t.$confirm({message:"商家无法配送到该地址\n确定继续添加吗",beforeClose:function(e,t){"confirm"===e?setTimeout((function(){a.addAddress(0,t)}),800):t()}}):alert("出错了");case 6:case"end":return s.stop()}}),s)})))()},submit:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){var s,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(s=e.address,s.name.trim()){t.next=3;break}return t.abrupt("return",e.$toast("请输入姓名"));case 3:if(/^1[3456789]\d{9}$/.test(s.tel)){t.next=5;break}return t.abrupt("return",e.$toast("请输入合法的手机号"));case 5:if(e.address){t.next=7;break}return t.abrupt("return",e.$toast("请选择收货地址"));case 7:e.payFlag?(a=new URLSearchParams,a.append("shopId",e.$store.state.shopId),a.append("x",e.address.lng),a.append("y",e.address.lat),e.verify_address(a)):e.addAddress();case 8:case"end":return t.stop()}}),t)})))()},addAddress:function(){var e=arguments,t=this;return Object(d["a"])(regeneratorRuntime.mark((function s(){var a,r,d,i,n,o,c,l,u;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:for(n in a=e.length>0&&void 0!==e[0]?e[0]:0,r=e.length>1?e[1]:void 0,console.log("哈哈哈"),d=t.address,i=new URLSearchParams,i.append("userToken",t.userToken),t.editFlag&&i.append("id",t.addressId),d)i.append(n,d[n]);return o=t.editFlag?"/user/postUpdateAddressByUser":"/user/postAddAddressByUser",s.next=11,t.$http.post(o,i);case 11:c=s.sent,l=c.data,u=JSON.parse(localStorage.getItem("param")),u&&u.editAddress&&delete u.editAddress,localStorage.setItem("param",JSON.stringify(u)),"000000"===l.messageStatus?t.payFlag?(a&&u&&(u.pay_picker_poi||(u.pay_picker_poi={}),u.pay_picker_poi.address=d.address,u.pay_picker_poi.addressMessage=d.addressMessage,u.pay_picker_poi.name=d.name,u.pay_picker_poi.tel=d.tel),localStorage.setItem("param",JSON.stringify(u)),r&&r(),t.$router.go(-1)):t.$router.replace("/address"):alert("失败");case 17:case"end":return s.stop()}}),s)})))()}},created:function(){this.userToken=this.$store.state.token;var e=JSON.parse(localStorage.getItem("param")),t=this.$store.state.picker_poi;"{}"!==JSON.stringify(this.$route.query)&&this.$route.query.addressId||"edit"===this.$route.query.type?(this.editFlag=!0,this.title="修改收货地址",e?e.editAddress?(this.address.name=e.editAddress.name,this.address.tel=e.editAddress.tel,this.address.address=e.editAddress.poi,this.address.addressMessage=e.editAddress.addressMessage,this.address.lng=e.editAddress.lng,this.address.lat=e.editAddress.lat,this.addressId=e.editAddress.id):(this.address.address=t.address,this.address.lng=t.lng,this.address.lat=t.lat):this.$router.go(-1)):("{}"!==JSON.stringify(this.$route.query)&&"pay"===this.$route.query.type&&(this.payFlag=!0),e&&e.editAddress&&!e.editAddress.edit&&e.editAddress.poi?(console.log(e.editAddress),this.address.name=e.editAddress.name,this.address.tel=e.editAddress.tel,this.address.addressMessage=e.editAddress.addressMessage,this.address?(this.address.address=e.editAddress.poi,this.address.lng=e.editAddress.lng,this.address.lat=e.editAddress.lat):(this.address.address=t.address,this.address.lng=t.lng,this.address.lat=t.lat)):(console.log("okkkkjk"),this.address.address=t.address,this.address.lng=t.lng,this.address.lat=t.lat))}},o=n,c=(s("29d5"),s("2877")),l=Object(c["a"])(o,a,r,!1,null,"67b4b104",null);t["default"]=l.exports},"498a":function(e,t,s){"use strict";var a=s("23e7"),r=s("58a8").trim,d=s("c8d2");a({target:"String",proto:!0,forced:d("trim")},{trim:function(){return r(this)}})},5319:function(e,t,s){"use strict";var a=s("d784"),r=s("825a"),d=s("7b0b"),i=s("50c4"),n=s("a691"),o=s("1d80"),c=s("8aa5"),l=s("14c3"),u=Math.max,p=Math.min,h=Math.floor,g=/\$([$&'`]|\d\d?|<[^>]*>)/g,v=/\$([$&'`]|\d\d?)/g,f=function(e){return void 0===e?e:String(e)};a("replace",2,(function(e,t,s,a){var m=a.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,k=a.REPLACE_KEEPS_$0,_=m?"$":"$0";return[function(s,a){var r=o(this),d=void 0==s?void 0:s[e];return void 0!==d?d.call(s,r,a):t.call(String(r),s,a)},function(e,a){if(!m&&k||"string"===typeof a&&-1===a.indexOf(_)){var d=s(t,e,this,a);if(d.done)return d.value}var o=r(e),h=String(this),g="function"===typeof a;g||(a=String(a));var v=o.global;if(v){var A=o.unicode;o.lastIndex=0}var y=[];while(1){var $=l(o,h);if(null===$)break;if(y.push($),!v)break;var S=String($[0]);""===S&&(o.lastIndex=c(h,i(o.lastIndex),A))}for(var x="",w=0,C=0;C<y.length;C++){$=y[C];for(var I=String($[0]),O=u(p(n($.index),h.length),0),R=[],E=1;E<$.length;E++)R.push(f($[E]));var M=$.groups;if(g){var N=[I].concat(R,O,h);void 0!==M&&N.push(M);var T=String(a.apply(void 0,N))}else T=b(I,h,O,R,M,a);O>=w&&(x+=h.slice(w,O)+T,w=O+I.length)}return x+h.slice(w)}];function b(e,s,a,r,i,n){var o=a+e.length,c=r.length,l=v;return void 0!==i&&(i=d(i),l=g),t.call(n,l,(function(t,d){var n;switch(d.charAt(0)){case"$":return"$";case"&":return e;case"`":return s.slice(0,a);case"'":return s.slice(o);case"<":n=i[d.slice(1,-1)];break;default:var l=+d;if(0===l)return t;if(l>c){var u=h(l/10);return 0===u?t:u<=c?void 0===r[u-1]?d.charAt(1):r[u-1]+d.charAt(1):t}n=r[l-1]}return void 0===n?"":n}))}}))},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,s){var a=s("1d80"),r=s("5899"),d="["+r+"]",i=RegExp("^"+d+d+"*"),n=RegExp(d+d+"*$"),o=function(e){return function(t){var s=String(a(t));return 1&e&&(s=s.replace(i,"")),2&e&&(s=s.replace(n,"")),s}};e.exports={start:o(1),end:o(2),trim:o(3)}},"857a":function(e,t,s){var a=s("1d80"),r=/"/g;e.exports=function(e,t,s,d){var i=String(a(e)),n="<"+t;return""!==s&&(n+=" "+s+'="'+String(d).replace(r,"&quot;")+'"'),n+">"+i+"</"+t+">"}},"88fb":function(e,t,s){"use strict";s("10c6")},"96d7":function(e,t,s){},9911:function(e,t,s){"use strict";var a=s("23e7"),r=s("857a"),d=s("af03");a({target:"String",proto:!0,forced:d("link")},{link:function(e){return r(this,"a","href",e)}})},af03:function(e,t,s){var a=s("d039");e.exports=function(e){return a((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}))}},c8d2:function(e,t,s){var a=s("d039"),r=s("5899"),d="​᠎";e.exports=function(e){return a((function(){return!!r[e]()||d[e]()!=d||r[e].name!==e}))}},d968:function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"nav"},[s("div",{staticClass:"b"},[s("van-icon",{staticClass:"nav-arrow-left",attrs:{name:"arrow-left"},on:{click:e.navigator}}),s("div",{staticClass:"nav-title"},[e._v(e._s(e.title))])],1)])},r=[],d=(s("ac1f"),s("5319"),s("9911"),{props:["title","link","location_search_id"],methods:{navigator:function(){"/"===this.link?(this.$store.commit("checkTab",2),this.$router.go(-1)):"/index"===this.link?(console.log("ok"),this.$router.replace({path:"/index",query:{shop_id:this.location_search_id}})):this.$router.go(-1)}}}),i=d,n=(s("88fb"),s("2877")),o=Object(n["a"])(i,a,r,!1,null,"3579abc0",null);t["a"]=o.exports}}]);