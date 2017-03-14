angular.module("MainModule",["ngRoute","AuthModule"]).config(['$routeProvider',
       function($routeProvider) {
           $routeProvider.
               when('/clients', {
                   templateUrl: 'templates/in/list.html',
                   controller: 'ClientsController',
                   controllerAs:'rtCtrl1'
               }).
               when('/about', {
                   templateUrl: 'templates/about.html'
                 
               
               }).otherwise({
                redirectTo: '/route1'
               });
       }]);