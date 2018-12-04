<template>
  <div class="living-header">
    <div class="head-title clearfix">
      <a class="btn-back icon-revoke" href>返回</a>
      <h2 class="pmTit">冰箱</h2>
      <div class="head-right">
        <span class="btn-base">
          <i class="icon icon-see"></i> 预览
        </span>
        <span class="btn-base btn-blue">
          <i class="icon icon-audit"></i> 保存
        </span>
        <span :class="['btn-base', {'btn-blue': submitData}, {'btn-disable': !submitData}]" @click="this.publish">
          <i class="icon icon-save"></i>发布
        </span>
        <a :class="['btn-base', {'btn-blue': downloadStatus}, {'btn-disable': !downloadStatus}]" ref="download">
         <i class="icon icon-save"></i>下载
        </a>
      </div>
    </div>
  </div>
</template>

<script>
// import vContent from './content'
import { mapGetters, mapActions } from 'vuex';
import * as rest from '../../axios';

export default {
  // name: 'Header',
  data() {
    return {
      msg: 'Welcome',
      downloadStatus: false,
    };
  },
  computed: {
    ...mapGetters({
      submitData: 'submitData',
    }),
  },
  methods: {
    ...mapActions({
      setLoading: 'setLoading',
    }),
    publish() {
      if (this.submitData) {
        this.$emit('show');
        rest.publish(this.submitData).then((res) => {
          if (res.data.status && res.data.download) {
            this.$refs.download.href = res.data.download;
            const filename = 'air-condictioning.zip';
            this.$refs.download = filename;
            this.$emit('hide');
            this.downloadStatus = true;
          }
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
a {
  text-decoration: none;
}
.btn-disable{
  background: #d8d8d8;
  border-color: #d8d8d8;
  cursor: btn-disable;
  color: #fff;

}
.living-header {
  padding: 0 $spacing * 2;
  background: $white;
  // @include transform(rotate(-180deg));
  .head-title {
    color: $font-tit;
    padding: 16px 0;
    position: relative;
    .btn-back {
      display: inline-block;
      height: 16px;
      line-height: 16px;
      font-size: $fontSize16;
      color: #626262;
      border-right: #626262 solid 1px;
      padding-right: $spacing;
      margin: 5px 8px 0 0;
    }
    .pmTit {
      display: inline-block;
      height: 36px;
      line-height: 36px;
      font-size: $fontSize18;
    }
    .head-right {
      position: absolute;
      right: 0;
      top: 16px;
    }
  }
}
</style>
