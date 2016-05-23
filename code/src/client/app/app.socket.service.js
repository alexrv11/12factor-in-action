( function () {
    'use strict';

    var app = angular.module('feicoApp');
    var serverBaseUrl = 'https://feico2.herokuapp.com/api';
    app.factory('socket', function (socketFactory) {
        var myIoSocket = io.connect(serverBaseUrl);

        var socket = socketFactory({
            ioSocket: myIoSocket
        });

        return socket;
    });
})();