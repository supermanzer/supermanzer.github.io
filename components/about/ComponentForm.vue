<template>
  <v-card flat>
    <v-card-text>
      <v-form>
        <v-container>
          <v-row>
            <v-col cols="12" lg="6">
              <v-text-field
                v-model="component.heading"
                label="Heading"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                v-model="component.icon"
                label="Icon"
              ></v-text-field>
            </v-col>
            <v-col cols="12" lg="10" offset-lg="1">
              <v-textarea auto-grow v-model="component.text" label="Text">
              </v-textarea>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "ComponentForm",
  props: {
    comp: { type: Object, required: false, default: false },
  },
  data() {
    return {
      component: {},
    };
  },
  methods: {
    setComponent() {
      if (this.comp !== false) {
        this.component = JSON.parse(JSON.stringify(this.comp));
      } else {
        this.component = {
          heading: "",
          icon: "",
          text: "",
        };
      }
    },
  },
  created() {
    this.setComponent();
  },
};
</script>

<style>
</style>