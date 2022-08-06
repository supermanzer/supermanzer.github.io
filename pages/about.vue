<template>
  <v-container grid-list-md class="">
    <PageHeader :heading="heading" :subheading="subheading" />
    <about-section
      v-for="(section, index) in sections"
      :key="index"
      :section="section"
      class="my-6 pa-6 white"
    />
  </v-container>
</template>

<script>
import AboutSection from "~/components/about/AboutSection.vue";
import PageHeader from "~/components/global/PageHeader.vue";

export default {
  name: "AboutPage",
  components: { AboutSection, PageHeader },

  async asyncData({ $content }) {
    const sections = await $content("about").sortBy("title", "desc").fetch();
    return { sections };
  },
  data: () => ({
    heading: "About Me",
    subheading: "I'm just this guy, you know?",
  }),
};
</script>

<style scoped>
.icon.icon-link {
  background-image: url("~assets/images/link.png");
  display: inline-block;
  width: 20px;
  height: 20px;
  background-size: 20px 20px;
  margin-right: 0.25em;
}
</style>
