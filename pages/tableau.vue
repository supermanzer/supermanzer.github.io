<template>
  <v-container>
    <div class="projects-list">
      <v-row class="d-flex justify-space-between">
        <v-col cols="12" md="6" sm="12">
          <h1 class="text-h2 mb-4 mx-5">My Tableau Visualizations</h1>
          <h3 class="subheading mx-5 mb-4">I like charting stuff</h3>
        </v-col>
        <v-col cols="12" md="6" sm="12" class="right-align">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                v-if="loggedIn"
                x-large
                class="float-right"
                icon
                v-on="on"
                v-bind="attrs"
                color="grey--text text--darken-4"
                nuxt
                to="/projects/create"
              >
                <v-icon>mdi-chart-box-plus-outline</v-icon>
              </v-btn>
            </template>
            <span>Create New Tableau Card</span>
          </v-tooltip>
        </v-col>
      </v-row>
      <v-divider class="mb-8" :inset="false"></v-divider>
      <nuxt-child />
    </div>
  </v-container>
</template>

<script>
export default {
  name: "TableauParent",
  computed: {
    loggedIn() {
      return this.$store.state.auth.loggedIn;
    },
  },
};
</script>

</style>
<style>