<template>
  <v-expansion-panels>
    <v-expansion-panel
      v-for="component in components"
      :key="component.id"
      :focusable="true"
    >
      <v-expansion-panel-header>
        <span class="">
          {{ component.heading }}
          <v-icon left>{{ component.icon }}</v-icon>
        </span>
      </v-expansion-panel-header>
      <v-expansion-panel-content class="mx-4">
        <div v-html="markdown(component.text)"></div>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
import marked from 'marked'
export default {
  name: 'ExpansionComponent',
  props: {
    components: { type: Array, required: true },
  },
  methods: {
    markdown(text) {
      return marked(text)
    },
  },
}
</script>

<style></style>
