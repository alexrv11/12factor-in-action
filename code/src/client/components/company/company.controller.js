(function () {
    'use strict';

    angular
        .module('app.company')
        .controller('CompanyController', CompanyController);

    CompanyController.$inject = [ 'companyService', 'socket', '$scope' ];

    function CompanyController(companyService, socket, $scope) {
        var vm = this;
        vm.item = {};
        vm.items = getCompanies();
        vm.save = save;

        function save() {
            $scope.companyForm.$setUntouched();
            var promise = companyService.save(vm.item).$promise;
            promise.then(function (data) {
                vm.item = {};
                console.log('item created', data);
            }, function (error){
                console.error(error);
                // TODO remove code whe the REST API will done
                //vm.items.push(vm.item);
                vm.item = {};
            });
        }

        function getCompanies() {
            var promise = companyService.query().$promise;
            promise.then(function (data) {
                console.log('data', data);
                vm.items = data;
            }, function (error) {
                //TODO: implement error handle and notification
               console.log('error', error);
            });
        }

        vm.passwordsMatches = false;
        vm.comparePasswords = function () {
            vm.passwordsMatches = (vm.item.user && vm.item.user.password && vm.item.user.confirmPassword &&
            vm.item.user.password.length > 0 && (vm.item.user.password === vm.item.user.confirmPassword));
            console.log(vm.passwordsMatches);
        };

        socket.on('companies:create', function(data){
            console.log('socket:', data);
            vm.items.push(data);
        })
    }
})();
