'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */

angular.module('app.home')
  .directive('sidebar',['$location',function() {
    return {
      templateUrl:'app/home/directives/sidebar/sidebar.html',
      restrict: 'E',
      replace: true,
      scope: {
      },
      controller:function($scope, $window){
        $scope.selectedMenu = 'home';
        $scope.collapseVar = 0;
        $scope.multiCollapseVar = 0;
        $scope.menu = [];
        var type = $window.sessionStorage.type;
        if(type == 'admin') {
          $scope.menu.push({
            title: 'Empresas',
            icon: 'fa-dashboard',
            action:'home.company'
          });
          $scope.menu.push({
            title: 'Usuarios Registrados',
            icon: 'fa-users',
            action:'home.user'
          });
          $scope.menu.push({
            title: 'Usuarios Conectados',
            icon: 'fa-user-plus',
            action:'home.user-connected'
          });
        } else if (type == 'company') {
          $scope.menu.push({
            title: 'Productos',
            icon: 'fa-money',
            action: 'home.products'
          });
          $scope.menu.push({
            title: 'Tiendas',
            icon: 'fa-table',
            action: 'home.stores'
          });
          $scope.menu.push({
            title: 'Empleados',
            icon: 'fa-user-plus',
            action: 'home.employees'
          });
        } else if (type == 'employee') {
          $scope.menu.push({
            title: 'Productos',
            icon: 'fa-money'
          });
          $scope.menu.push({
            title: 'Tiendas',
            icon: 'fa-table'
          });
        }
        $scope.check = function(x){
          
          if(x==$scope.collapseVar)
            $scope.collapseVar = 0;
          else
            $scope.collapseVar = x;
        };
        
        $scope.multiCheck = function(y){
          
          if(y==$scope.multiCollapseVar)
            $scope.multiCollapseVar = 0;
          else
            $scope.multiCollapseVar = y;
        };
      }
    }
  }]);
