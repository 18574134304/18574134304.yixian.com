(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1fdd2d32"],{"00df":function(t,n,e){"use strict";e("9e53")},"620a":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"note"},[e("nav-bar",{attrs:{title:"订单备注",link:"/pay"}}),e("div",{staticClass:"content"},[e("div",{staticClass:"edit-note"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.noteStr,expression:"noteStr"}],staticClass:"note-text",attrs:{placeholder:"如您有特殊要求，请备注告知！",maxlength:"50",rows:"10",wrap:"soft"},domProps:{value:t.noteStr},on:{input:function(n){n.target.composing||(t.noteStr=n.target.value)}}}),e("span",{staticClass:"note-length"},[t._v(t._s(t.noteStr.length+"/50"))])]),e("div",{staticClass:"quick-tags"},[e("h2",{staticClass:"title"},[t._v("快捷标签")]),e("div",{staticClass:"tags"},t._l(t.tagList,(function(n,a){return e("span",{key:a,staticClass:"tag",on:{click:function(e){return t.checkTag(n)}}},[t._v(" "+t._s(n)+" ")])})),0)]),e("button",{staticClass:"submit",on:{click:t.submit}},[t._v("完成")])])],1)},i=[],s=(e("ac1f"),e("5319"),e("d968")),r={components:{NavBar:s["a"]},data:function(){return{noteStr:"",tagList:["不吃辣","少放辣","多放辣","不吃蒜","不吃香菜","不吃葱","不吃姜"]}},mounted:function(){this.onpopstate(),this.$route.params.data&&(this.noteStr=this.$route.params.data)},methods:{submit:function(){this.$router.replace({name:"pay",params:{data:this.noteStr}})},onpopstate:function(){window.addEventListener("popstate",this.back,!1)},back:function(){this.$router.go(-1)},checkTag:function(t){if(this.noteStr.length>50-(t.length+1))return this.$toast("最多50个字哦~");this.noteStr.length?this.noteStr+="，"+t:this.noteStr+=t}},watch:{noteStr:function(t){if(t.length>50)return this.$toast("最多50个字哦~")}},destroyed:function(){window.removeEventListener("popstate",this.back,!1)}},o=r,c=(e("dbe7"),e("2877")),u=Object(c["a"])(o,a,i,!1,null,"43c95182",null);n["default"]=u.exports},"857a":function(t,n,e){var a=e("1d80"),i=/"/g;t.exports=function(t,n,e,s){var r=String(a(t)),o="<"+n;return""!==e&&(o+=" "+e+'="'+String(s).replace(i,"&quot;")+'"'),o+">"+r+"</"+n+">"}},9911:function(t,n,e){"use strict";var a=e("23e7"),i=e("857a"),s=e("af03");a({target:"String",proto:!0,forced:s("link")},{link:function(t){return i(this,"a","href",t)}})},"9e53":function(t,n,e){},af03:function(t,n,e){var a=e("d039");t.exports=function(t){return a((function(){var n=""[t]('"');return n!==n.toLowerCase()||n.split('"').length>3}))}},d968:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"nav"},[e("div",{staticClass:"b"},[e("van-icon",{staticClass:"nav-arrow-left",attrs:{name:"arrow-left"},on:{click:t.navigator}}),e("div",{staticClass:"nav-title"},[t._v(t._s(t.title))])],1)])},i=[],s=(e("ac1f"),e("5319"),e("9911"),{props:["title","link","location_search_id"],methods:{navigator:function(){"/"===this.link?this.$router.go(-1):"/index"===this.link?this.location_search_id?this.$router.replace({path:"/index"+this.location_search_id}):this.$router.replace({path:"/index",query:{shop_id:this.$store.state.shopId}}):"/mine"===this.link?this.$router.replace(this.link):this.$router.go(-1)}}}),r=s,o=(e("00df"),e("2877")),c=Object(o["a"])(r,a,i,!1,null,"93c629b4",null);n["a"]=c.exports},dbe7:function(t,n,e){"use strict";e("f9d5")},f9d5:function(t,n,e){}}]);