'use strict';

/* Controllers */


function MyCtrl1() {}
MyCtrl1.$inject = [];


function MyCtrl2() {
}
MyCtrl2.$inject = [];


//answers are represented in a regular expression

function Ctrl($scope) {
  $scope.answer1 = /^1\/sinx\b/;
  $scope.answer2 = /^1\/cosx\b/;
  $scope.answer3 = /^1\/tanx\b/;
  $scope.answer4 = /^sinx\/cosx\b/;
  $scope.answer5 = /^cosx\/sinx\b/;
  $scope.answer6 = /^1\b/;
  $scope.answer7 = /^sec\^2x\b/;
  $scope.answer8 = /^csc\^2x\b/;
  $scope.answer9 = /^1\/2sin2x\b/;
  $scope.answer10 = /^cos\^2x\-sin\^2x\b/;
  $scope.answer11 = /^1\/cosx\b/;
  $scope.answer12 = /^1\/cosx\b/;
  $scope.answer13 = /^1\/cosx\b/;
  $scope.answer14 = /^1\/cosx\b/;
  $scope.answer15 = /^1\/cosx\b/;
  $scope.answer16 = /^1\/cosx\b/;
  $scope.answer17 = /^1\/cosx\b/;
  $scope.answer18 = /^1\/cosx\b/;
  $scope.answer19 = /^1\/cosx\b/;
  $scope.answer20 = /^1\/cosx\b/;
  $scope.answer21 = /^1\/cosx\b/;
  $scope.answer22 = /^1\/cosx\b/;
  

}
