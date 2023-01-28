<template>
  <div>
    <v-text-field
      v-model="searchQuery"
      label="Search Posts"
      prepend-inner-icon="mdi-text-search"
      autocomplete="off"
      clearable
      @click:clear="emitClear"
    ></v-text-field>
    <ul v-if="articles.length">
      <li v-for="article in articles" :key="article.slug">
        <nuxt-link
          class="no-dec"
          :to="{ name: 'excited-slug', params: { slug: article.slug } }"
          :v-text="article.title"
          >{{ article.title }}</nuxt-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      articles: [],
    }
  },
  watch: {
    async searchQuery(searchQuery) {
      if (!searchQuery) {
        this.articles = []
        return
      }
      const articles = await this.$content('blog')
        .only([
          'title',
          'description',
          'tags',
          'createdAt',
          'updatedAt',
          'slug',
        ])
        .limit(6)
        .search('title', searchQuery)
        .fetch()
      this.$emit('searched', articles)
    },
  },
  methods: {
    emitClear() {
      this.$emit('cleared')
    },
  },
}
</script>

<style>
a.no-dec {
  text-decoration: none;
  color: #000;
}
</style>
