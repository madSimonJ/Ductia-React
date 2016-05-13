var Redux = require('redux')
var reactRouterRedux = require('react-router-redux')

const initialStateForBooks = {
  BookList: []
}

function BooksReducer (state = initialStateForBooks, action) {
  switch (action.type) {
    case 'books/getall':
      let newState = Object.assign({}, state)
      newState.BookList = action.payload
      return newState
    default:
      return state
  }
}

var combinedReducers = Redux.combineReducers({
  Books: BooksReducer,
  routing: reactRouterRedux.routerReducer
})

module.exports = Redux.createStore(
  combinedReducers
  )
