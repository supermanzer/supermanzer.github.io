<template>
  <v-container grid-list-lg>
    <v-card height="1300" width="1920">
      <v-card-title>
        {{ vizObj.title }}
      </v-card-title>
      <v-card-text>
        <p>{{ vizObj.summary }}</p>
        <div ref="tableauViz"></div>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "VizDetail",
  data() {
    return {
      vizObj: {},
      viz: false,
    };
  },
  mounted() {
    this.setViz();
  },
  methods: {
    setViz() {
      const id = this.$route.params.id;
      this.vizObj = this.$store.getters["tableau/getViz"](id);
      this.checkAndLoad();
    },
    getViz() {
      const options = {
        hideTabs: true,
        onFirstInteractive: function () {
          console.log("You can now poke the viz");
        },
      };
      this.viz = new tableau.Viz(
        this.$refs.tableauViz,
        this.vizObj.url,
        options
      );
    },
    checkAndLoad() {
      if (this.viz) {
        this.viz.dispose();
      }
      this.getViz();
    },
  },
};
</script>

<style>
</style>