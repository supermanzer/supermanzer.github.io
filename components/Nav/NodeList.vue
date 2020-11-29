<template>
  <v-list>
    <template v-for="node in nodes"> </template>
  </v-list>
</template>

<script>
export default {
  name: "node-list",
  props: {
    nodes: { type: Array, required: true },
  },
};
</script>

<style>
</style>