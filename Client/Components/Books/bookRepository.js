var $ = require('jquery')
var q = require('q')

function getAllbooks () {
  var deferred = q.defer()
  console.log('get all books rep')
  $.ajax({
    url: 'http://' + window.location.host + '/api/books',
    settings: {
      cache: true,
      dataType: 'json',
      method: 'GET'
    }
  })
    .done(function (data) {
      console.log('done called : ' + data)
      deferred.resolve(data)
    })
  return deferred.promise
}

module.exports = {
  GetAllBooks: getAllbooks
}
