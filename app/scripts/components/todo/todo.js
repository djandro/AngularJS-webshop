'use strict';

/**
 * @ngdoc function
 * @name app-webshop.component:Todo
 * @description
 * # TodoFactory
 * # TodoDirective
 * # TodoController
 * JS of the Todo component
 */
angular.module('app-webshop')

  .directive('todoDirective', ['$scope', 'todoFactory', function ($scope, todoFactory) {
    return {
      restrict: 'E',
      scope:{
        todosList1: '=',
        todosList2: '=',
        addTask: '=',
        removeTask: '='
      },
      controller: TodoController,
      templateUrl: 'app/components/todo/todo.html'
    };

    function TodoController($scope){
      $scope.todosList1 = todoFactory.todos;
      $scope.todosList2 = todoFactory.todos;

      $scope.addTask = function(){
        todoFactory.addTask($scope.task);
        $scope.task = todoFactory.resetTask();
      };

      $scope.removeTask = function(task){
        todoFactory.removeTask(task);
      };
    }

  }])

  .factory('todoFactory', ['toastr', function(toastr) {
    var todos = [];

    return {
      todos: todos,
      addTask: addTask,
      removeTask: removeTask,
      isEmpty: isEmpty,
      isDuplicated: isDuplicated,
      resetTask: resetTask
    };

    function isDuplicated(task){
      var duplicate = false;

      todos.forEach(function(todo) {
        if(todo.desc === task.desc){
          duplicate = true;
        }
      });

      return duplicate;
    }

    function isEmpty(task){
      var empty = false;
      console.log(task.desc);
      if(task.desc == '' || typeof task.desc == "undefined"){
        empty = true;
      }

      return empty;
    }

    function addTask(task){
      if(isEmpty(task)) {
        toastr.error('Vnesi ime taska!');
        return;
      }
      if(isDuplicated(task)) {
        toastr.error(task.desc, 'Ime taska že obstaja!');
        return;
      }

      todos.push(task);
      toastr.success(task.desc, 'Uspešno si dodal task');
    }

    function removeTask(task){
      todos.splice(todos.indexOf(task), 1);
      toastr.info(task.desc, 'Zbrisal si task');
    }

    function resetTask(){
      return {desc: '', isCompleted: false};
    }

  }]);

