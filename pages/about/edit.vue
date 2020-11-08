<template>
  <v-row class="d-flex justify-center">
    <v-card class="mt-8" width="90%">
      <v-app-bar absolute color="indigo" dark dense flat>
        <v-toolbar-title>Edit About Page</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon x-large @click="addSection">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-app-bar>
      <v-card-text class="mt-10">
        <v-card v-for="(section, i) in page.sections" :key="i" class="my-6">
          <v-card-text>
            <EditSection :id="section.id" />
          </v-card-text>
        </v-card>
      </v-card-text>
    </v-card>
  </v-row>
</template>


<script>
import { mapState } from "vuex";
import EditSection from "@/components/about/EditSection";
export default {
  name: "EditAboutPage",
  computed: mapState({
    page: (state) => state.about.page,
    loggedIn: (state) => state.auth.loggedIn,
  }),
  created() {
    if (this.$store.state.about.page.sections.length === 0) {
      this.$store.dispatch("about/getAboutSections");
    }
  },
  methods: {
    addSection() {
      this.$store.commit("about/addSection");
    },
  },
};
</script>

<style>
</style>