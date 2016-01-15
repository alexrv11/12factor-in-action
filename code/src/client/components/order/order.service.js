(function () {
   'use strict';

    angular
        .module('app.order')
        .service('orderService', orderService);

    orderService.$inject = [ '$resource', 'BASE_URL', 'ORDER_URL' ];

    function orderService($resource, BASE_URL, ORDER_URL) {
        var path = BASE_URL + ORDER_URL;
        var resource = $resource(path, {
            save: { method: 'POST' }
        });
        return resource;
    }

})();