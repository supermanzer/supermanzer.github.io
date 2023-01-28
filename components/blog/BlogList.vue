<template>
  <v-row>
    <PostCard
      v-for="post in posts"
      :key="post.title"
      :article="post"
      class="ma-4"
    />
  </v-row>
</template>

<script>
import PostCard from './PostCard.vue'

export default {
  components: { PostCard },
  props: {
    posts: { type: Array, required: false, default: () => [] },
  },
}
</script>
