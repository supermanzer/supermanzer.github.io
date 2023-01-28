<template>
  <v-container grid-list-md>
    <v-row>
      <v-col cols="12" lg="3">
        <AuthorCard></AuthorCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AuthorCard from '../global/AuthorCard.vue'

export default {
  components: { AuthorCard },
  props: {
    post: { type: Object, required: false, default: () => {} },
  },
}
</script>
