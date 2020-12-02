<template>
  <v-container grid-list-md>
    <v-row>
      <v-col cols="12" lg="3">
        <author-card :author="article.author" class="mt-10" />
        <table-of-contents class="mt-10 sticky-toc" :items="article.toc" />
      </v-col>
      <v-col cols="12" lg="8">
        <v-card>
          <article class="ma-10">
            <h1 class="main-title">{{ article.title }}</h1>

            <p class="subheading">
              {{ article.description }}
            </p>
            <p>Last Updated: {{ formatDate(article.updatedAt) }}</p>
            <v-divider class="mb-10"></v-divider>
            <nuxt-content :document="article" />
          </article>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TableOfContents from "@/components/excited/TableOfContents.vue";
import AuthorCard from "@/components/excited/AuthorCard.vue";

export default {
  async asyncData({ $content, params }) {
    const article = await $content("articles", params.slug).fetch();

    return { article };
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
  },
  components: {
    TableOfContents,
    AuthorCard,
  },
};
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