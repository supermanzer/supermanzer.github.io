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
import ProjectCard from '@/components/projects/ProjectCard'
export default {
  name: 'ProjectCards',
  components: {
    ProjectCard,
  },
  async asyncData({ $content }) {
    const projects = await $content('projects').fetch()
    return { projects }
  },
}
</script>
