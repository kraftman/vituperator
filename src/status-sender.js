'use strict';
const axios = require('axios');
require('dotenv').config();

const createConfig = (statusURL, payload) => {
  return {
    method: 'POST',
    url: statusURL,
    headers: {
      Authorization: 'token ' + process.env.GITHUB_TOKEN,
    },
    data: payload,
    json: true,
  };
};

const send = async (statusUrl, payload) => {
  const config = createConfig(statusUrl, payload);

  try {
    const result = await axios(config);
    return result;
  } catch (err) {
    //console.log('unable to make request: ', err);
  }
};

module.exports = {
  send,
};
