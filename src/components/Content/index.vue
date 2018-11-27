<template>
  <div class="contentMain">
    <div class="contentLeft">
      <div class="scroller">
        <div class="scrollerInfo">
          <ul class="scrollerTab">
            <li v-for='(item, index) in tabs' :class='{active:index == num}' @click='tab(index)' :key="index">{{item}}</li>
          </ul>
          <div v-show="num==0" class="scrollerCon">
            <vue-drop
              :elId="info.lhInfo.id"
              :groupName="info.lhInfo.gName"
              :groupPull="info.lhInfo.gPull"
              :groupPut="info.lhInfo.gPut"
              :onMove="info.lhInfo.onMove"
              :onEnd="info.lhInfo.onEnd"
            >
              <ul class="scrollerAssembly" id="lhInfo">
                <li>
                  <span>--</span>
                  <p>当前温度</p>
                </li>
              </ul>
            </vue-drop>
          </div>
          <div class="scrollerCon" v-show="num===1">
            <vue-drop
              :elId="info.lfun.id"
              :groupName="info.lfun.gName"
              :groupPull="info.lfun.gPull"
              :groupPut="info.lfun.gPut"
              :onMove="info.lfun.onMove"
              :onEnd="info.lfun.onEnd"
            >
              <div class="scrollerCon-left" id="lfun">
                <!--设备组件-->
                <template v-if="srcData.data.power && srcData.data.power.is_show">
                  <div class="deviceStatus" data-type="power">
                    <div class="title">设备已关闭</div>
                    <button class="icon-power"></button>
                  </div>
                </template>
                <!--当前温度组件-->
                <template v-if="srcData.data.counter && srcData.data.counter.is_show">
                  <div class="temperatureSetting" data-type="counter">
                    <div class="title">当前温度</div>
                    <div class="number">22</div>
                    <div class="only-btn">
                      <button class="icon-plus"></button>
                      <button class="icon-minus"></button>
                    </div>
                  </div>
                </template>
                <!--模式设置组件-->
                <template v-if="srcData.data.modes && srcData.data.modes.is_show">
                  <div class="patternSetting" data-type="modes">
                    <div class="title">模式设置</div>
                    <ul class="patternList">
                      <li>
                        <div class="patternText">
                          <span class="icon-mode-automatic"></span>
                          自动
                        </div>
                      </li>
                      <li>
                        <div class="patternText">
                          <span class="icon-mode-freeze"></span>
                          制冷
                        </div>
                      </li>
                      <li>
                        <div class="patternText">
                          <span class="icon-mode-holiday"></span>
                          制热
                        </div>
                      </li>
                      <li>
                        <div class="patternText">
                          <span class="icon-mode-dry"></span>
                          除湿
                        </div>
                      </li>
                      <li>
                        <div class="patternText">
                          <span class="icon-range-large"></span>
                          送风
                        </div>
                      </li>
                      <li>
                        <div class="patternText">
                          <span class="icon-mode-smart"></span>
                          智能
                        </div>
                      </li>
                      <li>
                        <div class="patternText">
                          <span class="icon-mode-cool"></span>
                          通风
                        </div>
                      </li>
                    </ul>
                  </div>
                </template>
                <!--风速调节组件-->
                <template v-if="srcData.data.windRang && srcData.data.windRang.is_show">
                  <div class="patternSetting" data-type="windRang">
                    <div class="title">风速调节</div>
                    <div class="windSpeed">
                      <div class="slider-button"></div>
                      <ul class="windSpeed-list">
                        <li>自动</li>
                        <li>微风</li>
                        <li>低风</li>
                        <li>中风</li>
                        <li>高风</li>
                        <li>静音</li>
                        <li>自然</li>
                      </ul>
                    </div>
                  </div>
                </template>
                <!--屏显组件-->
                <template v-if="srcData.data.screenDisplay && srcData.data.screenDisplay.is_show">
                  <div class="panelAssembly" data-type="screenDisplay">
                    <div class="title">屏显</div>
                    <div class="switch-off">
                      <span class="switch-button"></span>
                    </div>
                  </div>
                </template>
                <!--静音组件-->
                <template v-if="srcData.data.mute && srcData.data.mute.is_show">
                  <div class="panelAssembly" data-type="mute">
                    <div class="title">静音</div>
                    <div class="switch-off">
                      <span class="switch-button"></span>
                    </div>
                  </div>
                </template>
                <!--睡眠组件-->
                <template v-if="srcData.data.sleep && srcData.data.sleep.is_show">
                  <div class="panelAssembly" data-type="sleep">
                    <div class="title">睡眠</div>
                    <div class="switch-off">
                      <span class="switch-button"></span>
                    </div>
                  </div>
                </template>
              </div>
            </vue-drop>
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
            <div class="temperatureBox">
              <!--start-->
              <vue-drop
                :elId="info.rtInfo.id"
                :groupPull="info.rtInfo.gPull"
                :groupPut="info.rtInfo.gPut"
                :groupName="info.rtInfo.gName"
                :bgColor="info.rtInfo.bgColor ? info.rtInfo.bgColor : ''"
                :filter="info.rtInfo.filter"
                :onFilter="info.rtInfo.onFilter"
                :onChoose="info.rtInfo.onChoose"
              >
                <div
                  class="temperatureAssembly"
                  id="rtInfo"
                >
                  <!-- <div v-show="submitData && submitData.header && submitData.header.des_curtemp">
                    <span>--</span>
                    <p>{{submitData && submitData.header && submitData.header.des_curtemp ? submitData.header.des_curtemp : null}}</p>
                  </div> -->
                </div>
              </vue-drop>
              <!--end-->
            </div>
            <vue-drop
              :elId="info.rbInfo.id"
              :groupName="info.rbInfo.gName"
              :groupPut="info.rbInfo.gPut"
              :groupPull="info.rbInfo.gPull"
              :bgColor="info.rbInfo.bgColor ? info.rbInfo.bgColor : ''"
              :filter="info.rbInfo.filter"
              :onFilter="info.rbInfo.onFilter"
              :onChoose="info.rbInfo.onChoose"
              :onAdd="info.rbInfo.onAdd"
            >
              <ul class="patternAssembly" id="rbInfo">
                <!-- <li v-show="submitData && submitData.header && submitData.header.des_curtemp">
                  <span>--</span>
                  <p>{{submitData && submitData.header && submitData.header.des_curtemp ? submitData.header.des_curtemp : null}}</p>
                </li> -->
              </ul>
            </vue-drop>
          </div>
          <!--功能组件-->
          <vue-drop
            :elId="info.rfun.id"
            :groupName="info.rfun.gName"
            :bgColor="info.rfun.bgColor ? info.rfun.bgColor : ''"
            :filter="info.rfun.filter"
            :onFilter="info.rfun.onFilter"
          >
            <div class="functionAssembly mh100" id="rfun">
                <!--设备组件-->
                <template v-if="submitData && submitData.data.power && submitData.data.power.is_show">
                  <div class="deviceStatus item" data-type="power">
                    <div class="title">设备已关闭</div>
                    <button class="icon-power"></button>
                    <i class="js-remove">✖</i>
                  </div>
                </template>
                <!--当前温度组件-->
                <template v-if="submitData && submitData.data.counter && submitData.data.counter.is_show">
                  <div class="temperatureSetting item" data-type="counter">
                    <div class="title">当前温度</div>
                    <div class="number">22</div>
                    <div class="only-btn">
                      <button class="icon-plus"></button>
                      <button class="icon-minus"></button>
                    </div>
                    <i class="js-remove">✖</i>
                  </div>
                </template>
                <!--模式设置组件-->
                <template v-if="submitData && submitData.data.modes && submitData.data.modes.is_show">
                  <div class="patternSetting item" data-type="modes">
                    <div class="title">模式设置</div>
                    <ul class="patternList">
                      <li>
                        <div class="patternText">
                          <span class="icon-mode-automatic"></span>
                          自动
                        </div>
                      </li>
                      <li>
                        <div class="patternText">
                          <span class="icon-mode-freeze"></span>
                          制冷
                        </div>
                      </li>
                      <li>
                        <div class="patternText">
                          <span class="icon-mode-holiday"></span>
                          制热
                        </div>
                      </li>
                      <li>
                        <div class="patternText">
                          <span class="icon-mode-dry"></span>
                          除湿
                        </div>
                      </li>
                      <li>
                        <div class="patternText">
                          <span class="icon-range-large"></span>
                          送风
                        </div>
                      </li>
                      <li>
                        <div class="patternText">
                          <span class="icon-mode-smart"></span>
                          智能
                        </div>
                      </li>
                      <li>
                        <div class="patternText">
                          <span class="icon-mode-cool"></span>
                          通风
                        </div>
                      </li>
                    </ul>
                    <i class="js-remove">✖</i>
                  </div>
                </template>
                <!--风速调节组件-->
                <template v-if="submitData && submitData.data.windRang && submitData.data.windRang.is_show">
                  <div class="patternSetting item" data-type="windRang">
                    <div class="title">风速调节</div>
                    <div class="windSpeed">
                      <div class="slider-button"></div>
                      <ul class="windSpeed-list">
                        <li>自动</li>
                        <li>微风</li>
                        <li>低风</li>
                        <li>中风</li>
                        <li>高风</li>
                        <li>静音</li>
                        <li>自然</li>
                      </ul>
                    </div>
                    <i class="js-remove">✖</i>
                  </div>
                </template>
                <!--屏显组件-->
                <template v-if="submitData && submitData.data.screenDisplay && submitData.data.screenDisplay.is_show">
                  <div class="panelAssembly item" data-type="screenDisplay">
                    <div class="title">屏显</div>
                    <div class="switch-off">
                      <span class="switch-button"></span>
                    </div>
                    <i class="js-remove">✖</i>
                  </div>
                </template>
                <!--静音组件-->
                <template v-if="submitData && submitData.data.mute && submitData.data.mute.is_show">
                  <div class="panelAssembly item" data-type="mute">
                    <div class="title">静音</div>
                    <div class="switch-off">
                      <span class="switch-button"></span>
                    </div>
                    <i class="js-remove">✖</i>
                  </div>
                </template>
                <!--睡眠组件-->
                <template v-if="submitData && submitData.data.sleep && submitData.data.sleep.is_show">
                  <div class="panelAssembly item" data-type="sleep">
                    <div class="title">睡眠</div>
                    <div class="switch-off">
                      <span class="switch-button"></span>
                    </div>
                    <i class="js-remove">✖</i>
                  </div>
                </template>
            </div>
          </vue-drop>
        </div>
      </div>
    </div>
    <div class="contentRight">
     参数设置
    </div>
  </div>
