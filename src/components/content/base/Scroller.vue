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
          <div
            v-for="item of hData"
            v-show="!item.isShowInStandard"
            :key="item.streamId"
            class="item"
          >
            <div
              class="img-wrap"
            >
              <img
                :src="item.thum"
                alt="图片"
              >
            </div>
            <p class="des">
              {{ item.name }}
            </p>
          </div>
        </div>
      </div>
      <div
        v-show="num===1"
        class="scrollerCon"
      >
        <div class="scrollerAssembly">
          <div
            v-for="(item, key) of bData"
            v-show="!item.isShowInStandard"
            :key="key"
            class="item"
          >
            <div
              class="img-wrap"
            >
              <img
                :src="item.thum"
                alt="图片"
              >
            </div>
            <p class="des">
              {{ item.name }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Scroller',
  data() {
    return {
      tabs: ['信息组件', '功能组件'],
      num: 0,
      hData: [],
      bData: null,
    };
  },
  computed: {
    ...mapGetters({
      'libData': 'libData',
    }),
  },
  watch: {
    libData: {
      handler(val) {
        this.getInfo(val);
      },
      deep: true,
    },
  },
  methods: {
    tab(index) {
      this.num = index;
    },
    getInfo(val) {
      this.hData = [...val.header];
      this.bData = Object.assign({}, val.body);
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
        }
      }
    }
    // 新增的
    .scrollerAssembly{
      display: flex;
      flex-wrap: wrap;
      .item{
        width: 84px;
        margin-right: 20px;
        margin-bottom: 10px;
        .img-wrap{
          margin-bottom: 8px;
          padding: 8px;
          width: 66px;
          height: 60px;
          color: #0c9;
          cursor: pointer;
          background: #fff;
          border: 1px dotted #0c9;
          border-radius: 3px;
          img{
            width: 100%;
          }
        }
      }
    }
  }
</style>
