<template>
  <v-img
    :src="require(`~/assets/images/${image}`)"
    :width="width"
    :alt="alt"
  ></v-img>
</template>

<script>
export default {
  props: {
    image: { type: String, required: false, default: null },
    width: { type: Number, required: false, default: 300 },
    alt: { type: String, required: false, default: 'image' },
  },
  computed: {
    imagePath() {
      const prefix = '~/assets/images'
      return `${prefix}/${this.image}`
    },
  },
}
</script>
