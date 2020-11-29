<template>
  <v-app>
    <NavBarDrawer />
    <v-main class="gradient-ck fh">
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

<style>
.gradient-ck {
  /* background-image: linear-gradient(
    10deg,
    #091a29 0%,
    #1e5381 37%,
    #2cacd1 65%,
    #31ca80 100%
  ); */
  /* background-image: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%); */
  background: linear-gradient(to bottom, #d5dee7 0%, #e8ebf2 50%, #e2e7ed 100%),
    linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.02) 50%,
      rgba(255, 255, 255, 0.02) 61%,
      rgba(0, 0, 0, 0.02) 73%
    ),
    linear-gradient(33deg, rgba(255, 255, 255, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%);
  background-blend-mode: normal, color-burn;
}
</style>
