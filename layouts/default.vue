<template>
  <v-app>
    <nav-header />
    <v-main :class="{ dark: dark }" :temporary="false">
      <nuxt />
    </v-main>
    <v-footer dark :absolute="true" class="mt-8 py-6">
      <v-row justify="center" align="center">
        <span>&copy; 2020 C. Ryan Manzer</span>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
import NavHeader from '~/components/nav/NavHeader.vue'
export default {
  name: 'DefaultLayout',
  components: { NavHeader },
  computed: {
    dark() {
      return this.$vuetify.theme.isDark
    },
  },
}
</script>

<style scoped>
footer {
  background: rgba(50 50 50/ 50%);
}

main {
  background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
  margin-bottom: 2em;
  padding: 2em 0;
}

main.dark {
  background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%);
}
</style>
