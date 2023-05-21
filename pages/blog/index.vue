<template>
  <v-container>
    <PageHeader :heading="heading" :subheading="subheading" />
    <BlogList :posts="posts" />
  </v-container>
</template>

<script>
import PageHeader from '~/components/global/PageHeader.vue'
export default {
  name: 'ManzerBlog',
  components: { PageHeader },
  async asyncData({ $content }) {
    const posts = await $content('blog').fetch()
    return { posts }
  },
  data: () => ({
    heading: 'Random thoughts from a random dude',
    subheading: 'I like talking about stuff',
  }),
  created() {
    this.$store.commit('nav/SET_NAV_SHOW', true)
  },
}
</script>
