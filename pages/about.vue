<template>
  <v-container grid-list-md>
    <p class="text-h3" v-text="page.title"></p>
    <v-divider></v-divider>
    <v-row>
      <v-col lg="8" offset-lg="2" md="10" offset-md="1" sm="12">
        <v-card class="mx-auto mb-10">
          <v-list-item two-line>
            <v-list-item-content>
              <div class="overliine mb-3">Hi</div>
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
              <!-- <v-parallax :src="getImage(i)" dark>
                <v-row align="center" justify="center">
                  <v-col class="text-center" cols="12">
                    <h1 class="font-weight-thin mb-4">
                      {{ section.heading }}
                    </h1>
                  </v-col>
                </v-row>
              </v-parallax> -->
              <AboutParallax :i="i" :heading="section.heading" />
              <AboutSection :section="section" />
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AboutSection from '@/components/AboutSection'
import AboutParallax from '@/components/AboutParallax'
export default {
  name: 'AboutPage',
  components: {
    AboutSection,
    AboutParallax,
  },
  computed: {
    page() {
      return this.$store.state.about.page
    },
  },
  created() {
    this.$store.dispatch('about/getAboutSections')
  },
}
</script>

<style></style>