</template>

<script>
/* eslint-disable */
window.serveData = {
  productId: '1',
  data: {
    header: {
      type: 'Header',
      is_show: true,
      des_curtemp: '当前温度',
      des_pattern: '当前模式',
      des_speed: '当前风速',
    },
    power: {
      type: 'Power',
      is_show: true,
      status: {
        //?????? TODO:
        '0': '设备已关闭',
        '1': '设备已开启',
      },
    },
    counter: {
      type: 'Counter',
      is_show: true,
      title: '温度设置',
    },
    modes: {
      type: 'Modes',
      is_show: true,
      title: '模式设置',
      modeData: [
        {
          id: 0,
          text: '自动0',
          icon: 'icon-mode-automatic',
        },
        {
          id: 1,
          text: '制冷1',
          icon: 'icon-mode-freeze',
        },
        {
          id: 2,
          text: '制热2',
          icon: 'icon-mode-holiday',
        },
        {
          id: 3,
          text: '除湿',
          icon: 'icon-mode-dry',
        },
        {
          id: 4,
          text: '送风',
          icon: 'icon-range-large',
        },
        {
          id: 5,
          text: '智能',
          icon: 'icon-mode-smart',
        },
        {
          id: 6,
          text: '通风',
          icon: 'icon-mode-cool',
        },
      ],
    },
    windRang: {
      type: 'WindRang',
      is_show: true,
      title: '风速调节123',
      windRangValues: [
        {
          value: 0,
          text: '自动',
        },
        {
          value: 1,
          text: '微风',
        },
        {
          value: 2,
          text: '低风',
        },
        {
          value: 3,
          text: '中风',
        },
        {
          value: 4,
          text: '高风',
        },
        {
          value: 5,
          text: '静音',
        },
        {
          value: 6,
          text: '自然',
        },
      ],
    },
    screenDisplay: {
      type: 'ScreenDisplay',
      is_show: true,
      title: '屏显123',
    },
    mute: {
      type: 'Mute',
      is_show: true,
      title: '静音123',
    },
    sleep: {
      type: 'Sleep',
      is_show: true,
      title: '睡眠123',
    },
  },
};

