var dispatcher = require('./../../dispatcher');

function BookStore () {

  var changeListeners = []
  var bookData = []

  function onChange(listener) {
      changeListeners.push(listener)
  }

  function triggerListeners() {
      changeListeners.forEach(function(listener) {
          listener(items)
      });
  }

  function getAllBooks (payload) {
    console.log('get all books store')
    bookData = payload
    triggerListeners()
  }

  dispatcher.register(function(event) {
      var split = event.type.split(':');
      console.log('event = ' + event)
      if (split[0] === 'book-list') {
          switch (split[1]) {
              case "getall":
                  addGroceryItem(event.payload);
                  break;
          }
      }
  })

}



module.exports = new BookStore();
