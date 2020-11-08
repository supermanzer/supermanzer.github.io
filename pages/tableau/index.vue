<template>
  <v-container>
    <p>
      I have played around with a few different data visualization technologies
      and I've found Tableau to be a very approachable and useful platform. I
      enjoy the <b>very</b> large community and the way they support each other.
      I also enjoy the ease of building visualizations which shifts the effort
      to determining the most effective data visualization techniques rather
      than just trying to get the damn graphs to work. While most of my efforts
      in Tableau has been for work and consequently restricted, I've been making
      an effort to put more stuff up on
      <a href="https://public.tableau.com/en-us/s/">Tableau Public</a> and give
      myself something to visualize besides company data. Here are some of those
      efforts.
    </p>
    <v-row align="center" justify="center" ref="tableau">
      <v-col
        cols="12"
        sm="12"
        md="6"
        lg="4"
        v-for="viz in vizzes"
        :key="viz.id"
      >
        <VizPreviewCard :viz="viz" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import VizPreviewCard from "@/components/tableau/VizPreviewCard";
export default {
  name: "TableauIndex",
  components: {
    VizPreviewCard,
  },
  created() {
    this.$store.dispatch("tableau/loadVizzes");
  },
  computed: {
    vizzes() {
      return this.$store.state.tableau.vizzes;
    },
  },
};
</script>

<style>
</style>
