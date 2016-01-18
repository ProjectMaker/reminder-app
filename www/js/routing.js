/**
 * Created by thomasmichelet on 14/01/16.
 */
'use strict'
var cacheActive = false;

app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            cache: cacheActive,
            url: '/',
            templateUrl: 'js/views/user/home.html'
        })
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
            templateUrl: 'js/views/news/layout.html',
            controller: 'newsLayout',
            abstract: true
        })
        .state('news.home', {
            cache: cacheActive,
            url: '/home',
            views: {
                'news-home': {
                    templateUrl: 'js/views/news/home.html',
                    controller: 'newsHome'
                }
            }
        })
        .state('places', {
            cache: cacheActive,
            url: '/places',
            templateUrl: 'js/views/news/layout.html',
            controller: 'newsLayout',
            abstract: true
        })
        .state('places.mark-list', {
            cache: cacheActive,
            url: '/mark-list',
            views: {
                'places-mark': {
                    templateUrl: 'js/views/places/markList.html',
                    controller: 'placesMarkList'
                }
            }

        })
        .state('places.mark-map', {
            cache: cacheActive,
            url: '/mark-map',
            views: {
                'places-mark': {
                    templateUrl: 'js/views/places/markMap.html'
              }
            }

        })
        .state('places.mark-create', {
            cache: cacheActive,
            url: '/mark-create',
            views: {
                'places-mark': {
                    templateUrl: 'js/views/places/markCreate.html'
                }
            }
        })
        .state('places.search-form', {
            cache: cacheActive,
            url: '/search',
            views: {
                'places-search': {
                    templateUrl: 'js/views/places/searchForm.html'
                }
            }
        })
        .state('friends', {
            cache: cacheActive,
            url: '/friends',
            templateUrl: 'js/views/friends/layout.html',
            abstract: true,
            controller: 'friendsLayout'
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
        .state('friends.invitation', {
            cache: cacheActive,
            url: '/invitation',
            views: {
                'friends-invitation': {
                    templateUrl: 'js/views/friends/invitation.html',
                    controller: 'friendsInvitation'
                }
            }
        })
        .state('friends.suggestion', {
            cache: cacheActive,
            url: '/suggestion',
            views: {
                'friends-suggestion': {
                    templateUrl: 'js/views/friends/suggestion.html',
                    controller: 'friendsSuggestion'
                }
            }
        });

    $urlRouterProvider.otherwise('/');
});