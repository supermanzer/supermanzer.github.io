<template>
  <v-app>
    <NavBarDrawer :dark="true" />
    <v-main class="fh">
      <nuxt />
    </v-main>
    <v-footer :absolute="true" class="mt-8">
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
footer {
  background: rgba(50, 50, 50, 0.5);
}
main {
  background-image: linear-gradient(
    to top,
    #505285 0%,
    #585e92 12%,
    #65689f 25%,
    #7474b0 37%,
    #7e7ebb 50%,
    #8389c7 62%,
    #9795d4 75%,
    #a2a1dc 87%,
    #b5aee4 100%
  );
  margin-bottom: 2em;
  padding: 2em 0;
}
</style>
