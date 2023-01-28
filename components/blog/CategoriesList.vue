<template>
  <v-navigation-drawer color="transparent" permanent width="100%">
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-h6 d-flex justify-space-between">
          <span> Tags</span>
          <!-- TODO: Set breakpoints so button is visible in smaller viewports-->
        </v-list-item-title>
        <v-list-item-subtitle v-if="!filtered">
          Click to filter
        </v-list-item-subtitle>
        <v-list-item-subtitle v-else>
          <v-tooltip v-if="filtered" bottom>
            <template #activator="{ on, attrs }">
              <v-btn
                v-bind="attrs"
                class="mt-2"
                text
                @click="clearFilters"
                v-on="on"
              >
                <v-icon left>mdi-close-circle-outline</v-icon>
                Clear
              </v-btn>
            </template>
            <span>Clear filters</span>
          </v-tooltip>
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>
    <v-row justify="space-around" align="center" class="my-4 mx-auto">
      <v-col
        v-for="tag in tags"
        :key="tag.name"
        cols="12"
        sm="12"
        md="6"
        class="ma-0 pa-0"
      >
        <BlogTag
          :tag="tag"
          :active="selectedTags.includes(tag)"
          class="ma-2"
          @tag="selectTag"
        />
      </v-col>
    </v-row>
  </v-navigation-drawer>
  <!-- </v-navigation-drawer> -->
</template>

<script>
import BlogTag from './tag.vue'

/**
 * TODO: REMOVE CATEGORIES ALTOGETHER
 * This will resolve a lot of troublesome navigation and filtering issues.  We will rely solely
 * on tags. This will take some work but should simplify the process of presenting blog list and detail views
 * as well as using filters.
 *
 * Include a toggle for switching betweens containsAny and containsAll for filtering on tags.
 */

export default {
  components: { BlogTag },
  filters: {
    capFirst(str) {
      return `${str[0].toUpperCase()}${str.slice(1)}`
    },
  },
  props: {
    tags: { type: Set, required: false, default: () => new Set() },
    filtered: { type: Boolean, required: false, default: false },
  },
  data: () => ({
    selectedTags: [],
    drawer: false,
    icon: false,
  }),

  methods: {
    clearFilters() {
      this.selectedTags = []
      this.filter()
      this.$emit('clearFilters')
    },
    selectTag(tag) {
      if (!this.selectedTags.includes(tag)) {
        this.selectedTags.push(tag)
      } else {
        this.selectedTags = this.selectedTags.filter((t) => t !== tag)
      }
      this.filter()
    },
    filter() {
      const args = { tags: this.selectedTags }
      this.$emit('filter', args)
    },
  },
}
</script>
