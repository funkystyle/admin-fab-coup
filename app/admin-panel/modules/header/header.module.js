angular.module("headerModule", [])
    .controller("headerCtrl", function($scope, $state) {
        console.log("header module", $state)
        $scope.state = $state;
    })