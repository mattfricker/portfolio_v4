/**
 * Created by matt on 4/8/15.
 */
(function(){
    var myApp = angular.module('myApp', ['ngRoute','ngSanitize']);

    myApp.config(['$routeProvider',function($routeProvider){

        $routeProvider

            .when('/', {
                templateUrl: 'views/homepage.html',
                controller: 'HomeController'
            })


    }]);
	myApp.controller('NavController',['$scope', '$location', function($scope, $location){
	        $scope.isCurrent = function (curLocation) { 
	        return curLocation === $location.path();
	    };
	}]);
    myApp.controller('HomeController',['$scope', '$log'
	, 'aboutService', 'projectsService', 'currentSkillsService', 'futureSkillsService' 
    , function($scope, $log, aboutService, projectsService, currentSkillsService, futureSkillsService){
    
    	$scope.about = [];
    	$scope.projects = [];
    	$scope.currentSkills = [];
    	$scope.futureSkills = [];

    	$scope.aboutPromise = aboutService.getAbout();
    	$scope.projectsPromise = projectsService.getProjects();
    	$scope.currentSkillsPromise = currentSkillsService.getCurrentSkills();
    	$scope.futureSkillsPromise = futureSkillsService.getFutureSkills();

    	$scope.aboutPromise.then(function(data){
    		$scope.about = data.data;
    	});
    	$scope.projectsPromise.then(function(data){
    		$scope.projects = data.data;
    	});
    	$scope.currentSkillsPromise.then(function(data){
    		$scope.currentSkills = data.data;
    	});   	
    	$scope.futureSkillsPromise.then(function(data){
    		$scope.futureSkills = data.data;
    	});
    }]);
    
    myApp.service('aboutService',['$http', '$q', function($http, $q){
        var aboutDeferred = $q.defer();
        $http.get('services/aboutjson.php').then(function(data) {
            aboutDeferred.resolve(data);
        });
        this.getAbout = function(){
            return aboutDeferred.promise;
        };

    }]);
    myApp.service('currentSkillsService',['$http', '$q', function($http, $q){
        var currentSkillsDeferred = $q.defer();
        $http.get('services/currentskillsjson.php').then(function(data) {
            currentSkillsDeferred.resolve(data);
        });
        this.getCurrentSkills = function(){
            return currentSkillsDeferred.promise;
        };

    }]);
    myApp.service('futureSkillsService',['$http', '$q', function($http, $q){
        var futureSkillsDeferred = $q.defer();
        $http.get('services/futureskillsjson.php').then(function(data) {
            futureSkillsDeferred.resolve(data);
        });
        this.getFutureSkills = function(){
            return futureSkillsDeferred.promise;
        };

    }]);
    myApp.service('projectsService',['$http', '$q', function($http, $q){
        var projectsDeferred = $q.defer();
        $http.get('services/projectsjson.php').then(function(data) {
            projectsDeferred.resolve(data);
        });
        this.getProjects = function(){
            return projectsDeferred.promise;
        };

    }]);
})();