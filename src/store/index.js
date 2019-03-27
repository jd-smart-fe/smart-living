import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';
import * as getters from './getters';

Vue.use(Vuex);

const state = {
  libData: null, // 最左边-组件库
  mobileData: null, // 中间的模拟手机数据
  paramData: null, // 最右边-参数数据
};

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
});
