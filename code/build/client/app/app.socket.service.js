( function () {
    'use strict';

    var app = angular.module('feicoApp');
    var serverBaseUrl = 'http://localhost:9090';
    app.factory('socket', function (socketFactory) {
        var myIoSocket = io.connect(serverBaseUrl);

        var socket = socketFactory({
            ioSocket: myIoSocket
        });

        return socket;
    });
})();