<template>
  <v-row align="center" justify="center">
    <v-col
      v-for="(post, index) in posts"
      :key="index"
      :cols="12"
      :sm="12"
      :md="6"
      :lg="4"
    >
      <post-card :article="post" />
    </v-col>
  </v-row>
</template>

<script>
import PostCard from '~/components/blog/PostCard.vue'
export default {
  name: 'RamblingCards',
  components: {
    PostCard,
  },
  async asyncData({ $content }) {
    const posts = await $content('blog').fetch()
    return { posts }
  },
}
</script>
