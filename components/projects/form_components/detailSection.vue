<template>
  <v-col cols="12" md="10" offset-md="1">
    <v-card class="px-6">
      <v-text-field
        v-model="section.heading"
        label="Section Heading"
      ></v-text-field>
      <v-textarea
        v-model="section.text"
        auto-grow
        rounded
        label="Section Text"
        hint="Use markdown syntax for inline formatting"
      ></v-textarea>
      <v-card-actions>
        <v-tooltip right>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              color="grey"
              v-bind="attrs"
              v-on="on"
              @click="removeSection(index)"
            >
              <v-icon>mdi-delete-forever-outline</v-icon>
            </v-btn>
          </template>
          <span>Delete Section</span>
        </v-tooltip>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: "detailSection",
  props: {
    section: { type: Object, required: true },
    index: { type: Number, required: true },
  },
  methods: {
    removeSection: function (index) {
      this.project.description.splice(index, 1);
    },
  },
};
</script>

<style>
</style>