export default {
  name: 'v-content',
  data() {
    return {
      msg: 'Welcome',
      tabs: ['信息组件', '功能组件'],
      // 左边的数据(原始数据)
      srcData: null,
      // 右边的数据（提交数据）
      submitData: null,
      num: 0,
      info: {
        // 头部信息-左侧
        lhInfo: {
          id: 'lhInfo',
          gName: 'header',
          gPull: true,
          gPut: false,
          bgColor: 'drag-blue',
          onMove: (evt, originalEvent, gName) => {
            this.onMoveChangeColor(gName);
          },
          onEnd: (evt, groupName) => {
            this.onEndChangeColor();
          },
        },
        // 头部信息-右侧上
        rtInfo: {
          id: 'rtInfo',
          gName: 'header',
          gPull: false,
          gPut: to => to.el.children.length < 1,
          bgColor: '',
          filter: '.js-remove',
          onFilter: evt => {
            evt.item.parentNode.removeChild(evt.item);
          },
        },
        // 头部信息-右侧下面
        rbInfo: {
          id: 'rbInfo',
          gName: 'header',
          gPut: to => to.el.children.length < 3,
          gPull: false,
          bgColor: '',
          filter: '.js-remove',
          onFilter: evt => {
            evt.item.parentNode.removeChild(evt.item);
          },
        },
        // 左边功能
        lfun: {
          id: 'lfun',
          gName: 'fun',
          gPull: true,
          gPut: false,
          bgColor: 'drag-blue',
          onMove: (evt, originalEvent, gName) => {
            this.onMoveChangeColor(gName);
          },
          onEnd: (evt, groupName) => {
            const key = evt.item.getAttribute('data-type')
            this.onEndChangeColor();
            this.transDataByKey(key, 1);
          },
        },
        rfun: {
          id: 'rfun',
          gName: 'fun',
          bgColor: '',
          filter: '.js-remove',
          onFilter: (evt) => {
            const key = evt.item.getAttribute('data-type');
            document.querySelector('#lfun').appendChild(evt.item);
            // console.log(document.querySelector('#lfun'));
            this.transDataByKey(key, 2);
          },
        },
      },
    };
  },
  created() {
    const serveData = window.serveData;
    this.srcData = Object.assign({}, serveData);
    // this.srcData = this.transData(serveData);
  },
  methods: {
    tab(index) {
      this.num = index;
    },
    // 解析数据
    transData(info) {
      let original = {};
      original.productId = info.productId;
      const data = info.data;
      if (data) {
        //TODO:  格式以后要改，不具有扩展性，现在头部还不能拖拽
        if (data.header) {
          original.header = Object.assign({}, data.header);
        }
        original.body = [];
        Object.keys(data).forEach((key, index) => {
          if (key !== 'header') {
            original.body.push(Object.assign({}, data[key]));
          }
        });
      }
      return original;
    },
    // 移动的时候，改变底色
    onMoveChangeColor(gName) {
      Object.keys(this.$data.info).forEach(key => {
        if (gName === this.$data.info[key].gName) {
          this.$data.info[key].bgColor = 'drag-blue';
        }
      });
    },
    // 拖拽结束的时候还原底色
    onEndChangeColor() {
      Object.keys(this.$data.info).forEach(key => {
        this.$data.info[key].bgColor = 'drag-default';
      });
    },
    // 移动结束的时候删除数据
    deleDataByTxt(txt, oldObj, newObj) {
      switch(txt) {
        case '当前温度':
          delete oldObj.header.des_curtemp;
          newObj.header.des_curtemp = '当前温度';
          break;
        case '当前模式':
          delete oldObj.header.des_pattern;
          newObj.header.des_pattern = '当前模式';
          break;
        case '当前风速':
          delete oldObj.header.des_speed;
          newObj.header.des_speed = '当前风速';
          break;
        default:
          break;
      }
    },
    // 通过index变换源数据和要提交数据
    transDataByKey(curKey, type) {
      if (type === 1) {
        const src = this.srcData.data;
        let sub = this.submitData && this.submitData.data ? this.submitData.data : {};
        Object.keys(src).forEach((key) => {
          if (curKey === key) {
            const item = {};
            item[key] = src[key];
            console.log(sub);
            sub = Object.assign({}, sub, item);
            delete src[key];
          }
        });
        this.submitData = Object.assign({}, this.submitData, {data: sub });
      } else if (type === 2) {
        const src = this.submitData.data;
        // let sub = {};
        Object.keys(src).forEach((key) => {
          if (curKey === key) {
            const item = {};
            item[key] = src[key];
            // console.log(src[key]);
            // sub = Object.assign({}, sub, item);
            // this.$set(this.srcData.data, key, src[key]);

            this.srcData.data = Object.assign({}, this.srcData.data, item);
            this.srcData = Object.assign({}, this.srcData);
            delete src[key];
          }
        });
        // this.$set(this.srcData, 'data', sub);
        // this.srcData = Object.assign({}, this.srcData, {data: sub });
      } else {
        return;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.drag-blue {
  background-color: #4b8de5;
  opacity: 0.5;
}
.drag-default {
  background-color: transparent;
  opacity: 1;
}
.pos-relative {
  position: relative;
  background: rgba(0, 0, 0, 0.1);
}
.mh100 {
  min-height: 100px;
}

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
            content: '';
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
          li {
            width: 110px;
            height: 60px;
            margin: 10px 5px 0;
            border: $gray-white 1px solid;
            background: $white;
            font-size: $fontSize12;
            padding: 10px 0;
            box-sizing: border-box;
            float: left;
            cursor: pointer;
            span {
              display: block;
              margin-bottom: 5px;
            }
            &:hover {
              border: $blue 1px solid;
            }
          }
        }
        .scrollerCon-left {
          width: 350px;
          margin-top: 10px;
          @include transform(scale(0.69));
          transform-origin: left 0 0px;
          .temperatureSetting,
          .patternSetting,
          .panelAssembly,
          .deviceStatus {
            width: 100%;
            border: $white 1px solid;
            &:hover {
              border: $blue 1px solid;
              box-sizing: border-box;
            }
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
    .functionAssembly{
      .item{
        position: relative;
        .js-remove{
          -webkit-transition: opacity .2s;
          transition: opacity .2s;
          opacity: 0;
          display: block;
          cursor: pointer;
          color: #c00;
          top: 5px;
          right: 5px;
          position: absolute;
          font-style: normal;
          line-height: .12px;
        }
        &:hover{
          background-color: rgba(2, 186, 124, 0.21);
          .js-remove{
            opacity: 1;
          }
        }
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
    .temperatureBox {
      width: 160px;
      height: 120px;
      margin: auto;
      border-radius: 12px 12px 0 0;
      line-height: normal;
      background-image: -webkit-gradient(
        linear,
        left top,
        left bottom,
        from(rgba(255, 255, 255, 0.5)),
        to(rgba(255, 255, 255, 0))
      );
      background-image: -webkit-linear-gradient(
        top,
        rgba(255, 255, 255, 0.2),
        rgba(255, 255, 255, 0)
      );
      background-image: -o-linear-gradient(
        top,
        rgba(255, 255, 255, 0.2),
        rgba(255, 255, 255, 0)
      );
      background-image: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0.2),
        rgba(255, 255, 255, 0)
      );
    }
  }
  .temperatureAssembly {
    padding: 20px 0;
    span {
      font-size: $fontSize32;
      display: inline-block;
      margin-bottom: 5px;
    }
  }
  .patternAssembly {
    height: 60px;
    margin-top: 10px;
    display: table;
    width: 100%;
    text-align: center;
    li {
      display: table-cell;
      span {
        font-size: $fontSize24;
      }
    }
  }
  .deviceStatus {
    width: 100%;
    position: relative;
    height: 60px;
    box-sizing: border-box;
    padding: 0 15px;
    line-height: 60px;
    background: $white;
    font-size: $fontSize16;
    button {
      position: absolute;
      top: 50%;
      right: 15px;
      width: 36px;
      height: 36px;
      background: $blue;
      border-radius: 50px;
      color: $white;
      font-size: $fontSize16;
      @include transform(translateY(-50%));
    }
  }
  .temperatureSetting {
    width: calc(100% - 24px);
    margin: 12px auto;
    position: relative;
    height: 70px;
    box-sizing: border-box;
    padding: 15px;
    background: $white;
    .title {
      font-size: $fontSize16;
    }
    .number {
      color: $blue;
      font-size: $fontSize18;
      width: 60px;
      text-align: center;
    }
    .only-btn {
      position: absolute;
      top: 50%;
      right: 15px;
      width: 100px;
      border: $blue 1px solid;
      border-radius: 50px;
      @include transform(translateY(-50%));
      display: table;
      overflow: hidden;
      button {
        color: $blue;
        font-size: $fontSize18;
        width: 50%;
        height: 40px;
        display: table-cell;
        cursor: pointer;
        &:last-child {
          border-left: $blue 1px solid;
        }
      }
    }
  }
  .patternSetting {
    width: calc(100% - 24px);
    margin: 12px auto;
    position: relative;
    box-sizing: border-box;
    background: $white;
    overflow: hidden;
    .title {
      font-size: $fontSize16;
      padding: 15px;
      border-bottom: 1px solid $gray-e;
    }
    .patternList {
      overflow: hidden;
      width: calc(100% + 1px);
      // -webkit-flex-wrap: wrap;
      // -ms-flex-wrap: wrap;
      // flex-wrap: wrap;
      // display: -webkit-box;
      // display: -webkit-flex;
      // display: -ms-flexbox;
      // display:flex;
      li {
        width: calc(25% - 1px);
        height: 70px;
        float: left;
        margin-bottom: -1px;
        border-bottom: 1px solid $gray-e;
        border-right: 1px solid $gray-e;
        display: table;
        .patternText {
          vertical-align: middle;
          display: table-cell;
          text-align: center;
          font-size: $fontSize12;
          span {
            display: block;
            margin-bottom: 5px;
            font-size: $fontSize16;
          }
        }
        // &.active{
        //   background: $blue;
        //   color: $white;
        //   border-right: 1px solid $blue;
        // }
      }
    }
    .windSpeed {
      margin: 12px auto;
      position: relative;
      box-sizing: border-box;
      background: $white;
      .slider-button {
        display: inline-block;
        position: absolute;
        top: 8px;
        left: 15px;
        width: 24px;
        height: 24px;
        border: 2px solid $blue;
        border-radius: 100%;
        background-image: -webkit-linear-gradient(bottom, #f9f9f9, #fff 80%);
        background-image: -webkit-gradient(
          linear,
          left bottom,
          left top,
          from(#f9f9f9),
          color-stop(80%, #fff)
        );
        background-image: -o-linear-gradient(bottom, #f9f9f9, #fff 80%);
        background-image: linear-gradient(0deg, #f9f9f9, #fff 80%);
        -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        z-index: 5;
        background-clip: padding-box;
      }
      .windSpeed-list {
        width: 100%;
        display: table;
        position: relative;
        padding: 40px 0 10px;
        &::after {
          content: '';
          width: 86%;
          height: 2px;
          background: $gray-c;
          position: absolute;
          left: 7%;
          top: 20px;
        }
        li {
          display: table-cell;
          text-align: center;
          position: relative;
          &::after {
            content: '';
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: $gray-c;
            position: absolute;
            left: 22px;
            top: -23px;
          }
        }
      }
    }
  }
  .panelAssembly {
    width: calc(100% - 24px);
    margin: 12px auto;
    position: relative;
    box-sizing: border-box;
    padding: 15px;
    background: $white;
    min-height: 50px;
    .title {
      font-size: $fontSize16;
      line-height: 20px;
      padding-right: 80px;
    }
    .switch-off {
      position: absolute;
      right: 12px;
      top: 12px;
      width: 58px;
      height: 28px;
      border-radius: 50px;
      background-color: $gray-d8;
      .switch-button {
        top: 0;
        bottom: 0;
        left: 3px;
        margin: auto 0;
        width: 22px;
        height: 22px;
        position: absolute;
        border-radius: 100%;
        z-index: 2;
        background-color: $white;
      }
    }
  }
}
</style>
