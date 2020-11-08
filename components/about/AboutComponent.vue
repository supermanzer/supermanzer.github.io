<template>
  <component :is="myComponent" :components="components"></component>
</template>

<script>
import TabComp from "@/components/TabComp";
import ExpansionComp from "@/components/ExpansionComp";
export default {
  components: {
    TabComp,
    ExpansionComp,
  },
  props: {
    element: { type: String, required: true },
    components: { type: Array, required: true },
  },
  computed: {
    myComponent() {
      const components = {
        TA: "TabComp",
        LI: "ListComp",
        EP: "ExpansionComp",
      };
      return components[this.element];
    },
  },
};
</script>

<style></style>
