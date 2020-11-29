<template>
  <v-row>
    <v-col cols="12" lg="8" offset-lg="2">
      <div class="my-6" v-for="article in articles" :key="article.slug">
        <post-card :article="article" />
      </div>
    </v-col>
  </v-row>
</template>

<script>
import PostCard from "~/components/excited/PostCard.vue";
export default {
  name: "ExcitedList",
  components: {
    PostCard,
  },
  async asyncData({ $content, params }) {
    const articles = await $content("articles", params.slug)
      .only(["title", "tech", "description", "img", "slug", "author"])
      .sortBy("createdAt", "asc")
      .fetch();

    return { articles };
  },
};
</script>

<style>
</style>