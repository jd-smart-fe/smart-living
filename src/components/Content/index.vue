<template>
  <div class="contentMain">
    <div class="contentLeft">
      <div class="scroller">
        <div class="scrollerInfo">
          <ul class="scrollerTab">
            <li v-for='(item, index) in tabs' :class='{active:index == num}' @click='tab(index)' :key="index">{{item}}</li>
          </ul>
          <div v-show="num==0" class="scrollerCon">
            <ul class="scrollerAssembly">
              <li>
                <span>°c</span>
                <p>当前温度(°c)</p>
              </li>
              <li>
                <span>自动</span>
                <p>当前模式</p>
              </li>
              <li>
                <span>自动</span>
                <p>当前风速(档)</p>
              </li>
            </ul>
          </div>
          <div class="scrollerCon" v-show="num===1">
            <div class="scrollerCon-left">
              <!--设备组件-->
              <div class="deviceStatus">
                <div class="title">设备已关闭</div>
                <button class="icon-power"></button>
              </div>
              <!--当前温度组件-->
              <div class="temperatureSetting">
                <div class="title">当前温度</div>
                <div class="number">22</div>
                <div class="only-btn">
                  <button class="icon-plus"></button>
                  <button class="icon-minus"></button>
                </div>
              </div>
              <!--模式设置组件-->
              <div class="patternSetting">
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
              <!--风速调节组件-->
              <div class="patternSetting">
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
              <!--屏显组件-->
              <div class="panelAssembly">
                <div class="title">屏显</div>
                <div class="switch-off">
                  <span class="switch-button"></span>
                </div>
              </div>
              <!--屏显组件-->
              <div class="panelAssembly">
                <div class="title">静音</div>
                <div class="switch-off">
                  <span class="switch-button"></span>
                </div>
              </div>
              <!--屏显组件-->
              <div class="panelAssembly">
                <div class="title">睡眠</div>
                <div class="switch-off">
                  <span class="switch-button"></span>
                </div>
              </div>
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
            <div class="temperatureBox">
              <!--start-->
              <div class="temperatureAssembly">
                <span>23</span>
                <p>当前温度(°c)</p>
              </div>
              <!--end-->
            </div>
            <ul class="patternAssembly">
              <li>
                <span>自动</span>
                <p>当前模式</p>
              </li>
              <li>
                <span>自动</span>
                <p>当前风速(档)</p>
              </li>
            </ul>
          </div>
          <!--功能组件-->
          <div class="functionAssembly">
            <!--设备组件-->
            <div class="deviceStatus">
              <div class="title">设备已关闭</div>
              <button class="icon-power"></button>
            </div>
            <!--当前温度组件-->
            <div class="temperatureSetting">
              <div class="title">当前温度</div>
              <div class="number">22</div>
              <div class="only-btn">
                <button class="icon-plus"></button>
                <button class="icon-minus"></button>
              </div>
            </div>
            <!--模式设置组件-->
            <div class="patternSetting">
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
            <!--风速调节组件-->
            <div class="patternSetting">
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
            <!--屏显组件-->
            <div class="panelAssembly">
              <div class="title">屏显</div>
              <div class="switch-off">
                <span class="switch-button"></span>
              </div>
            </div>
            <!--屏显组件-->
            <div class="panelAssembly">
              <div class="title">静音</div>
              <div class="switch-off">
                <span class="switch-button"></span>
              </div>
            </div>
            <!--屏显组件-->
            <div class="panelAssembly">
              <div class="title">睡眠</div>
              <div class="switch-off">
                <span class="switch-button"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="contentRight">
     参数设置
    </div>
  </div>
</template>

<script>

