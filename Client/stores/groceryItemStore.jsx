var dispatcher = require('./../dispatcher');

function GroceryItemStore() {
    var items = [
        {
            name: 'ice cream'
        }, {
            name: 'waffles'
        }, {
            name: 'sweets',
            purchased: true
        }, {
            name: 'Snacks'
        }
    ];
    var changeListeners = [];

    function getItems() {
        return items;
    }

    function onChange(listener) {
        changeListeners.push(listener);
    }

    function triggerListeners() {
        changeListeners.forEach(function(listener) {
            listener(items);
        });
    }

    function addGroceryItem(newItem) {
        items.push(newItem);
        triggerListeners();
    }

    function deleteGroceryItem(itemToDelete) {
      var index = items.findIndex(function(_item) {
        return _item.name === itemToDelete.name;
      });

      items.splice(index, 1);
      triggerListeners();
    }

    function buyGroceryItem(itemToBuy) {
      var index = items.findIndex(function(_item) {
        return _item.name === itemToBuy.name;
      });
      items[index].purchased = true;
      triggerListeners();
    }

    function unbuyGroceryItem(itemToUnbuy) {
      var index = items.findIndex(function(_item) {
        return _item.name === itemToUnbuy.name;
      });

      items[index].purchased = false;
      triggerListeners();
    }

    dispatcher.register(function(event) {
        var split = event.type.split(':');
        if (split[0] === 'grocery-item') {
            switch (split[1]) {
                case "add":
                    addGroceryItem(event.payload);
                    break;
                case "delete":
                  deleteGroceryItem(event.payload);
                  break;
                case "buy":
                  buyGroceryItem(event.payload);
                  break;
                case "unbuy":
                  unbuyGroceryItem(event.payload);
                  break;
            }
        }
    });

    return {getItems: getItems, onChange: onChange}
}

module.exports = new GroceryItemStore();
