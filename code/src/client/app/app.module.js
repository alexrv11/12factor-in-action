(function (){
    'use strict';
    var modules = [
        'ui.router',
        'app.login',
        'app.home',
        'app.order'
    ];
    angular
        .module('FactorInAction', modules);
})();