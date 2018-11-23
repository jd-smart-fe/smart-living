<template>
  <div>
    <v-header></v-header>
    <v-content></v-content>
  </div>
</template>

<script>
import VHeader from '../../components/Header/index.vue';
import VContent from '../../components/Content/index.vue';

export default {
  // name: 'Home',
  components: {
    VHeader,
    VContent,
  },
  data() {
    return {
      msg: 'Welcome',
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
