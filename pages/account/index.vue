<template>
  <v-container grid-list-xs>
    <h1>Sign In</h1>
    <v-divider></v-divider>
    <h3 class="subheading">You need to be logged in to edit content.</h3>
    <v-row>
      <v-col lg="6" offset-lg="3" md="8" offset-md="2" sm="12">
        <component :is="formComponent" v-on:password-reset="setReset" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import loginForm from "@/components/user/loginForm";
import passwordReset from "@/components/user/passwordReset";
export default {
  components: {
    loginForm,
    passwordReset,
  },
  data() {
    return {
      needReset: false,
    };
  },
  computed: {
    formComponent() {
      if (this.needReset) {
        return "passwordReset";
      } else {
        return "loginForm";
      }
    },
  },
  methods: {
    setReset: function () {
      this.needReset = !this.needReset;
    },
  },
};
</script>

<style></style>
