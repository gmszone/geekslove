angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope) {})

.controller('BlogCtrl', function($scope, Blog) {
  $scope.blogs = Blog.all();
})

.controller('LikeCtrl', function($scope, $cordovaAppRate) {
    $scope.promptRating = function () {
      $cordovaAppRate.promptForRating(true).then(function (result) {
        console.log("result: " + result);
        $scope.words = result;
      }, function (error) {
        $scope.words = result;
      })
    };
})


.controller('BlogDetailCtrl', function($scope, $stateParams, Blog) {
    $scope.md ='assets/' + $stateParams.blogId + '.md';
    $scope.blog = Blog.get($stateParams.blogId);
})

.controller('AccountCtrl', function($scope, $log, $cordovaAppRate) {
  $scope.words = '';
});
