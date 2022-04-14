module.exports = [
{
  method: 'POST',
  path: '/',
  handler: (request, h) => {
    const cookies = request.payload.cookies;
    const hide = request.payload.hide;

    if (cookies === 'accept') {
      h.state('session', 'cookieSaved');
      return h.view('home', {
        cookies: 'accepted', title: 'Add your reference for this export'
      })
    } else if (cookies === 'reject') {
      return h.view('home', { cookies: "rejected", title: 'Add your reference for this export' })
    } else if (hide) {
      return h.view('home', { hidden: true, title: 'Add your reference for this export' })
    }
  }
}]
