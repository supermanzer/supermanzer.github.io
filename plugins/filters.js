// plugins/filters.js
// A set of useful template filters made globally accessible in all components.

import Vue from 'vue'
import marked from 'marked'

Vue.filter('markdown', (value) => {
  return marked(value)
})
