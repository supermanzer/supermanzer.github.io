<template>
  <v-alert
    type="info"
    :value="true"
    colored-border
    border="left"
    elevation="2"
    dismissible
  >
    <span><slot name="info-box">default</slot></span>
  </v-alert>
</template>

<script>
export default {}
</script>
