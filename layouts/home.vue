<template>
  <v-app>
    <span id="bg"></span>
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

<style></style>
