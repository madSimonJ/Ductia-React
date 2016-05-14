var _ = require('lodash')
var React = require('react')

var reactRouter = require('react-router')
var Router = reactRouter.Router
var Route = reactRouter.Route
var Link = reactRouter.Link

var BookListItem = require('./bookListItem')
var bookActionCreator = require('./bookActionCreator')

module.exports = React.createClass({
    componentDidMount: function() {
      this.props.getAll()
    },
    render: function() {
        return (
            <div className="container">
              <table>
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>ISBN</th>
                    <th>Publisher</th>
                    <th>Publication Date</th>
                  </tr>
                </thead>
                <tbody>
                  {_.map(this.props.BookList, function(book, index) {
                    return (
                      <BookListItem book={book} />
                    )
                  })
                  }
                </tbody>
              </table>
            </div>
        )
    }
});
