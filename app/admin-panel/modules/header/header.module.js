angular.module("headerModule", [])
    .controller("headerCtrl", function($scope, $state) {
        $scope.state = $state;
    })