<template>
  <v-menu :close-on-content-click="false" :nudge-width="200" offset-y>
    <template #activator="{ on: menu, attrs }">
      <v-tooltip bottom>
        <template #activator="{ on: tooltip }">
          <v-btn large icon v-bind="attrs" v-on="{ ...tooltip, ...menu }">
            <v-icon size="30">mdi-palette</v-icon>
          </v-btn>
        </template>
        <span> Theme Switcher </span>
      </v-tooltip>
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
  name: 'ThemeSwitcherMenu',
}
</script>
