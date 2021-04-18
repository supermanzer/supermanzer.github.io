<template>
  <v-container grid-list-md>
    <v-row class="d-flex justify-space-between">
      <v-col cols="12" lg="6">
        <span class="text-h3" v-text="page.title"></span>
      </v-col>
    </v-row>

    <v-divider></v-divider>
    <nuxt-child />
  </v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "AboutPage",
  computed: {
    ...mapState("about", ["page"]),
  },
};
</script>

<style>
</style>