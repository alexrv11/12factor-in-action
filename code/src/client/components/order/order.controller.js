(function () {
    'use strict';

    angular
        .module('app.order', [])
        .controller('OrderController', OrderController);

    OrderController.$inject = [ 'orderService' ];

    function OrderController(orderService) {
        var vm = this;
        vm.item = {};
        vm.items = [];
        vm.save = save;

        function save() {
            console.log(vm.item);
            var promise = orderService.save(vm.item).$promise;
            promise.then(function (data){
                vm.items.push(data);
                vm.item = {};
            }, function (error){
                console.error(error);
                // TODO remove code whe the REST API will done
                vm.items.push(vm.item);
                vm.item = {};
            });
        }

    }

})();