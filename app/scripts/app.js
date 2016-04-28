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
    'ui.router',
    'ngTouch',
    'toastr'
  ])
  .config(function ($stateProvider, $urlRouterProvider, toastrConfig) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainController'
      });

    $stateProvider.state('about', {
        url: '/about',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      });

    $urlRouterProvider.otherwise('/error');

    angular.extend(toastrConfig, {
        progressBar: true
    });
  });
