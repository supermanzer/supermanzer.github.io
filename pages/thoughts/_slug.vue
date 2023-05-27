<template>
  <v-container grid-list-lg>
    <v-row class="mx-5">
      <v-col cols="12" lg="3">
        <AuthorCard :author="article.author" class="mt-10" />
        <TableOfContents :items="article.toc" class="mt-10 sticky-toc" />
      </v-col>
      <v-col cols="12" lg="9">
        <v-card>
          <article class="ma-10">
            <p id="title" class="main-title">{{ article.title }}</p>
            <p class="subheading">{{ article.description }}</p>
            <div class="d-flex justify-space-around">
              <span>Created: {{ formatDate(article.createdAt) }}</span>
              <span>Updated: {{ formatDate(article.updatedAt) }}</span>
            </div>
            <v-divider class="mb-10"></v-divider>
            <nuxt-content :document="article"></nuxt-content>
          </article>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AuthorCard from '~/components/global/AuthorCard.vue'
import TableOfContents from '~/components/blog/TableOfContents.vue'

export default {
  name: 'RamblingContent',
  components: { AuthorCard, TableOfContents },
  async asyncData({ $content, params }) {
    const article = await $content('blog', params.slug).fetch()
    return { article }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
  },
}
</script>

<style>
html {
  scroll-behavior: smooth;
}

.sticky-toc {
  position: sticky;
  top: 4rem;
  align-self: start;
}

.main-title {
  font-size: 36px;
}

.nuxt-content h2 {
  font-weight: bold;
  font-size: 28px;
  margin-bottom: 15px;
}

.nuxt-content p {
  margin-bottom: 20px;
}

.nuxt-content hr {
  color: solid white 1px;
  margin-top: 30px;
  margin-bottom: 30px;
}

.nuxt-content pre {
  margin-bottom: 40px;
}

div.nuxt-content {
  padding-bottom: 5rem;
  margin-bottom: 5rem;
}
</style>
