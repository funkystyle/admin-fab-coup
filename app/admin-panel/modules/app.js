angular.module("ADMIN", ['ui.router', 'oc.lazyLoad'])
.config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', '$locationProvider',
    function ($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, $locationProvider) {

    $locationProvider.html5Mode(false).hashPrefix("");
    // configuring the lazyLoad angularjs files
    $ocLazyLoadProvider.config({
        // debug: true,
        modules: [
            {
                name: "ui.select",
                files: [
                    "bower_components/angular-ui-select/dist/select.min.js",
                    "bower_components/angular-ui-select/dist/select.min.css"
                ]
            },
            {
                name: "angularUtils.directives.dirPagination",
                files: [
                    "bower_components/angularUtils-pagination/dirPagination.js",
                    "bower_components/angularUtils-pagination/dirPagination.tpl/html"
                ]
            }
        ]
    });
    
    $urlRouterProvider.otherwise("/");
    $stateProvider
        .state('dashboard', {
            url: '/',
            templateUrl: 'modules/dashboard/dashboard.template.html',
            controller: "dashBoardCtrl",
            resolve: {
                dashboard: function ($ocLazyLoad) {
                    return $ocLazyLoad.load(
                        {
                            name: 'DashBoardModule',
                            files: ['modules/dashboard/dashboard.module.js']
                        }
                    )
                }
            }
        })
        .state('login', {
            url: '/login',
            templateUrl: 'modules/login/login.template.html',
            controller: "loginCtrl",
            resolve: {
                login: function ($ocLazyLoad) {
                    return $ocLazyLoad.load(
                        {
                            name: 'loginModule',
                            files: ['modules/login/login.module.js']
                        }
                    )
                }
            }
        })
        // register
        .state('register', {
            url: '/register',
            templateUrl: 'modules/register/register.template.html',
            controller: "registerCtrl",
            resolve: {
                register: function ($ocLazyLoad) {
                    return $ocLazyLoad.load(
                        {
                            name: 'registerModule',
                            files: ['modules/register/register.module.js']
                        }
                    )
                }
            }
        })

        // from store/store directory
        .state('stores', {
            url: '/stores',
            templateUrl: 'modules/store/store/store.template.html',
            controller: "storeCtrl",
            resolve: {
                store: function ($ocLazyLoad) {
                    return $ocLazyLoad.load(
                        {
                            name: 'storeModule',
                            files: ['modules/store/store/store.module.js']
                        }
                    )
                }
            }
        })
        // from store/add directory
        .state('add-store', {
            url: '/add-store',
            templateUrl: 'modules/store/add/add.store.template.html',
            controller: "addStoreCtrl",
            resolve: {
                addStore: function ($ocLazyLoad) {
                    return $ocLazyLoad.load(
                        {
                            name: 'addStoreModule',
                            files: ['modules/store/add/add.store.module.js']
                        }
                    )
                }
            }
        })
}])
.controller("mainCtrl", ["$scope", function ($scope) {

}]);