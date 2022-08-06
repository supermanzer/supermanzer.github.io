<template>
  <v-parallax :src="source" dark>
    <v-overlay absolute>
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="font-weight-thin mb-4 display-1">
            {{ heading }}
          </h1>
        </v-col>
      </v-row>
    </v-overlay>
  </v-parallax>
</template>

<script>
export default {
  name: "AboutParallax",
  props: {
    source: { type: String, required: true },
    heading: { type: String, required: false, default: "" },
  },
  methods: {
    getImage(int) {
      return `/images/parallax/${int + 2}.jpeg`;
    },
  },
};
</script>
