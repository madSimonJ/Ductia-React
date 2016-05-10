var React = require('react');
var GroceryItem = require('./GroceryItem');
var GroceryListAddItem = require('./GroceryListAddItem');
var groceryItemStore = require('./../stores/GroceryItemStore');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      items: groceryItemStore.getItems()
    }
  },
  render: function() {
    return (
      <div>
        <h1>Grocery Listify</h1>
        <div>
          {this.state.items.map(function(item, index) {
            return(
              <GroceryItem item={item} key={"item"+index}/>
            )
          })
          }
        </div>
        <GroceryListAddItem/>
      </div>
    );
  }
});
