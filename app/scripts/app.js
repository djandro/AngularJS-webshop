'use strict';

/**
 * @ngdoc overview
 * @name appFrelloApp
 * @description
 * # appFrelloApp
 *
 * Main module of the application.
 */
angular
  .module('appFrelloApp', [
    'ngAnimate',
    'ngAria',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngTouch',
    'toastr'
  ])
  .config(function ($routeProvider, toastrConfig) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
    angular.extend(toastrConfig, {
      progressBar: true
    });
  });
