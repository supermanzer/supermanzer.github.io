<template>
  <div>
    <v-parallax :src="section.page.parallax_image" dark>
      <v-overlay absolute>
        <v-row align="center" justify="center">
          <v-col class="text-center" cols="12">
            <h1 class="font-weight-thin mb-4 display-1">
              {{ section.page.title }}
            </h1>
          </v-col>
        </v-row>
      </v-overlay>
    </v-parallax>
    <component :is="component">
      <template v-slot:header>
        <nuxt-content :document="section.page" />
      </template>
      <template v-slot:component>
        <AboutComponent
          :element="section.page.component_element"
          :components="section.sections"
        />
      </template>
    </component>
  </div>
</template>

<script>
import RowColumnBelow from "@/components/RC/RowColumnBelow";
import RowColumnLeft from "@/components/RC/RowColumnLeft";
import RowColumnRight from "@/components/RC/RowColumnRight";
import AboutComponent from "@/components/about/AboutComponent";

export default {
  name: "AboutSection",
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
        ri: "RowColumnRight",
        le: "RowColumnLeft",
        be: "RowColumnBelow",
      };
      return components[this.section.page.component_position];
    },
  },
};
</script>

<style></style>
