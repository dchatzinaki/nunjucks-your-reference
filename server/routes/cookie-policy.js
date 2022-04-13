module.exports = [{
  method: 'GET',
  path: '/cookie-policy',
  handler: (request, h) => {
    return h.view('cookiePolicy', {
      title: 'Cookies - GOV.UK',
      message: 'cookie policy'
    })
  }
}];
