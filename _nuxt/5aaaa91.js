(window.webpackJsonp=window.webpackJsonp||[]).push([[23,16],{515:function(t,e,r){var content=r(516);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("951d1426",content,!0,{sourceMap:!1})},516:function(t,e,r){var n=r(16)((function(i){return i[1]}));n.push([t.i,".gb-header{background-image:linear-gradient(120deg,#a1c4fd,#c2e9fb);color:#fff;margin-bottom:.5rem;margin-top:1rem}.theme--light.v-divider{border-color:rgba(0,0,0,.12)}.theme--dark.v-divider{border-color:hsla(0,0%,100%,.12)}.v-divider{border:solid;border-width:thin 0 0;display:block;flex:1 1 0px;height:0;max-height:0;max-width:100%;transition:inherit}.v-divider--inset:not(.v-divider--vertical){max-width:calc(100% - 72px)}.v-application--is-ltr .v-divider--inset:not(.v-divider--vertical){margin-left:72px}.v-application--is-rtl .v-divider--inset:not(.v-divider--vertical){margin-right:72px}.v-divider--vertical{align-self:stretch;border:solid;border-width:0 thin 0 0;display:inline-flex;height:inherit;margin:0 -1px;max-height:100%;max-width:0;min-height:100%;vertical-align:text-bottom;width:0}.v-divider--vertical.v-divider--inset{margin-top:8px;max-height:calc(100% - 16px);min-height:0}",""]),n.locals={},t.exports=n},522:function(t,e,r){"use strict";r(9),r(11),r(7),r(3),r(14),r(8),r(15);var n=r(2),o=(r(515),r(20));function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=o.a.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:l({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:l({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})},525:function(t,e,r){"use strict";r.r(e);var n=r(506),o=r(522),d=r(503),l={props:{heading:{type:String,required:!1,default:"Stuff"},subheading:{type:String,required:!1,default:"Stuff is great. I wish I had more stuff"}}},c=r(59),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("div",[e(d.a,{staticClass:"d-flex justify-space-between"},[e(n.a,{attrs:{cols:"12",md:"12",lg:"12",sm:"12"}},[e("h1",{staticClass:"text-h2 mb-4 mx-5",domProps:{textContent:t._s(t.heading)}}),t._v(" "),e("h3",{staticClass:"subheading mx-5 mb-4",domProps:{textContent:t._s(t.subheading)}})]),t._v(" "),e(n.a,{staticClass:"right-align",attrs:{cols:"12",md:"6",sm:"12"}})],1),t._v(" "),e(o.a,{staticClass:"mb-8",attrs:{inset:!1}})],1)}),[],!1,null,null,null);e.default=component.exports},629:function(t,e,r){"use strict";r.r(e);var n=r(514),o={name:"ProjectParent",components:{PageHeader:r(525).default},data:function(){return{heading:"My Projects",subheading:"I like making stuff"}},created:function(){this.$store.commit("nav/SET_NAV_SHOW",!0)}},d=r(59),component=Object(d.a)(o,(function(){var t=this,e=t._self._c;return e(n.a,[e("PageHeader",{attrs:{heading:t.heading,subheading:t.subheading}}),t._v(" "),e("nuxt-child")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PageHeader:r(525).default})}}]);