module.exports = function (app) {
    var express = require('express');
    var router = express.Router();
    var api = '/routes';
    var uriLocations = '/stands';
    var services = app.get('services');
    var standService = services.getService('stands')(app);

    router.post(api, function(req, res) {
        var origin = req.body.origin;
        var destination = req.body.destination;
        var paths = [origin, {"latitude": -17.4195245,"longitude":-66.130861}, {"latitude": -17.4198521,"longitude":-66.1296111}, destination];

        var obj = {paths: paths};
        res.send(obj);
    });

    router.post(uriLocations, function (req, res) {
        var stand = req.body;
        standService.create(stand, function (error, result) {
            if (error) {
                res.send(error);
            } else {
                res.send(result);
                console.log('server stand create request:', result);
            }
        });
    });

    router.get(uriLocations, function(req, res) {
        var options = {};
        standService.getStands(options, function (error, result) {
            if (error) {
                res.send(error);
            } else {
                res.send(result);
            }
        });
    });

    return router;
};
