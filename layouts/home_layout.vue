<template>
  <v-app>
    <NavBarDrawer />
    <v-main class="gradient-ck fh">
      <nuxt />
    </v-main>
    <!-- <v-footer :absolute="true">
      <v-row justify="center" align="center">
        <span>&copy; 2020 C. Ryan Manzer</span>
      </v-row>
    </v-footer> -->
  </v-app>
</template>

<script>
import NavBarDrawer from "@/components/Nav/NavBarDrawer";
export default {
  name: "HomeLayout",
  components: {
    NavBarDrawer,
  },
};
</script>

<style>
.gradient-ck {
  background-image: linear-gradient(
    5deg,
    #010203 0%,
    #133858 70%,
    #2595b4 95%,
    #308f61 100%
  );
}
</style>
