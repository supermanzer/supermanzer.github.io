<template>
  <v-card>
    <v-img
      height="300"
      src="https://images.pexels.com/photos/846288/pexels-photo-846288.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    ></v-img>
    <v-card-title primary-title>Send Password Reset Email</v-card-title>
    <v-card-text>
      <v-form @submit.prevent="reset">
        <v-text-field
          name="email"
          label="Email Address"
          id="email"
          type="email"
          clearable
          v-model="email"
          autocomplete="username"
          :error="error"
        ></v-text-field>
        <v-row>
          <v-col sm="12" class="center-algin">
            <p class="center red--text text--darken-2 font-weight-bold">
              {{ error_message }}
            </p>
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="purple accent=-4" text class="mb-4" @click="reset"
        >Send Email</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      error: false,
      error_message: "",
      email: "",
    };
  },
  methods: {
    reset: function () {
      this.$fireAuth
        .sendPasswordResetEmail(this.email)
        .then((result) => {
          console.log(result);
          this.setSnack(
            "Password reset email sent.  Please check your email in a couple minutes."
          );
          this.$emit("password-reset");
        })
        .catch((err) => {
          this.error = true;
          this.error_message = err.message;
        });
    },
    ...mapMutations({
      setSnack: "snackbar/SET_SNACKTEXT",
    }),
  },
};
</script>

<style>
</style>