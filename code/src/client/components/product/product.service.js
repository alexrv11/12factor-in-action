(function () {
   'use strict';

    angular
        .module('app.product')
        .service('productService', productService);

    productService.$inject = [ '$resource', '$window', 'BASE_URL', 'PRODUCT_URL', 'COMPANY_URL' ];

    function productService($resource, $window, BASE_URL, PRODUCT_URL, COMPANY_URL) {
        var companyId = $window.sessionStorage.companyId;
        var path = BASE_URL + COMPANY_URL +'/'+ companyId + PRODUCT_URL;
        console.log('products', path);
        var resource = $resource(path, {}, {
            save: { method: 'POST' },
            query: { method: 'GET', isArray: true }
        });
        return resource;
    }
})();