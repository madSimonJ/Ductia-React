var path = require('path')
var apiRoutes = require('../routes/apiRoutes')
var fs = require('fs')

module.exports = function (app) {
  var serverRootDirectory = path.join(__dirname, '../../')

  apiRoutes.ConfigureApiRoutes(app)

  // var bowerComponentsDirectory = path.join(serverRootDirectory, 'bower_components')
  var reactBuildDirectory = path.join(serverRootDirectory, '.tmp')
  var clientRootDirectory = path.join(serverRootDirectory, 'client')

  // app.get('/js/app.js', function (req, res) {
  //   var appJsFilename = path.join(reactBuildDirectory, 'js', 'app.js')
  //   res.sendFile(appJsFilename)
  // })

  app.get('*', function (req, res) {
    console.log('params = ' + req.params[0])
    if (req.params[0] === '/') {
      var defaultPage = path.join(clientRootDirectory, 'index.htm')
      console.log('root = ' + defaultPage)
      res.sendFile(defaultPage)
    } else {
      fs.stat(path.join(reactBuildDirectory, req.params[0]), function (err, stat) {
        if (!!err) {
          console.log('file not found.  sending default')
          res.sendFile(path.join(clientRootDirectory, 'index.htm'))
        } else {
          res.sendFile(path.join(reactBuildDirectory, req.params[0]))
        }
      })
    }
  })
}
