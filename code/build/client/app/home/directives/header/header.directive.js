'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('app.home')
	.directive('header',function(){
		return {
        	templateUrl:'app/home/directives/header/header.html',
        	restrict: 'E',
        	replace: true,
			controller: 'HomeController',
			controllerAs: 'home'
    	}
	});


