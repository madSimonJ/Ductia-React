var React = require('react')
var ReactDOM = require('react-dom')
var reactRouter = require('react-router')
var Router = reactRouter.Router
var Route = reactRouter.Route
var IndexRoute = reactRouter.IndexRoute
var browserHistory = reactRouter.browserHistory
var Link = reactRouter.Link

var GroceryItemList = require('./Components/GroceryItemList')
var AppRoot = require('./Components/AppRoot')
var Index = require('./Components/Index/IndexComponent')
var BookList = require('./Components/Books/bookList')

 ReactDOM.render((
 <Router history={browserHistory}>
     <Route path="/" component={ AppRoot }>
      <IndexRoute component={Index} />
      <Route path="/books" component={BookList}/>
      <Route path="/groceries" component={GroceryItemList}/>
     </Route>
 </Router>
), document.getElementById('app'))
