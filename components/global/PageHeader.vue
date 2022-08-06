<template>
  <div>
    <v-row class="d-flex justify-space-between white--text">
      <v-col cols="12" md="6" sm="12">
        <h1 class="text-h2 mb-4 mx-5" v-text="heading"></h1>
        <h3 class="subheading mx-5 mb-4" v-text="subheading"></h3>
      </v-col>
      <v-col cols="12" md="6" sm="12" class="right-align"> </v-col>
    </v-row>
    <v-divider class="mb-8" :inset="false"></v-divider>
  </div>
</template>

<script>
export default {
  props: {
    heading: { type: String, required: false, default: "Stuff" },
    subheading: {
      type: String,
      required: false,
      default: "Stuff is great. I wish I had more stuff",
    },
  },
};
</script>
