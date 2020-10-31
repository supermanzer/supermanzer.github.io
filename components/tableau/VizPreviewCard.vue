<template>
  <v-card class="mx-auto">
    <v-card-title primary-title>
      {{ viz.title }}
    </v-card-title>
    <v-card-text>
      {{ viz.summary }}
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="deep-purple accent-4" text :to="vizUrl">
        <v-icon>mdi-eye</v-icon>
        See the Viz!
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "VizPreviewCard",
  props: {
    viz: { type: Object, required: true },
  },
  computed: {
    vizUrl() {
      return `tableau/${this.viz.id}`;
    },
  },
};
</script>

<style>
</style>