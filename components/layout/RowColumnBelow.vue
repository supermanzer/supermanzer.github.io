<template>
  <div>
    <v-row>
      <v-col cols="12">
        <slot name="header"></slot>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <slot name="component"></slot>
      </v-col>
    </v-row>
  </div>
</template>
