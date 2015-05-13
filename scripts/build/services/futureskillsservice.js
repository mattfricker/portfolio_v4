    myApp.service('futureSkillsService',['$http', '$q', function($http, $q){
        var futureSkillsDeferred = $q.defer();
        $http.get('services/futureskillsjson.php').then(function(data) {
            futureSkillsDeferred.resolve(data);
        });
        this.getFutureSkills = function(){
            return futureSkillsDeferred.promise;
        };

    }]);