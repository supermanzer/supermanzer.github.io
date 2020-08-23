<template>
  <nav>
    <v-snackbar
      v-model="snackState.snackbar"
      :timeout="4000"
      top
      color=""
      v-text="snackState.snackText"
    >
      <v-btn text color="primary" @click.native="toggleSnack()">Close</v-btn>
    </v-snackbar>
    <v-app-bar
      app
      dark
      color="rgba(50,50,50,0.75"
      :clipped-left="navState.clipped"
    >
      <v-app-bar-nav-icon
        class="grey--text text--lighten-2"
        @click="toggleDrawer()"
      ></v-app-bar-nav-icon>
      <v-toolbar-title
        class="text-uppercase grey--text text--lighten-2 mx-10"
        to="/"
        v-text="navState.title"
      >
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="hidden-md-and-down">
        <v-btn
          v-for="(link, i) in navLinks"
          :key="i"
          text
          :nuxt="true"
          :to="link.to"
          v-text="link.title"
        ></v-btn>
      </div>
    </v-app-bar>
  </nav>
</template>

<script>
export default {
  name: 'AppBar',
  computed: {
    navLinks() {
      return this.$store.state.nav.links
    },
    snackState() {
      return this.$store.state.snackbar
    },
    navState() {
      return this.$store.state.nav.settings
    },
  },
  methods: {
    toggleSnack() {
      this.$store.dispatch('snackbar/toggleSnack')
    },
    toggleDrawer() {
      this.$store.dispatch('nav/toggleDrawer')
    },
  },
}
</script>

<style></style>
