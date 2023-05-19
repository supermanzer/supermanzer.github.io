<template>
  <v-container>
    <PageHeader :heading="heading" :subheading="subheading" />
    <nuxt-child />
  </v-container>
</template>

<script>
import PageHeader from '~/components/global/PageHeader.vue'
export default {
  name: 'MyRamblings',
  components: { PageHeader },
  data: () => ({
    heading: 'My Random Ramblings',
    subheading: 'I like talking about stuff',
  }),
  created() {
    this.$store.commit('nav/SET_NAV_SHOW', true)
  },
}
</script>
