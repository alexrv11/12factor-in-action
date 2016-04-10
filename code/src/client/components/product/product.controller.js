(function () {
    'use strict';

    angular
        .module('app.company')
        .controller('ProductController', ProductController);

    ProductController.$inject = [ 'companyService', 'socket' ];

    function ProductController(companyService, socket) {

    }
})();
