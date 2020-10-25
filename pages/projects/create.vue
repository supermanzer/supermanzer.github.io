<template>
  <v-container>
    <v-card class="mb-8">
      <v-card-title primary-title>
        Edit Project - {{ project.title }}</v-card-title
      >
      <v-card-text>
        <ProjectForm v-bind:project="project" />
      </v-card-text>
      <v-card-actions class="d-flex justify-space-around pb-6">
        <v-btn color="grey">Cancel</v-btn>
        <v-btn color="primary" @click="postProject">Submit</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import ProjectForm from "@/components/projects/ProjectForm";
export default {
  name: "createProject",
  data() {
    return {
      project: {
        id: "",
        title: "",
        github_url: "",
        image: "",
        summary: "",
        description: [],
      },
    };
  },
  methods: {
    postProject: function () {
      this.$store.dispatch("projects/postProject", this.project).then(() => {
        this.$router.push(`/projects/${this.project.id}`);
      });
    },
  },
};
</script>

<style>
</style>