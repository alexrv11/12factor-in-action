(function (){
    'use strict';
    var modules = [
        'ui.router',
        'ngResource',
        'btford.socket-io',
        'app.login',
        'app.home',
        'app.company',
        'app.user',
        'app.product',
        'app.store',
        'app.employee'
    ];
    var app = angular.module('feicoApp', modules);

    //Injectors
    app.factory('sessionRecoverer', ['$location', function($location) {
        var sessionRecoverer = {
            responseError: function(response) {
                // Session has expired
                if (response.status == 403){
                    $location.path('/login');
                }
            }
        };
        return sessionRecoverer;
    }]);

    app.config(['$httpProvider', function($httpProvider) {
        $httpProvider.interceptors.push('sessionRecoverer');
    }]);
})();