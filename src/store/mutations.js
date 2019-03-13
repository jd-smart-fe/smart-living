export default {
  SET_INFO_DATA(state, data) {
    state.infoData = Object.assign({}, state.infoData, data);
  },
};
