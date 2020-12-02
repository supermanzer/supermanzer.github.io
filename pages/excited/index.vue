<template>
  <v-row justify-space-between>
    <v-col cols="12" lg="6" offset-lg="1">
      <div class="my-6" v-for="article in articles" :key="article.slug">
        <post-card :article="article" />
      </div>
    </v-col>
    <v-col cols="12" lg="3">
      <search-input />
    </v-col>
  </v-row>
</template>

<script>
import PostCard from "~/components/excited/PostCard.vue";
import SearchInput from "~/components/excited/searchInput.vue";
export default {
  name: "ExcitedList",
  components: {
    PostCard,
    SearchInput,
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