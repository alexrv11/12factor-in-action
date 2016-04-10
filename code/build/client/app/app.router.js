(function () {
    'use strict';

    var app = angular.module('feicoApp');
    app.config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/login");
        //
        // Now set up the states
        $stateProvider.state('home', {
            url: "/home",
            templateUrl: "app/home/home.html",
            controller: "HomeController",
            authenticate: true
        }).state('home.company', {
            url: "/companies",
            templateUrl: "components/company/companies.html",
            controller: "CompanyController",
            controllerAs: "company"
        }).state('home.user', {
            url: "/users",
            templateUrl: "components/user/users.html",
            controller: "UserController",
            controllerAs: "user",
            authenticate: true
        }).state('home.user-connected', {
            url: "/connectedUsers",
            templateUrl: "components/user/connected-users.html",
            controller: "UserController",
            controllerAs: "user",
            authenticate: true
        }).state('home.products', {
                url: "/products",
                templateUrl: "components/product/products.html",
                controller: "ProductController"
        }).state('home.stores', {
            url: "/stores",
            templateUrl: "components/store/stores.html",
            controller: "StoreController"
        }).state('home.employees', {
            url: "/employees",
            templateUrl: "components/employee/employees.html",
            controller: "EmployeeController"
        }).state('login', {
            url: "/login",
            templateUrl: "app/login/login.html",
            controller: "LoginController",
            controllerAs: "login",
            authenticate: false
        })
    });

    app.run(function ($rootScope, $state, authService) {
        $rootScope.$on("$stateChangeStart", function(event, toState) {
            if (toState.authenticate && !authService.isLogged){
                // User isn’t authenticated
                $state.transitionTo("login");
                event.preventDefault();
            }
        });
    });
})();