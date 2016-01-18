/**
 * Created by thomasmichelet on 15/01/16.
 */
app.controller('newsLayout', [
    '$scope',
    '$ionicPopover',
    '$ionicSideMenuDelegate',

    function($scope,$ionicPopover,$ionicSideMenuDelegate) {
        $scope.toggleMenu = function() {
            $ionicSideMenuDelegate.toggleLeft();
        }

        document.body.classList.add('platform-ios');

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
]);
