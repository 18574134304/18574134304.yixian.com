(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f268d1c2"],{"293b":function(e,t,s){},"8c4d":function(e,t,s){"use strict";s("293b")},d2b9:function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"set-mobile"}},[s("nav-bar",{attrs:{title:"更换手机号"}}),s("div",{staticClass:"content"},[e.step1?s("div",{staticClass:"step1"},[s("div",{staticClass:"box"},[s("div",{staticClass:"mobile-box"},[s("p",{staticClass:"msg"},[e._v("请输入您需要绑定的新手机号")]),s("div",{staticClass:"mobile"},[s("div",{staticClass:"left"},[s("span",[e._v("+86")]),s("van-icon",{staticClass:"arrow-icon",attrs:{name:"arrow"}})],1),s("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],attrs:{placeholder:"请输入手机号",type:"tel",maxlength:"11"},domProps:{value:e.phone},on:{input:function(t){t.target.composing||(e.phone=t.target.value)}}})])])]),s("a",{staticClass:"submit",attrs:{href:"javascript:void(0);"},on:{click:e.naxt}},[e._v("下一步")])]):s("div",{staticClass:"step2"},[s("div",{staticClass:"box"},[s("p",{staticClass:"title"},[e._v("输入验证码")]),s("span",{staticClass:"msg"},[e._v("验证码已发送至 +86 "+e._s(e.phone.replace(/^(.{3})(.*)(.{4})$/,"$1 $2 $3")))]),s("div",{staticClass:"code-box"},e._l(6,(function(t,n){return s("label",{key:n,class:{line:e.focused&&e.cursorIndex===n},attrs:{for:"vscode"},domProps:{textContent:e._s(e.codeArr[n])}})})),0),s("input",{directives:[{name:"model",rawName:"v-model",value:e.code,expression:"code"}],ref:"vscode",attrs:{id:"vscode",type:"tel",maxlength:"6",disabled:e.telDisabled},domProps:{value:e.code},on:{focus:function(t){e.focused=!0},blur:function(t){e.focused=!1},input:function(t){t.target.composing||(e.code=t.target.value)}}}),s("p",{staticClass:"msg"},[e._v("接收验证码大约需要20秒，请耐心等待")]),e.sendFlag?s("p",{staticClass:"msg"},[e._v("可重新获取验证码")]):s("p",{staticClass:"timer"},[e._v(e._s(e.time)+" 秒后可重新获取验证码")]),s("a",{staticClass:"reloadSend",class:{"reloadSend-t":e.sendFlag},attrs:{href:"javascript:void(0);"},on:{click:function(t){e.sendFlag&&e.sendCode()}}},[e._v("发送验证码")])])])])],1)},a=[],o=(s("d3b7"),s("ac1f"),s("3ca3"),s("5319"),s("1276"),s("ddb0"),s("2b3d"),s("96cf"),s("1da1")),r=s("d968"),i={components:{navBar:r["a"]},data:function(){return{phone:"",step1:!0,code:"",focused:!0,telDisabled:!1,sendFlag:!0,time:30,timer:null}},methods:{timeing:function(){var e=this;this.sendFlag=!1,this.timer=setInterval((function(){e.time?e.time-=1:(e.sendFlag=!0,e.time=30,clearInterval(e.timer))}),1e3)},naxt:function(){if(!/^1[3456789]\d{9}$/.test(this.phone))return this.$toast("请输入11位合法手机号");this.sendCode()},sendCode:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var s,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.sendFlag){t.next=2;break}return t.abrupt("return");case 2:return s=new URLSearchParams,s.append("phone",e.phone),s.append("userToken",e.$store.state.token),t.next=7,e.$http.post("/user/postChangePhoneBySendSms",s);case 7:n=t.sent,a=n.data,"000000"===a.messageStatus?(e.$toast("验证码已发送"),e.timeing(),e.step1=!1,e.$nextTick((function(){e.$refs.vscode.focus()}))):e.$toast("失败,"+a.error);case 10:case"end":return t.stop()}}),t)})))()},validCode:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var s,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return s=new URLSearchParams,s.append("newPhone",e.phone),s.append("userToken",e.$store.state.token),s.append("sms",e.code),t.next=6,e.$http.post("/user/postChangePhoneByUpdateData",s);case 6:n=t.sent,a=n.data,"000000"===a.messageStatus?e.$confirm({message:"手机号修改成功",showCancelButton:!1}).then((function(){e.$router.back()})):(e.$toast("失败,"+a.error),e.code="",e.$refs.vscode.focus());case 9:case"end":return t.stop()}}),t)})))()}},computed:{codeArr:function(){return this.code.split("")},cursorIndex:function(){return this.code.length}},watch:{code:function(e){this.code=e.replace(/[^\d]/g,""),e.length>5&&(this.$refs.vscode.blur(),this.validCode())}}},c=i,d=(s("8c4d"),s("2877")),l=Object(d["a"])(c,n,a,!1,null,"19b450a7",null);t["default"]=l.exports}}]);