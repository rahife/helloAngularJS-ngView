/**
 * Created by rafa on 12/28/14.
 */

var app = angular.module("app",['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider.when('/',
        {
            templateUrl: "templates/template1.html",
            controller: "appController"
        }
    )
});

app.controller("appController",function($scope){
    $scope.model = {
        message: "Hello World!!"
    }
});