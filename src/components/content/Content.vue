<template>
  <div class="contentMain">
    <div class="contentLeft">
      <Scroller />
      <Mobile />
    </div>
    <div class="contentRight">
      <Right />
    </div>
  </div>
</template>

<script>
import Scroller from './base/Scroller.vue';
import Mobile from './base/Mobile.vue';
import Right from './base/Right.vue';

export default {
  name: 'Content',
  components: {
    Scroller,
    Mobile,
    Right,
  },
};
</script>

<style lang="scss" scoped>
.contentMain {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  position: absolute;
  top: 68px;
  left: 0;
  right: 0;
  bottom: 0;
  .contentLeft {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: start;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    overflow: hidden;
    background: -webkit-linear-gradient(
        bottom,
        transparent 9px,
        $gray-white 10px
      ),
      -webkit-linear-gradient(right, transparent 9px, $gray-white 10px);
    background: -o-linear-gradient(bottom, transparent 9px, $gray-white 10px),
      -o-linear-gradient(right, transparent 9px, $gray-white 10px);
    background: linear-gradient(0deg, transparent 9px, $gray-white 10px),
      linear-gradient(270deg, transparent 9px, $gray-white 10px);
    background-size: 10px 10px;
    /* background-position: -3px -3px; */
  }
  .contentRight {
    padding: 10px 16px 16px;
    width: 416px;
    overflow-y: auto;
    border-left: 10px solid $gray-white;
    background: $white-off;
  }
}
</style>
