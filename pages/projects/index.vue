<template>
  <v-container>
    <div class="projects-list">
      <h1 class="text-h2 mb-4 mx-5">
        My Projects
      </h1>
      <h3 class="subheading mx-5 mb-4">I like making stuff</h3>
      <v-divider class="mb-8" :inset="false"></v-divider>
      <v-row align="center" justify="center">
        <v-col v-for="(project, index) in projects" :key="index" cols="3">
          <ProjectCard :project="project" />
        </v-col>
      </v-row>
    </div>
  </v-container>
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
  mtehods: {
    fetchDescription(project) {
      this.$axios.get()
    },
  },
}
</script>

<style lang="scss" scoped>
.test {
  color: $test-text-color;
}
</style>
