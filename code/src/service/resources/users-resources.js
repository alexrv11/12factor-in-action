module.exports = function (app) {
	var express = require('express');
    var router = express.Router();
	var jwt = require("jsonwebtoken");
	var randtoken = require('rand-token');
	var api = '/users';
	var services = app.get('services');
	var companyService = services.getService('users')(app);

	router.get(api, function(req, res) {
		var options = req.query;
		console.log('query', options);
		companyService.getUsers(options, function (error, result) {
  			if (error) {
				res.send(error);
			} else {
				res.send(result);
			}
		});	
	});

	router.post(api, function (req, res) {
        var user = req.body;
		user.token = randtoken.generate(16);
		companyService.create(user, function (error, result) {
            if (error) {
                res.send(error);
            } else {
				var data ={};
				data._id = result._id;
				data.login = result.login;
				data.user = result.name;
				data.token = result.token;
				data.type = result.type;
                res.send(data);
				var socket = app.get('socket');

				// WebSocket server
				socket.emit("users:create", result);
            }
        });
    });

	return router;
};