export default {
  name: 'v-content',
  data() {
    return {
      msg: 'Welcome',
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
  .contentMain{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    position: absolute;
    top: 68px;
    left: 0;
    right: 0;
    bottom: 0;
    .contentLeft{
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
      background: -webkit-linear-gradient(bottom,transparent 9px,$gray-white 10px),-webkit-linear-gradient(right,transparent 9px,$gray-white 10px);
      background: -o-linear-gradient(bottom,transparent 9px,$gray-white 10px),-o-linear-gradient(right,transparent 9px,$gray-white 10px);
      background: linear-gradient(0deg,transparent 9px,$gray-white 10px),linear-gradient(270deg,transparent 9px,$gray-white 10px);
      background-size: 10px 10px;
      /* background-position: -3px -3px; */
    }
    .contentRight{
      padding: 10px 16px 16px;
      width: 416px;
      overflow-y: auto;
      border-left: 10px solid $gray-white;
      background: $white-off;
    }
    .scroller{
      -ms-flex-negative: 0;
      flex-shrink: 0;
      margin-top: 70px;
      margin-left: 30px;
      max-height: calc(100% - 70px);
      overflow-y: auto;
      @include user-select(none);
      .scrollerInfo{
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: 280px;
        padding: 20px;
        border-radius: 3px;
        background: $white-gray;
        .scrollerTab{
          position: relative;
          display: table;
          white-space: nowrap;
          width: 100%;
          border-bottom: $gray-white 1px solid;
          li{
            display: table-cell;
            text-align: center;
            padding: 10px 0 15px;
            position: relative;
            cursor: pointer;
            &.active::after{
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
        .scrollerCon{
          .scrollerAssembly{
            overflow: hidden;
            text-align: center;
            margin-top: 10px;
            li{
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
              span{
                display: block;
                margin-bottom: 5px;
              }
              &:hover{
                border: $blue 1px solid;
              }
            }
          }
          .scrollerCon-left{
            width: 350px;
            margin-top: 10px;
            @include transform (scale(0.69));
            transform-origin: left 0 0px;
            .temperatureSetting,.patternSetting,.panelAssembly,.deviceStatus{
              width: 100%;
              border: $white 1px solid;
              &:hover{
                border: $blue 1px solid;
                box-sizing: border-box;
              }
            }
          }
        }
      }
    }
    .mobile{
      -ms-flex-negative: 0;
      flex-shrink: 0;
      margin-top: 70px;
      height: calc(100% - 100px);
      overflow-x: hidden;
      overflow-y: auto;
      .mobileBox{
        position: relative;
        width: 375px;
        min-height: calc(100% - 120px);
        padding-bottom: 120px;
        background: $backbg;
        // background-color: hsl(197, 78%, 57%);
        // background-image: linear-gradient(140.194deg, rgba(0, 0, 0, 0.48), rgba(0, 0, 0, 0));
      }
      .mobile-top{
        height: 50px;
        width: 100%;
        position: absolute;
        text-align: center;
        color: $white;
        z-index: 9;
        .title{
          line-height: 50px;
          font-size: $fontSize16;
        }
        .return-btn{
          position: absolute;
          left: 10px;
          top: 50%;
          font-size: $fontSize18;
          @include transform(translateY(-50%));
        }
        .menu-btn{
          position: absolute;
          right: 20px;
          top: 50%;
          font-size: $fontSize18;
          @include transform(translateY(-50%));
        }
      }
    }
    .assemblyInfo{
      position: relative;
      overflow: hidden;
      color: $white;
      text-align: center;
      padding: 60px 0 20px;
      width: 100%;
      height: 180px;
      &.themeColor{
        background-image: -webkit-gradient(linear, left top, left bottom, from(#02ba7c), to(#34dfa5));
        background-image: -webkit-linear-gradient(top, #02ba7c, #34dfa5);
        background-image: -o-linear-gradient(top, #02ba7c, #34dfa5);
        background-image: linear-gradient(to bottom, #02ba7c, #34dfa5);
      }
      .temperatureBox{
        width: 160px;
        height: 120px;
        margin: auto;
        border-radius: 12px 12px 0 0;
        line-height: normal;
        background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.5)), to(rgba(255, 255, 255, 0)));
        background-image: -webkit-linear-gradient(top, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0));
        background-image: -o-linear-gradient(top, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0));
        background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0));
      }
    }
    .temperatureAssembly{
      padding: 20px 0;
      span{
        font-size: $fontSize32;
        display: inline-block;
        margin-bottom: 5px;
      }
    }
    .patternAssembly{
      height: 60px;
      margin-top: 10px;
      display: table;
      width: 100%;
      text-align: center;
      li{
        display: table-cell;
        span{
          font-size: $fontSize24;
        }
      }
    }
    .deviceStatus{
      width: 100%;
      position: relative;
      height: 60px;
      box-sizing: border-box;
      padding: 0 15px;
      line-height: 60px;
      background: $white;
      font-size: $fontSize16;
      button{
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
    .temperatureSetting{
      width: calc(100% - 24px);
      margin: 12px auto;
      position: relative;
      height: 70px;
      box-sizing: border-box;
      padding: 15px;
      background: $white;
      .title{
        font-size: $fontSize16;
      }
      .number{
        color: $blue;
        font-size: $fontSize18;
        width: 60px;
        text-align: center;
      }
      .only-btn{
        position: absolute;
        top: 50%;
        right: 15px;
        width: 100px;
        border: $blue 1px solid;
        border-radius: 50px;
        @include transform(translateY(-50%));
        display: table;
        overflow: hidden;
        button{
          color: $blue;
          font-size: $fontSize18;
          width: 50%;
          height: 40px;
          display:table-cell;
          cursor: pointer;
          &:last-child{
            border-left: $blue 1px solid;
          }
        }
      }
    }
    .patternSetting{
      width: calc(100% - 24px);
      margin: 12px auto;
      position: relative;
      box-sizing: border-box;
      background: $white;
      overflow: hidden;
      .title{
        font-size: $fontSize16;
        padding: 15px;
        border-bottom: 1px solid $gray-e;
      }
      .patternList{
        overflow: hidden;
        width: calc(100% + 1px);
        // -webkit-flex-wrap: wrap;
        // -ms-flex-wrap: wrap;
        // flex-wrap: wrap;
        // display: -webkit-box;
        // display: -webkit-flex;
        // display: -ms-flexbox;
        // display:flex;
        li{
          width: calc(25% - 1px);
          height: 70px;
          float: left;
          margin-bottom: -1px;
          border-bottom: 1px solid $gray-e;
          border-right: 1px solid $gray-e;
          display: table;
          .patternText{
            vertical-align:middle;
            display:table-cell;
            text-align:center;
            font-size: $fontSize12;
            span{
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
      .windSpeed{
        margin: 12px auto;
        position: relative;
        box-sizing: border-box;
        background: $white;
        .slider-button{
          display: inline-block;
          position: absolute;
          top: 8px;
          left: 15px;
          width: 24px;
          height: 24px;
          border: 2px solid $blue;
          border-radius: 100%;
          background-image: -webkit-linear-gradient(bottom,#f9f9f9,#fff 80%);
          background-image: -webkit-gradient(linear,left bottom, left top,from(#f9f9f9),color-stop(80%, #fff));
          background-image: -o-linear-gradient(bottom,#f9f9f9,#fff 80%);
          background-image: linear-gradient(0deg,#f9f9f9,#fff 80%);
          -webkit-box-shadow: 0 1px 2px rgba(0,0,0,.1);
          box-shadow: 0 1px 2px rgba(0,0,0,.1);
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          z-index: 5;
          background-clip: padding-box;
        }
        .windSpeed-list{
          width: 100%;
          display: table;
          position: relative;
          padding: 40px 0 10px;
          &::after{
            content: '';
            width: 86%;
            height: 2px;
            background: $gray-c;
            position: absolute;
            left: 7%;
            top: 20px;
          }
          li{
            display: table-cell;
            text-align: center;
            position: relative;
            &::after{
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
    .panelAssembly{
      width: calc(100% - 24px);
      margin: 12px auto;
      position: relative;
      box-sizing: border-box;
      padding: 15px;
      background: $white;
      min-height: 50px;
      .title{
        font-size: $fontSize16;
        line-height: 20px;
        padding-right: 80px;
      }
      .switch-off{
        position: absolute;
        right: 12px;
        top: 12px;
        width: 58px;
        height: 28px;
        border-radius: 50px;
        background-color: $gray-d8;
        .switch-button{
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
