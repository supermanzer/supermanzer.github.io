<template>
  <v-container>
    <div class="projects-list">
      <h1 class="text-h2 mb-4">This page is about my projects</h1>
      <v-divider class="mb-8" :inset="false"></v-divider>
      <v-row align="center" justify="center">
        <v-col v-for="(project, index) in projects" :key="index" cols="3">
          <v-card min-height="250" :dark="false" :elevation="3">
            <v-card-title>{{ project.title }}</v-card-title>
            <v-card-text class="test">{{ project.summary }}</v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn text color="deep-purple accent-4" bottom>Details</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  computed: {
    projects() {
      return this.$store.state.projects.all
    },
  },
}
</script>

<style lang="scss" scoped>
.test {
  color: $test-text-color;
}
</style>
