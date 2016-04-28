'use strict';

/**
 * @ngdoc function
 * @name appFrelloApp.controller:MainController
 * @description
 * # MainController
 * Controller of the appFrelloApp
 */
angular.module('appFrelloApp')
  .controller('MainController', ['$scope', 'todoFactory', function ($scope, todoFactory) {

      $scope.todosList1 = todoFactory.todos;
      $scope.todosList2 = todoFactory.todos;

      $scope.addTask = function(){
        todoFactory.addTask($scope.task);
        $scope.task = todoFactory.resetTask();
      };

      $scope.removeTask = function(task){
        todoFactory.removeTask(task);
      };

  }]);

