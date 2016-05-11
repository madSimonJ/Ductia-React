var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <tr>
        <td>{this.props.book.title}</td>
        <td>{this.props.book.isbn13}</td>
        <td>{this.props.book.publisher}</td>
        <td>{this.props.book.publicationDate}</td>
      </tr>
    )
  }
});
