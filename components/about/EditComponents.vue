<template>
  <v-card flat>
    <v-toolbar dark flat color="light-blue">
      <v-toolbar-title>Edit Components</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-tooltip left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="white--text"
            icon
            v-on="on"
            v-bind="attrs"
            @click="addComponent"
          >
            <v-icon>mdi-note-plus-outline</v-icon>
          </v-btn>
        </template>
        <span>Add new Component</span>
      </v-tooltip>
      <template v-slot:extension>
        <v-tabs v-model="tab" right dark slider-color="deep-purple accent-4">
          <v-tab v-for="(component, i) in components" :key="i">
            Comp {{ i }}
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>
    <v-tabs-items v-model="tab">
      <v-tab-item v-for="(component, k) in components" :key="k">
        <ComponentForm :comp="component" />
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
export default {
  name: "EditComponents",
  props: {
    components: { type: Array, required: true },
  },
  data() {
    return {
      tab: null,
    };
  },
  methods: {
    addComponent() {
      const newComp = {
        heading: "",
        icon: "",
        text: "",
      };
      this.components.push(newComp);
    },
  },
};
</script>

<style>
</style>