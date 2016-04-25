//  Setter
angular.module('app', []);

//  Controller
angular.module('app').controller('MainController', function($scope, TodoFactory){
  /*
  $scope.task = {
    desc: '',
    isCompleted: false
  };
  */
  $scope.todosList1 = TodoFactory.todos;
  $scope.todosList2 = TodoFactory.todos;
  
  $scope.addTask = function(){
    TodoFactory.addTask($scope.task);
    $scope.task = TodoFactory.resetTask();
  };
  
  $scope.removeTask = function(task){
    TodoFactory.removeTask(task);
  };
  
  $scope.$on('fired.event', function(event, data){
      $scope.data = 'Dodano';
      console.log('dodatno');
  });
  

  $scope.fireEvent = function()
  {
    //$rootScope.$broadcast('fired.event', {data: 'Data to be sent'});
  };
  
  
});

//  factory
angular.module('app').factory('TodoFactory', function()
{
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
      if(isEmpty(task)) return;
      if(isDuplicated(task)) return;
      
      todos.push(task);
  }
  
  function removeTask(task){
    todos.splice(todos.indexOf(task), 1);
  }
  
  function resetTask(){
    return {desc: '', isCompleted: false};
  }
    
});