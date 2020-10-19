<template>
  <v-app>
    <NavBarDrawer />
    <v-main class="grey lighten-2 fh">
      <nuxt />
    </v-main>
    <v-footer :absolute="true">
      <v-row justify="center" align="center">
        <span>&copy; 2020 C. Ryan Manzer</span>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
import NavBarDrawer from "@/components/Nav/NavBarDrawer";
export default {
  name: "DefaultLayout",
  components: {
    NavBarDrawer,
  },
};
</script>

<style></style>
