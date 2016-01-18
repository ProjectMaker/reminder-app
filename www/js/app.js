'use strict'

var app = angular.module('reminder', ['ionic'])

.run(function($ionicPlatform, $location) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
    ionic.Platform.ready(function () {
      ionic.Platform.fullScreen(true,true);
    });
    $location.path('/places/search');

  });
})
