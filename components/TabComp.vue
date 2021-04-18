<template>
  <div>
    <v-tabs
      v-model="tab"
      color="primary"
      slider-color="dark-purple accent-4"
      icons-and-text
      grow
    >
      <v-tab v-for="component in components" :key="component.id">
        {{ component.title }}
        <v-icon v-if="component.icon">{{ component.icon }}</v-icon>
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item v-for="component in components" :key="component.id">
        <v-card flat>
          <v-card-text>
            <nuxt-content :document="component" />
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import marked from "marked";
export default {
  props: {
    components: { type: Array, required: true },
  },
  data() {
    return {
      tab: null,
    };
  },
};
</script>

<style></style>
