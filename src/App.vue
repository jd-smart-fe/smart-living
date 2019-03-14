<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  mounted() {
    this.$store.dispatch('setInfoData');
  },
};
</script>

<style lang='scss'>

*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #626262;
  width: 100%;
  height: 100%;
  font-size: 14px;
  font-family: "Source Han Sans","Microsoft YaHei", "微软雅黑", "PingFang SC", Arial;
}
</style>
