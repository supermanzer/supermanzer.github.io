(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{450:function(t,e,r){var content=r(516);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("291950bb",content,!0,{sourceMap:!1})},466:function(t,e,r){"use strict";r.r(e);var o={transition:{name:"to-detail",mode:"out-in",duration:500},props:{project:{type:Object,required:!0}},computed:{projectUrl:function(){return"projects/".concat(this.project.id)}},methods:{}},n=(r(515),r(48)),c=r(42),l=r.n(c),v=r(181),d=r(203),m=r(424),_=r(423),f=r(433),j=r(180),h=r(151),V=r(419),w=r(500),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{attrs:{dark:!1,elevation:3,"min-width":300,"min-height":400}},[r("v-card-title",{staticClass:"text-uppercase d-flex justify-space-around"},[t._v("\n    "+t._s(t.project.title)+"\n    "),t.project.img?r("v-avatar",{attrs:{size:"48px"}},[r("v-img",{attrs:{src:t.project.img}})],1):t._e()],1),t._v(" "),r("v-divider"),t._v(" "),r("v-card-text",{},[t._v(t._s(t.project.summary))]),t._v(" "),r("v-card-actions",{staticClass:"bottom-actions"},[r("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,n=e.attrs;return[t.project.github_link?r("v-btn",t._g(t._b({attrs:{icon:"",color:"indigo accent-2",href:t.project.github_link,target:"_"}},"v-btn",n,!1),o),[r("v-icon",{attrs:{large:""}},[t._v("mdi-github")])],1):t._e()]}}])},[t._v(" "),r("span",[t._v("View on GitHub")])]),t._v(" "),r("v-spacer"),t._v(" "),r("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,n=e.attrs;return[r("v-btn",t._g(t._b({attrs:{text:"",color:"deep-purple accent-4",bottom:!0,nuxt:"",to:{name:"projects-slug",params:{slug:t.project.slug}}}},"v-btn",n,!1),o),[t._v("\n          Details\n        ")])]}}])},[t._v(" "),r("span",[t._v("View Details")])])],1)],1)}),[],!1,null,"3a2cc6a1",null);e.default=component.exports;l()(component,{VAvatar:v.a,VBtn:d.a,VCard:m.a,VCardActions:_.a,VCardText:_.b,VCardTitle:_.c,VDivider:f.a,VIcon:j.a,VImg:h.a,VSpacer:V.a,VTooltip:w.a})},515:function(t,e,r){"use strict";var o=r(450);r.n(o).a},516:function(t,e,r){(e=r(15)(!1)).push([t.i,".bottom-actions[data-v-3a2cc6a1]{position:absolute;bottom:1rem;width:100%;border-top:1px solid rgba(0,0,0,.15)}",""]),t.exports=e},563:function(t,e,r){"use strict";r.r(e);r(71);var o=r(19),n={name:"ProjectCards",components:{ProjectCard:r(466).default},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,e.next=3,r("projects").fetch();case 3:return o=e.sent,e.abrupt("return",{projects:o});case 5:case"end":return e.stop()}}),e)})))()}},c=r(48),l=r(42),v=r.n(l),d=r(417),m=r(418),component=Object(c.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-row",{attrs:{align:"center",justify:"center"}},this._l(this.projects,(function(t,r){return e("v-col",{key:r,attrs:{cols:12,sm:12,md:6,lg:4}},[e("ProjectCard",{attrs:{project:t}})],1)})),1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{ProjectCard:r(466).default}),v()(component,{VCol:d.a,VRow:m.a})}}]);