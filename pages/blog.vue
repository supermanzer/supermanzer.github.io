<template>
  <v-container class="mx-auto my-4" fluid>
    <PageHeader v-if="!detail" heading="Random Thoughts from a Random Dude" />
    <v-row>
      <v-col v-if="!detail" cols="12" sm="3">
        <v-card>
          <SearchInput
            class="my-4 py-2"
            @searched="setPosts"
            @cleared="clearFilters"
          />
          <CategoriesList
            ref="cattag"
            :tags="tags"
            :filtered="filtered"
            @filter="filter"
            @clearFilters="clearFilters"
          />
        </v-card>
      </v-col>
      <v-col v-if="detail" cols="12" sm="12">
        <NuxtChild />
      </v-col>
      <v-col v-else cols="12" sm="9">
        <NuxtChild :posts="posts" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import BlogList from '~/components/blog/BlogList.vue'
import CategoriesList from '~/components/blog/CategoriesList.vue'
import SearchInput from '~/components/blog/SearchInput.vue'
import PageHeader from '~/components/global/PageHeader.vue'

export default {
  name: 'BlogHome',
  components: { PageHeader, CategoriesList, SearchInput },
  async asyncData({ $content }) {
    const query = $content('blog', { deep: true })
      .only(['title', 'description', 'tags', 'createdAt', 'updatedAt', 'slug'])
      .where({ title: { $ne: 'icon' } })
      .sortBy('createdAt', 'desc')
      .limit(5)
    const posts = await query.fetch()
    return { posts }
  },
  data: () => ({
    posts: [],
    tags: new Set(),
    selectedTags: [],
  }),
  computed: {
    filtered() {
      return this.selectedTags.length > 0 || this.searched
    },
    detail() {
      let result = false
      if (this.$route.params) {
        result = Object.prototype.hasOwnProperty.call(
          this.$route.params,
          'slug'
        )
      }
      return result
    },
  },
  created() {
    this.getCategoriesTags()
  },
  methods: {
    filter({ tags }) {
      this.selectedTags = tags
      this.fetchPosts()
    },
    clearFilters() {
      this.fetchPosts()
    },
    setPosts(posts) {
      this.posts = posts
    },
    async fetchPosts() {
      const query = this.$content('blog', { deep: true })
        .where({
          title: { $ne: 'icon' },
        })
        .only([
          'title',
          'description',
          'createdAt',
          'updatedAt',
          'slug',
          'tags',
        ])
        .sortBy('createdAt', 'desc')
        .limit(5)
      if (this.selectedTags.length > 0) {
        query.params.where.tags = { $containsAny: this.selectedTags }
      }
      this.posts = await query.fetch()
    },
    async getCategoriesTags() {
      const dirs = await this.$content('blog', { deep: true })
        .only(['dir', 'tags'])
        .fetch()

      this.tags = new Set()
      dirs.forEach((d) => {
        if (d.tags !== undefined) {
          d.tags.forEach((t) => this.tags.add(t))
        }
      })
    },
  },
}
</script>
