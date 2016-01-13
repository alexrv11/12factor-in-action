/**
 * The object returned manages all collections defined in the module
 * using the getCollection method to return an collection
 *
 * @return <Object>
 */
module.exports = {
    getService: function (serviceName) {
		var util = require('util');
        var path = util.format('./%s-service', serviceName);
        var service = require(path);
        return service;
    }
};
