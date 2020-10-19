<template>
  <v-card>
    <v-img
      height="300"
      src="https://images.pexels.com/photos/846288/pexels-photo-846288.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    ></v-img>
    <v-card-title primary-title>Log In</v-card-title>
    <v-card-text>
      <v-form>
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
        <v-text-field
          v-model="password"
          v-on:keyup.enter="logIn"
          type="password"
          clearable
          label="Password"
          autocomplete="current-password"
          :error="error"
        ></v-text-field>
        <v-row>
          <v-col sm="12" class="center-algin">
            <p class="center red--text text--darken-2 font-weight-bold">
              {{ error_message }}
            </p>
            <div v-if="show_reset" class="mt-6 ml-8">
              <p class="">Need to reset your password?</p>
              <v-btn color="info" @click="gotoReset">Reset Password</v-btn>
            </div>
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="purple accent=-4" text class="mb-4" @click="logIn"
        >Log In</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      email: "",
      password: "",
      error: false,
      error_message: "",
      show_reset: false,
    };
  },
  methods: {
    logIn() {
      this.$fireAuth
        .signInWithEmailAndPassword(this.email, this.password)
        .then((result) => {
          console.log(result);
          this.setSnack("User logged in successfully");
          this.$router.push("/");
        })
        .catch((err) => {
          (this.error = true), (this.error_message = err.message);
          this.show_reset = true;
        });
    },
    snackTime: function (text) {
      this.setSnack(text);
    },
    gotoReset: function () {
      this.$emit("password-reset");
    },
    ...mapMutations({
      setSnack: "snackbar/SET_SNACKTEXT",
    }),
  },
};
</script>

<style lang="scss" scoped>
</style>