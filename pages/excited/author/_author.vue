<template>
  <div>
    <h1>Author: {{ articles[0].author.name }}</h1>
    <h4>Bio: {{ articles[0].author.bio }}</h4>
    <v-divider></v-divider>
    <h2>Articles:</h2>
    <v-row>
      <v-col cols="12" lg="6" offset-lg="3">
        <post-card
          class="mt-12"
          :article="article"
          v-for="article in articles"
          :key="article.slug"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import PostCard from "~/components/excited/PostCard.vue";

export default {
  components: { PostCard },
  async asyncData({ $content, params }) {
    const articles = await $content("articles", params.slug)
      .where({
        "author.name": {
          $regex: [params.author, "i"],
        },
      })
      .without("body")
      .sortBy("createdAt", "asc")
      .fetch();

    return {
      articles,
    };
  },
};
</script>

<style>
</style>