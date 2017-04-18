angular.module("loginModule", ["Directives"])
    .controller("loginCtrl", function($scope, $http) {
        // Declaring variables
        $scope.login = {};
        $scope.register = {
            user_level: ['user'],
            status: "inactive"
        };
        // login click
        $scope.loginNow = function(login) {
            $http({
                url: mainURL + URL.login,
                method: "POST",
                data: login
            }).then(function(data) {
                console.log(data.data);
            }, function(error) {
                console.log("error")
            });
        }
    });