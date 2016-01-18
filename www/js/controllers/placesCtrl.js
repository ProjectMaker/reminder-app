/**
 * Created by thomasmichelet on 15/01/16.
 */
app.controller('placesMarkList', [
    '$scope',

    function($scope) {
        $scope.places = ["Le chien fou", "Aux petits pois", "Le routabaga"];


    }
]).controller('friendsLayout', [
    '$scope',
    '$ionicSideMenuDelegate',

    function($scope,$ionicSideMenuDelegate) {
        $scope.toggleMenu = function() {
            $ionicSideMenuDelegate.toggleLeft();
        }
    }
]);