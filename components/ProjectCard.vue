<template>
  <v-card :dark="false" :elevation="3">
    <v-card-title class="text-uppercase">{{ project.title }}</v-card-title>
    <v-card-text class="test">{{ project.summary }}</v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
      <v-btn
        v-if="project.github_url"
        icon
        color="indigo accent-2"
        :href="project.github_url"
        botton
      >
        <v-icon large>mdi-github</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn text color="deep-purple accent-4" :bottom="true" :to="projectUrl"
        >Details</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    project: { type: Object, required: true },
  },
  computed: {
    projectUrl() {
      return `projects/${this.project.id}`
    },
  },
  methods: {},
}
</script>

<style></style>
