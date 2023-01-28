<template>
  <v-row align-center justify="center">
    <v-col
      v-for="(link, i) in links"
      :key="i"
      class="px-4"
      :class="divClassObject(i)"
      cols="12"
      sm="12"
      md="4"
      lg="3"
      xl="2"
    >
      <v-btn
        text
        :class="btnClassObject"
        :nuxt="true"
        :to="link.to"
        v-text="link.title"
      ></v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'HomeNav',
  props: {
    dark: { type: Boolean, required: false, default: true },
  },
  computed: {
    links() {
      return this.$store.state.nav.links
    },
    btnClassObject() {
      return {
        'white--text': this.dark,
      }
    },
  },
  methods: {
    divClassObject(i) {
      return {
        'right-border':
          i < this.links.length - 1 && this.$vuetify.breakpoint.mdAndUp,
      }
    },
  },
}
</script>

<style>
.right-border {
  border-right: 2px white solid;
}
</style>
