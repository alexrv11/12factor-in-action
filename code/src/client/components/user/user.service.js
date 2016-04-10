(function () {
   'use strict';

    angular
        .module('app.user')
        .service('userService', userService);

    userService.$inject = [ '$resource', 'BASE_URL'];

    function userService($resource, BASE_URL) {
        var path = BASE_URL + '/users';
        var resource = $resource(path, {}, {
            query: { method: 'GET', isArray: true }
        });
        return resource;
    }
})();