<template>
  <v-menu
    v-model="menu"
    :close-on-content-click="false"
    :nudge-width="200"
    offset-y
  >
    <template v-slot:activator="{ on }">
      <v-btn large icon v-on="on">
        <v-icon size="30">mdi-palette</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-container>
        Dark Mode: <v-switch v-model="$vuetify.theme.isDark"></v-switch>
      </v-container>
    </v-card>
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
