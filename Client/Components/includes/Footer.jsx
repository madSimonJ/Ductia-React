var React = require('react');

module.exports = React.createClass({
    render: function() {
      return (
        <footer>
          &copy;{new Date().getFullYear()} Simon J. Painter and Gianluca Cerritelli
        </footer>
      )
    }
})
