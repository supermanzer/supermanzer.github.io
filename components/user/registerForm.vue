<template>
  <v-card>
    <v-card-title primary-title>Sign Up</v-card-title>
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
        ></v-text-field>
        <v-text-field
          v-model="password"
          type="password"
          clearable
          label="Choose a Password"
          autocomplete="current-password"
          aria-autocomplete="current-password"
        ></v-text-field>
        <v-text-field v-model="bio" clearable label="Provide a short bio">
        </v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="blue accent=-4" text class="mb-4" @click.prevent="register"
        >Sign Up</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      bio: "",
    };
  },
  methods: {
    register() {
      try {
        this.$fireAuth
          .createUserWithEmailAndPassword(this.email, this.password)
          .then((cred) => {
            return this.$fireStore.collection("users").doc(cred.user.uid).set({
              bio: this.bio,
            });
          })
          .then(() => {
            this.$router.push("/");
            this.$emit("modalClose");
          });
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style>
</style>