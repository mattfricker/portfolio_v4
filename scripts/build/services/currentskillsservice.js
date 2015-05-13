    myApp.service('currentSkillsService',['$http', '$q', function($http, $q){
        var currentSkillsDeferred = $q.defer();
        $http.get('services/currentskillsjson.php').then(function(data) {
            currentSkillsDeferred.resolve(data);
        });
        this.getCurrentSkills = function(){
            return currentSkillsDeferred.promise;
        };

    }]);