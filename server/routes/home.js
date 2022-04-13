const axios = require("axios");
const getErrorMessage = require("../helpers/lookupErrorText");

module.exports = [{
  method: 'GET',
  path: '/',
  handler:  (request, h) => {
    let axiosConfig = {
      headers: {
        'Content-Type': 'application/json',
        'documentnumber': 'GBR-2022-CC-43F84CE64'
      }
    };
    
     return axios.get('http://localhost:5500/v1/userReference', axiosConfig)
      .then((res) => {
        console.log("RESPONSE FROM GET: ", res.data);
        return h.view('home', {
          inputValue: res.data,
          title: 'Add your reference for this export',
          errorMessage: null
        })
      })
      .catch((err) => {
        console.log("AXIOS ERROR: ", err);
      })    
  }
}, {
  method: 'POST',
  path: '/userRef',
  handler: (request, h) => {
    let axiosConfig = {
      headers: {
        'Content-Type': 'application/json',
        'documentnumber': 'GBR-2022-CC-43F84CE64'
      }
    };
    return axios.post('http://localhost:5500/v1/userReference', request.payload, axiosConfig)
      .then((res) => {
        console.log("RESPONSE FROM POST: ", res.status);
        return h.view('home', {
          title: 'Add your reference for this export',
          inputValue: res.data,
          errorMessage: null
        })
      })
      .catch((err) => {
        console.log("AXIOS ERROR: ", err.response.data);
        return h.view('home', {
          title: 'Add your reference for this export',
          inputValue: request.payload.userReference,
          errorMessage: { text: getErrorMessage(err.response.data.userReference) },
        })
      })
  }
}]
