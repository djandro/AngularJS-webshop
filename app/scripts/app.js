'use strict';

/**
 * @ngdoc overview
 * @name app-webshop
 * @description
 * # app-webshop
 *
 * Main module of the application.
 */
angular
  .module('app-webshop', [
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
        templateUrl: 'scripts/main/main.html',
        controller: 'MainController'
      });

    $urlRouterProvider.otherwise('/error');

    angular.extend(toastrConfig, {
        progressBar: true
    });
  });
