import { getInitData } from '../request/api';

export default {
  setInfoData({ commit }) {
    getInitData().then((response) => {
      commit('SET_INFO_DATA', response);
    });
  },
};
