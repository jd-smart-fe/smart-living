<template>
  <div>
    <v-header/>
    <v-content/>
  </div>
</template>

<script>
import VHeader from '../components/Header.vue';
import VContent from '../components/content/Content.vue';

export default {
  name: 'Home',
  components: {
    VHeader,
    VContent,
  },
};
</script>
