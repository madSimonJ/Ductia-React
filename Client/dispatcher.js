var uuid = require('node-uuid');

var listeners = {};

module.exports = {
  register: function(callback) {
    var id = uuid.v4();
    listeners[id] = callback;
    return id;
  },
  dispatch: function(payload) {
    console.info('dispatching...' + payload);
    for(var id in listeners) {
      var listener = listeners[id];
      listener(payload);
    }
  }
}
