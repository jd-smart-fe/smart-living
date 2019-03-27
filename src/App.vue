<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import * as api from './request/api';

export default {
  name: 'App',
  computed: {
    ...mapGetters({
      'mobileData': 'mobileData',
    }),
    // 获取 mobileData 中的 header 中的数据
    mHStreams() {
      const mHStreamsArr = [];
      this.mobileData.data.forEach((item) => {
        if (item.componentId === '0') { // 是头部
          item.streams.forEach((stream) => {
            mHStreamsArr.push(stream.id);
          });
        }
      });
      return mHStreamsArr;
    },
    // 获取mobileData 中除了header 以外的其他数据
    mBComId() {
      const mBComIdArr = [];
      this.mobileData.data.forEach((item) => {
        if (item.componentId !== '0') { // 除了头部
          mBComIdArr.push(item.componentId);
        }
      });
      return mBComIdArr;
    },
  },
  mounted() {
    this.getMobileData();
    this.getLibData();
    this.getParamData();
  },
  methods: {
    // 获取中间的数据
    getMobileData() {
      api.getMobileData().then((res) => {
        this.$store.dispatch('setMobileData', res);
      });
    },
    // 从远端拉取左侧的数据
    getLibData() {
      api.getLibData().then((res) => {
        this.filterLibData(res);
      });
    },
    //  从云端拉取最右侧的数据
    getParamData() {
      api.getParamData().then((res) => {
        this.$store.dispatch('setParamData', res);
      });
    },
    // 根据从远端拉取的中间数据信息和左侧拉取的数据过滤左侧的数据 componentId
    filterLibData(olbLibData) {
      const header = this.filterArr([...olbLibData.header], this.mHStreams, 'streamId');
      const body = this.filterArr([...olbLibData.body], this.mBComId, 'componentId');

      const libData = Object.assign({}, olbLibData, { header, body });
      this.$store.dispatch('setLibData', libData);
    },
    // 一个数组去掉在另外一个数组中所含值的对应字段
    filterArr(srcArr, filArr, name) {
      srcArr.map((item, index) => {
        filArr.forEach((key) => {
          if (item[name] === key) {
            srcArr.splice(index, 1);
          }
        });
      });
      return srcArr;
    },
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
