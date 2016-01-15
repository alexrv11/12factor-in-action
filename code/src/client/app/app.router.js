(function () {
    'use strict';

    angular
        .module('FactorInAction')
        .controller('AppController', AppController);

    AppController.$inject = ['$router'];

    function AppController($router) {
        $router.config([
            { path: '/', redirectTo: '/order' },
            { path: 'order', component: 'order' }
        ]);
    }
})();