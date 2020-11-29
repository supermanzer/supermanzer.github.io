<template>
  <v-card>
    <v-navigation-drawer permanent width="450">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Table of Contents
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list nav>
        <v-list-item
          v-for="item in items"
          :key="item.text"
          nuxt
          :to="`#${item.id}`"
        >
          {{ item.text }}
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
import NodeList from "@/components/Nav/NodeList.vue";
export default {
  name: "TableOfContents",
  props: {
    items: { type: Array, required: true },
  },
  components: {
    NodeList,
  },
};
</script>

<style>
</style>