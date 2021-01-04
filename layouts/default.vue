<template>
  <v-app>
    <NavBarDrawer :dark="false" />
    <v-main class="fh blue-grey lighten-5">
      <nuxt />
    </v-main>
    <!--  <v-footer :absolute="true">
      <v-row justify="center" align="center">
        <span>&copy; 2020 C. Ryan Manzer</span>
      </v-row>
    </v-footer> -->
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

<style>
footer {
  background: rgba(50, 50, 50, 0.5);
}
</style>
