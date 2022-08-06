<template>
  <v-app dark>
    <v-row justify="center" align="center" class="mt-12">
      <v-card dark min-width="400px" min-height="400px">
        <v-card-title class="error">
          <h1>{{error.statusCode}} Error</h1>
        </v-card-title>
        <v-card-text>
          <pre class="code-format pa-6 mx-auto">
          {{error.message}}
          </pre>
        </v-card-text>  
      </v-card>  
    </v-row>
    <NuxtLink to="/"> Home page </NuxtLink>
  </v-app>
</template>

<script>
export default {
  name: 'EmptyLayout',
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null,
    },
  }, 
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
.code-format {
  background-color: black;
  color: rgb(8, 230, 8);
}
</style>
