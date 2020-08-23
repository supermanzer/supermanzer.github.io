<template>
  <v-row align="center" justify="center">
    <v-col
      v-for="(project, index) in projects"
      :key="index"
      :cols="12"
      :sm="12"
      :md="6"
      :lg="4"
    >
      <ProjectCard :project="project" />
    </v-col>
  </v-row>
</template>

<script>
import ProjectCard from '@/components/ProjectCard'
export default {
  components: {
    ProjectCard,
  },
  computed: {
    projects() {
      return this.$store.state.projects.all
    },
  },
  methods: {},
}
</script>

<style></style>
