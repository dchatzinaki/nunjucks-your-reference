module.exports = [{
  method: 'POST',
  path: '/cookies',
  handler: (request, h) => {
    const cookies = request.payload.cookies
    if(cookies === 'accept') {
      return h.view('home', { cookies: 'accepted', hidden: false })
    }
    if(cookies === 'reject') {
      return h.view('home', { cookies: "rejected", hidden: false })
    }
  }
}]
