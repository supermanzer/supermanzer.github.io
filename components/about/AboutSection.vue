<template>
  <div>
    <v-parallax :src="section.parallax_image" dark>
      <v-overlay absolute>
        <v-row align="center" justify="center">
          <v-col class="text-center" cols="12">
            <h1 :id="sectionId" class="font-weight-thin mb-4 display-1">
              <a :href="sectionLink" class="no-dec">
                {{ section.title }}
              </a>
            </h1>
          </v-col>
        </v-row>
      </v-overlay>
    </v-parallax>
    <nuxt-content :document="section" />
  </div>
</template>

<script>
export default {
  name: "AboutSection",
  props: {
    section: { type: Object, required: true },
  },
  computed: {
    sectionId() {
      return this.$lowerSnake(this.section.title);
    },
    sectionLink() {
      return `#${this.sectionId}`;
    },
  },
};
</script>

<style scoped>
a:link,
a:visited,
a:hover,
a:active {
  text-decoration: none;
  color: white;
}
</style>
