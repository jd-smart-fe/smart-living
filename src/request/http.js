/*
 * @Description: http.js文件用来封装我们的axios
 * @Author: shilili1
 */
import axios from 'axios'; // 引入axios
import QS from 'qs'; // 引入qs模块，用来序列化post类型的数据

// 环境的切换
if (process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = `${window.location.protocol}//${window.location.host}`;
}

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params,
    }).then((res) => {
      resolve(res.data);
    }).catch((err) => {
      reject(err.data);
    });
  });
}
/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, QS.stringify(params))
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.data);
      });
  });
}
