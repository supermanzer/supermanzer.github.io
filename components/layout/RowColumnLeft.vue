<template>
  <v-row>
    <v-col cols="8" sm="12">
      <slot name="component"></slot>
    </v-col>
    <v-col cols="4" sm="12">
      <slot name="header"></slot>
    </v-col>
  </v-row>
</template>
