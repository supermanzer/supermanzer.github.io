<template>
  <div>
    <v-parallax :src="section.parallax_image">
      <v-overlay absolute>
        <v-row align="center" justify="center">
          <v-col class="text-center" cols="12">
            <h1 :id="sectionId" class="font-weight-thin mb-4 display-1">
              <a :href="sectionLink" class="section-title">
                {{ section.title }}
              </a>
            </h1>
          </v-col>
        </v-row>
      </v-overlay>
    </v-parallax>
    <v-card flat class="px-4 py-2">
      <nuxt-content :document="section" />
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'AboutSection',
  props: {
    section: { type: Object, required: true },
  },
  computed: {
    sectionId() {
      return this.$lowerSnake(this.section.title)
    },
    sectionLink() {
      return `#${this.sectionId}`
    },
  },
}
</script>

<style>
div.nuxt-content a {
  color: inherit;
}

/* TODO: Get the image to display here, everything else works */

/* div.nuxt-content a::after {
  content: '';
  display: inline-block;
  background: url('~assets/images/link.png') no-repeat;
  width: 1.5em;
  height: 1.5em;
  margin: 0 6px 0 0;
} */

.v-application a.section-title {
  text-decoration: none;
  color: white;
}
</style>
