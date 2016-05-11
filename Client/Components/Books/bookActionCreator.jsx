var dispatcher = require('./../../dispatcher');

module.exports = {
  getAll: function(books) {
    dispatcher.dispatch({
      payload: books,
      type: 'book-list:getall'
    });
  }
}
