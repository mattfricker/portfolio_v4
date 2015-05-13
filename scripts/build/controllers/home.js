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
    