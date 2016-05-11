var React = require('react');
var reactRouter = require('react-router');
var Router = reactRouter.Router;
var Route = reactRouter.Route;
var Link = reactRouter.Link;

module.exports = React.createClass({
    render: function() {
        return (
            <nav role="navigation" className="navbar navbar-default navbar-inverse navbar-fixed-top">
              <div id="navbar-header">
                <div className="navbar-brand">Ductia</div>
              </div>
              <div className="collapse navbar-collapse">
                <ul className="nav navbar-nav">
                  <li className="active">
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/exams">Exams</Link>
                  </li>
                  <li>
                    <Link to="/books">Books</Link>
                  </li>
                  <li>
                    <Link to="/instruments">Instruments</Link>
                  </li>
                  <li>
                    <Link to="/pieces">Pieces</Link>
                  </li>
                </ul>
                <form role="search" className="navbar-form navbar-left">
                  <div className="form-group">
                    <input type="text" placeholder="search" className="form-control"/>
                  </div>
                </form>
              </div>
            </nav>
        )
    }
});
