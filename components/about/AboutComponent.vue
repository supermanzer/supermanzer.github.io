<template>
  <component :is="myComponent" :components="components"></component>
</template>

<script>
import TabComp from "@/components/layout/TabComponent";
import ExpansionComp from "@/components/layout/ExpansionComponent";
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
        EP: "ExpansionComp",
      };
      return components[this.element];
    },
  },
};
</script>