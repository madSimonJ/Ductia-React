var React = require('react');
var ReactDOM = require('react-dom');
var reactRouter = require('react-router');
var Router = reactRouter.Router;
var Route = reactRouter.Route;
var browserHistory = reactRouter.browserHistory;
var Link = reactRouter.Link;

 var GroceryItemList = require('./Components/GroceryItemList');

const App = React.createClass({
    render() {
        return (
            <div>
                <h1>App</h1>
                <p><Link to="/about">About</Link></p>
                <p><Link to="/users">Users</Link></p>
                <p><Link to="/groceries">Groceries</Link></p>
            </div>
        )
    }
});

 ReactDOM.render((
 <Router history={browserHistory}>
     <Route path="/" component={ App }></Route>
     <Route path="/groceries" component={GroceryItemList}/>
 </Router>
), document.getElementById('app'));
