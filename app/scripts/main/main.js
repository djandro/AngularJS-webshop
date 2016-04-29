'use strict';

/**
 * @ngdoc function
 * @name app-webshop.controller:MainController
 * @description
 * # MainController
 * Controller of the app-webshop
 */
angular.module('app-webshop')
  .controller('MainController', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
