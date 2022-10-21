<template>
  <v-container grid-list-lg>
    <v-card class="mx-auto mb-12" max-width="1200">
      <v-img
        v-if="project.card_img"
        :src="project.card_img"
        class="white--text align-end pa-2"
        height="400"
        gradient="to top, rgba(50,50,50, 0.7), rgba(50,50,50,0.1)"
      >
        <v-row class="d-flex justify-space-between">
          <v-col cols="12" sm="12" md="6">
            <v-list-item three-line>
              <v-list-item-content>
                <span class="overline mb-4 white--text">Project</span>
                <v-list-item-title
                  class="headline mb-2 white--text"
                  v-text="project.title"
                ></v-list-item-title>
                <v-list-item-subtitle>
                  <v-menu>
                    <template #activator="{ on, attrs }">
                      <span v-bind="attrs" class="white--text" v-on="on">
                        Lead: {{ project.lead.name }}
                      </span>
                    </template>
                    <author-card
                      :author="project.lead"
                      header="lead developer"
                    />
                  </v-menu>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-col>
          <v-col cols="12" sm="12" md="6" class="d-flex justify-end align-end">
            <div class="d-flex flex-column">
              <v-btn
                v-if="project.github_link"
                color="white"
                outlined
                :href="project.github_link"
                class="block-btn"
              >
                <v-icon>mdi-github</v-icon>
                View On Github
              </v-btn>
              <v-btn
                v-if="project.dendron_link"
                color="white"
                outlined
                :href="project.dendron_link"
                class="block-btn"
              >
                <v-icon>mdi-source-branch</v-icon>
                View Dendron Notes
              </v-btn>
              <v-btn
                v-if="project.pypi_link"
                color="white"
                outlined
                :href="project.pypi_link"
                class="block-btn"
              >
                <v-icon>mdi-language-python</v-icon>
                View on PyPI
              </v-btn>
              <template v-if="project.links">
                <v-btn
                  v-for="link in project.links"
                  :key="link.text"
                  color="white"
                  outlined
                  :href="link.url"
                  class="block-btn"
                >
                  <v-icon v-text="link.icon"></v-icon>
                  {{ link.text }}
                </v-btn>
              </template>
            </div>
          </v-col>
        </v-row>
      </v-img>
      <v-card-text>
        <nuxt-content :document="project"></nuxt-content>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import AuthorCard from '~/components/global/AuthorCard.vue'

export default {
  name: 'ProjectContent',
  components: { AuthorCard },
  async asyncData({ $content, params }) {
    const project = await $content('projects', params.slug).fetch()

    return { project }
  },
}
</script>

<style scoped>
/* stylelint-disable */
.v-card__text :v-deep(.nuxt-content h2) {
  margin: 1em 0;
  padding: 1em 1em;
  line-height: 1.2;
  background-image: linear-gradient(
    135deg,
    #7085b6 0%,
    #87a7d9 50%,
    #def3f8 100%
  );
}
.v-card__text :v-deep(div.nuxt-content) {
  padding-bottom: 2rem;
  margin-bottom: 2rem;
}
.block-btn {
  margin-top: 1em;
}
/* stylelint-enable */
</style>
