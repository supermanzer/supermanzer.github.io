(window.webpackJsonp=window.webpackJsonp||[]).push([[40,11],{448:function(t,e,o){"use strict";o.d(e,"a",(function(){return c})),o.d(e,"b",(function(){return d})),o.d(e,"c",(function(){return m}));var n=o(449),r=o(0),c=Object(r.g)("v-card__actions"),l=Object(r.g)("v-card__subtitle"),d=Object(r.g)("v-card__text"),m=Object(r.g)("v-card__title");n.a},489:function(t,e,o){"use strict";o.r(e);var n={name:"EditComponents",props:{components:{type:Array,required:!0}},data:function(){return{tab:null}},methods:{addComponent:function(){this.components.push({heading:"",icon:"",text:""})},refreshComponent:function(t){var e=t.index,component=t.component;this.components[e]=component;var o=this.components;this.$emit("update-components",o)}}},r=o(53),c=o(54),l=o.n(c),d=o(204),m=o(449),v=o(177),f=o(443),h=o(585),_=o(612),x=o(611),V=o(582),C=o(52),k=o(195),$=o(485),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-card",{attrs:{flat:""}},[o("v-toolbar",{attrs:{dark:"",flat:"",color:"light-blue"},scopedSlots:t._u([{key:"extension",fn:function(){return[o("v-tabs",{attrs:{right:"",dark:"","slider-color":"deep-purple accent-4"},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.components,(function(component,i){return o("v-tab",{key:i},[t._v("\n          Comp "+t._s(i)+"\n        ")])})),1)]},proxy:!0}])},[o("v-toolbar-title",[t._v("Edit Components")]),t._v(" "),o("v-spacer"),t._v(" "),o("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,r=e.attrs;return[o("v-btn",t._g(t._b({attrs:{color:"white--text",icon:""},on:{click:t.addComponent}},"v-btn",r,!1),n),[o("v-icon",[t._v("mdi-note-plus-outline")])],1)]}}])},[t._v(" "),o("span",[t._v("Add new Component")])])],1),t._v(" "),o("v-tabs-items",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.components,(function(component,e){return o("v-tab-item",{key:e},[o("ComponentForm",{attrs:{comp:component,index:e},on:{"update-component":t.refreshComponent}})],1)})),1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:d.a,VCard:m.a,VIcon:v.a,VSpacer:f.a,VTab:h.a,VTabItem:_.a,VTabs:x.a,VTabsItems:V.a,VToolbar:C.a,VToolbarTitle:k.a,VTooltip:$.a})},514:function(t,e,o){"use strict";o.r(e);var n={name:"EditSection",components:{EditComponents:o(489).default},props:{id:{type:String,required:!0}},computed:{element:{get:function(){return this.$store.getters["about/getElement"](this.id)},set:function(element){var t=this.id;this.$store.commit("about/updateElement",{id:t,element:element})}},position:{get:function(){return this.$store.getters["about/getPosition"](this.id)},set:function(t){var e=this.id;this.$store.commit("about/updatePosition",{id:e,position:t})}},heading:{get:function(){return this.$store.getters["about/getHeading"](this.id)},set:function(t){var e=this.id;this.$store.commit("about/updateHeading",{id:e,heading:t})}},icon:{get:function(){return this.$store.getters["about/getIcon"](this.id)},set:function(t){var e=this.id;this.$store.commit("about/updateIcon",{id:e,icon:t})}},text:{get:function(){return this.$store.getters["about/getText"](this.id)},set:function(text){var t=this.id;this.$store.commit("about/updateText",{id:t,text:text})}},parallax_image:{get:function(){return this.$store.getters["about/getParallaxImage"](this.id)},set:function(t){var e=this.id;this.$store.commit("about/updateParallaxImage",{id:e,parallax_image:t})}},components:function(){return JSON.parse(JSON.stringify(this.$store.getters["about/getComponents"](this.id)))}},data:function(){return{items:{element:[{name:"Tab Component",value:"TA"},{name:"Expansion Component",value:"EP"},{name:"List Component",value:"LI"}],position:[{name:"Right",value:"ri"},{name:"Left",value:"le"},{name:"Below",value:"be"}]}}},methods:{refreshComponents:function(t){console.log("refreshing components for section");var e=this.id;this.$store.commit("about/updateComponents",{id:e,components:t})},syncSection:function(){var t=this.id;this.$store.dispatch("about/updateSection",t)}}},r=o(53),c=o(54),l=o.n(c),d=o(204),m=o(441),v=o(471),f=o(473),h=o(177),_=o(442),x=o(589),V=o(483),C=o(497),k=o(485),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-form",[o("v-row",[o("v-col",{attrs:{cols:"12",sm:"10","justify-start":"","align-left":""}},[o("h2",{staticClass:"indigo--text text--darken-3"},[t._v("\n        Edit Page Section - "+t._s(t.id)+"\n      ")])]),t._v(" "),o("v-col",{attrs:{cols:"12",sm:"2","justify-end":"","align-right":""}},[o("v-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,r=e.attrs;return[o("v-btn",t._g(t._b({attrs:{color:"info",icon:""},on:{click:t.syncSection}},"v-btn",r,!1),n),[o("v-icon",[t._v("mdi-swap-vertical")])],1)]}}])},[t._v(" "),o("span",[t._v(" Sync About section to Firestore ")])])],1)],1),t._v(" "),o("v-row",[o("v-col",{attrs:{cols:"12",lg:"6"}},[o("v-select",{attrs:{items:t.items.element,label:"Element","item-text":"name","item-value":"value"},model:{value:t.element,callback:function(e){t.element=e},expression:"element"}})],1),t._v(" "),o("v-col",{attrs:{cols:"12",lg:"6"}},[o("v-select",{attrs:{items:t.items.position,label:"Layout Position","item-text":"name","item-value":"value"},model:{value:t.position,callback:function(e){t.position=e},expression:"position"}})],1),t._v(" "),o("v-col",{attrs:{cols:"12",lg:"5"}},[o("v-text-field",{attrs:{label:"Heading"},model:{value:t.heading,callback:function(e){t.heading=e},expression:"heading"}})],1),t._v(" "),o("v-col",{attrs:{cols:"12",lg:"5"}},[o("v-text-field",{attrs:{label:"Parallax Image"},model:{value:t.parallax_image,callback:function(e){t.parallax_image=e},expression:"parallax_image"}})],1),t._v(" "),o("v-col",{attrs:{cols:"2"}},[o("v-text-field",{attrs:{label:"Icon"},model:{value:t.icon,callback:function(e){t.icon=e},expression:"icon"}})],1),t._v(" "),o("v-col",{attrs:{cols:"12",lg:"10","offset-lg":"1"}},[o("v-textarea",{attrs:{label:"Section Text",textarea:"","auto-grow":"",solo:""},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}})],1)],1),t._v(" "),o("v-container",{attrs:{"grid-list-md":""}},[o("EditComponents",{attrs:{components:t.components},on:{"update-components":t.refreshComponents}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:d.a,VCol:m.a,VContainer:v.a,VForm:f.a,VIcon:h.a,VRow:_.a,VSelect:x.a,VTextField:V.a,VTextarea:C.a,VTooltip:k.a})},594:function(t,e,o){"use strict";o.r(e);var n=o(107),r=(o(514),{name:"EditAboutPage",computed:Object(n.c)({page:function(t){return t.about.page},loggedIn:function(t){return t.auth.loggedIn}}),created:function(){0===this.$store.state.about.page.sections.length&&this.$store.dispatch("about/getAboutSections")},methods:{addSection:function(){this.$store.commit("about/addSection")}}}),c=o(53),l=o(54),d=o.n(l),m=o(446),v=o(204),f=o(449),h=o(448),_=o(177),x=o(442),V=o(443),C=o(195),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-row",{staticClass:"d-flex justify-center"},[o("v-card",{staticClass:"mt-8",attrs:{width:"90%"}},[o("v-app-bar",{attrs:{absolute:"",color:"indigo",dark:"",dense:"",flat:""}},[o("v-toolbar-title",[t._v("Edit About Page")]),t._v(" "),o("v-spacer"),t._v(" "),o("v-btn",{attrs:{icon:"","x-large":""},on:{click:t.addSection}},[o("v-icon",[t._v("mdi-plus")])],1)],1),t._v(" "),o("v-card-text",{staticClass:"mt-10"},t._l(t.page.sections,(function(section,i){return o("v-card",{key:i,staticClass:"my-6"},[o("v-card-text",[o("EditSection",{attrs:{id:section.id}})],1)],1)})),1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VAppBar:m.a,VBtn:v.a,VCard:f.a,VCardText:h.b,VIcon:_.a,VRow:x.a,VSpacer:V.a,VToolbarTitle:C.a})}}]);