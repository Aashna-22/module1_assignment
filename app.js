(function(){
  'use strict';
  angular.module('LunchApp',[])
  .controller('CheckLunchController', CheckLunch);
  CheckLunch.$inject['$scope'];
  function CheckLunch($scope){


    //$scope.ifCheck=$scope.name.split(',');
    $scope.splitString= function(){
      $scope.mysplit=$scope.name.split(',');
      $scope.separateleng=$scope.mysplit.length;
      if($scope.mysplit==""){
        $scope.message="Please enter some value";
      }
      else if($scope.separateleng<=3){
        $scope.message="Enjoy";
      }
      else if($scope.separateleng>3){
        $scope.message="Too much";
      }

    };


  };
})();
