<!-- 
    components/Nav/Breadcrumbs.vue
  
    Rendering Vuetify.js breadcrumbs based on the $path attribute.
    Using chevron right as the divider character
-->

<template>
  <v-breadcrumbs :items="items">
    <template v-slot:divider>
      <v-icon>mdi-chevron-right</v-icon>
    </template>
  </v-breadcrumbs>
</template>

<script>
export default {
  computed: {
    items() {
    //   const result = [];
      return this.$route.path.split("/");
      
    },
  },
};
</script>

<style>
</style>