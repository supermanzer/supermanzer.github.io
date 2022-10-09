<template>
  <v-app>
    <v-img
      width="100%"
      height="100%"
      src="/images/home/3.jpeg"
      gradient="to top, rgba(0,0,0, .1), rgba(0,0,0, .5)"
    >
      <nav-header :clipped="false" :dark-mode="true" />
      <v-main class="">
        <nuxt />
      </v-main>
    </v-img>
  </v-app>
</template>

<script>
import NavHeader from "@/components/nav/NavHeader.vue";
export default {
  name: "DefaultLayout",
  components: {
    NavHeader,
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
