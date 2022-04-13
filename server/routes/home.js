const joi = require('@hapi/joi')

module.exports = [{
  method: 'GET',
  path: '/',
  handler: (request, h) => {
    return h.view('home', {
      title: 'Add your reference for this export',
      message: 'World'
    })
  }
},  {
  method: 'POST',
  path: '/reference',
  handler: (request, h) => {
    console.log('this is the payload', request.payload);
    return h.view('home', {
      title: 'Add your reference for this export',
      message: 'World'
    })
  }
}]
