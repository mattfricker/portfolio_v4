    myApp.service('projectsService',['$http', '$q', function($http, $q){
        var projectsDeferred = $q.defer();
        $http.get('services/projectsjson.php').then(function(data) {
            projectsDeferred.resolve(data);
        });
        this.getProjects = function(){
            return projectsDeferred.promise;
        };

    }]);