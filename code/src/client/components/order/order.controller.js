(function () {
    'use strict';

    angular
        .module('app.order')
        .controller('OrderController', OrderController);

    OrderController.$inject = [ 'orderService' ];

    function OrderController(orderService) {
        var vm = this;
        vm.item = {};
        vm.items = getOrders();
        vm.save = save;
		vm.assign = assign;

        function save() {
            var promise = orderService.save(vm.item).$promise;
            promise.then(function (data){
                vm.items.push(data);
                vm.item = {};
            }, function (error){
                console.error(error);
                // TODO remove code whe the REST API will done
                //vm.items.push(vm.item);
                vm.item = {};
            });
        }

        function getOrders() {
            var promise = orderService.query().$promise;
            promise.then(function (data) {
                console.log('data', data);
                vm.items = data;
            }, function (error) {
                //TODO: implement error handle and notification
               console.log('error', error);
            });
        }

		function assign(item) {
			console.log("item:", item);
		}
    }

})();
