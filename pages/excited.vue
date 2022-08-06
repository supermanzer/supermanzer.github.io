<template>
  <v-container grid-list-md>
    <PageHeader :heading="heading" :subheading="subheading" />
    <nuxt-child />
  </v-container>
</template>

<script>
import PageHeader from "~/components/global/PageHeader.vue";
export default {
  name: "ExcitedHome",
  components: { PageHeader },
  data: () => ({
    heading: "Things I'm Excited About",
    subheading: "Elements of tech I've encounterd that make me smile",
  }),
  created() {
    this.$store.commit("nav/SET_NAV_SHOW", true);
  },
};
</script>

<style></style>
