    myApp.service('aboutService',['$http', '$q', function($http, $q){
        var aboutDeferred = $q.defer();
        $http.get('services/aboutjson.php').then(function(data) {
            aboutDeferred.resolve(data);
        });
        this.getAbout = function(){
            return aboutDeferred.promise;
        };

    }]);