<template>
  <v-card class="mx-auto" nuxt :to="`/excited/author/${author.name}`">
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-5">{{ header }}</div>
        <v-list-item-title class="headline mb-2">
          {{ author.name }}
        </v-list-item-title>
        <v-list-item-subtitle>{{ author.bio }}</v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-avatar tile size="80" color="teal">
        <v-img :src="author.image" :alt="author.name"></v-img>
      </v-list-item-avatar>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
  name: "AuthorCard",
  props: {
    author: { type: Object, required: true },
    header: { type: String, required: false, default: "author" },
  },
};
</script>
