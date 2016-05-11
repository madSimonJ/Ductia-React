var _ = require('lodash')

var React = require('react')
var reactRouter = require('react-router')
var Router = reactRouter.Router
var Route = reactRouter.Route
var Link = reactRouter.Link

var BookListItem = require('./bookListItem')
var bookRepository = require('./bookRepository')
var bookActionCreator = require('./bookActionCreator')

module.exports = React.createClass({
    getInitialState: function() {
      return {
        books: []
      }
    },
    componentDidMount: function() {
      console.log('component did mount')
      let thisComponent = this;
      bookRepository.GetAllBooks()
        .then(function (bookData) {
          console.log('setState bookData = ' + JSON.stringify(bookData))
          // bookActionCreator.getAll(bookData)
          thisComponent.setState({
            books: bookData
          }).bind(thisComponent)
        })
    },
    render: function() {
      console.log('render book list')
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
                  {_.map(this.state.books, function(book, index) {
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
