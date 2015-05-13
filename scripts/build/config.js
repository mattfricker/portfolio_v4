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