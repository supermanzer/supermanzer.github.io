(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{432:function(t,e,n){"use strict";n(32),n(10),n(11),n(82),n(277),n(194),n(88),n(73);var r=n(1);var o,l=n(65);e.a=(o="container",r.a.extend({name:"v-".concat(o),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,e){var n=e.props,data=e.data,r=e.children;data.staticClass="".concat(o," ").concat(data.staticClass||"").trim();var l=data.attrs;if(l){data.attrs={};var d=Object.keys(l).filter((function(t){if("slot"===t)return!1;var e=l[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}));d.length&&(data.staticClass+=" ".concat(d.join(" ")))}return n.id&&(data.domProps=data.domProps||{},data.domProps.id=n.id),t(n.tag,data,r)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var n,r=e.props,data=e.data,o=e.children,d=data.attrs;return d&&(data.attrs={},n=Object.keys(d).filter((function(t){if("slot"===t)return!1;var e=d[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}))),r.id&&(data.domProps=data.domProps||{},data.domProps.id=r.id),t(r.tag,Object(l.a)(data,{staticClass:"container",class:Array({"container--fluid":r.fluid}).concat(n||[])}),o)}})},439:function(t,e,n){var content=n(440);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("5c8fbe94",content,!0,{sourceMap:!1})},440:function(t,e,n){(e=n(16)(!1)).push([t.i,".v-textarea textarea{align-self:stretch;flex:1 1 auto;line-height:1.75rem;max-width:100%;min-height:32px;outline:none;padding:0;width:100%}.v-textarea .v-text-field__prefix,.v-textarea .v-text-field__suffix{padding-top:2px;align-self:start}.v-textarea.v-text-field--box .v-text-field__prefix,.v-textarea.v-text-field--box textarea,.v-textarea.v-text-field--enclosed .v-text-field__prefix,.v-textarea.v-text-field--enclosed textarea{margin-top:24px}.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) textarea,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) textarea,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) textarea,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) textarea{margin-top:10px}.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-label,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-label,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-label,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-label{top:18px}.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense textarea,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense textarea,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense textarea,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense textarea{margin-top:6px}.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__prepend-outer{align-self:flex-start;margin-top:8px}.v-textarea.v-text-field--solo{align-items:flex-start}.v-textarea.v-text-field--solo .v-input__append-inner,.v-textarea.v-text-field--solo .v-input__append-outer,.v-textarea.v-text-field--solo .v-input__prepend-inner,.v-textarea.v-text-field--solo .v-input__prepend-outer{align-self:flex-start;margin-top:12px}.v-application--is-ltr .v-textarea.v-text-field--solo .v-input__append-inner{padding-left:12px}.v-application--is-rtl .v-textarea.v-text-field--solo .v-input__append-inner{padding-right:12px}.v-textarea--auto-grow textarea{overflow:hidden}.v-textarea--no-resize textarea{resize:none}.v-textarea.v-text-field--enclosed .v-text-field__slot{align-self:stretch}.v-application--is-ltr .v-textarea.v-text-field--enclosed .v-text-field__slot{margin-right:-12px}.v-application--is-rtl .v-textarea.v-text-field--enclosed .v-text-field__slot{margin-left:-12px}.v-application--is-ltr .v-textarea.v-text-field--enclosed .v-text-field__slot textarea{padding-right:12px}.v-application--is-rtl .v-textarea.v-text-field--enclosed .v-text-field__slot textarea{padding-left:12px}",""]),t.exports=e},441:function(t,e,n){"use strict";n.r(e);n(8),n(53),n(152);var r={name:"ProjectForm",props:{project:{type:Object,required:!0}},methods:{addSection:function(){this.project.description.push({heading:"",text:""})},postProject:function(){var t=this;this.$store.dispatch("projects/postProject",this.project).then((function(){t.$router.push("/projects/".concat(t.project.id))}))},removeSection:function(t){this.project.description.splice(t,1)}}},o=n(58),l=n(59),d=n.n(l),v=n(203),c=n(423),f=n(422),x=n(415),h=n(448),_=n(180),m=n(416),j=n(417),w=n(443),y=n(456),O=n(47),P=n(200),k=n(529),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-form",[n("v-row",[n("v-col",{attrs:{cols:"12",md:"4","offset-md":"1",sm:"12"}},[n("v-text-field",{attrs:{label:"Project ID",hint:"This is part of the URL so keep it short and descriptive. Use kebab case for multi-word IDs"},model:{value:t.project.id,callback:function(e){t.$set(t.project,"id",e)},expression:"project.id"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",md:"4","offset-md":"1",sm:"12"}},[n("v-text-field",{attrs:{label:"Project Title",hint:"You can use normal spaces here"},model:{value:t.project.title,callback:function(e){t.$set(t.project,"title",e)},expression:"project.title"}})],1)],1),t._v(" "),n("v-row",[n("v-col",{attrs:{md:"8","offset-md":"2",sm:"12"}},[n("v-textarea",{attrs:{"auto-grow":"",label:"Project Summary",hint:"Give a basic overview of this project but keep it short.  This is intended as a preview of the actual details."},model:{value:t.project.summary,callback:function(e){t.$set(t.project,"summary",e)},expression:"project.summary"}})],1)],1),t._v(" "),n("v-row",[n("v-col",{attrs:{cols:"12",md:"4","offset-md":"1"}},[n("v-text-field",{attrs:{"prepend-icon":"mdi-github",label:"Repository URL",hint:"Make sure people can find your code"},model:{value:t.project.github_url,callback:function(e){t.$set(t.project,"github_url",e)},expression:"project.github_url"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",md:"4","offset-md":"1"}},[n("v-text-field",{attrs:{label:"Image URL","prepend-icon":"mdi-file-image",hint:"Can either be path to images in static directory or a remote resource (like Pexels)"},model:{value:t.project.image,callback:function(e){t.$set(t.project,"image",e)},expression:"project.image"}})],1)],1),t._v(" "),n("v-row",[n("v-col",{attrs:{md:"10","offset-md":"1",sm:"12"}},[n("v-toolbar",{attrs:{color:"indigo darken-3",dark:"",dense:""}},[n("v-toolbar-title",[t._v("Detail Sections")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({staticClass:"right",attrs:{dark:"",icon:""},on:{click:t.addSection}},"v-btn",o,!1),r),[n("v-icon",[t._v("mdi-plus")])],1)]}}])},[t._v(" "),n("span",[t._v("Add new section")])])],1),t._v(" "),n("v-row",t._l(t.project.description,(function(section,i){return n("v-col",{key:i,attrs:{cols:"12",md:"10","offset-md":"1"}},[n("v-card",{staticClass:"px-6"},[n("v-text-field",{attrs:{label:"Section Heading"},model:{value:section.heading,callback:function(e){t.$set(section,"heading",e)},expression:"section.heading"}}),t._v(" "),n("v-textarea",{attrs:{"auto-grow":"",label:"Section Text",hint:"Use markdown syntax for inline formatting"},model:{value:section.text,callback:function(e){t.$set(section,"text",e)},expression:"section.text"}}),t._v(" "),n("v-card-actions",[n("v-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({attrs:{icon:"",color:"grey"},on:{click:function(e){return t.removeSection(i)}}},"v-btn",o,!1),r),[n("v-icon",[t._v("mdi-delete-forever-outline")])],1)]}}],null,!0)},[t._v(" "),n("span",[t._v("Delete Section")])])],1)],1)],1)})),1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VBtn:v.a,VCard:c.a,VCardActions:f.a,VCol:x.a,VForm:h.a,VIcon:_.a,VRow:m.a,VSpacer:j.a,VTextField:w.a,VTextarea:y.a,VToolbar:O.a,VToolbarTitle:P.a,VTooltip:k.a})},448:function(t,e,n){"use strict";n(8),n(10),n(66),n(5),n(38),n(13),n(14),n(11),n(201),n(67),n(6),n(60);var r=n(2),o=n(9),l=n(91),d=n(127);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(o.a)(l.a,Object(d.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},n={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=input.$watch("shouldValidate",(function(r){r&&(t.errorBag.hasOwnProperty(input._uid)||(n.valid=e(input)))})):n.valid=e(input),n},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:c({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},456:function(t,e,n){"use strict";n(8),n(10),n(5),n(23),n(13),n(14),n(11),n(6),n(60);var r=n(2),o=(n(439),n(443)),l=n(9);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var v=Object(l.a)(o.a);e.a=v.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},o.a.options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout((function(){t.autoGrow&&t.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var input=this.$refs.input;if(input){input.style.height="0";var t=input.scrollHeight,e=parseInt(this.rows,10)*parseFloat(this.rowHeight);input.style.height=Math.max(e,t)+"px"}},genInput:function(){var input=o.a.options.methods.genInput.call(this);return input.tag="textarea",delete input.data.attrs.type,input.data.attrs.rows=this.rows,input},onInput:function(t){o.a.options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}})},556:function(t,e,n){"use strict";n.r(e);n(8),n(53),n(152);var r={name:"editPage",components:{ProjectForm:n(441).default},data:function(){return{project:{}}},created:function(){this.setProject()},methods:{setProject:function(){var t=this.$route.params.id;void 0!==t&&(this.project=JSON.parse(JSON.stringify(this.$store.getters["projects/getProject"](t))))},addSection:function(){this.project.description.push({heading:"",text:""})},postProject:function(){var t=this;this.$store.dispatch("projects/postProject",this.project).then((function(){t.$router.push("/projects/".concat(t.project.id))}))},removeSection:function(t){this.project.description.splice(t,1)}}},o=n(58),l=n(59),d=n.n(l),v=n(203),c=n(423),f=n(422),x=n(432),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"mb-12"},[n("v-card",{staticClass:"mb-12"},[n("v-card-title",{attrs:{"primary-title":""}},[t._v("\n      Edit Project - "+t._s(t.project.title))]),t._v(" "),n("v-card-text",[n("ProjectForm",{attrs:{project:t.project}})],1),t._v(" "),n("v-card-actions",{staticClass:"d-flex justify-space-around pb-6"},[n("v-btn",{attrs:{color:"grey"}},[t._v("Cancel")]),t._v(" "),n("v-btn",{attrs:{color:"primary"},on:{click:t.postProject}},[t._v("Submit")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{ProjectForm:n(441).default}),d()(component,{VBtn:v.a,VCard:c.a,VCardActions:f.a,VCardText:f.b,VCardTitle:f.c,VContainer:x.a})}}]);