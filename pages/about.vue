<template>
  <v-container grid-list-md>
    <v-row class="d-flex justify-space-between">
      <v-col cols="12" lg="6">
        <span class="text-h3" v-text="page.title"></span>
      </v-col>
      <v-col cols="12" lg="6" class="d-flex align-end justify-end">
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="indigo"
              v-if="loggedIn"
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
  computed: mapState({
    page: (state) => state.about.page,
    loggedIn: (state) => state.auth.loggedIn,
  }),
};
</script>

<style>
</style>