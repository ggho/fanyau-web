'use strict';

angular.module('myApp.view1', [
	'ngRoute',
	'smoothScroll'
	// 'myApp.iframe.onload-directive'
	])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/view1', {
		templateUrl: 'view1/view1.html',
		controller: 'View1Ctrl'
	});
}])

.controller('View1Ctrl', ['$scope', '$location', '$http', 'smoothScroll', function($scope, $location, $http, smoothScroll) {

	$scope.formData = {};



	//iframe onload
	 $scope.iframeLoadedCallback = function(temp){
	 	console.log(temp);
	 	console.log(this);
	 	
    	$location.path('/view2');
    	$scope.$apply();

    }


	// process the form
	$scope.processForm = function() {
		$http({
			method  : 'POST',
			url     : 'https://docs.google.com/forms/d/1zjikVFl9ZGzG4WroEYloA9KSzvyiZP_l2wk19BdL8LA/formResponse',
			data    : {
				
				'entry.2052552941':'Female',
				'entry.1577935524':'<= 20'
			},  // pass in data as strings
			headers : { 
			'Content-Type': 'application/x-www-form-urlencoded'
			}  // set the headers so angular passing info as form data (not request payload)


		})
		.success(function(data) {
			console.log(data);

			// if (!data.success) {
			// 	// if not successful, bind errors to error variables
			// 	$scope.errorName = data.errors.name;
			// 	$scope.errorSuperhero = data.errors.superheroAlias;
			// } else {
   //    			// if successful, bind success message to message
   //    			$scope.message = data.message;
   //    		}
      	});
	};


		// if($location.hash() == 'contact'){
		// 	//scroll to portfo
		// 	var element = document.getElementById('contact');
		// 	smoothScroll(element);

		// }

	// $scope.processForm();

}])

.directive('iframeOnload', [function(){
return {
    scope: {
        callback: '&iframeOnload'
    },
    link: function(scope, element, attrs){
        
        element.on('load', function(){
           return scope.callback({temp: 'test'});
         
        })
    }
}}]);


