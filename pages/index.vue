<template>
  <div class="title fh">
    <v-row align="center" justify="center" class="twothirds">
      <v-col class="text-center bg-black" cols="8" dark>
        <h1 class="text-h1 mb-4 white--text">C. Ryan Manzer</h1>
        <h4 class="subheading mb-3 white--text">
          Full stack software engineer, data scientist, oceanographer
        </h4>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  layout: 'home',
}
</script>

<style lang="css">
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
}
.twothirds {
  height: 66.7%;
}
#bg {
  height: 100%;
  width: 100%;
  position: absolute;
  background-image: url('https://w.wallhaven.cc/full/vm/wallhaven-vmoj95.jpg');
  background-position: center;
  background-size: cover;
}
</style>
