<template>
  <v-app>
    <nav-header />
    <v-main>
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
import NavHeader from "~/components/nav/NavHeader.vue";
export default {
  name: "DefaultLayout",
  components: { NavHeader },
};
</script>

<style scoped>
footer {
  background: rgba(50, 50, 50, 0.5);
}
main {
  background-image: linear-gradient(
    180deg,
    #5d9fff 0%,
    #b8dcff 48%,
    #6bbbff 100%
  );
  margin-bottom: 2em;
  padding: 2em 0;
}
</style>
