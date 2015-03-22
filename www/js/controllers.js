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

.controller('AccountCtrl', function ($scope, $log, $cordovaOauth, $cordovaEmailComposer) {
  $scope.share = function () {
    $cordovaOauth.github("CLIENT_ID_HERE", ["email"]).then(function (result) {
      // results
    }, function (error) {
      // error
    });
  };
  $scope.sendMail = function () {
    $cordovaEmailComposer.isAvailable().then(function () {
    }, function () {
    });

    var email = {
      to: 'hug8217@qq.com',
      subject: '',
      body: '',
      isHtml: true
    };

    $cordovaEmailComposer.open(email).then(null, function () {
      // user cancelled email
    });
  }
});
