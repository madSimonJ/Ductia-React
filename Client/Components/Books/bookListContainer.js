var connect = require('react-redux').connect
var bookActionCreator = require('./bookActionCreator')
var bookList = require('./bookList')

function mapStateToProps (state) {
  return {
    BookList: state.Books.BookList
  }
}

function mapDispatchToProps (dispatch) {
   return {
     getAll: () => bookActionCreator.getAll(dispatch)
   }
}

const bookListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(bookList)

module.exports = bookListContainer
