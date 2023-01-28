<template>
  <v-card
    shaped
    nuxt
    width="750px"
    :to="{
      name: 'blog-slug',
      params: { slug: article.slug },
    }"
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-5 d-flex justify-space-between">
          <span class="mx-8"> Created: {{ createdAt }} </span>
          <span class="mx-8"> Updated: {{ updatedAt }} </span>
        </div>
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
    <v-divider></v-divider>
    <v-card-actions>
      <v-row
        v-if="article.tags && article.tags.length > 0"
        class="my-2 mx-auto"
      >
        <v-col v-for="tag in article.tags" :key="tag" class="ma-0 pa-0">
          <BlogTag :tag="tag" />
        </v-col>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script>
import BlogTag from './tag.vue'
export default {
  name: 'PostCard',
  components: { BlogTag },
  props: {
    article: { type: Object, required: true },
  },
  data: () => ({
    dateFormat: { year: 'numeric', month: 'numeric', day: 'numeric' },
  }),
  computed: {
    createdAt() {
      return new Date(this.article.createdAt).toLocaleDateString(
        'en',
        this.dateFormat
      )
    },
    updatedAt() {
      return new Date(this.article.updatedAt).toLocaleDateString(
        'en',
        this.dateFormat
      )
    },
  },
}
</script>
