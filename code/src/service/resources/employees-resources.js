module.exports = function (app) {
    var express = require('express');
    var router = express.Router();
    var api = '/companies/:companyId/employees';
    var services = app.get('services');
    var employeeService = services.getService('employees')(app);

    router.get(api, function(req, res) {
        var options = req.query;
        employeeService.getEmployees(options, function (error, result) {
            if (error) {
                res.send(error);
            } else {
                res.send(result);
            }
        });
    });

    router.post(api, function (req, res) {
        var order = req.body;
        employeeService.create(order, function (error, result) {
            if (error) {
                res.send(error);
            } else {
                res.send(result);
                console.log('server employee create request:', result);
                var socket = app.get('socket');

                // WebSocket server
                socket.emit("employees:create", result);
            }
        });
    });

    return router;
};
