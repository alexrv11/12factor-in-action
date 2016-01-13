module.exports = function (app) {
	var express = require('express');
    var router = express.Router();
	var api = '/customer-requests';
	var models = app.get('models');
	var customerRequest = models.getCollection('customer-requests');
	var model = customerRequest.model;

	router.get(api, function(req, res, next) {
		
		model.find(function (err, result) {
  			if (err) return console.error(err);
  			res.send(result);
		});
		
	});

	router.post(api, function (req, res) {
        var customerRequest = req.body;
		console.log(customerRequest);
        model.create(customerRequest, function (error, result) {
            if (error) {
                res.send(error);
            } else {
                res.send(result);
            }
        });
    });

	return router;
};
