(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{604:function(t,n,e){"use strict";e.r(n);var r={name:"AppBar",computed:{navLinks:function(){return this.$store.state.nav.links},snackState:function(){return this.$store.state.snackbar},navState:function(){return this.$store.state.nav.settings}},methods:{toggleSnack:function(){this.$store.dispatch("snackbar/toggleSnack")},toggleDrawer:function(){this.$store.dispatch("nav/toggleDrawer")}}},o=e(53),c=e(54),l=e.n(c),v=e(446),k=e(440),d=e(204),x=e(439),f=e(443),h=e(195),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("nav",[e("v-snackbar",{attrs:{timeout:4e3,top:"",color:""},domProps:{textContent:t._s(t.snackState.snackText)},model:{value:t.snackState.snackbar,callback:function(n){t.$set(t.snackState,"snackbar",n)},expression:"snackState.snackbar"}},[e("v-btn",{attrs:{text:"",color:"primary"},nativeOn:{click:function(n){return t.toggleSnack()}}},[t._v("Close")])],1),t._v(" "),e("v-app-bar",{attrs:{app:"",dark:"",color:"rgba(50,50,50,0.75","clipped-left":t.navState.clipped}},[e("v-app-bar-nav-icon",{staticClass:"grey--text text--lighten-2",on:{click:function(n){return t.toggleDrawer()}}}),t._v(" "),e("v-toolbar-title",{staticClass:"text-uppercase grey--text text--lighten-2 mx-10",attrs:{to:"/"},domProps:{textContent:t._s(t.navState.title)}}),t._v(" "),e("v-spacer"),t._v(" "),e("div",{staticClass:"hidden-md-and-down"},t._l(t.navLinks,(function(link,i){return e("v-btn",{key:i,attrs:{text:"",nuxt:!0,to:link.to},domProps:{textContent:t._s(link.title)}})})),1)],1)],1)}),[],!1,null,null,null);n.default=component.exports;l()(component,{VAppBar:v.a,VAppBarNavIcon:k.a,VBtn:d.a,VSnackbar:x.a,VSpacer:f.a,VToolbarTitle:h.a})}}]);