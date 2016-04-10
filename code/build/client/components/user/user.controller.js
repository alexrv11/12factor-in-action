(function () {
    'use strict';

    angular
        .module('app.user')
        .controller('UserController', CompanyController);

    CompanyController.$inject = [ 'userService', 'socket' ];

    function CompanyController(userService, socket) {
        var vm = this;
        vm.item = {};
        vm.users = getUsers();
        vm.connectedUsers = getConnectedUsers();

        function getUsers() {
            var promise = userService.query().$promise;
            promise.then(function (data) {
                console.log('data', data);
                vm.users = data;
            }, function (error) {
                //TODO: implement error handle and notification
               console.log('error', error);
            });
        }

        function getConnectedUsers() {
            var promise = userService.query({ state:'connected' }).$promise;
            promise.then(function (data) {
                console.log('data', data);
                vm.connectedUsers = data;
            }, function (error) {
                //TODO: implement error handle and notification
                console.log('error', error);
            });
        }
        socket.on('users:create', function(data){
            console.log('socket users:', data);
            vm.users.push(data);
        });

        socket.on('users:connected', function(data){
            console.log('socket connected:', data);
            vm.connectedUsers.push(data);
        });

        socket.on('users:disconnected', function(data){
            console.log('socket disconnected:', data);
            vm.connectedUsers = vm.connectedUsers.filter(function(user) {
               return data.login != user.login;
            });
        });
    }
})();
