(function () {
    'use strict';

    angular
        .module('app.employee')
        .controller('EmployeeController', EmployeeController);

    EmployeeController.$inject = [ 'employeeService', 'socket', '$scope' ];

    function EmployeeController(employeeService, socket, $scope) {
        var vm = this;
        vm.item = {};
        vm.items = getEmployees();
        vm.save = save;

        function save() {
            $scope.employeeForm.$setUntouched();
            var promise = employeeService.save(vm.item).$promise;
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

        function getEmployees() {
            var promise = employeeService.query().$promise;
            promise.then(function (data) {
                console.log('data', data);
                vm.items = data;
            }, function (error) {
                //TODO: implement error handle and notification
               console.log('error', error);
            });
        }

        socket.on('employees:create', function(data){
            console.log('socket:', data);
            vm.items.push(data);
        })
    }
})();
