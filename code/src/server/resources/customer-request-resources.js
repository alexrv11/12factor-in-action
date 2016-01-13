module.exports = function (app) {
	var express = require('express');
    var router = express.Router();
	var api = '/customer-requests';
	var services = app.get('services');
	var customerRequestService = services.getService('customer-requests')(app);

	router.get(api, function(req, res, next) {
		var options = req.query;
		customerRequestService.getCustomerRequests(options, function (err, result) {
  			if (err) {
				res.send(error);
			} else {
				res.send(result);
			}
		});	
	});

	router.post(api, function (req, res) {
        var customerRequest = req.body;
        customerRequestService.create(customerRequest, function (error, result) {
            if (error) {
                res.send(error);
            } else {
                res.send(result);
            }
        });
    });

	return router;
};
