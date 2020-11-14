<template>
  <v-form>
    <v-row>
      <v-col cols="12" sm="10" justify-start align-left>
        <h2 class="indigo--text text--darken-3">
          Edit Page Section - {{ id }}
        </h2>
      </v-col>
      <v-col cols="12" sm="2" justify-end align-right>
        <v-tooltip right>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="info"
              icon
              v-on="on"
              v-bind="attrs"
              @click="syncSection"
            >
              <v-icon>mdi-swap-vertical</v-icon>
            </v-btn>
          </template>
          <span> Sync About section to Firestore </span>
        </v-tooltip>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" lg="6">
        <v-select
          :items="items.element"
          v-model="element"
          label="Element"
          item-text="name"
          item-value="value"
        ></v-select>
      </v-col>
      <v-col cols="12" lg="6">
        <v-select
          :items="items.position"
          v-model="position"
          label="Layout Position"
          item-text="name"
          item-value="value"
        ></v-select>
      </v-col>
      <v-col cols="12" lg="5">
        <v-text-field v-model="heading" label="Heading"></v-text-field>
      </v-col>
      <v-col cols="12" lg="5">
        <v-text-field v-model="parallax_image" label="Parallax Image">
        </v-text-field>
      </v-col>
      <v-col cols="2">
        <v-text-field v-model="icon" label="Icon"></v-text-field>
      </v-col>
      <v-col cols="12" lg="10" offset-lg="1">
        <v-textarea
          label="Section Text"
          v-model="text"
          textarea
          auto-grow
          solo
        ></v-textarea>
      </v-col>
    </v-row>
    <v-container grid-list-md>
      <EditComponents
        :components="components"
        @update-components="refreshComponents"
      />
    </v-container>
  </v-form>
</template>

<script>
import EditComponents from "@/components/about/EditComponents";
export default {
  name: "EditSection",
  components: {
    EditComponents,
  },
  props: {
    id: { type: String, required: true },
  },
  computed: {
    element: {
      get() {
        return this.$store.getters["about/getElement"](this.id);
      },
      set(element) {
        const id = this.id;
        this.$store.commit("about/updateElement", { id, element });
      },
    },
    position: {
      get() {
        return this.$store.getters["about/getPosition"](this.id);
      },
      set(position) {
        const id = this.id;
        this.$store.commit("about/updatePosition", { id, position });
      },
    },
    heading: {
      get() {
        return this.$store.getters["about/getHeading"](this.id);
      },
      set(heading) {
        const id = this.id;
        this.$store.commit("about/updateHeading", { id, heading });
      },
    },
    icon: {
      get() {
        return this.$store.getters["about/getIcon"](this.id);
      },
      set(icon) {
        const id = this.id;
        this.$store.commit("about/updateIcon", { id, icon });
      },
    },
    text: {
      get() {
        return this.$store.getters["about/getText"](this.id);
      },
      set(text) {
        const id = this.id;
        this.$store.commit("about/updateText", { id, text });
      },
    },
    parallax_image: {
      get() {
        return this.$store.getters["about/getParallaxImage"](this.id);
      },
      set(parallax_image) {
        const id = this.id;
        this.$store.commit("about/updateParallaxImage", { id, parallax_image });
      },
    },
    components() {
      return JSON.parse(
        JSON.stringify(this.$store.getters["about/getComponents"](this.id))
      );
    },
  },
  data() {
    return {
      items: {
        element: [
          { name: "Tab Component", value: "TA" },
          { name: "Expansion Component", value: "EP" },
          { name: "List Component", value: "LI" },
        ],
        position: [
          { name: "Right", value: "ri" },
          { name: "Left", value: "le" },
          { name: "Below", value: "be" },
        ],
      },
    };
  },
  methods: {
    refreshComponents(components) {
      console.log("refreshing components for section");
      const id = this.id;
      this.$store.commit("about/updateComponents", { id, components });
    },
    syncSection() {
      const id = this.id;
      this.$store.dispatch("about/updateSection", id);
    },
  },
};
</script>

<style>
</style>