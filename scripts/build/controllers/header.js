	myApp.controller('NavController',['$scope', '$location', function($scope, $location){
	        $scope.isCurrent = function (curLocation) { 
	        return curLocation === $location.path();
	    };
	}]);