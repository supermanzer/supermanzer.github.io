<template>
  <component :is="component">
    <template v-slot:header>
      <!--  p class="text-h4" v-text="section.heading"></p> -->
      <p v-html="markdown(section.text)"></p>
    </template>
    <template v-slot:component>
      <AboutComponent
        :element="section.component_element"
        :components="section.components"
      />
    </template>
  </component>
</template>

<script>
import marked from 'marked'
import RowColumnBelow from './RC/RowColumnBelow'
import RowColumnLeft from './RC/RowColumnLeft'
import RowColumnRight from './RC/RowColumnRight'
import AboutComponent from './AboutComponent'

export default {
  name: 'AboutSection',
  components: {
    RowColumnBelow,
    RowColumnLeft,
    RowColumnRight,
    AboutComponent,
  },

  props: {
    section: { type: Object, required: true },
  },

  computed: {
    component() {
      const components = {
        ri: 'RowColumnRight',
        le: 'RowColumnLeft',
        be: 'RowColumnBelow',
      }
      return components[this.section.component_position]
    },
  },
  methods: {
    markdown(text) {
      return marked(text)
    },
  },
}
</script>

<style></style>
