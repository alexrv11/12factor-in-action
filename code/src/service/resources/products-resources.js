module.exports = function (app) {
	var express = require('express');
    var router = express.Router();
	var api = '/:companyId/products';
	var services = app.get('services');
	var productService = services.getService('products')(app);

	router.get(api, function(req, res) {
		var options = req.query;
		var companyId = req.params.companyId;
		options.companyId = companyId;
		productService.getProducts(options, function (error, result) {
  			if (error) {
				res.send(error);
			} else {
				res.send(result);
			}
		});	
	});

	router.post(api, function (req, res) {
        var product = req.body;
        var companyId = req.params.companyId;
			product.companyId = companyId;	
		productService.create(product, function (error, result) {
            if (error) {
                res.send(error);
            } else {
                res.send(result);
				console.log('server products create request:', result);
				var socket = app.get('socket');

				// WebSocket server
				socket.emit("products:create", result);
            }
        });
    });

	return router;
};
