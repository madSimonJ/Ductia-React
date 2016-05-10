var path = require('path');
var apiRoutes = require('../routes/apiRoutes');
var fs = require('fs');
//var staticContentRoutes = require('../routes/staticContentRoutes');
//var routeResponses = require('../routes/routeResponses');

module.exports = function(app) {

    var serverRootDirectory = path.join(__dirname, '../../');

    apiRoutes.ConfigureApiRoutes(app);
    // staticContentRoutes.configureStaticContentRoutes(app);
    // app.get('/', routeResponses.redirectToIndex);
    // app.get('*', routeResponses.redirectToIndex);

    var bowerComponentsDirectory = path.join(serverRootDirectory, 'bower_components');
    var reactBuildDirectory = path.join(serverRootDirectory, '.tmp');
    var clientRootDirectory = path.join(serverRootDirectory, 'client');

    app.get('/styles.css', function(req, res) {
        var cssFilename = path.join(reactBuildDirectory, 'styles.css');
        res.sendFile(cssFilename);
    });

    app.get('/js/app.js', function(req, res) {
        var appJsFilename = path.join(reactBuildDirectory, 'app.js');
        res.sendFile(appJsFilename);
    });

    app.get('/js/*', function(req, res) {
        if (!!jsFileStaticContentRoutes[req.params[0]]) {
            var filePath = jsFileStaticContentRoutes[req.params[0]];
            res.sendFile(filePath);
        } else {
            res.sendStatus(404);
        }
    });

    // app.get('.ico', function(req, res) {
    //     var filePath = path.join(clientRootDirectory, req.params[0]);
    //     res.sendFile(filePath);
    // });

    app.get('*', function(req, res) {
        console.log('params = ' + req.params[0]);
        if (req.params[0] === '/') {
            var defaultPage = path.join(clientRootDirectory, 'index.htm');
            console.log('root = ' + defaultPage);
            res.sendFile(defaultPage);
        } else {
            fs.stat(path.join(reactBuildDirectory, req.params[0]), function(err, stat) {
                if (!!err) {
                    res.sendFile(path.join(clientRootDirectory, 'index.htm'));
                } else {
                    res.sendFile(path.join(reactBuildDirectory, req.params[0]));
                }
            });
        }
    });


}
