/**
 * Created by thomasmichelet on 14/01/16.
 */

'use strict'

app.controller('friendsInvitation', [
    '$scope',

    function($scope) {
        $scope.users = ["Anna","Tom","Nico"];
    }
]).controller('friendsSuggestion', [
    '$scope',

    function($scope) {
        $scope.users = ["Alix","Anoitine"];
    }
])