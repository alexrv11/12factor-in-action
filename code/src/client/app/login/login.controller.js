(function () {
    'use strict';

    angular
        .module('app.login')
        .controller('LoginController', LoginController);
    LoginController.$inject = ['$location', '$window', 'loginService', 'authService'];
    function LoginController($location, $window, loginService, authService) {
        var vm = this;
        vm.credential = {};
        vm.login = login;

        function login() {
            var promise = loginService.login(vm.credential).$promise;
            promise.then(function (data) {
                vm.credential = {};
                if(data.error) {
                    console.error('error login', data.error);
                } else {
                    authService.isLogged = true;
                    $window.sessionStorage.token = data.token;
                    $window.sessionStorage.name = data.name;
                    $window.sessionStorage.type = data.type;
                    console.log('login', $window.sessionStorage.name);
                    if(data.type == 'admin') {
                        $location.path('/home/companies');
                    } else if(data.type == 'company' || data.type == 'employee') {
                        $location.path('/home/products');
                    }
                }

            }, function (error){
                console.error("error: ", error);
                // TODO remove code whe the REST API will done
                //vm.items.push(vm.item);
                vm.credential = {};
            });
        }
    }

})();
