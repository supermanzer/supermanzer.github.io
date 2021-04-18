<template>
  <v-expansion-panels>
    <v-expansion-panel
      v-for="component in components"
      :key="component.id"
      :focusable="true"
    >
      <v-expansion-panel-header>
        <span class="">
          {{ component.title }}
          <v-icon left>{{ component.icon }}</v-icon>
        </span>
      </v-expansion-panel-header>
      <v-expansion-panel-content class="mx-4">
        <nuxt-content :document="component" />
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
export default {
  name: "ExpansionComponent",
  props: {
    components: { type: Array, required: true },
  },
};
</script>

<style></style>
