import * as types from './mutation-types';

export default {
  // 设置开关
  [types.SUBMIT_DATA]: (state, payload) => {
    state.submitData = Object.assign({}, state.submitData, payload);
  },
  [types.SET_LOADING]: (state, payload) => {
    state.loading = payload;
  },
};
