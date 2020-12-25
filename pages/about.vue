<template>
  <v-container grid-list-md>
    <v-row class="d-flex justify-space-between">
      <v-col cols="12" lg="6">
        <span class="text-h3" v-text="page.title"></span>
        <h3>RAGE</h3>
      </v-col>
      <v-col
        cols="12"
        lg="6"
        class="d-flex align-end justify-end"
        v-if="loggedIn"
      >
        <v-tooltip bottom v-if="editToggle">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="indigo"
              x-large
              icon
              v-on="on"
              v-bind="attrs"
              nuxt
              to="/about/edit"
            >
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
          </template>
          <span>Edit About Page</span>
        </v-tooltip>
        <v-tooltip bottom v-else>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="teal"
              x-large
              icon
              v-on="on"
              v-bind="attrs"
              nuxt
              to="/about/"
            >
              <v-icon>mdi-book-open-outline</v-icon>
            </v-btn>
          </template>
          <span>Back to View</span>
        </v-tooltip>
      </v-col>
    </v-row>

    <v-divider></v-divider>
    <nuxt-child />
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import { state } from "~/store/about";
export default {
  name: "AboutPage",
  computed: {
    ...mapState("about", ["page"]),
    ...mapState("auth", ["loggedIn"]),
    editToggle() {
      const editPath = this.$route.path.indexOf("edit") >= 0;
      return this.loggedIn && !editPath;
    },
  },
  methods: {
    checkAndLoad() {
      if (this.$store.state.about.page.sections.length === 0) {
        this.$store.dispatch("about/getAboutSections");
      }
    },
  },
  created() {
    this.checkAndLoad();
  },
};
</script>

<style>
</style>