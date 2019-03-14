/*
 * @Description: api.js用来统一管理我们的接口。
 * @Author: shilili1
 */

import { get } from './http';

// eslint-disable-next-line import/prefer-default-export
export const getInitData = param => get('static/mock/getInitData.json', param);
