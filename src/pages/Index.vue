<template>
  <div>
    <v-header></v-header>
    <v-content></v-content>
  </div>
</template>

<script>
import VHeader from '../components/Header.vue';
import VContent from '../components/Content.vue';

export default {
  name: 'Home',
  components: {
    VHeader,
    VContent,
  },
};
</script>
