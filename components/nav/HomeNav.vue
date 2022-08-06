<template>
  <v-row align-center justify="center">
    <div
      v-for="(link, i) in links"
      :key="i"
      class="px-4"
      :class="divClassObject(i)"
    >
      <v-btn
        text
        :class="btnClassObject"
        :nuxt="true"
        :to="link.to"
        v-text="link.title"
      ></v-btn>
    </div>
  </v-row>
</template>

<script>
export default {
  name: "HomeNav",
  props: {
    dark: { type: Boolean, required: false, default: true },
  },
  computed: {
    links() {
      return this.$store.state.nav.links;
    },
    btnClassObject() {
      return {
        "white--text": this.dark,
      };
    },
  },
  methods: {
    divClassObject(i) {
      return {
        "right-border": i < this.links.length - 1,
      };
    },
  },
};
</script>

<style>
div.right-border {
  border-right: 2px white solid;
}
</style>