<template>
  <v-row>
    <v-col lg="4" sm="12">
      <slot name="header"></slot>
    </v-col>
    <v-col lg="8" sm="12">
      <slot name="component"></slot>
    </v-col>
  </v-row>
</template>