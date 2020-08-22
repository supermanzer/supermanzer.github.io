<template>
  <v-app>
    <!-- <nav-drawer v-model="drawer"></nav-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

      <v-toolbar-title to="/" router v-text="title" />
      <v-spacer />
    </v-app-bar> -->
    <AppBar />
    <v-main class="grey lighten-2 fh">
      <nuxt />
    </v-main>
    <v-footer :absolute="!fixed">
      <v-row justify="center" align="center">
        <span>&copy; 2020 C. Ryan Manzer</span>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
import AppBar from '@/components/AppBar'
// import NavDrawer from '@/components/NavDrawer.vue'
export default {
  components: {
    // NavDrawer,
    AppBar,
  },
  data() {
    return {
      ...this.$store.state.nav.settings,
    }
  },
  methods: {
    setDrawer() {
      this.$store.commit('nav/toggleDrawer')
    },
  },
}
</script>

<style>
.fh {
  height: 100vh;
}
</style>
