<template>
  <v-container grid-list-lg>
    <v-card class="mx-auto" outlined max-width="1000">
      <v-img
        class="white--text align-end"
        height="400"
        src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?cs=srgb&dl=pexels-lukas-574071.jpg&fm=jpg"
      >
        <v-list-item two-line>
          <v-list-item-content>
            <span class="overline mb-4 white--text">Project</span>
            <v-list-item-title
              class="headline mb-2 white--text"
              v-text="project.title"
            ></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-img>

      <v-card-text class="mt-4">
        <p
          v-for="(desc, i) in project.description"
          :key="i"
          :class="desc.class"
          v-html="renderText(desc.text)"
        ></p>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          v-if="project.github_url"
          text
          color="deep-purple accent-4"
          :href="project.github_url"
        >
          <v-icon>mdi-github</v-icon>
          View on Github
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import marked from 'marked'
export default {
  data() {
    return {
      project: {},
    }
  },
  mounted() {
    this.setProject()
  },
  methods: {
    setProject() {
      const id = this.$route.params.id
      this.project = this.$store.getters['projects/getProject'](id)
    },
    renderText(text) {
      return marked(text)
    },
  },
}
</script>

<style></style>
