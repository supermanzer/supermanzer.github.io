(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{483:function(t,o,e){var content=e(490);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(19).default)("334f308d",content,!0,{sourceMap:!1})},489:function(t,o,e){"use strict";e(483)},490:function(t,o,e){var r=e(18)(!1);r.push([t.i,".bottom-actions[data-v-5697bdca]{position:absolute;bottom:1rem;width:100%;border-top:1px solid rgba(0,0,0,.15)}",""]),t.exports=r},502:function(t,o,e){"use strict";e.r(o);var r=e(211),n=e(315),c=e(208),l=e(122),d=e(480),_=e(213),v=e(177),f=e(472),m=e(544),h={transition:{name:"to-detail",mode:"out-in",duration:500},props:{project:{type:Object,required:!0}},computed:{projectUrl:function(){return"projects/".concat(this.project.id)}},methods:{hasLink:function(t){return Object.prototype.hasOwnProperty.call(this.project.links,t)}}},j=(e(489),e(63)),component=Object(j.a)(h,(function(){var t=this,o=t._self._c;return o(c.a,{attrs:{dark:!1,elevation:3,"min-width":300,"min-height":400}},[o(l.c,{staticClass:"text-uppercase d-flex justify-space-around"},[t._v("\n    "+t._s(t.project.title)+"\n    "),t.project.img?o(r.a,{attrs:{size:"48px"}},[o(v.a,{attrs:{src:t.project.img}})],1):t._e()],1),t._v(" "),o(d.a),t._v(" "),o(l.b,{},[t._v(t._s(t.project.summary))]),t._v(" "),o(l.a,{staticClass:"bottom-actions"},[o(m.a,{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,c=e.attrs;return[t.hasLink("github")?o(n.a,t._g(t._b({attrs:{icon:"",color:"indigo accent-2",href:t.project.links.github.url,target:"_"}},"v-btn",c,!1),r),[o(_.a,{attrs:{large:""}},[t._v("mdi-github")])],1):t._e()]}}])},[t._v(" "),o("span",[t._v("View on GitHub")])]),t._v(" "),o(f.a),t._v(" "),o(m.a,{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,c=e.attrs;return[o(n.a,t._g(t._b({attrs:{text:"",color:"deep-purple accent-4",bottom:!0,nuxt:"",to:{name:"projects-slug",params:{slug:t.project.slug}}}},"v-btn",c,!1),r),[t._v("\n          Details\n        ")])]}}])},[t._v(" "),o("span",[t._v("View Details")])])],1)],1)}),[],!1,null,"5697bdca",null);o.default=component.exports}}]);