<template>
  <div>
    <v-text-field
      v-model="searchQuery"
      label="Search term"
      prepend-inner-icon="mdi-text-search"
    ></v-text-field>
    <ul v-if="articles.length">
      <li v-for="article in articles" :key="article.slug">
        {{ article.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: "",
      articles: [],
    };
  },
  watch: {
    async searchQuery(searchQuery) {
      if (!searchQuery) {
        this.articles = [];
        return;
      }
      this.articles = await this.$content("articles")
        .limit(6)
        .search(searchQuery)
        .fetch();
    },
  },
};
</script>

<style>
</style>