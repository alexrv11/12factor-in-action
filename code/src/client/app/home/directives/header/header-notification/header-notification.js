'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('app.home')
	.directive('headerNotification',function(){
		return {
        	templateUrl:'app/home/directives/header/header-notification/header-notification.html',
        	restrict: 'E',
        	replace: true,
			controller: 'HomeController',
			controllerAs: 'home'
    	}
	});


