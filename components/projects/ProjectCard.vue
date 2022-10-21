<template>
  <v-card
    :dark="false"
    :elevation="3"
    :min-width="300"
    :min-height="400"
    class=""
  >
    <v-card-title class="text-uppercase d-flex justify-space-around">
      {{ project.title }}
      <v-avatar v-if="project.img" size="48px">
        <v-img :src="project.img"></v-img>
      </v-avatar>
    </v-card-title>
    <v-divider></v-divider>
    <v-card-text class="">{{ project.summary }}</v-card-text>

    <v-card-actions class="bottom-actions">
      <v-tooltip bottom>
        <template #activator="{ on, attrs }">
          <v-btn
            v-if="hasLink('github')"
            icon
            color="indigo accent-2"
            :href="project.links.github.url"
            target="_"
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
        <template #activator="{ on, attrs }">
          <v-btn
            text
            color="deep-purple accent-4"
            :bottom="true"
            nuxt
            :to="{ name: 'projects-slug', params: { slug: project.slug } }"
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
  methods: {
    hasLink(key) {
      return Object.prototype.hasOwnProperty.call(this.project.links, key)
    },
  },
}
</script>

<style scoped>
.bottom-actions {
  position: absolute;
  bottom: 1rem;
  width: 100%;
  border-top: 1px solid rgba(0 0 0/ 15%);
}
</style>
