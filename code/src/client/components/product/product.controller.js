(function () {
    'use strict';

    angular
        .module('app.product')
        .controller('ProductController', productController);

    productController.$inject = [ 'productService', 'socket', '$scope' ];

    function productController(productService, socket, $scope) {
        var vm = this;
        vm.item = {};
        vm.items = getProducts();
        vm.save = save;

        function save() {
            $scope.productForm.$setUntouched();
            var promise = productService.save(vm.item).$promise;
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

        function getProducts() {
            var promise = productService.query().$promise;
            promise.then(function (data) {
                console.log('data', data);
                vm.items = data;
            }, function (error) {
                //TODO: implement error handle and notification
               console.log('error', error);
            });
        }

        socket.on('products:create', function(data){
            console.log('socket:', data);
            vm.items.push(data);
        })
    }
})();
