angular.module("MainModule",[]).config(['$routeProvider',
       function($routeProvider) {
           $routeProvider.
               when('/clients', {
                   templateUrl: 'templates/list.html',
                   controller: 'ClientsController',
                   controllerAs:'rtCtrl1'
               });
       }]);