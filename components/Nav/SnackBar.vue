<template>
  <v-snackbar app top v-model="show" :color="color">
    {{ message }}
    <v-btn text color="accent" @click.native="show = false">Close</v-btn>
  </v-snackbar>
</template>

<script>
import { state } from "~/store/about";
export default {
  data() {
    return {
      show: false,
      color: "info",
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
};
</script>

<style>
</style>