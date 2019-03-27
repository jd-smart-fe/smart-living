export default {
  setLibData({ commit }, payload) {
    commit('SET_LIB_DATA', payload);
  },
  setMobileData({ commit }, payload) {
    commit('SET_MOBILE_DATA', payload);
  },
  setParamData({ commit }, payload) {
    commit('SET_PARAM_DATA', payload);
  },
};
