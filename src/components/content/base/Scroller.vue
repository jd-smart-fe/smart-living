<template lang="html">
  <div class="scroller">
    <div class="scrollerInfo">
      <ul class="scrollerTab">
        <li
          v-for="(item, index) in tabs"
          :class="{active:index == num}"
          :key="index"
          @click="tab(index)"
        >{{ item }}</li>
      </ul>
      <div
        v-show="num==0"
        class="scrollerCon"
      >
        <div class="scrollerAssembly">
          信息
        </div>
      </div>
      <div
        v-show="num===1"
        class="scrollerCon"
      >
        <div class="scrollerAssembly">
          功能
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Scroller',
  data() {
    return {
      tabs: ['信息组件', '功能组件'],
      num: 0,
    };
  },
  methods: {
    tab(index) {
      this.num = index;
    },
  },
};
</script>

<style lang="scss" scoped>
.scroller {
    -ms-flex-negative: 0;
    flex-shrink: 0;
    margin-top: 70px;
    margin-left: 30px;
    max-height: calc(100% - 70px);
    overflow-y: auto;
    @include user-select(none);
    .scrollerInfo {
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 280px;
      padding: 20px;
      border-radius: 3px;
      background: $white-gray;
      .scrollerTab {
        position: relative;
        display: table;
        white-space: nowrap;
        width: 100%;
        border-bottom: $gray-white 1px solid;
        li {
          display: table-cell;
          text-align: center;
          padding: 10px 0 15px;
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
      .scrollerCon {
        .scrollerAssembly {
          overflow: hidden;
          text-align: center;
          margin-top: 10px;
          border: $gray-white 1px solid;
          background: $white;
          padding: 5px;
          &:hover {
            border: $blue 1px solid;
          }
        }
      }
    }
  }
</style>
