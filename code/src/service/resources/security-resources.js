module.exports = function (app) {
	var express = require('express');
    var router = express.Router();
	var jwt = require("jsonwebtoken");
	var randtoken = require('rand-token');
	var apiLogin = '/security/login';
	var apiLogout = '/security/logout';
	var services = app.get('services');
	var securityService = services.getService('security')(app);

	router.post(apiLogin, function (req, res) {
        var data = req.body;
		var token = randtoken.generate(16);
		securityService.login({login:data.login, password:data.password}, token, function (error, result) {
            if (error) {
                res.send(error);
            } else {
				console.log(data.login, data.password);
				data = {};
				console.log(result);
				data.login = result.login;
				data.name = result.name;
				data.token = token;
				data.email = result.email;
				data.type = result.type;
                res.send(data);
				var socket = app.get('socket');
				// WebSocket server
				socket.emit("users:connected", data);
            }
        });
    });

	router.put(apiLogout, securityService.authenticate,function (req, res) {
		var data = req.body;
		securityService.logout(data.token, function (error, result) {
			if (error) {
				res.send(error);
			} else {
				res.send({ message:"Se ha cerrado la session", auth: false });
				var socket = app.get('socket');
				// WebSocket server
				socket.emit("users:disconnected", result);
			}
		});
	});

	return router;
};
