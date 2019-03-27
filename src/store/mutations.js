export default {
  SET_LIB_DATA(state, data) {
    state.libData = Object.assign({}, state.libData, data);
  },
  SET_MOBILE_DATA(state, data) {
    state.mobileData = Object.assign({}, state.mobileData, data);
  },
  SET_PARAM_DATA(state, data) {
    state.paramData = Object.assign({}, state.paramData, data);
  },
};
