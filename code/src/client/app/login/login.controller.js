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
        vm.showError = false;

        function login() {
            vm.showError = false;
            loginService.login(vm.credential).$promise
                .then(function (data) {
                    if(data.error) {
                        vm.showError = true;
                    } else {
                        vm.credential = {};
                        vm.showError = false;
                        authService.isLogged = true;
                        $window.sessionStorage.token = data.token;
                        $window.sessionStorage.name = data.name;
                        $window.sessionStorage.type = data.type;
                        
                        if(data.type == 'admin') {
                            $location.path('/home/companies');
                        } else if(data.type == 'company' || data.type == 'employee') {
                            console.log('companyId', data.companyId);
                            $window.sessionStorage.companyId = data.companyId;
                            $location.path('/home/products');
                        }
                    }

                }, function (error){
                    console.error("error: ", error);
                    // TODO remove code whe the REST API will done
                    //vm.items.push(vm.item);
                    vm.credential = {};
                    vm.showError = true;
                });
        }
    }

})();
