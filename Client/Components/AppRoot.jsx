var React = require('react');
var reactRouter = require('react-router');
var Router = reactRouter.Router;
var Route = reactRouter.Route;
var Link = reactRouter.Link;

var Navigation = require('./includes/Navigation')
var Footer = require('./includes/Footer')

module.exports = React.createClass({
    render: function() {
        return (
            <div>
                <Navigation />
                <div>{this.props.children}</div>
                <Footer/>
            </div>
        )
    }
});
