<template>
  <v-container grid-list-lg>
    <v-card class="mx-auto mb-12" outlined max-width="1200">
      <v-img
        v-if="project.image"
        class="white--text align-end"
        height="400"
        :src="project.image"
        gradient="to right, rgba(50,50,50, 0.7), rgba(50,50,50,0.1)"
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
        <div v-for="sec in project.description" :key="sec.id" class="mb-10">
          <p
            v-if="sec.heading"
            class="text-h3 gd-grey my-4"
            v-text="sec.heading"
          ></p>
          <p v-html="renderText(sec.text)"></p>
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn color="deep-purple accent-4" v-if="loggedIn" text :to="editURL">
          <v-icon>mdi-pencil</v-icon>
          edit
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
          v-if="project.github_url"
          text
          color="deep-purple accent-4"
          :href="project.github_url"
          target="_"
        >
          <v-icon>mdi-github</v-icon>
          View on Github
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import marked from "marked";

export default {
  name: "ProjectDetail",
  data() {
    return {
      project: {},
    };
  },
  async created() {
    if (this.$store.state.projects.all.length === 0) {
      await this.loadProjects();
      this.setProject();
    } else {
      this.setProject();
    }
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.loggedIn;
    },
    editURL() {
      return `${this.project.id}/edit`;
    },
  },
  methods: {
    renderText(text) {
      return marked(text);
    },
    setProject() {
      const id = this.$route.params.id;
      this.project = this.$store.getters["projects/getProject"](id);
    },
    async loadProjects() {
      await this.$store.dispatch("projects/loadProjects");
    },
  },
};
</script>

<style scoped>
.gd-grey {
  background-image: linear-gradient(to left, #cfd9df 0%, #e2ebf0 100%);
}
</style>
