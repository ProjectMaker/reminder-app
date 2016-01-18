/**
 * Created by thomasmichelet on 14/01/16.
 */
'use strict'

app.controller('newsHome', [
        '$scope',
        '$ionicModal',
        '$ionicPopover',

        function($scope, $ionicModal,$ionicPopover) {
            $scope.comments = ["Anna: Salut Tom","Tom: Salut Anna","Tom: ça biche ?"];
            $ionicModal.fromTemplateUrl('js/views/news/comments.html', {
                scope: $scope,
                animation: 'slide-in-up'
            }).then(function(modal) {
                $scope.modal = modal;
            });
            $scope.openModal = function() {
                console.log('openModal');
                $scope.modal.show();
            };
            $scope.closeModal = function() {
                $scope.modal.hide();
            };
            //Cleanup the modal when we're done with it!
            $scope.$on('$destroy', function() {
                $scope.modal.remove();
            });
            // Execute action on hide modal
            $scope.$on('modal.hidden', function() {
                // Execute action
            });
            // Execute action on remove modal
            $scope.$on('modal.removed', function() {
                // Execute action
            });

            $ionicPopover.fromTemplateUrl('js/views/places/popoverMark.html', {
                scope: $scope
            }).then(function(popover) {
                $scope.popover = popover;
            });


            $scope.openPopover = function($event) {
                console.log('ooo');
                $scope.popover.show($event);
            };
            $scope.closePopover = function() {
                $scope.popover.hide();
            };
            //Cleanup the popover when we're done with it!
            $scope.$on('$destroy', function() {
                $scope.popover.remove();
            });
            // Execute action on hide popover
            $scope.$on('popover.hidden', function() {
                // Execute action
            });
            // Execute action on remove popover
            $scope.$on('popover.removed', function() {
                // Execute action
            });
        }
    ]
).controller('newsComments', [
        '$scope',
        '$ionicModal',

        function($scope,$ionicModal) {



        }
    ]
);