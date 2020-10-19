<template>
  <div class="title fh">
    <v-row align="center" justify="center" class="twothirds">
      <v-col class="text-center bg-black" cols="8" dark>
        <h1 class="text-h1 mb-4 white--text">C. Ryan Manzer</h1>
        <h4 class="subheading mb-3 white--text">
          Full stack software engineer, data scientist, oceanographer
        </h4>
        <!-- <v-form @submit.prevent="snackTime">
          <v-text-field v-model="snackText" label="Snack Text"></v-text-field>
          <v-btn color="info" @click="snackTime">Test Snack</v-btn>
        </v-form> -->
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  // layout: 'home',
  data() {
    return {
      snackText: "",
    };
  },
  methods: {
    snackTime: function (snack) {
      this.setSnack(this.snackText);
      this.snackText = "";
      this.$router.push("/");
    },
    ...mapMutations({
      setSnack: "snackbar/SET_SNACKTEXT",
    }),
  },
};
</script>

<style lang="css" scoped>
.bg-black {
  background: rgba(
    0.2,
    0.2,
    0.2,
    0.75
  ); /* Black color with 50% alpha/opacity */
}
.fh {
  height: 100%;
  width: 100%;
  position: absolute;
  background-image: url("https://images.pexels.com/photos/635279/pexels-photo-635279.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
  background-position: center;
  background-size: cover;
}
.twothirds {
  height: 66.7%;
}
#bg {
  height: 100%;
}
</style>
