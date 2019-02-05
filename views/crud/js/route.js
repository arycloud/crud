'use strict';
var firstApp=angular.module("firstApp",['ngRoute', 'ngResource','restangular'])
	.config(function ($routeProvider){
		var partialsDir = "crud/partials/";	
		$routeProvider
		.when('/',{
			redirectTo:'/users'
		})
		.when('/one',{
			//template: 'simple text',
			templateUrl:partialsDir+'one.html',
			controller: 'oneCtrl'
		})
		.when('/two',{
			templateUrl:partialsDir+'two.html',
			controller:'twoCtrl'
		})
		.when('/three',{
			templateUrl:partialsDir+'three.html',
			controller:'threeCtrl'
		})
		.when('/users', {
			templateUrl: partialsDir+'users.html', 
			controller: 'usersCtrl'
		})
		.when('/new', {
			templateUrl: partialsDir+'userNew.html',
			controller: 'userNewCtrl'
		})
		.when('/:id', {
        templateUrl: partialsDir+'userShow.html',
     	controller: 'userShowCtrl'
		})
        .when('/:id/edit', {
            templateUrl: partialsDir+'userEdit.html',
			controller: 'userEditCtrl'
        })
        .when('/:id/delete', {
            template: '<h1>Deleted</h1>',
			controller: 'userDelCtrl'
        });
		$routeProvider
		.otherwise({
			redirectTo:'/users'
		});
	});
	