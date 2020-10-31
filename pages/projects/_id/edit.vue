<template>
  <v-container class="mb-12">
    <v-card class="mb-12">
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
  name: "editPage",
  components: {
    ProjectForm,
  },
  data() {
    return {
      project: {},
    };
  },
  created() {
    this.setProject();
  },
  methods: {
    setProject: function () {
      const id = this.$route.params.id;
      if (id !== undefined) {
        // Deep close of project to Edit page/form to avoid direct changes
        this.project = JSON.parse(
          JSON.stringify(this.$store.getters["projects/getProject"](id))
        );
      }
    },
    addSection: function () {
      const newSection = {
        heading: "",
        text: "",
      };
      this.project.description.push(newSection);
    },
    postProject: function () {
      this.$store.dispatch("projects/postProject", this.project).then(() => {
        this.$router.push(`/projects/${this.project.id}`);
      });
    },
    removeSection: function (index) {
      this.project.description.splice(index, 1);
    },
  },
};
</script>

<style>
</style>