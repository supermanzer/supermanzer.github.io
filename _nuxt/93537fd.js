(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{519:function(t,e,n){"use strict";n.r(e);var l=n(532),r=n(230),c={name:"BlogTag",props:{tag:{type:String,required:!1,default:""},active:{type:Boolean,required:!1,default:!1}},methods:{emitTag:function(){this.$emit("tag",this.tag)}}},o=n(60),component=Object(o.a)(c,(function(){var t=this,e=t._self._c;return e(l.a,{ref:"chip",attrs:{outlined:!t.active,color:"light-blue lighten-1"},on:{click:function(e){return e.preventDefault(),t.emitTag.apply(null,arguments)}}},[e(r.a,{attrs:{left:""}},[t._v("mdi-pound")]),t._v("\n  "+t._s(t.tag)+"\n")],1)}),[],!1,null,null,null);e.default=component.exports},633:function(t,e,n){"use strict";n.r(e);var l=n(244),r=n(506),c=n(521),o=n(230),f=n(151),d=n(132),h=n(511),v=n(503),m=n(509),_=(n(38),n(39),n(61),n(28),n(44),n(3),n(578),n(40),n(580),n(581),n(582),n(585),n(586),n(587),n(588),n(590),n(592),n(594),n(596),n(597),n(598),n(599),n(600),n(602),n(45),n(7),{components:{BlogTag:n(519).default},filters:{capFirst:function(t){return"".concat(t[0].toUpperCase()).concat(t.slice(1))}},props:{tags:{type:Set,required:!1,default:function(){return new Set}},filtered:{type:Boolean,required:!1,default:!1}},data:function(){return{selectedTags:[],drawer:!1,icon:!1}},methods:{clearFilters:function(){this.selectedTags=[],this.filter(),this.$emit("clearFilters")},selectTag:function(t){this.selectedTags.includes(t)?this.selectedTags=this.selectedTags.filter((function(e){return e!==t})):this.selectedTags.push(t),this.filter()},filter:function(){var t={tags:this.selectedTags};this.$emit("filter",t)}}}),T=n(60),component=Object(T.a)(_,(function(){var t=this,e=t._self._c;return e(h.a,{attrs:{color:"transparent",permanent:"",width:"100%"}},[e(f.a,[e(d.a,[e(d.c,{staticClass:"text-h6 d-flex justify-space-between"},[e("span",[t._v(" Tags")])]),t._v(" "),t.filtered?e(d.b,[t.filtered?e(m.a,{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,c=n.attrs;return[e(l.a,t._g(t._b({staticClass:"mt-2",attrs:{text:""},on:{click:t.clearFilters}},"v-btn",c,!1),r),[e(o.a,{attrs:{left:""}},[t._v("mdi-close-circle-outline")]),t._v("\n              Clear\n            ")],1)]}}],null,!1,3554148116)},[t._v(" "),e("span",[t._v("Clear filters")])]):t._e()],1):e(d.b,[t._v("\n        Click to filter\n      ")])],1)],1),t._v(" "),e(c.a),t._v(" "),e(v.a,{staticClass:"my-4 mx-auto",attrs:{justify:"space-around",align:"center"}},t._l(t.tags,(function(n){return e(r.a,{key:n.name,staticClass:"ma-0 pa-0",attrs:{cols:"12",sm:"12",md:"6"}},[e("BlogTag",{staticClass:"ma-2",attrs:{tag:n,active:t.selectedTags.includes(n)},on:{tag:t.selectTag}})],1)})),1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BlogTag:n(519).default})}}]);