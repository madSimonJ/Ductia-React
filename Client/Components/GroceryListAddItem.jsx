var React = require('react');
var action = require('./../actions/groceryItemActionCreator');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      input: ""
    }
  },
  handleInputName : function(e) {
    this.setState({
      input: e.target.value
    });
  },
  addItem: function(e) {
    e.preventDefault();
    console.log("adding item.  " + this.state.input);
    action.add({
      name: this.state.input
    });
    this.setState({
      input: ''
    })
  },
  render: function() {
    return (
      <div className='grocery-addItem'>
        <form onSubmit={this.addItem}>
          <input value={this.state.input} onChange={this.handleInputName}/>
          <button>Add</button>
        </form>
      </div>
    )
  }
})
