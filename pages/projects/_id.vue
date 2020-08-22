<template>
  <div class="project-detail"></div>
</template>

<script>
import marked from 'marked'
export default {
  props: {
    project: { type: Object, required: true },
  },
  data() {
    return {
      compiledReadme: '',
    }
  },
  mounted() {
    this.loadReadme()
  },
  methods: {
    loadReadme() {
      return marked(this.$axios.$get(this.project.readme_url))
    },
  },
}
</script>

<style></style>
