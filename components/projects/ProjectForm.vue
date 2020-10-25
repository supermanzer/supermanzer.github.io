<template>
  <v-form>
    <v-row>
      <v-col cols="12" md="4" offset-md="1" sm="12">
        <v-text-field
          label="Project ID"
          v-model="project.id"
          hint="This is part of the URL so keep it short and descriptive. Use kebab case for multi-word IDs"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="4" offset-md="1" sm="12">
        <v-text-field
          label="Project Title"
          v-model="project.title"
          hint="You can use normal spaces here"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col md="8" offset-md="2" sm="12">
        <v-textarea
          v-model="project.summary"
          auto-grow
          label="Project Summary"
          hint="Give a basic overview of this project but keep it short.  This is intended as a preview of the actual details."
        ></v-textarea>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="4" offset-md="1">
        <v-text-field
          v-model="project.github_url"
          prepend-icon="mdi-github"
          label="Repository URL"
          hint="Make sure people can find your code"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="4" offset-md="1">
        <v-text-field
          v-model="project.image"
          label="Image URL"
          prepend-icon="mdi-file-image"
          hint="Can either be path to images in static directory or a remote resource (like Pexels)"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col md="10" offset-md="1" sm="12">
        <v-toolbar color="indigo darken-3" dark dense>
          <v-toolbar-title>Detail Sections</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                dark
                v-bind="attrs"
                v-on="on"
                icon
                class="right"
                @click="addSection"
              >
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </template>
            <span>Add new section</span>
          </v-tooltip>
        </v-toolbar>
        <v-row>
          <v-col
            cols="12"
            md="10"
            offset-md="1"
            v-for="(section, i) in project.description"
            :key="i"
            class=""
          >
            <v-card class="px-6">
              <v-text-field
                v-model="section.heading"
                label="Section Heading"
              ></v-text-field>
              <v-textarea
                v-model="section.text"
                auto-grow
                label="Section Text"
                hint="Use markdown syntax for inline formatting"
              ></v-textarea>
              <v-card-actions>
                <v-tooltip right>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      icon
                      color="grey"
                      v-bind="attrs"
                      v-on="on"
                      @click="removeSection(i)"
                    >
                      <v-icon>mdi-delete-forever-outline</v-icon>
                    </v-btn>
                  </template>
                  <span>Delete Section</span>
                </v-tooltip>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
export default {
  name: "ProjectForm",
  props: {
    project: { type: Object, required: true },
  },
  methods: {
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