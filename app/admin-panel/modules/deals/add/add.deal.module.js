angular.module("addDealModule", ["ui.select", "ngSanitize", "ui.bootstrap", "toastr", "ngImgCrop"])
    .controller("addDealCtrl", ["$scope", function ($scope) {
        $scope.store = {
            created_date: new Date(),
            modified_date: new Date()
        };
        $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
        $scope.format = $scope.formats[1];
        $scope.popup2 = {
            opened: false
        };
        $scope.open2 = function () {
            $scope.popup2.opened = true;
        };
        $scope.clear = function() {
            $scope.store.relatedStore = undefined;
        };

        $scope.addStore = function (store) {
            toastr.success('We do have the Kapua suite available.', 'Turtle Bay Resort', {timeOut: 5000})
        };

        $scopesomeGroupFn = function (item){
            if (item.name[0] >= 'A' && item.name[0] <= 'M')
                return 'From A - M';

            if (item.name[0] >= 'N' && item.name[0] <= 'Z')
                return 'From N - Z';

        };

        $scope.people = [
            { name: 'Adam',      email: 'adam@email.com',      age: 12, country: 'United States' },
            { name: 'Amalie',    email: 'amalie@email.com',    age: 12, country: 'Argentina' },
            { name: 'Estefanía', email: 'estefania@email.com', age: 21, country: 'Argentina' },
            { name: 'Adrian',    email: 'adrian@email.com',    age: 21, country: 'Ecuador' },
            { name: 'Wladimir',  email: 'wladimir@email.com',  age: 30, country: 'Ecuador' },
            { name: 'Samantha',  email: 'samantha@email.com',  age: 30, country: 'United States' },
            { name: 'Nicole',    email: 'nicole@email.com',    age: 43, country: 'Colombia' },
            { name: 'Natasha',   email: 'natasha@email.com',   age: 54, country: 'Ecuador' },
            { name: 'Michael',   email: 'michael@email.com',   age: 15, country: 'Colombia' },
            { name: 'Nicolás',   email: 'nicolas@email.com',    age: 43, country: 'Colombia' }
        ];
        // ng image crop js start deal_images
        var fileUpload = document.getElementById("deal_images");
        fileUpload.onchange = function () {
            if (typeof (FileReader) != "undefined") {
                var dvPreview = document.getElementById("dealimage");
                dvPreview.innerHTML = "";
                var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.jpg|.jpeg|.gif|.png|.bmp)$/;
                for (var i = 0; i < fileUpload.files.length; i++) {
                    var file = fileUpload.files[i];
                    if (regex.test(file.name.toLowerCase())) {
                        var reader = new FileReader();
                        reader.onload = function (e) {
                            var img = document.createElement("IMG");
                            img.height = "100";
                            img.width = "100";
                            img.src = e.target.result;
                            // console.log("image", img.src)
                            dvPreview.appendChild(img);
                        }
                        reader.readAsDataURL(file);
                    } else {
                        alert(file.name + " is not a valid image file.");
                        dvPreview.innerHTML = "";
                        return false;
                    }
                }
            } else {
                alert("This browser does not support HTML5 FileReader.");
            }
        }

        // ng image crop js start side_banner image

        var sidebanner = document.getElementById("side_banner");
        sidebanner.onchange = function () {
            if (typeof (FileReader) != "undefined") {
                var dvPreview = document.getElementById("sideBanner");
                dvPreview.innerHTML = "";
                var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.jpg|.jpeg|.gif|.png|.bmp)$/;
                for (var i = 0; i < sidebanner.files.length; i++) {
                    var file = sidebanner.files[i];
                    if (regex.test(file.name.toLowerCase())) {
                        var reader = new FileReader();
                        reader.onload = function (e) {
                            var img = document.createElement("IMG");
                            img.height = "100";
                            img.width = "100";
                            img.src = e.target.result;
                            // console.log("image", img.src)
                            dvPreview.appendChild(img);
                        }
                        reader.readAsDataURL(file);
                    } else {
                        alert(file.name + " is not a valid image file.");
                        dvPreview.innerHTML = "";
                        return false;
                    }
                }
            } else {
                alert("This browser does not support HTML5 FileReader.");
            }
        }

        // ng image crop js start top banner image
        var topbanner = document.getElementById("top_banner");
        topbanner.onchange = function () {
            if (typeof (FileReader) != "undefined") {
                var dvPreview = document.getElementById("topbanner");
                dvPreview.innerHTML = "";
                var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.jpg|.jpeg|.gif|.png|.bmp)$/;
                for (var i = 0; i < topbanner.files.length; i++) {
                    var file = topbanner.files[i];
                    if (regex.test(file.name.toLowerCase())) {
                        var reader = new FileReader();
                        reader.onload = function (e) {
                            var img = document.createElement("IMG");
                            img.height = "100";
                            img.width = "100";
                            img.src = e.target.result;
                            // console.log("image", img.src)
                            dvPreview.appendChild(img);
                        }
                        reader.readAsDataURL(file);
                    } else {
                        alert(file.name + " is not a valid image file.");
                        dvPreview.innerHTML = "";
                        return false;
                    }
                }
            } else {
                alert("This browser does not support HTML5 FileReader.");
            }
        }
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