(window.webpackJsonp=window.webpackJsonp||[]).push([[15,9],{475:function(t,e,r){var content=r(476);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("7132a15d",content,!0,{sourceMap:!1})},476:function(t,e,r){var n=r(18)(!1);n.push([t.i,".gb-header{color:#fff;background-image:linear-gradient(120deg,#a1c4fd,#c2e9fb);margin-top:1rem;margin-bottom:.5rem}.theme--light.v-divider{border-color:rgba(0,0,0,.12)}.theme--dark.v-divider{border-color:hsla(0,0%,100%,.12)}.v-divider{display:block;flex:1 1 0px;max-width:100%;height:0;max-height:0;border:solid;border-width:thin 0 0;transition:inherit}.v-divider--inset:not(.v-divider--vertical){max-width:calc(100% - 72px)}.v-application--is-ltr .v-divider--inset:not(.v-divider--vertical){margin-left:72px}.v-application--is-rtl .v-divider--inset:not(.v-divider--vertical){margin-right:72px}.v-divider--vertical{align-self:stretch;border:solid;border-width:0 thin 0 0;display:inline-flex;height:inherit;min-height:100%;max-height:100%;max-width:0;width:0;vertical-align:text-bottom;margin:0 -1px}.v-divider--vertical.v-divider--inset{margin-top:8px;min-height:0;max-height:calc(100% - 16px)}",""]),t.exports=n},480:function(t,e,r){"use strict";r(11),r(8),r(12),r(5),r(15),r(9),r(16);var n=r(2),o=(r(475),r(38));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=o.a.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:l({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:l({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})},484:function(t,e,r){var content=r(492);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("d617220a",content,!0,{sourceMap:!1})},491:function(t,e,r){"use strict";r(484)},492:function(t,e,r){var n=r(18)(!1);n.push([t.i,"div.right-border{border-right:2px solid #fff}",""]),t.exports=n},499:function(t,e,r){var content=r(518);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("6bc062d6",content,!0,{sourceMap:!1})},500:function(t,e,r){var content=r(520);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("753deabf",content,!0,{sourceMap:!1})},503:function(t,e,r){"use strict";r.r(e);var n=r(315),o=r(467),c={name:"HomeNav",props:{dark:{type:Boolean,required:!1,default:!0}},computed:{links:function(){return this.$store.state.nav.links},btnClassObject:function(){return{"white--text":this.dark}}},methods:{divClassObject:function(i){return{"right-border":i<this.links.length-1}}}},l=(r(491),r(63)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e(o.a,{attrs:{"align-center":"",justify:"center"}},t._l(t.links,(function(link,i){return e("div",{key:i,staticClass:"px-4",class:t.divClassObject(i)},[e(n.a,{class:t.btnClassObject,attrs:{text:"",nuxt:!0,to:link.to},domProps:{textContent:t._s(link.title)}})],1)})),0)}),[],!1,null,null,null);e.default=component.exports},517:function(t,e,r){"use strict";r(499)},518:function(t,e,r){var n=r(18)(!1);n.push([t.i,".nuxt-content h2{background-image:linear-gradient(90deg,#6a85b6 0,#bac8e0);color:#fff;margin-top:1.5em;margin-bottom:.5em}",""]),t.exports=n},519:function(t,e,r){"use strict";r(500)},520:function(t,e,r){var n=r(18)(!1);n.push([t.i,".bg-black[data-v-aecd4652]{background:rgba(.2,.2,.2,.45)}.welcome[data-v-aecd4652]{padding:2em;margin-top:5em;letter-spacing:1.2px}.big-vert[data-v-aecd4652]{margin-top:20em;margin-bottom:20em}.fh[data-v-aecd4652],.holder[data-v-aecd4652]{height:100%}.holder[data-v-aecd4652]{margin-top:12em}.fade-enter[data-v-aecd4652]{opacity:0}.fade-enter-active[data-v-aecd4652]{transition:opacity 2s ease-in}.fade-enter-to[data-v-aecd4652]{opacity:1}",""]),t.exports=n},552:function(t,e,r){"use strict";r.r(e);var n=r(470),o=r(480),c=r(467),l=r(33),d=(r(72),r(94),{name:"HomePage",components:{HomeNav:r(503).default},layout:"home_layout",asyncData:function(t){return Object(l.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,e.next=3,r("home","welcome-message").fetch();case 3:return n=e.sent,e.abrupt("return",{message:n});case 5:case"end":return e.stop()}}),e)})))()},data:function(){return{showTitle:!1,showMessage:!1}},mounted:function(){this.triggerTitleMessage()},methods:{triggerTitleMessage:function(){var t=this;setInterval((function(){t.showTitle=!0}),500),setInterval((function(){t.showMessage=!0}),1500),setInterval((function(){t.showPosts=!0}),3e3)},scrollListen:function(){document.addEventListener("scroll",(function(){document.documentElement.dataset.scroll=window.scrollY}))}}}),v=(r(517),r(519),r(63)),component=Object(v.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"holder"},[e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.showTitle,expression:"showTitle"}],staticClass:"title fh",attrs:{align:"",justify:"center"}},[e(c.a,{attrs:{align:"center",justify:"center"}},[e(n.a,{staticClass:"text-center",attrs:{cols:"8",dark:""}},[e("h1",{staticClass:"text-h1 mb-4 white--text"},[t._v("C. Ryan Manzer")]),t._v(" "),e("h4",{staticClass:"subheading mb-3 white--text"},[t._v("\n            Full stack software engineer, oceanographer, gentleman scientist\n          ")]),t._v(" "),e(o.a,{staticClass:"my-4",attrs:{dark:""}}),t._v(" "),e("home-nav")],1)],1),t._v(" "),e(c.a,{attrs:{align:"center",justify:"center"}},[e(n.a,{attrs:{cols:"8"}},[e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.showMessage,expression:"showMessage"}],staticClass:"welcome white--text"},[e("nuxt-content",{attrs:{document:t.message}})],1)])],1)],1)],1)])],1)}),[],!1,null,"aecd4652",null);e.default=component.exports}}]);