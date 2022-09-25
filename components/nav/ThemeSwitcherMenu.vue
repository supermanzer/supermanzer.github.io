<template>
  <v-menu
    v-model="menu"
    :close-on-content-click="false"
    :nudge-width="200"
    offset-y
  >
    <template v-slot:activator="{ on }">
      <v-btn large icon v-on="on">
        <v-icon size="30" color="primary">mdi-palette</v-icon>
      </v-btn>
    </template>
    <v-card> </v-card>
  </v-menu>
</template>

<script>
export default {
  name: "ThemeSwitcherMenu",
  data: () => ({
    menu: false,
  }),
};
</script>
