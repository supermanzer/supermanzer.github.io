<template>
  <transition name="card-fade">
    <v-card
      shaped
      nuxt
      :to="{ name: 'excited-slug', params: { slug: article.slug } }"
      dark
      ref="myCard"
      v-show="show"
      width="100%"
      style="background: transparent"
    >
      <v-list-item three-line>
        <v-list-item-content>
          <div class="overline mb-5">
            <span class="mx-8">TECH: {{ article.tech }}</span>
            <span class="mx-8"> Created: {{ createdAt }} </span>
          </div>
          <v-list-item-title class="headline mb-4">
            {{ article.title }}
          </v-list-item-title>
          <v-list-item-subtitle>
            {{ article.description }}
          </v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-avatar tile size="100">
          <v-img :src="article.img" :alt="article.title"></v-img>
        </v-list-item-avatar>
      </v-list-item>
      <v-card-actions> </v-card-actions>
    </v-card>
  </transition>
</template>

<script>
export default {
  name: "HomePostCard",
  props: {
    article: { type: Object, required: true },
    show: { type: Boolean, required: true },
  },
  data() {
    return {
      position: null,
    };
  },
  computed: {
    createdAt() {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(this.article.createdAt).toLocaleDateString("en", options);
    },
  },
};
</script>

<style>
/* TRANSITION RULES */
.card-fade-enter {
  opacity: 0;
}
.card-fade-enter-active {
  transition: opacity 2s ease-in;
}
.card-fade-enter-to {
  opacity: 1;
}
</style>