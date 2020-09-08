<template>
  <v-card :dark="false" :elevation="3" :height="300" :width="500" class="">
    <v-card-title class="text-uppercase d-flex justify-left">{{
      project.title
    }}</v-card-title>
    <v-divider></v-divider>
    <v-card-text class="test d-flex justify-center">{{
      project.summary
    }}</v-card-text>
    <v-card-actions class="bottom-actions">
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-if="project.github_url"
            icon
            color="indigo accent-2"
            :href="project.github_url"
            v-bind="attrs"
            v-on="on"
          >
            <v-icon large>mdi-github</v-icon>
          </v-btn>
        </template>
        <span>View on GitHub</span>
      </v-tooltip>

      <v-spacer></v-spacer>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            text
            color="deep-purple accent-4"
            :bottom="true"
            :to="projectUrl"
            v-bind="attrs"
            v-on="on"
          >
            Details
          </v-btn>
        </template>
        <span>View Details</span>
      </v-tooltip>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  transition: {
    name: 'to-detail',
    mode: 'out-in',
    duration: 500,
  },
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

<style scoped>
.bottom-actions {
  position: absolute;
  bottom: 1rem;
  width: 100%;
}
</style>
