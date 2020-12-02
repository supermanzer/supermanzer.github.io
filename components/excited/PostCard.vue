<template>
  <v-card shaped nuxt :to="`/excited/${article.slug}`">
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-5">TECH: {{ article.tech }}</div>
        <v-list-item-title class="headline mb-4">
          {{ article.title }}
        </v-list-item-title>
        <v-list-item-subtitle>
          {{ article.description }}
        </v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-avatar tile size="100">
        <v-img :src="article.img" :alt="article.title"></v-img>
      </v-list-item-avatar>
    </v-list-item>
    <v-card-actions> </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "PostCard",
  props: {
    article: { type: Object, required: true },
  },
};
</script>

<style>
</style>