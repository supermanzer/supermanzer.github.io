<template>
  <BlogList :posts="posts" />
</template>

<script>
import BlogList from '~/components/blog/BlogList.vue'

export default {
  name: 'AllPostsList',
  components: { BlogList },
  props: {
    posts: { type: Array, required: false, default: () => [] },
  },
}
</script>
