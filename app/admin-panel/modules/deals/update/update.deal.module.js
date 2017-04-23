/* store module */
angular.module("updateDealModule", ["ui.select", "ngSanitize", "ui.bootstrap", "toastr", "ngImgCrop"])
    .controller("updateDealCtrl", ["$scope", function ($scope) {
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
        // ng image crop js start deal_images
        $scope.Dealimage='';
        $scope.myCroppedImage='';

        var handleFileSelect=function(evt) {
          var file=evt.currentTarget.files[0];
          var reader = new FileReader();
          reader.onload = function (evt) {
            $scope.$apply(function($scope){
              $scope.Dealimage=evt.target.result;
            });
          };
          reader.readAsDataURL(file);
        };
        angular.element(document.querySelector('#deal_images')).on('change',handleFileSelect);

        // ng image crop js start side_banner image
        $scope.sideBanner='';
        $scope.myCroppedImage='';

        var handleFileSelect=function(evt) {
          var file=evt.currentTarget.files[0];
          var reader = new FileReader();
          reader.onload = function (evt) {
            $scope.$apply(function($scope){
              $scope.sideBanner=evt.target.result;
            });
          };
          reader.readAsDataURL(file);
        };
        angular.element(document.querySelector('#side_banner')).on('change',handleFileSelect);

        // ng image crop js start top banner image
        $scope.topBanner='';
        $scope.myCroppedImage='';

        var handleFileSelect=function(evt) {
          var file=evt.currentTarget.files[0];
          var reader = new FileReader();
          reader.onload = function (evt) {
            $scope.$apply(function($scope){
              $scope.topBanner=evt.target.result;
            });
          };
          reader.readAsDataURL(file);
        };
        angular.element(document.querySelector('#top_banner')).on('change',handleFileSelect);
    }])
    .filter('propsFilter', function() {
        return function(items, props) {
            var out = [];
            if (angular.isArray(items)) {
                var keys = Object.keys(props);

                items.forEach(function(item) {
                    var itemMatches = false;

                    for (var i = 0; i < keys.length; i++) {
                        var prop = keys[i];
                        var text = props[prop].toLowerCase();
                        if (item[prop].toString().toLowerCase().indexOf(text) !== -1) {
                            itemMatches = true;
                            break;
                        }
                    }

                    if (itemMatches) {
                        out.push(item);
                    }
                });
            } else {
                // Let the output be the input untouched
                out = items;
            }
            return out;
        };
    });