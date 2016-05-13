var React = require('react')
var ReactDOM = require('react-dom')
var Provider = require('react-redux').Provider

var Redux = require('redux')
var createStore = Redux.createStore
var combineReducers = Redux.combineReducers
var applyMiddleware = Redux.applyMiddleware

var reactRouter = require('react-router')
var Router = reactRouter.Router
var Route = reactRouter.Route
var browserHistory = reactRouter.browserHistory
var IndexRoute = reactRouter.IndexRoute

var reactRouterRedux = require('react-router-redux')
var syncHistoryWithStore = reactRouterRedux.syncHistoryWithStore
var routerReducer = reactRouterRedux.routerReducer

var store = require('./store')

var AppRoot = require('./Components/AppRoot')
var Index = require('./Components/Index/IndexComponent')
var BookList = require('./Components/Books/BookListContainer')

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={AppRoot}>
        <IndexRoute component={Index} />
        <Route path="/books" component={BookList}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
)
