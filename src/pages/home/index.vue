<template>
  <div>
    <v-header @show="showLoding" @hide="hideLoading"></v-header>
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
  methods: {
    showLoding() {
      this.$loading.show();
    },
    hideLoading() {
      this.$loading.hide();
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
