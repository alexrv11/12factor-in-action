(function () {
   'use strict';

    angular
        .module('app.product')
        .service('productService', productService);

    productService.$inject = [ '$resource', 'BASE_URL', 'PRODUCT_URL' ];

    function productService($resource, BASE_URL, PRODUCT_URL) {
        var path = BASE_URL + PRODUCT_URL;
        var resource = $resource(path, {}, {
            save: { method: 'POST' },
            query: { method: 'GET', isArray: true }
        });
        return resource;
    }
})();