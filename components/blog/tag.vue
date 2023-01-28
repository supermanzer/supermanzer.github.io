<template>
  <v-chip
    ref="chip"
    :outlined="!active"
    color="light-blue lighten-1"
    @click.prevent="emitTag"
  >
    <v-icon left>mdi-pound</v-icon>
    {{ tag }}
  </v-chip>
</template>

<script>
export default {
  name: 'BlogTag',
  props: {
    tag: { type: String, required: false, default: '' },
    active: { type: Boolean, required: false, default: false },
  },
  methods: {
    emitTag() {
      this.$emit('tag', this.tag)
    },
  },
}
</script>
