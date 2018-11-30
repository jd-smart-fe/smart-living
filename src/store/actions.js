import * as types from './mutation-types';

// 设置提交数据
export const setSubmitData = ({ commit }, submitData) => {
  commit(types.SUBMIT_DATA, submitData);
};

export const setLoading = ({ commit }, loading) => {
  commit(types.SET_LOADING, loading);
};
