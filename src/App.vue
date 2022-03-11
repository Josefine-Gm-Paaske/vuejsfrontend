<template>
  <vue-js-front-end />
  <BookPhotoSession />
  <CameraReviews />
  <UploadMemories />
  <ContactDetails />
</template>

<script>
import VueJsFrontEnd from './components/VueJsFrontEnd.vue';
import BookPhotoSession from './components/BookPhotoSession.vue';
import CameraReviews from './components/CameraReviews.vue';
import UploadMemories from './components/UploadMemories';
import ContactDetails from './components/ContactDetails.vue';

export default {
  name: 'App',
  components: {
    VueJsFrontEnd,
    BookPhotoSession,
    CameraReviews,
    UploadMemories,
    ContactDetails,
  },
};
</script>
