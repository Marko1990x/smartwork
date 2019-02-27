// Code goes here
console.log(window);
const clock = angular.module('MainApp', []);

clock.controller('clockController', ['$scope', '$interval', '$filter', 
  ($scope, $interval, $filter) => {
    $scope.getDate = function(){
      $scope.date = new Date();
      $scope.currentTime = $filter('date')($scope.date, 'h:mm:ss');
      $scope.amPm = $filter('date')($scope.date, 'a');
    }
    $scope.getDate();
    $scope.t = $interval($scope.getDate, 100);
  }]
);
