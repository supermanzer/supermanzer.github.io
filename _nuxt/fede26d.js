(window.webpackJsonp=window.webpackJsonp||[]).push([[18,4,16],{515:function(t,e,n){var content=n(516);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("951d1426",content,!0,{sourceMap:!1})},516:function(t,e,n){var r=n(16)((function(i){return i[1]}));r.push([t.i,".gb-header{background-image:linear-gradient(120deg,#a1c4fd,#c2e9fb);color:#fff;margin-bottom:.5rem;margin-top:1rem}.theme--light.v-divider{border-color:rgba(0,0,0,.12)}.theme--dark.v-divider{border-color:hsla(0,0%,100%,.12)}.v-divider{border:solid;border-width:thin 0 0;display:block;flex:1 1 0px;height:0;max-height:0;max-width:100%;transition:inherit}.v-divider--inset:not(.v-divider--vertical){max-width:calc(100% - 72px)}.v-application--is-ltr .v-divider--inset:not(.v-divider--vertical){margin-left:72px}.v-application--is-rtl .v-divider--inset:not(.v-divider--vertical){margin-right:72px}.v-divider--vertical{align-self:stretch;border:solid;border-width:0 thin 0 0;display:inline-flex;height:inherit;margin:0 -1px;max-height:100%;max-width:0;min-height:100%;vertical-align:text-bottom;width:0}.v-divider--vertical.v-divider--inset{margin-top:8px;max-height:calc(100% - 16px);min-height:0}",""]),r.locals={},t.exports=r},522:function(t,e,n){"use strict";n(9),n(11),n(7),n(3),n(14),n(8),n(15);var r=n(2),o=(n(515),n(20));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=o.a.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:c({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:c({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})},525:function(t,e,n){"use strict";n.r(e);var r=n(506),o=n(522),l=n(503),c={props:{heading:{type:String,required:!1,default:"Stuff"},subheading:{type:String,required:!1,default:"Stuff is great. I wish I had more stuff"}}},d=n(59),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;return e("div",[e(l.a,{staticClass:"d-flex justify-space-between"},[e(r.a,{attrs:{cols:"12",md:"12",lg:"12",sm:"12"}},[e("h1",{staticClass:"text-h2 mb-4 mx-5",domProps:{textContent:t._s(t.heading)}}),t._v(" "),e("h3",{staticClass:"subheading mx-5 mb-4",domProps:{textContent:t._s(t.subheading)}})]),t._v(" "),e(r.a,{staticClass:"right-align",attrs:{cols:"12",md:"6",sm:"12"}})],1),t._v(" "),e(o.a,{staticClass:"mb-8",attrs:{inset:!1}})],1)}),[],!1,null,null,null);e.default=component.exports},530:function(t,e,n){var content=n(540);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("2c49da80",content,!0,{sourceMap:!1})},537:function(t,e,n){var content=n(538);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("4f0f456e",content,!0,{sourceMap:!1})},538:function(t,e,n){var r=n(16)((function(i){return i[1]}));r.push([t.i,".gb-header{background-image:linear-gradient(120deg,#a1c4fd,#c2e9fb);color:#fff;margin-bottom:.5rem;margin-top:1rem}.v-parallax{overflow:hidden;position:relative;z-index:0}.v-parallax__image-container{bottom:0;contain:strict;left:0;position:absolute;right:0;top:0;z-index:1}.v-parallax__image{bottom:0;display:none;left:50%;min-height:100%;min-width:100%;position:absolute;transform:translate(-50%);transition:opacity .3s cubic-bezier(.25,.8,.5,1);will-change:transform;z-index:1}.v-parallax__content{color:#fff;display:flex;flex-direction:column;height:100%;justify-content:center;padding:0 1rem;position:relative;z-index:2}",""]),r.locals={},t.exports=r},539:function(t,e,n){"use strict";n(530)},540:function(t,e,n){var r=n(16)((function(i){return i[1]}));r.push([t.i,"div.nuxt-content a{color:inherit}.v-application a.section-title{color:#fff;-webkit-text-decoration:none;text-decoration:none}",""]),r.locals={},t.exports=r},541:function(t,e,n){t.exports=n.p+"img/link.f1a8708.png"},567:function(t,e,n){"use strict";n.r(e);var r=n(225),o=n(506),l=n(226),c=(n(19),n(537),n(1).a.extend({name:"translatable",props:{height:Number},data:function(){return{elOffsetTop:0,parallax:0,parallaxDist:0,percentScrolled:0,scrollTop:0,windowHeight:0,windowBottom:0}},computed:{imgHeight:function(){return this.objHeight()}},beforeDestroy:function(){window.removeEventListener("scroll",this.translate,!1),window.removeEventListener("resize",this.translate,!1)},methods:{calcDimensions:function(){var t=this.$el.getBoundingClientRect();this.scrollTop=window.pageYOffset,this.parallaxDist=this.imgHeight-this.height,this.elOffsetTop=t.top+this.scrollTop,this.windowHeight=window.innerHeight,this.windowBottom=this.scrollTop+this.windowHeight},listeners:function(){window.addEventListener("scroll",this.translate,!1),window.addEventListener("resize",this.translate,!1)},objHeight:function(){throw new Error("Not implemented !")},translate:function(){this.calcDimensions(),this.percentScrolled=(this.windowBottom-this.elOffsetTop)/(parseInt(this.height)+this.windowHeight),this.parallax=Math.round(this.parallaxDist*this.percentScrolled)}}})),d=n(5),h=Object(d.a)(c).extend().extend({name:"v-parallax",props:{alt:{type:String,default:""},height:{type:[String,Number],default:500},src:String,srcset:String},data:function(){return{isBooted:!1}},computed:{styles:function(){return{display:"block",opacity:this.isBooted?1:0,transform:"translate(-50%, ".concat(this.parallax,"px)")}}},mounted:function(){this.init()},methods:{init:function(){var t=this,img=this.$refs.img;img&&(img.complete?(this.translate(),this.listeners()):img.addEventListener("load",(function(){t.translate(),t.listeners()}),!1),this.isBooted=!0)},objHeight:function(){return this.$refs.img.naturalHeight}},render:function(t){var e=t("div",{staticClass:"v-parallax__image-container"},[t("img",{staticClass:"v-parallax__image",style:this.styles,attrs:{src:this.src,srcset:this.srcset,alt:this.alt},ref:"img"})]),content=t("div",{staticClass:"v-parallax__content"},this.$slots.default);return t("div",{staticClass:"v-parallax",style:{height:"".concat(this.height,"px")},on:this.$listeners},[e,content])}}),f=n(503),v={name:"AboutSection",props:{section:{type:Object,required:!0}},computed:{sectionId:function(){return this.$lowerSnake(this.section.title)},sectionLink:function(){return"#".concat(this.sectionId)}}},m=(n(539),n(59)),component=Object(m.a)(v,(function(){var t=this,e=t._self._c;return e("div",[e(h,{attrs:{src:t.section.parallax_image}},[e(l.a,{attrs:{absolute:""}},[e(f.a,{attrs:{align:"center",justify:"center"}},[e(o.a,{staticClass:"text-center",attrs:{cols:"12"}},[e("h1",{staticClass:"font-weight-thin mb-4 display-1",attrs:{id:t.sectionId}},[e("a",{staticClass:"section-title",attrs:{href:t.sectionLink}},[t._v("\n              "+t._s(t.section.title)+"\n            ")])])])],1)],1)],1),t._v(" "),e(r.a,{staticClass:"px-4 py-2",attrs:{flat:""}},[e("nuxt-content",{attrs:{document:t.section}})],1)],1)}),[],!1,null,null,null);e.default=component.exports},569:function(t,e,n){var content=n(583);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("e5ee6c94",content,!0,{sourceMap:!1})},582:function(t,e,n){"use strict";n(569)},583:function(t,e,n){var r=n(16),o=n(584),l=n(541),c=r((function(i){return i[1]})),d=o(l);c.push([t.i,".icon.icon-link[data-v-294f81ec]{background-image:url("+d+");background-size:20px 20px;display:inline-block;height:20px;margin-right:.25em;width:20px}",""]),c.locals={},t.exports=c},584:function(t,e,n){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},625:function(t,e,n){"use strict";n.r(e);var r=n(514),o=n(33),l=(n(103),n(567)),c=n(525),d={name:"AboutPage",components:{AboutSection:l.default,PageHeader:c.default},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,e.next=3,n("about").sortBy("title","desc").fetch();case 3:return r=e.sent,e.abrupt("return",{sections:r});case 5:case"end":return e.stop()}}),e)})))()},data:function(){return{heading:"About Me",subheading:"I'm just this guy, you know?"}}},h=(n(582),n(59)),component=Object(h.a)(d,(function(){var t=this,e=t._self._c;return e(r.a,{attrs:{"grid-list-md":""}},[e("PageHeader",{attrs:{heading:t.heading,subheading:t.subheading}}),t._v(" "),t._l(t.sections,(function(section,t){return e("about-section",{key:t,staticClass:"my-6",attrs:{section:section}})}))],2)}),[],!1,null,"294f81ec",null);e.default=component.exports;installComponents(component,{PageHeader:n(525).default,AboutSection:n(567).default})}}]);