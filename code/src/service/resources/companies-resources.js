module.exports = function (app) {
	var express = require('express');
    var router = express.Router();
	var api = '/companies';
	var services = app.get('services');
	var companyService = services.getService('companies')(app);

	router.get(api, function(req, res) {
		var options = req.query;
		companyService.getCompanies(options, function (error, result) {
  			if (error) {
				res.send(error);
			} else {
				res.send(result);
			}
		});	
	});

	router.post(api, function (req, res) {
        var order = req.body;
		companyService.create(order, function (error, result) {
            if (error) {
                res.send(error);
            } else {
                res.send(result);
				console.log('server companies create request:', result);
				var socket = app.get('socket');

				// WebSocket server
				socket.emit("companies:create", result);
            }
        });
    });

	return router;
};
