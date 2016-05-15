/**
 * configuration the server express application and load rest api
 *
 * @param <App.express> app
 * @return <function>
 */
module.exports = function(app) {
    var mongoose = require('mongoose');
    mongoose.connect('mongodb://feico:feico123@ds025239.mlab.com:25239/feico', function(error) {
        if(error) {
            throw error;
        }
    });
	
	var models = require('./models');
	var services = require('./services');
	app.set('models', models);
	app.set('services', services);	

    //load api URI's
    var path = require('path');
    var fs = require('fs');
    var util = require('util');
    var routePath = 'resources';   
	var routesPath = path.join(__dirname, routePath);
    var files = fs.readdirSync(routesPath);
	var apiRoute = util.format('/api');
    for (var i = files.length - 1; i >= 0; i--) {
        var fileName = files[i];
		var moduleName = util.format('./%s/%s', routePath, fileName); 	
        var api = require(moduleName)(app);
        app.use(apiRoute, api);
    }
};
