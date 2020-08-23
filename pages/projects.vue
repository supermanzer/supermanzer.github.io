<template>
  <v-container>
    <div class="projects-list">
      <h1 class="text-h2 mb-4 mx-5">
        My Projects
      </h1>
      <h3 class="subheading mx-5 mb-4">I like making stuff</h3>
      <v-divider class="mb-8" :inset="false"></v-divider>
      <nuxt-child />
    </div>
  </v-container>
</template>

<script></script>

<style lang="scss" scoped>
.test {
  color: $test-text-color;
}
</style>
