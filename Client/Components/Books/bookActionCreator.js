require('es6-promise').polyfill()
require('isomorphic-fetch')
var q = require('q')

function buildPayload (payload) {
  return {
    type: 'books/getall',
    payload: payload
  }
}

module.exports = {
  getAll: function (dispatch) {
    var deferred = q.defer()
    fetch(`http://${window.location.host}/api/books`)
      .then(function (response) {
        if (response.status >= 400) {
          throw new Error('Bad response from server')
        }
        return response.json()
      })
    .then(function (books) {
      let payload = buildPayload(books)
      deferred.resolve(payload)
      dispatch(payload)
    })

    return deferred.promise
  }
}
