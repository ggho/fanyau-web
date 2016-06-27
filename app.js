'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'angulartics', 
  'angulartics.google.analytics',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', '$httpProvider', '$analyticsProvider', 
	function($locationProvider, $routeProvider, $httpProvider, $analyticsProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/welcome'});

  // $httpProvider.defaults.useXDomain = true;
  // delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);
