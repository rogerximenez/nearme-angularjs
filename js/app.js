var app = angular.module('NearMeApp', ['leaflet-directive', 'ngRoute'])
	.config(function($routeProvider){
		$routeProvider
			.when('/', {
				templateUrl: 'views/main.html',
				controller: 'MainController',
				redirectTo: '/',
			})

			.when('/about', {
				templateUrl: 'views/about.html',
				controller: 'AboutController'
			});
	});