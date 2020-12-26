<template>
  <transition name="card-fade">
    <v-card
      shaped
      nuxt
      :to="`/excited/${article.slug}`"
      dark
      ref="myCard"
      v-show="show"
    >
      <v-list-item three-line>
        <v-list-item-content>
          <div class="overline mb-5">
            <span class="mx-8">TECH: {{ article.tech }}</span>
            <span class="mx-8"> Updated At: {{ updatedAt }} </span>
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
  },
  data() {
    return {
      show: true,
      position: null,
    };
  },
  computed: {
    updatedAt() {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(this.article.updatedAt).toLocaleDateString("en", options);
    },
  },
  methods: {
    watchScroll(e) {
      const trigger = this.position;
      const bottomPosition = window.scrollY + window.innerHeight / 2;
      if (bottomPosition > trigger) {
        this.show = true;
      }
    },
  },
  created() {},
  mounted() {
    this.position = this.$refs.myCard.$el.offsetTop;
    this.show = false;
    window.addEventListener("scroll", this.watchScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.watchScroll);
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