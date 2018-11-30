import axios from 'axios';
import * as qs from 'qs';

const instance = axios.create();

const publish = (params) => {
  if (params) {
    const submitData = Object.assign({}, params, {
      productId: '1',
      templateName: 'air-condictioning',
    });
    if (params.data && params.data.modes && params.data.modes.modeData) {
      submitData.data.modes.modeData = JSON.stringify(params.data.modes.modeData);
    }
    if (params.data && params.data.windRang && params.data.windRang.windRangValues) {
      submitData.data.windRang.windRangValues = JSON.stringify(params.data.windRang.windRangValues);
    }

    const data = qs.stringify({ H5Data: submitData });

    return instance.post('http://localhost:3001/home/publish', data, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
  }
};

export {
  publish,
};
