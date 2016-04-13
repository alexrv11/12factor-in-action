module.exports = function (app) {
    var express = require('express');
    var router = express.Router();
    var api = '/companies/:companyId/stores';
    var services = app.get('services');
    var storeService = services.getService('stores')(app);

    router.get(api, function(req, res) {
        var options = req.query;
        var companyId = req.params.companyId;
        options.companyId = companyId;
        storeService.getStores(options, function (error, result) {
            if (error) {
                res.send(error);
            } else {
                res.send(result);
            }
        });
    });

    router.post(api, function (req, res) {
        var store = req.body;
        var companyId = req.params.companyId;
        store.companyId = companyId;
        storeService.create(store, function (error, result) {
            if (error) {
                res.send(error);
            } else {
                res.send(result);
                console.log('server stores create request:', result);
                var socket = app.get('socket');

                // WebSocket server
                socket.emit("employees:create", result);
            }
        });
    });

    return router;
};
