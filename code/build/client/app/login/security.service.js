(function () {
    'use strict';

    angular
        .module('app.login')
        .service('loginService', loginService);

    loginService.$inject = [ '$resource', 'BASE_URL' ];

    function loginService($resource, BASE_URL) {
        var path = BASE_URL + '/security/login';
        var resource = $resource(path, {}, {
            login: { method: 'POST' }
        });

        return resource;
    }

    angular
        .module('app.login')
        .service('logoutService', logoutService);
    logoutService.$inject = ['$resource', 'BASE_URL'];

    function logoutService($resource, BASE_URL) {
        var path = BASE_URL + '/security/logout';
        return {
            logout: function(token) {
                var resource = $resource(path, {}, {
                    update: {
                        method: 'PUT',
                        headers: {
                            Authorization: token
                        }
                    }
                });

                return resource;
            }
        };
    }

    angular
        .module('app.login')
        .factory('authService', authService);

    function authService() {
        var auth = {
            isLogged: false
        };

        return auth;
    }
})();