(function () {
   'use strict';

    angular
        .module('app.store')
        .service('storeService', storeService);

    storeService.$inject = [ '$resource', '$window', 'BASE_URL', 'COMPANY_URL', 'STORE_URL' ];

    function storeService($resource, $window, BASE_URL, COMPANY_URL, STORE_URL) {
        var companyId = $window.sessionStorage.companyId;
        var path = BASE_URL + COMPANY_URL +'/'+ companyId + STORE_URL;
        var resource = $resource(path, {}, {
            save: { method: 'POST' },
            query: { method: 'GET', isArray: true }
        });
        return resource;
    }
})();