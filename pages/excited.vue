<template>
  <v-container grid-list-md>
    <v-row>
      <v-col cols="12" sm="8">
        <h1 class="text-h2">Things I'm Excited About</h1>
        <h3 class="subheading mt-4">
          Elements of technology I've encountered through my work and hobby
          projects that make me smile.
        </h3>
      </v-col>
      <v-col cols="12" sm="4"> </v-col>
    </v-row>
    <v-divider class="my-4"></v-divider>
    <nuxt-child />
  </v-container>
</template>

<script>
export default {
  name: "ExcitedHome",
};
</script>

<style>
</style>