<template>
  <div class="nav-wrapper">
    <v-navigation-drawer
      v-model="drawer"
      :clipped="clipped"
      app
      fixed
      class="py-3"
      :class="{ semi_op: temporary }"
      :dark="isDark"
      :temporary="temporary"
      :hide-overlay="temporary"
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
    <transition name="fade-transition">
      <nav v-show="show">
        <v-app-bar app :dark="isDark" :clipped-left="clipped" elevate-on-scroll>
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
          <v-toolbar-title class="text-uppercase mx-10" to="/" v-text="title">
          </v-toolbar-title>
          <theme-switcher-menu />
          <!-- <SnackBar /> -->
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
    </transition>
  </div>
</template>

<script>
import ThemeSwitcherMenu from './ThemeSwitcherMenu.vue'
// import SnackBar from "@/components/nav/SnackBar";
export default {
  name: 'NavBarDrawer',
  components: {
    ThemeSwitcherMenu,
  },
  props: {
    darkMode: { type: Boolean, required: false, default: false },
    clipped: { type: Boolean, required: false, default: true },
    temporary: { type: Boolean, required: false, default: false },
  },
  data() {
    return {
      drawer: false,
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
    show() {
      return this.$store.state.nav.settings.show
    },
    isDark() {
      return this.darkMode || this.$vuetify.theme.isDark
    },
    textClassObject() {
      return {
        'grey--text text--lighten-2': this.dark,
      }
    },
    overlayOpacity() {
      return this.temporary ? 0.1 : undefined
    },
    overlayColor() {
      return this.temporary ? 'white' : undefined
    },
  },
}
</script>

<style>
/* I HATE doing the whole !important thing but I couldn't find another way - Look into this */
/* stylelint-disable */
header.v-app-bar--hide-shadow {
  background-color: rgba(50 50 50 / 0%) !important;
  border-color: rgba(50 50 50 /0%) !important;
}

header.v-app-bar--is-scrolled {
  background-color: rgba(50 50 50/ 70%) !important;
  border-color: rgba(50 50 50 / 70%) !important;
  color: white !important;
}

header.v-app-bar--is-scrolled .v-btn {
  color: white !important;
}

.semi_op {
  background: rgba(0 0 0/ 40%) !important;
}
/* stylelint-enable */
</style>
