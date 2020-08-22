<template>
  <v-card min-height="250" :dark="false" :elevation="3">
    <v-card-title class="text-uppercase">{{ title }}</v-card-title>
    <v-card-text class="test">{{ description }}</v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
      <v-btn icon color="indigo accent-2" :href="repo">
        <v-icon large>mdi-github</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn text color="deep-purple accent-4" :bottom="true">Details</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    project: { type: Object, required: true },
  },
  data() {
    return {
      title: '',
      description: '',
      repo: '',
    }
  },
  mounted() {
    this.loadProject()
  },
  methods: {
    loadProject() {
      this.$axios
        .get(this.project.api_url)
        .then((response) => {
          // eslint-disable-next-line
          console.log(response.data)
          this.title = response.data.name
          this.description = response.data.description
          this.repo = response.data.html_url
        })
        .catch((err) => {
          throw err
        })
    },
  },
}
</script>

<style></style>
