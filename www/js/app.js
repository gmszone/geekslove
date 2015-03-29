angular.module('starter', ['ionic', 'ngCordova', 'hc.marked', 'starter.controllers', 'starter.services'])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })

  .run(function ($cordovaSplashscreen) {
    setTimeout(function () {
      $cordovaSplashscreen.hide()
    }, 2000)
  })

  .config(['markedProvider', function (markedProvider) {
    markedProvider.setOptions({
      gfm: true,
      tables: true
    })
  }])

  .config(function ($cordovaAppRateProvider) {
    document.addEventListener("deviceready", function () {
      var prefs = {
        language: 'zh-Hans',
        appName: '极客爱情',
        androidURL: 'market://details?id=com.phodal.geekslove'
      };
      var strings = {
        title: '动动手指，为我们打分',
        message: '无论是来自亲的赞美诗，还是让亲唾沫横飞的槽点，我们只愿——让评价来得更猛烈些吧！',
        cancelButtonLabel: '残忍地拒绝',
        laterButtonLabel: '容我考虑考虑',
        rateButtonLabel: '马上就去'
      };
      $cordovaAppRateProvider.setCustomLocale(strings);
      $cordovaAppRateProvider.setPreferences(prefs);
    }, false);
  })

  .config(function ($ionicConfigProvider) {
    $ionicConfigProvider.tabs.position('bottom');
  })

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('tab', {
        url: "/tab",
        abstract: true,
        templateUrl: "templates/tabs.html",
        controller: "MainCtrl"
      })

      .state('tab.home', {
        url: '/home',
        views: {
          'tab-home': {
            templateUrl: 'templates/tab-homepage.html',
            controller: 'HomeCtrl'
          }
        }
      })

      .state('tab.blog', {
        url: '/blog',
        views: {
          'tab-blog': {
            templateUrl: 'templates/tab-blog.html',
            controller: 'BlogCtrl'
          }
        }
      })
      .state('tab.blog-detail', {
        url: '/blog/:blogId',
        views: {
          'tab-blog': {
            templateUrl: 'templates/blog-detail.html',
            controller: 'BlogDetailCtrl'
          }
        }
      })

      .state('tab.account', {
        url: '/account',
        views: {
          'tab-account': {
            templateUrl: 'templates/tab-about.html',
            controller: 'AccountCtrl'
          }
        }
      })

    $urlRouterProvider.otherwise('/tab/home');

  });
