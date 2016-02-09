(function () {
    'use strict';

    var app = angular.module('FactorInAction');

    app.config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/home/orders");
        //
        // Now set up the states
        $stateProvider.state('home', {
            url: "/home",
            templateUrl: "app/home/home.html",
            controller: "HomeController"
        }).state('home.order', {
            url: "/orders",
            templateUrl: "components/order/order.html",
            controller: "OrderController"
        }).state('home.frequency', {
            url: "/frequencies",
            templateUrl: "components/frequency/frequency.html",
            controller: "FrequencyController"
        }).state('home.economic', {
            url: "/economic-fine",
            templateUrl: "components/economic-fine/economic-fine.html",
            controller: "EconomicFineController"
        }).state('home.motorcycle', {
                url: "/motorcycles",
                templateUrl: "components/motorcycle/motorcycle.html",
                controller: "MotorcycleController"
        }).state('login', {
            url: "/login",
            templateUrl: "app/login/login.html",
            controller: "LoginController"
        })
    });
})();