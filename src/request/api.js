/*
 * @Description: api.js用来统一管理我们的接口。
 * @Author: shilili1
 */

import { get, post } from './http';

export const getInitData = param => get('static/mock/getInitData.json', param);
