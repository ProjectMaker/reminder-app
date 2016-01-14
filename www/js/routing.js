/**
 * Created by thomasmichelet on 14/01/16.
 */
'use strict'
var cacheActive = false;

app.config(function($stateProvider) {
    $stateProvider
        .state('create-user', {
            cache: cacheActive,
            url: '/create-user',
            templateUrl: 'js/views/user/create.html'
        })
        .state('create-user-confirmation', {
            cache: cacheActive,
            url: '/create-user-confirmation',
            templateUrl: 'js/views/user/createConfirmation.html'
        })
        .state('news', {
            cache: cacheActive,
            url: '/news',
            templateUrl: 'js/views/layoutConnected.html',
            abstract: true
        })
        .state('news.home', {
            cache: cacheActive,
            url: '/home',
            views: {
                'news-home': {
                    templateUrl: 'js/views/news/home.html',
                }
            }
        })
        .state('friends', {
            cache: cacheActive,
            url: '/friends',
            templateUrl: 'js/views/layoutConnected.html',
            abstract: true
        })
        .state('friends.home', {
            cache: cacheActive,
            url: '/home',
            views: {
                'friends-home': {
                    templateUrl: 'js/views/friends/home.html'
                }
            }
        })
});