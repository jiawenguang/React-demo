import React from 'react';
import request from './request';
import config from './config';

let  axios = {
  get(url, params, headers) {
  	let options = {};
  	params && (options.params = params);
  	headers && (options.headers = headers);
  	return request.get(config+url, options);
  },
  post(url, params, headers) {
  	let options = {};
  	headers && (options.headers = headers);
  	return request.post(config+url, params, options);
  }
}
React.$http = axios
