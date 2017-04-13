angular.module("ADMIN", ['ui.router', 'oc.lazyLoad'])
.config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', '$locationProvider', '$sceProvider',
    function ($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, $locationProvider, $sceProvider) {

    $sceProvider.enabled(false);
    $locationProvider.html5Mode(false).hashPrefix("");
    // configuring the lazyLoad angularjs files
    $ocLazyLoadProvider.config({
        // debug: true,
        modules: [
            {
                name: "ui.select",
                files: [
                    "bower_components/angular-ui-select/dist/select.js",
                    "bower_components/angular-ui-select/dist/select.css"
                ]
            },
            {
                name: "ui.bootstrap",
                files: [
                    "bower_components/angular-bootstrap/ui-bootstrap.js",
                    "bower_components/angular-bootstrap/ui-bootstrap-tpls.js",
                    "bower_components/angular-bootstrap/ui-bootstrap-csp.css"
                ]
            },
            {
                name: "angularUtils.directives.dirPagination",
                files: [
                    "bower_components/angularUtils-pagination/dirPagination.js",
                    "bower_components/angularUtils-pagination/dirPagination.tpl/html"
                ]
            },
            {
                name: "ngSanitize",
                files: [
                    "bower_components/angular-sanitize/angular-sanitize.min.js",
                ]
            },
            {
                name: "constantModule",
                files: ['modules/constant.module.js']
            },

            // Services
            {
                name: "storeServiceModule",
                files: ['modules/store/store.service.module.js']
            },
            {
                name: "dealServiceModule",
                files: ['modules/deal/deal.service.module.js']
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
            url: '/store/add',
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
        .state('update-store', {
            url: '/store/update/:storeId',
            templateUrl: 'modules/store/update/update.store.template.html',
            controller: "updateStoreCtrl",
            resolve: {
                updateStore: function ($ocLazyLoad) {
                    return $ocLazyLoad.load(
                        {
                            name: 'updateStoreModule',
                            files: ['modules/store/update/update.store.module.js']
                        }
                    )
                }
            }
        })

        // from deal/deal directory
        .state('deals', {
            url: '/deals',
            templateUrl: 'modules/deals/deal/deal.template.html',
            controller: "dealCtrl",
            resolve: {
                deal: function ($ocLazyLoad) {
                    return $ocLazyLoad.load(
                        {
                            name: 'dealModule',
                            files: ['modules/deals/deal/deal.module.js']
                        }
                    )
                }
            }
        })
}])
.controller("mainCtrl", ["$scope", function ($scope) {

}]);