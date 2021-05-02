<template>
  <v-app>
    <v-img
      width="100%"
      height="100%"
      src="/images/home/3.jpeg"
      gradient="to top, rgba(0,0,0, .1), rgba(0,0,0, .5)"
    >
      <NavBarDrawer />
      <v-main class="">
        <nuxt />
      </v-main>
      <!--  <v-footer :absolute="true">
      <v-row justify="center" align="center">
        <span>&copy; 2020 C. Ryan Manzer</span>
      </v-row>
    </v-footer> -->
    </v-img>
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
main {
  height: 100%;
}
</style>
