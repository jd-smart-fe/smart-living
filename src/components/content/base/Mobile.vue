<template lang="html">
  <div class="mobile">
    <div class="mobileBox">
      <!--头部-->
      <div class="mobile-top">
        <div class="return-btn icon-pull-left"/>
        <div class="title">设备详情</div>
        <div class="menu-btn icon-ellipsis"/>
      </div>
      <!--信息组件-->
      <div class="assemblyInfo themeColor">
        信息组件区域
      </div>
      <!--功能组件-->
      <Power />
      <Mode />
      功能组件
    </div>
  </div>
</template>

<script>
// 为了vue-stone和jdwh 的组件能够正常的显示
(function () {
  const rem = 100;
  document.querySelector('html').style.fontSize = `${rem}px`;
}());

export default {
  name: 'Mobile',
  components: {
  },
};
</script>

<style lang="scss" scoped>
.mobile {
  -ms-flex-negative: 0;
  flex-shrink: 0;
  margin-top: 70px;
  height: calc(100% - 100px);
  overflow-x: hidden;
  overflow-y: auto;
  .mobileBox {
    position: relative;
    width: 375px;
    min-height: calc(100% - 120px);
    padding-bottom: 120px;
    background: $backbg;
    // background-color: hsl(197, 78%, 57%);
    // background-image: linear-gradient(140.194deg, rgba(0, 0, 0, 0.48), rgba(0, 0, 0, 0));
  }
  .mobile-top {
    height: 50px;
    width: 100%;
    position: absolute;
    text-align: center;
    color: $white;
    z-index: 9;
    .title {
      line-height: 50px;
      font-size: $fontSize16;
    }
    .return-btn {
      position: absolute;
      left: 10px;
      top: 50%;
      font-size: $fontSize18;
      @include transform(translateY(-50%));
    }
    .menu-btn {
      position: absolute;
      right: 20px;
      top: 50%;
      font-size: $fontSize18;
      @include transform(translateY(-50%));
    }
  }
  .assemblyInfo {
    position: relative;
    overflow: hidden;
    color: $white;
    text-align: center;
    padding: 60px 0 20px;
    width: 100%;
    height: 180px;
    &.themeColor {
      background-image: -webkit-gradient(
        linear,
        left top,
        left bottom,
        from(#02ba7c),
        to(#34dfa5)
      );
      background-image: -webkit-linear-gradient(top, #02ba7c, #34dfa5);
      background-image: -o-linear-gradient(top, #02ba7c, #34dfa5);
      background-image: linear-gradient(to bottom, #02ba7c, #34dfa5);
    }
  }
}
</style>
