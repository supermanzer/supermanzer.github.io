<template>
  <div class="nav-wrapper">
    <v-navigation-drawer
      v-model="drawer"
      :clipped="clipped"
      app
      dark
      fixed
      class="grey darken-2 py-3"
    >
      <v-row class="mt-15" align="center" justify="center">
        <v-col cols="12" align="center">
          <v-avatar size="150">
            <img
              src="https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt="I like coffee"
              title="I like coffee"
            />
          </v-avatar>
        </v-col>
      </v-row>
      <v-row align="center" class="mt-4 mb-3">
        <v-list class="mt-10" nav width="100%">
          <v-list-item
            v-for="(link, k) in navLinks"
            :key="k"
            :link="true"
            :nuxt="true"
            :to="link.to"
            :ripple="true"
            class="py-2 px-4"
          >
            <v-list-item-icon>
              <v-icon>{{ link.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              {{ link.title }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-row>
    </v-navigation-drawer>
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
      <v-app-bar app dark color="rgba(50,50,50,0.75" :clipped-left="clipped">
        <v-app-bar-nav-icon
          class="grey--text text--lighten-2"
          @click="drawer = !drawer"
        ></v-app-bar-nav-icon>
        <v-toolbar-title
          class="text-uppercase grey--text text--lighten-2 mx-10"
          to="/"
          v-text="title"
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
  </div>
</template>

<script>
export default {
  name: 'NavBarDrawer',
  data() {
    return {
      drawer: false,
      clipped: true,
      fixed: false,
      right: true,
      rightDrawer: false,
      title: 'Supermanzer',
      miniVariant: false,
    }
  },
  computed: {
    navLinks() {
      return this.$store.state.nav.links
    },
    snackState() {
      return this.$store.state.snackbar
    },
  },
  methods: {
    toggleSnack() {
      this.$store.dispatch('snackbar/toggleSnack')
    },
  },
}
</script>

<style></style>
