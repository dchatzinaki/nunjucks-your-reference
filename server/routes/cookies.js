module.exports = [{
  method: 'POST',
  path: '/cookies',
  handler: (request, h) => {
    const cookies = request.payload.cookies;
    const hide = request.payload.hide;
    if (cookies === 'accept') {
      return h.view('home', { cookies: 'accepted' })
    }
    if (cookies === 'reject') {
      return h.view('home', { cookies: "rejected" })
    }
    if (hide) {
      return h.view('home', { hidden: true })
    }
  }
}]
