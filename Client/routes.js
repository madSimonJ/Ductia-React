var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

var routes = (
  <Route name="app" path="/" handler={require('./main')}>
    <DefaultRoute handler={require('./Components/GroceryItemList')} />
  </Route>
);

module.exports = routes;
