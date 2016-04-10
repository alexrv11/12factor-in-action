(function () {
    'use strict';

    angular
        .module('app.home', [])
        .controller('HomeController', HomeController);
    HomeController.$inject = ['$location', '$window', 'logoutService', 'authService'];
    function HomeController($location, $window, logoutService, authService) {
        var vm = this;
        vm.logout = logout;
        vm.currentUserName = $window.sessionStorage.name;
        function logout() {
            console.log('logout');
            var token = $window.sessionStorage.token;
            var promise = logoutService.logout(token).update().$promise;
            promise.then(function (data) {
                vm.credential = {};
                authService.isLogged = false;
                $location.path('/login');
                console.log('logout', data);
            }, function (error){
                console.error(error);
                // TODO remove code whe the REST API will done
                //vm.items.push(vm.item);
                vm.credential = {};
            });
        }
    }

})();
