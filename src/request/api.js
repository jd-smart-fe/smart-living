/*
 * @Description: api.js用来统一管理我们的接口。
 * @Author: shilili1
 */

import { get } from './http';

const getLibData = param => get('static/mock/getLibData.json', param);
const getMobileData = param => get('static/mock/getMobileData.json', param);
const getParamData = param => get('static/mock/getParamData.json', param);

export {
  getLibData,
  getMobileData,
  getParamData,
};
