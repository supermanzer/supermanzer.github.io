<template>
  <v-navigation-drawer
    v-model="navState.drawer"
    :clipped="navState.clipped"
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
</template>

<script>
export default {
  computed: {
    navLinks() {
      return this.$store.state.nav.links
    },
    navState() {
      return this.$store.state.nav.settings
    },
  },
}
</script>

<style></style>
