var uuid = require('node-uuid')

var listeners = {}

module.exports = {
  register: function (callback) {
    console.log('registering')
    var id = uuid.v4()
    listeners[id] = callback
    return id
  },
  dispatch: function (payload) {
    console.info('dispatching...' + JSON.stringify(payload))
    console.log('listeners =' + listeners)
    for (var id in listeners) {
      var listener = listeners[id]
      listener(payload)
    }
  }
}
