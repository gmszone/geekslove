angular.module('starter.controllers', [])

  .controller('MainCtrl', function ($scope, $ionicPopover) {
    $ionicPopover.fromTemplateUrl('templates/more.html', {
      scope: $scope
    }).then(function (popover) {
      $scope.popover = popover;
    });

    $scope.openPopover = function ($event) {
      $scope.popover.show($event);
    };

    $scope.closePopover = function () {
      $scope.popover.hide();
    };

    $scope.$on('$destroy', function () {
      $scope.popover.remove();
    });

    $scope.$on('popover.hidden', function () {

    });

    $scope.$on('popover.removed', function () {
    });
  })

  .controller('HomeCtrl', function ($scope, $ionicPopover) {

  })

  .controller('PopoverCtrl', function ($scope, $ionicPopover) {

  })

  .controller('BlogCtrl', function ($scope, Blog, $cordovaStatusbar) {
    if($cordovaStatusbar.isVisible()){
      $cordovaStatusbar.hide();
    }
    $scope.blogs = Blog.all();
  })

  .controller('LikeCtrl', function ($scope, $cordovaAppRate) {
    $scope.promptRating = function () {
      $cordovaAppRate.promptForRating(true).then(function (result) {
        console.log("result: " + result);
        $scope.words = result;
      }, function (error) {
        $scope.words = result;
      })
    };
  })


  .controller('BlogDetailCtrl', function ($scope, $stateParams, Blog, $cordovaStatusbar) {
    $cordovaStatusbar.overlaysWebView(true);

    $cordovaStatusbar.hide();

    $scope.md = 'assets/' + $stateParams.blogId + '.md';
    $scope.blog = Blog.get($stateParams.blogId);
  })

  .controller('AccountCtrl', function ($scope, $log, $cordovaEmailComposer, $cordovaStatusbar) {
    if(!$cordovaStatusbar.isVisible()){
      $cordovaStatusbar.show();
    }
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
      });
    }
  });
