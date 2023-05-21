<template>
  <v-container>
    <PageHeader :heading="heading" :subheading="subheading" />
    <blog-list :posts="posts" />
  </v-container>
</template>

<script>
import BlogList from '~/components/blog/BlogList.vue'
import PageHeader from '~/components/global/PageHeader.vue'
export default {
  name: 'MyRamblings',
  components: { PageHeader, BlogList },
  async asyncData({ $content }) {
    const posts = await $content('blog').fetch()
    return { posts }
  },
  data: () => ({
    heading: 'My Random Ramblings',
    subheading: 'I like talking about stuff',
  }),
  created() {
    this.$store.commit('nav/SET_NAV_SHOW', true)
  },
}
</script>
