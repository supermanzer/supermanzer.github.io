<template>
  <v-container grid-list-lg>
    <v-card class="mx-auto mb-12" max-width="1200">
      <v-img
        v-if="project.card_img"
        :src="project.card_img"
        class="white--text align-end"
        height="400"
        gradient="to right, rgba(50,50,50, 0.7), rgba(50,50,50,0.1)"
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
                    <template v-slot:activator="{ on, attrs }">
                      <span v-bind="attrs" v-on="on" class="white--text">
                        Lead: {{ project.lead.name }}
                      </span>
                    </template>
                    <developer-card :author="project.lead"></developer-card>
                  </v-menu>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-col>
          <v-col cols="12" sm="12" md="6" class="d-flex justify-end align-end">
            <div class="d-flex flex-column">
              <v-btn
                color="white"
                outlined
                :href="project.github_link"
                v-if="project.github_link"
                class="block-btn"
              >
                <v-icon>mdi-github</v-icon>
                View On Github
              </v-btn>
              <v-btn
                color="white"
                outlined
                :href="project.dendron_link"
                v-if="project.dendron_link"
                class="block-btn"
              >
                <v-icon>mdi-source-branch</v-icon>
                View Dendron Notes
              </v-btn>
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
import DeveloperCard from "~/components/projects/DeveloperCard.vue";
export default {
  name: "ProjectContent",
  components: { DeveloperCard },
  async asyncData({ $content, params }) {
    const project = await $content("projects", params.slug).fetch();

    return { project };
  },
};
</script>

<style scoped>
.v-card__text >>> .nuxt-content h2 {
  margin: 1em 0;
  padding: 1em 1em;
  line-height: 1.2;
  background-image: linear-gradient(
    225deg,
    #7085b6 0%,
    #87a7d9 50%,
    #def3f8 100%
  );
}
.v-card__text >>> div.nuxt-content {
  padding-bottom: 2rem;
  margin-bottom: 2rem;
}
.block-btn {
  margin-top: 1em;
}
</style>