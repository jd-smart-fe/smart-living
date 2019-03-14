<template>
  <div class="contentMain">
    <div class="contentLeft">
      <div class="scroller">
        <div class="scrollerInfo">
          <ul class="scrollerTab">
            <li
              v-for="(item, index) in tabs"
              :class="{active:index == num}"
              @click="tab(index)"
              :key="index"
            >{{item}}</li>
          </ul>
          <div v-show="num==0" class="scrollerCon">
            <div class="scrollerAssembly">
              信息
            </div>
          </div>
          <div class="scrollerCon" v-show="num===1">
            <div class="scrollerAssembly">
              功能
            </div>
          </div>
        </div>
      </div>
      <div class="mobile">
        <div class="mobileBox">
          <!--头部-->
          <div class="mobile-top">
            <div class="return-btn icon-pull-left"></div>
            <div class="title">设备详情</div>
            <div class="menu-btn icon-ellipsis"></div>
          </div>
          <!--信息组件-->
          <div class="assemblyInfo themeColor">
            信息组件区域
          </div>
          <!--功能组件-->
          功能组件
        </div>
      </div>
    </div>
    <div class="contentRight">
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
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Content',
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

   // 参数设置
  .contentRight{
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
  }
}
</style>
