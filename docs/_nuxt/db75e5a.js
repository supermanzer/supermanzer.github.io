(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{100:function(t,e,n){"use strict";n.r(e);var r={name:"NavBarDrawer",components:{SnackBar:n(296).default},props:{dark:{type:Boolean,required:!1,default:!0}},data:function(){return{drawer:!1,clipped:!0,fixed:!1,right:!0,rightDrawer:!1,title:"Supermanzer",miniVariant:!1}},computed:{navLinks:function(){return this.$store.state.nav.links},show:function(){return this.$store.state.nav.settings.show},textClassObject:function(){return{"grey--text text--lighten-2":this.dark}}}},o=(n(358),n(53)),c=n(54),l=n.n(c),f=n(446),d=n(440),v=n(178),m=n(204),h=n(441),w=n(177),_=n(179),x=n(120),k=n(103),V=n(105),C=n(447),E=n(442),S=n(443),T=n(195),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav-wrapper"},[n("v-navigation-drawer",{staticClass:"py-3",attrs:{clipped:t.clipped,app:"",dark:"",fixed:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-row",{staticClass:"mt-15",attrs:{align:"center",justify:"center"}},[n("v-col",{attrs:{cols:"12",align:"center"}},[n("v-avatar",{attrs:{size:"150"}},[n("img",{attrs:{src:"https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",alt:"I like coffee",title:"I like coffee"}})])],1)],1),t._v(" "),n("v-row",{staticClass:"mt-4 mb-3",attrs:{align:"center"}},[n("v-list",{staticClass:"mt-10",attrs:{nav:"",width:"100%"}},t._l(t.navLinks,(function(link,e){return n("v-list-item",{key:e,staticClass:"py-2 px-4",attrs:{link:!0,nuxt:!0,to:link.to,ripple:!0}},[n("v-list-item-icon",[n("v-icon",[t._v(t._s(link.icon))])],1),t._v(" "),n("v-list-item-title",[t._v("\n            "+t._s(link.title)+"\n          ")])],1)})),1)],1)],1),t._v(" "),n("transition",{attrs:{name:"fade-transition"}},[n("nav",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}]},[n("v-app-bar",{attrs:{app:"",dark:t.dark,"clipped-left":t.clipped,"elevate-on-scroll":""}},[n("v-app-bar-nav-icon",{class:t.textClassObject,on:{click:function(e){t.drawer=!t.drawer}}}),t._v(" "),n("v-toolbar-title",{staticClass:"text-uppercase mx-10",class:t.textClassObject,attrs:{to:"/"},domProps:{textContent:t._s(t.title)}}),t._v(" "),n("SnackBar"),t._v(" "),n("v-spacer"),t._v(" "),n("div",{staticClass:"hidden-md-and-down"},t._l(t.navLinks,(function(link,i){return n("v-btn",{key:i,attrs:{text:"",nuxt:!0,to:link.to},domProps:{textContent:t._s(link.title)}})})),1)],1)],1)])],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VAppBar:f.a,VAppBarNavIcon:d.a,VAvatar:v.a,VBtn:m.a,VCol:h.a,VIcon:w.a,VList:_.a,VListItem:x.a,VListItemIcon:k.a,VListItemTitle:V.c,VNavigationDrawer:C.a,VRow:E.a,VSpacer:S.a,VToolbarTitle:T.a})},188:function(t,e,n){"use strict";n(8);var r=n(1),o=n(203),c=n.n(o);r.a.filter("markdown",(function(t){return c()(t)}))},189:function(t,e,n){"use strict";e.a=function(t,e){var n=t.store;e("showSnack",(function(t){return n.commit("snackbar/SHOW_MESSAGE",t)}))}},190:function(t,e,n){"use strict";e.a=function(t){var e=t.query,n=t.enablePreview;e.preview&&n()}},258:function(t,e,n){var content=n(330);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("24fa1e84",content,!0,{sourceMap:!1})},260:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return r}));var r=function(){return{page:{title:"About Me",avatar:"/images/supermanzer.jpeg",sections:[]},sections:["why-i-code","interests"]}}},267:function(t,e,n){var content=n(359);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("199cf526",content,!0,{sourceMap:!1})},269:function(t,e,n){var content=n(394);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("789e2870",content,!0,{sourceMap:!1})},270:function(t,e,n){var content=n(400);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("d42000c2",content,!0,{sourceMap:!1})},295:function(t,e,n){"use strict";var r={name:"DefaultLayout",components:{NavBarDrawer:n(100).default}},o=(n(393),n(53)),c=n(54),l=n.n(c),f=n(438),d=n(444),v=n(445),m=n(442),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("NavBarDrawer",{attrs:{dark:!0}}),t._v(" "),n("v-main",{staticClass:"fh"},[n("nuxt")],1),t._v(" "),n("v-footer",{staticClass:"mt-8",attrs:{absolute:!0}},[n("v-row",{attrs:{justify:"center",align:"center"}},[n("span",[t._v("© 2020 C. Ryan Manzer")])])],1)],1)}),[],!1,null,"2056be75",null);e.a=component.exports;l()(component,{NavBarDrawer:n(100).default}),l()(component,{VApp:f.a,VFooter:d.a,VMain:v.a,VRow:m.a})},296:function(t,e,n){"use strict";n.r(e);n(260);var r={data:function(){return{show:!1,color:"",message:""}},created:function(){var t=this;this.$store.watch((function(t){return t.snackbar.snackText}),(function(){var e=t.$store.state.snackbar.snackText,n=t.$store.state.snackbar.snackColor;""!==e&&(t.message=e,t.color=n,t.show=!0,t.$store.commit("snackbar/SET_SNACKTEXT",""))}))},computed:{textClass:function(){return this.color.length>0?"".concat(this.color,"--text"):""}}},o=n(53),c=n(54),l=n.n(c),f=n(204),d=n(439),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-snackbar",{class:t.textClass,attrs:{app:"",top:""},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[t._v("\n  "+t._s(t.message)+"\n  "),n("v-btn",{attrs:{text:"",color:t.color},nativeOn:{click:function(e){t.show=!1}}},[t._v("Close")])],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:f.a,VSnackbar:d.a})},297:function(t,e,n){"use strict";var r={name:"DefaultLayout",components:{NavBarDrawer:n(100).default}},o=(n(399),n(53)),c=n(54),l=n.n(c),f=n(438),d=n(148),v=n(445),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-img",{attrs:{width:"100%",height:"100%",src:"/images/home/3.jpeg",gradient:"to top, rgba(0,0,0, .1), rgba(0,0,0, .5)"}},[n("NavBarDrawer"),t._v(" "),n("v-main",{},[n("nuxt")],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{NavBarDrawer:n(100).default}),l()(component,{VApp:f.a,VImg:d.a,VMain:v.a})},308:function(t,e,n){n(309),t.exports=n(310)},329:function(t,e,n){"use strict";n(258)},330:function(t,e,n){var r=n(14)(!1);r.push([t.i,"h1[data-v-fc23d18a]{font-size:20px}",""]),t.exports=r},358:function(t,e,n){"use strict";n(267)},359:function(t,e,n){var r=n(14)(!1);r.push([t.i,"header.v-app-bar--hide-shadow{background-color:rgba(50,50,50,0)!important;border-color:rgba(50,50,50,0)!important}header.v-app-bar--is-scrolled{background-color:rgba(50,50,50,.7)!important;border-color:rgba(50,50,50,.7)!important;color:#fff!important}header.v-app-bar--is-scrolled .v-btn{color:#fff!important}",""]),t.exports=r},393:function(t,e,n){"use strict";n(269)},394:function(t,e,n){var r=n(14)(!1);r.push([t.i,"footer[data-v-2056be75]{background:rgba(50,50,50,.5)}main[data-v-2056be75]{background-image:linear-gradient(0deg,#505285 0,#585e92 12%,#65689f 25%,#7474b0 37%,#7e7ebb 50%,#8389c7 62%,#9795d4 75%,#a2a1dc 87%,#b5aee4);margin-bottom:2em;padding:2em 0}",""]),t.exports=r},399:function(t,e,n){"use strict";n(270)},400:function(t,e,n){var r=n(14)(!1);r.push([t.i,"footer{background:rgba(50,50,50,.5)}main{height:100%}",""]),t.exports=r},401:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return r})),n.d(e,"getters",(function(){return o})),n.d(e,"actions",(function(){return c})),n.d(e,"mutations",(function(){return l}));var r=function(){return{}},o={},c={},l={}},402:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return r})),n.d(e,"mutations",(function(){return o})),n.d(e,"actions",(function(){return c})),n.d(e,"getters",(function(){return l}));var r=function(){return{settings:{drawer:!1,clipped:!0,fixed:!1,right:!0,rightDrawer:!1,title:"Supermanzer",miniVariant:!1,show:!0},links:[{icon:"mdi-home",title:"Home",to:"/"},{icon:"mdi-code-tags",title:"Projects",to:"/projects"},{icon:"mdi-account",title:"About",to:"/about"},{icon:"mdi-robot-excited",title:"Neat Stuff",to:"/excited"}]}},o={TOGGLE_DRAWER:function(t){t.settings.drawer=!t.settings.drawer},TOGGLE_NAV_SHOW:function(t){t.settings.show=!t.settings.show},SET_NAV_SHOW:function(t,e){t.settings.show=e}},c={toggleDrawer:function(t){t.commit("TOGGLE_DRAWER")}},l={getDrawer:function(t){return t.settings.drawer}}},403:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return r})),n.d(e,"mutations",(function(){return o})),n.d(e,"actions",(function(){return c})),n.d(e,"getters",(function(){return l}));var r=function(){return{snackbar:!1,snackText:"",snackColor:""}},o={SHOW_MESSAGE:function(t,e){t.snackText=e.text,t.snackColor=e.color},TOGGLE_SNACK:function(t){t.snackbar=!t.snackbar},SET_SNACKTEXT:function(t,text){t.snackText=text}},c={toggleSnack:function(t){t.commit("TOGGLE_SNACK")},passText:function(t,e){(0,t.commit)("SET_SNACKTEXT",e.text)}},l={}},404:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return r})),n.d(e,"mutations",(function(){return o})),n.d(e,"actions",(function(){return c})),n.d(e,"getters",(function(){return l}));n(6),n(92);var r=function(){return{vizzes:[]}},o={setVizzes:function(t,e){e.forEach((function(e){if(void 0===t.vizzes.find((function(t){return t.id==e.id}))){var n=e.data();n.id=e.id,t.vizzes.push(n)}}))}},c={loadVizzes:function(t){var e=t.commit;this.$fireStore.collection("tableau").get().then((function(t){e("setVizzes",t.docs)})).catch((function(t){console.error(t.message)}))}},l={getViz:function(t){return function(e){return t.vizzes.find((function(t){return t.id===e}))}}}},83:function(t,e,n){"use strict";var r={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=(n(329),n(53)),c=n(54),l=n.n(c),f=n(438),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[404===t.error.statusCode?n("h1",[t._v(t._s(t.pageNotFound))]):n("h1",[t._v(t._s(t.otherError))]),t._v(" "),n("NuxtLink",{attrs:{to:"/"}},[t._v("Home page")])],1)}),[],!1,null,"fc23d18a",null);e.a=component.exports;l()(component,{VApp:f.a})}},[[308,51,7,52]]]);