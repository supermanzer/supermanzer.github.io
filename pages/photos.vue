<template>
  <v-container fluid>
    <PageHeader :heading="heading" :subheading="subheading"></PageHeader>
    <PhotosPhotoGrid :photos="photos" />
  </v-container>
</template>

<script>
import PageHeader from '~/components/global/PageHeader.vue'
export default {
  name: 'PhotoHome',
  components: { PageHeader },
  data: () => ({
    heading: 'Photos by Manzer',
    subheading: 'I like taking pictures of stuff',
    photos: [
      { filename: 'DSC_0160~2.JPG' },
      { filename: 'DSC_0176.JPG' },
      { filename: 'DSC_0233.JPG' },
      { filename: 'DSC_0258-EFFECTS.jpg' },
      { filename: 'DSC_0292~2.JPG' },
      { filename: 'DSC_0307.JPG' },
      { filename: 'DSC_0308.JPG' },
      { filename: 'DSC_0324.JPG' },
      { filename: 'DSC_0327~2.JPG' },
      { filename: 'PXL_20230222_185340371.jpg' },
      { filename: 'PXL_20230302_204643702~2.jpg' },
      { filename: 'PXL_20230302_224852059.jpg' },
      { filename: 'PXL_20230308_023434656.NIGHT.jpg' },
      { filename: 'PXL_20230308_023621600.MOTION-01.COVER.jpg' },
    ],
  }),
}
</script>
