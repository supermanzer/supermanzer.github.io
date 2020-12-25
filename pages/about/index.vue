<template>
  <v-row>
    <v-col lg="8" offset-lg="2" md="10" offset-md="1" sm="12">
      <v-card class="mx-auto mb-10">
        <v-list-item two-line>
          <v-list-item-content>
            <div class="overline mb-3">Hi</div>
            <v-list-item-title class="heading mb-1 display-1"
              >I'm Ryan</v-list-item-title
            >
          </v-list-item-content>
          <v-list-item-avatar tile size="150" color="grey">
            <v-img src="/images/supermanzer.jpeg"></v-img>
          </v-list-item-avatar>
        </v-list-item>
        <v-divider></v-divider>
        <v-card-text>
          <div v-for="(section, i) in page.sections" :key="section.id">
            <AboutParallax
              :heading="section.heading"
              :source="section.parallax_image"
            />
            <AboutSection :section="section" />
          </div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from "vuex";
import AboutSection from "@/components/about/AboutSection";
import AboutParallax from "@/components/about/AboutParallax";
export default {
  name: "AboutIndex",
  components: {
    AboutSection,
    AboutParallax,
  },
  computed: mapState({
    page: (state) => state.about.page,
    loggedIn: (state) => state.auth.loggedIn,
  }),
  created() {
    // this.$store.dispatch("about/getAboutSections");
  },
};
</script>

<style></style>
