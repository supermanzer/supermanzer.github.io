(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{479:function(t,e,n){var content=n(488);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("0aa745d0",content,!0,{sourceMap:!1})},485:function(t,e,n){var content=n(486);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("0cd63bd9",content,!0,{sourceMap:!1})},486:function(t,e,n){var o=n(18)(!1);o.push([t.i,".gb-header{color:#fff;background-image:linear-gradient(120deg,#a1c4fd,#c2e9fb);margin-top:1rem;margin-bottom:.5rem}.v-parallax{position:relative;overflow:hidden;z-index:0}.v-parallax__image-container{position:absolute;top:0;left:0;right:0;bottom:0;z-index:1;contain:strict}.v-parallax__image{position:absolute;bottom:0;left:50%;min-width:100%;min-height:100%;display:none;transform:translate(-50%);will-change:transform;transition:opacity .3s cubic-bezier(.25,.8,.5,1);z-index:1}.v-parallax__content{color:#fff;height:100%;z-index:2;position:relative;display:flex;flex-direction:column;justify-content:center;padding:0 1rem}",""]),t.exports=o},487:function(t,e,n){"use strict";n(479)},488:function(t,e,n){var o=n(18)(!1);o.push([t.i,"a[data-v-556792a4]:active,a[data-v-556792a4]:hover,a[data-v-556792a4]:link,a[data-v-556792a4]:visited{text-decoration:none;color:#fff}",""]),t.exports=o},493:function(t,e,n){"use strict";n.r(e);var o=n(470),r=n(209),l=(n(25),n(485),n(1).a.extend({name:"translatable",props:{height:Number},data:function(){return{elOffsetTop:0,parallax:0,parallaxDist:0,percentScrolled:0,scrollTop:0,windowHeight:0,windowBottom:0}},computed:{imgHeight:function(){return this.objHeight()}},beforeDestroy:function(){window.removeEventListener("scroll",this.translate,!1),window.removeEventListener("resize",this.translate,!1)},methods:{calcDimensions:function(){var t=this.$el.getBoundingClientRect();this.scrollTop=window.pageYOffset,this.parallaxDist=this.imgHeight-this.height,this.elOffsetTop=t.top+this.scrollTop,this.windowHeight=window.innerHeight,this.windowBottom=this.scrollTop+this.windowHeight},listeners:function(){window.addEventListener("scroll",this.translate,!1),window.addEventListener("resize",this.translate,!1)},objHeight:function(){throw new Error("Not implemented !")},translate:function(){this.calcDimensions(),this.percentScrolled=(this.windowBottom-this.elOffsetTop)/(parseInt(this.height)+this.windowHeight),this.parallax=Math.round(this.parallaxDist*this.percentScrolled)}}})),c=n(10),d=Object(c.a)(l).extend().extend({name:"v-parallax",props:{alt:{type:String,default:""},height:{type:[String,Number],default:500},src:String,srcset:String},data:function(){return{isBooted:!1}},computed:{styles:function(){return{display:"block",opacity:this.isBooted?1:0,transform:"translate(-50%, ".concat(this.parallax,"px)")}}},mounted:function(){this.init()},methods:{init:function(){var t=this,img=this.$refs.img;img&&(img.complete?(this.translate(),this.listeners()):img.addEventListener("load",(function(){t.translate(),t.listeners()}),!1),this.isBooted=!0)},objHeight:function(){return this.$refs.img.naturalHeight}},render:function(t){var e=t("div",{staticClass:"v-parallax__image-container"},[t("img",{staticClass:"v-parallax__image",style:this.styles,attrs:{src:this.src,srcset:this.srcset,alt:this.alt},ref:"img"})]),content=t("div",{staticClass:"v-parallax__content"},this.$slots.default);return t("div",{staticClass:"v-parallax",style:{height:"".concat(this.height,"px")},on:this.$listeners},[e,content])}}),h=n(467),f={name:"AboutSection",props:{section:{type:Object,required:!0}},computed:{sectionId:function(){return this.$lowerSnake(this.section.title)},sectionLink:function(){return"#".concat(this.sectionId)}}},m=(n(487),n(63)),component=Object(m.a)(f,(function(){var t=this,e=t._self._c;return e("div",[e(d,{attrs:{src:t.section.parallax_image,dark:""}},[e(r.a,{attrs:{absolute:""}},[e(h.a,{attrs:{align:"center",justify:"center"}},[e(o.a,{staticClass:"text-center",attrs:{cols:"12"}},[e("h1",{staticClass:"font-weight-thin mb-4 display-1",attrs:{id:t.sectionId}},[e("a",{staticClass:"no-dec",attrs:{href:t.sectionLink}},[t._v("\n              "+t._s(t.section.title)+"\n            ")])])])],1)],1)],1),t._v(" "),e("nuxt-content",{attrs:{document:t.section}})],1)}),[],!1,null,"556792a4",null);e.default=component.exports}}]);