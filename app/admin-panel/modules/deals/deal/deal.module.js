/* store module */
angular.module("dealModule", ["angularUtils.directives.dirPagination"])
    .controller("dealCtrl", ["$scope", function ($scope) {
        $scope.currentPage = 1;
        $scope.pageSize = 10;
        $scope.drinks = [];

        var drinks = [
            'coke',
            'melange',
            'chai latte',
            'almdudler',
            'beer',
            'vodka',
            'coconut milk',
            'orange juice',
            'wine',
            'whisky',
            'sex on the beach'
        ];
        for (var i = 1; i <= 20; i++) {
            var drink = drinks[Math.floor(Math.random() * drinks.length)];
            $scope.drinks.push('drink ' + i + ': ' + drink);
        }

        $scope.pageChangeHandler = function(num) {
            console.log('drinks page changed to ' + num);
        };

        $scope.toggleSidebar = function () {
            if($("#sidebar-affix").css("right") == "0px") {
                $("#sidebar-affix").animate({"right": '-1000', 'display': 'none'}, 500);
            } else
            {
                $("#sidebar-affix").animate({"right": '0', 'display': 'block'}, 500);
            }
        }
    }]);