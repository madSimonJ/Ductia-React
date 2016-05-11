var React = require('react');
var reactRouter = require('react-router');
var Router = reactRouter.Router;
var Route = reactRouter.Route;
var Link = reactRouter.Link;


module.exports = React.createClass({
    render: function() {
        return (
            <div className="container">
              <h1>Ductia</h1>
              <p>A website for searching for exam pieces and the ideal books to get them with</p>
            </div>
        )
    }
});
