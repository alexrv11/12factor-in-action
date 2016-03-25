(function (){
    'use strict';
    var modules = [
        'ui.router',
        'ngResource',
        'app.login',
        'app.home',
        'app.order'
    ];
    angular
        .module('FactorInAction', modules);
})();