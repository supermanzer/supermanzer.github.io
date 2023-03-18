<template>
  <v-row>
    <v-col
      v-for="(photo, i) in photos"
      :key="i"
      class="d-flex child-flex"
      lg="4"
      md="6"
      sm="12"
    >
      <v-img
        :src="`${photo_path}${photo.filename}`"
        :lazy-src="`${photo_path}${photo.filename}`"
        aspect-ratio="1"
        class="grey lighten-2"
      >
        <template #placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: { photos: { type: Array, required: false, default: () => [] } },
  data: () => ({
    photo_path: '/images/photos/',
  }),
}
</script>
