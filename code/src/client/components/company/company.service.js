(function () {
   'use strict';

    angular
        .module('app.company')
        .service('companyService', companyService);

    companyService.$inject = [ '$resource', 'BASE_URL', 'COMPANY_URL' ];

    function companyService($resource, BASE_URL, COMPANY_URL) {
        var path = BASE_URL + COMPANY_URL;
        var resource = $resource(path, {}, {
            save: { method: 'POST' },
            query: { method: 'GET', isArray: true }
        });
        return resource;
    }

    angular
        .module('app.company')
        .service('standService', standService);

    standService.$inject = [ '$resource', 'BASE_URL', 'STAND_URL' ];

    function standService($resource, BASE_URL, STAND_URL) {
        var path = BASE_URL + STAND_URL;
        var resource = $resource(path, {}, {
            save: { method: 'POST' },
            query: { method: 'GET', isArray: true }
        });
        return resource;
    }
})();