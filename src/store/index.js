import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';
import * as getters from './getters';

Vue.use(Vuex);

const state = {
  infoData: '', // 展示的数据信息
};

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
});
