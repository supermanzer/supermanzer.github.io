<template>
  <v-row>
    <v-col lg="10" offset-lg="1" md="10" offset-md="1" sm="12">
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
          <template v-for="(page,i) in result">
            <about-section :section="page" :key="i" />
          </template>
          <!-- <div v-for="(section, i) in page.sections" :key="section.id">
            <AboutParallax
              :heading="section.heading"
              :source="section.parallax_image"
            />
            <AboutSection :section="section" /> -->
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
  data() {
    return {};
  },
  computed: {
    ...mapState("about", ["page"]),
  },
  async asyncData({ $content, store }) {
    const result = {};
    const sections = store.state.about.sections;
    for (let i = 0; i < sections.length; i++) {
      result[sections[i]] = {};
      const path = `about/${sections[i]}`;
      const obj = await $content(path).fetch();
      result[sections[i]].page = obj[0];
      result[sections[i]].sections = await $content(`${path}/sections`).fetch();
    }
    return { result };
  },
};
</script>

<style></style>
