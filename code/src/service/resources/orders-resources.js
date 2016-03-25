module.exports = function (app) {
	var express = require('express');
    var router = express.Router();
	var api = '/orders';
	var services = app.get('services');
	var orderService = services.getService('orders')(app);

	router.get(api, function(req, res) {
		var options = req.query;
		orderService.getOrders(options, function (error, result) {
  			if (error) {
				res.send(error);
			} else {
				res.send(result);
			}
		});	
	});

	router.post(api, function (req, res) {
        var order = req.body;
		orderService.create(order, function (error, result) {
            if (error) {
                res.send(error);
            } else {
                res.send(result);
            }
        });
    });

	return router;
};
