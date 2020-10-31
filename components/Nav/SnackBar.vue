<template>
  <v-snackbar app top v-model="show" v-bind:class="textClass">
    {{ message }}
    <v-btn text :color="color" @click.native="show = false">Close</v-btn>
  </v-snackbar>
</template>

<script>
import { state } from "~/store/about";
export default {
  data() {
    return {
      show: false,
      color: "",
      message: "",
    };
  },
  created() {
    this.$store.watch(
      (state) => state.snackbar.snackText,
      () => {
        const msg = this.$store.state.snackbar.snackText;
        const color = this.$store.state.snackbar.snackColor;
        if (msg !== "") {
          this.message = msg;
          this.color = color;
          this.show = true;
          this.$store.commit("snackbar/SET_SNACKTEXT", "");
        }
      }
    );
  },
  computed: {
    textClass() {
      if (this.color.length > 0) {
        return `${this.color}--text`;
      } else {
        return "";
      }
    },
  },
};
</script>

<style>
</style>