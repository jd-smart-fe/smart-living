import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import * as actions from './actions';
import getters from './getters';

Vue.use(Vuex);

const state = {
  submitData: null,
  loading: false,
};
console.log(getters, '2323');

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
});
