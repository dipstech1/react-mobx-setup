import superagentpromise from 'superagent-promise'
import _superagent from 'superagent'
import commonStore from './../store/commonStore'

var request = require('superagent-use')(require('superagent'));

const API_ROOT = 'https://reqres.in/';

const encode = encodeURIComponent;

request.use((req) => {
    console.log("tojken ", commonStore.token)
    if(commonStore.token)
      req.header.authorization = `Token ${commonStore.token}`;
    return req;
});


const handleErrors = err => {
    console.log("err ", err.response.body.error)
  if (err && err.response && err.response.status === 401) {
    // authStore.logout();
  }
  return err.response.body;
};

const responseBody = res => res.body

const requests = {
  del: url =>
    request
      .del(`${API_ROOT}${url}`)
      .then(responseBody),
  get: url =>
  request
      .get(`${API_ROOT}${url}`)
      .then(responseBody),
  put: (url, body) =>
    request
      .put(`${API_ROOT}${url}`, body)
      .then(responseBody),
  post: (url, body) =>
    request
      .post(`${API_ROOT}${url}`, body)
      .then(responseBody)
      .catch(handleErrors)
      ,
    
  test:(url,body) => 
        request   
            .post(`${API_ROOT}${url}`, body)

            .then(responseBody)
};

export default requests;