(function () {
    'use strict';

    angular
        .module('app.store')
        .controller('StoreController', StoreController);

    StoreController.$inject = [ 'storeService', 'socket', '$scope' ];

    function StoreController(storeService, socket, $scope) {
        var vm = this;
        vm.item = {};
        vm.items = getStores();
        vm.save = save;

        function save() {
            $scope.storeForm.$setUntouched();
            var promise = storeService.save(vm.item).$promise;
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

        function getStores() {
            var promise = storeService.query().$promise;
            promise.then(function (data) {
                console.log('data', data);
                vm.items = data;
            }, function (error) {
                //TODO: implement error handle and notification
               console.log('error', error);
            });
        }

        socket.on('stores:create', function(data){
            console.log('socket:', data);
            vm.items.push(data);
        })
    }
})();
