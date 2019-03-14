<template lang="html">
  <div class="scroller-r">
    <div class="scrollerConfig">
      <ul class="scrollerTab">
        <li>参数设置</li>
      </ul>
      <div class="sscrollerCon">
        <div class="config-contain">
          数据配置
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Right',
};
</script>

<style lang="scss" scoped>
.scroller-r{
  .scrollerTab{
    border-bottom: #eaebee 1px solid;
    li {
      display: table-cell;
      text-align: center;
      padding: 10px 0;
      position: relative;
      cursor: pointer;
      &.active::after {
        content: "";
        position: absolute;
        display: block;
        bottom: -1px;
        height: 2px;
        width: 100%;
        background: $blue;
      }
    }
  }
}
</style>
