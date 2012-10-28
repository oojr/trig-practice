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
  $scope.answer11 = /^1\/2\(?1\-cos2x(?=\))\b/;
  $scope.answer12 = /^1\/2\(?1\+cos2x(?=\))\b/;
  $scope.answer13 = /^\-cosx\b/;
  $scope.answer14 = /^sinx\b/;
  $scope.answer15 = /^tanx\b/;
  $scope.answer16 = /^\-cotx\b/;
  $scope.answer17 = /^secx\b/;
  $scope.answer18 = /^\-cscx\b/;
  $scope.answer19 = /^ln\|?secx\+tanx(?=\|)\b/;
  $scope.answer20 = /^ln\|?cscx\-cotx(?=\|)\b/;
  $scope.answer21 = /^ln\|?secx(?=\|)\b/;
  $scope.answer22 = /^ln\|?sinx(?=\|)\b/;
  

}
