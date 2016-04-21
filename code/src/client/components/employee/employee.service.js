(function () {
   'use strict';

    angular
        .module('app.employee')
        .service('employeeService', employeeService);

    employeeService.$inject = [ '$resource', '$window', 'BASE_URL', 'COMPANY_URL', 'EMPLOYEE_URL' ];

    function employeeService($resource, $window, BASE_URL, COMPANY_URL, EMPLOYEE_URL) {
                var companyId = $window.sessionStorage.companyId;
        var path = BASE_URL + COMPANY_URL +'/'+ companyId + EMPLOYEE_URL;
        var resource = $resource(path, {}, {
            save: { method: 'POST' },
            query: { method: 'GET', isArray: true }
        });
        return resource;
    }
})();