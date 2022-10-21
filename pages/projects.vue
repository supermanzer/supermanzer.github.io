<template>
  <v-container>
    <PageHeader :heading="heading" :subheading="subheading" />
    <nuxt-child />
  </v-container>
</template>

<script>
import PageHeader from '~/components/global/PageHeader.vue'
export default {
  name: 'ProjectParent',
  components: { PageHeader },
  data: () => ({
    heading: 'My Projects',
    subheading: 'I like making stuff',
  }),
  created() {
    this.$store.commit('nav/SET_NAV_SHOW', true)
  },
}
</script>
