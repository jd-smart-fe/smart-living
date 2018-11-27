import 'whatwg-fetch';

const CONFIG = {
  API_PREFIX: `${window.location.protocol}//${window.location.host}`,
};

if (process.env.NODE_ENV === 'development') {
  console.log(window.location.host);
  CONFIG.API_PREFIX = `${window.location.protocol}//${window.location.host}/src/mock`;
  // CONFIG.API_PREFIX = '//appnowy.jd.com';
  CONFIG.REQUEST_CONFIGS = {
    method: 'GET',
    credentials: 'same-origin',
  };
} else {
  CONFIG.REQUEST_CONFIGS = {
    method: 'POST',
    credentials: 'same-origin',
    // headers: {
    //   'Content-Type': 'application/x-www-form-urlencoded',
    // },
  };
}

// 请求配置项根据环境的不同 使用不同的配置 为了保证本地能run起来;
const myRequestConfigs = (data) => {
  if (process.env.NODE_ENV === 'development') {
    return CONFIG.REQUEST_CONFIGS;
  }
  return data ? Object.assign({}, CONFIG.REQUEST_CONFIGS, { body: data }) : CONFIG.REQUEST_CONFIGS;
};

/* POST入参转换FormData形式 */
const objToFormData = (params) => {
  const form = new FormData();
  for (const attr in params) {
    if (Object.prototype.hasOwnProperty.call(params, attr)) {
      // 在某参数不为undefined 或 null 时才添加
      if (params[attr] === 0 || !!params[attr]) {
        form.append(attr, params[attr]);
      } else {
        // 在某参数为undefined 或 null 时添加空字符串
        // form.append(attr, '');
      }
    }
  }
  return form;
};

/* json对象转换成query形式 */
const objToQuery = (params) => {
  const result = [];
  for (const key in params) {
    if (Object.prototype.hasOwnProperty.call(params, key)) {
      let val = params[key];
      if (Array.isArray(val)) {
        val = val.join(',');
      }
      if ((params[key] !== 0 && !params[key]) || (typeof params[key] === 'string' && params[key].trim() === '')) {
        val = '';
      } else {
        result.push(`${key}=${val}`);
      }
    }
  }
  return result.join('&');
};

/* fetch增加timeout */
// 拦截原始的fetch方法
const oldFetchfn = fetch;
// 定义新的fetch方法，封装原有的fetch方法
window.fetch = (api, opts) => {
  const fetchPromise = oldFetchfn(api, opts);

  const options = Object.assign({}, { timeout: 30000 }, opts);
  const timeoutPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('timeout'));
    }, options.timeout);
  });

  return Promise.race([fetchPromise, timeoutPromise]);
};

/* 设备激活记录 - 激活列表 */
export const fetchVipList = (params) => {
  // apiParams = `channel, channelKey, productName, appKey, deviceId, jdPin, startTime, endTime, pageNo, pageSize`;
  console.log('fetch viplist params---', params);
  const form = objToFormData(params);

  const api = `${CONFIG.API_PREFIX}/api/taihe/vipList.json`;
  return fetch(api, myRequestConfigs(form)).then((response) => { response.json() });
};

/* 设备激活记录 - 数据导出 */
export const fetchVipExport = (params) => {
  // apiParams = `channel, channelKey, productName, appKey, deviceId, jdPin, startTime, endTime`;

  const form = objToFormData(params);
  console.log(`params of fetch vip export date : ${form}`);

  const api = `${CONFIG.API_PREFIX}/api/taihe/export.json`;
  return fetch(api, myRequestConfigs(form))
    .then((response) => {
      console.log(response.status);
      if (response.status === 200 || response.ok) {
        return response.blob();
      } else {
        throw new Error();
      }
    });
};

/* 读取初始化数据 */
export const getOriginalData = (params) => {
  console.log('fetch access getOriginalData params---', params);
  const form = objToFormData(params);

  const api = `${CONFIG.API_PREFIX}/originalData.json`;
  return fetch(api, myRequestConfigs(form))
    .then((response) => { response.json(); });
};
