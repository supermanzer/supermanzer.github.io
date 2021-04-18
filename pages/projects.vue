<template>
  <v-container>
    <div class="projects-list">
      <v-row class="d-flex justify-space-between white--text">
        <v-col cols="12" md="6" sm="12">
          <h1 class="text-h2 mb-4 mx-5">My Projects</h1>
          <h3 class="subheading mx-5 mb-4">I like making stuff</h3>
        </v-col>
        <v-col cols="12" md="6" sm="12" class="right-align"> </v-col>
      </v-row>
      <v-divider class="mb-8" :inset="false"></v-divider>
      <nuxt-child />
    </div>
  </v-container>
</template>

<script>
export default {
  name: "ProjectParent",
  created() {
    this.$store.commit("nav/SET_NAV_SHOW", true);
  },
};
</script>

<style lang="scss" scoped>
</style>
