angular.module("ADMIN", ['ui.router', 'oc.lazyLoad'])
    .config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', '$locationProvider', '$sceProvider',
        function($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, $locationProvider, $sceProvider) {

            $sceProvider.enabled(false);
            $locationProvider.html5Mode(false).hashPrefix("");
            // configuring the lazyLoad angularjs files
            $ocLazyLoadProvider.config({
                // debug: true,
                modules: [{
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
                        name: "satellizer",
                        files: [
                            'bower_components/satellizer/dist/satellizer.js'
                        ]
                    },
                    {
                        name: "toastr",
                        files: [
                            "bower_components/angular-toastr/dist/angular-toastr.tpls.min.js",
                            "bower_components/angular-toastr/dist/angular-toastr.min.css"
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
                    },

                    // directives
                    {
                        name: "Directives",
                        files: ['modules/directives/global.module.js']
                    }
                ]
            });

            $urlRouterProvider.otherwise("/");
            $stateProvider
                .state('header', {
                    url: '',
                    templateUrl: 'modules/header/header.template.html',
                    controller: "headerCtrl",
                    resolve: {
                        redirect: function($location) {
                            if ($location.path() == undefined || $location.path() == null || $location.path() == '') {
                                $location.path('/');
                            }
                        },
                        header: function($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'headerModule',
                                files: ['modules/header/header.module.js']
                            })
                        }
                    }
                })
                .state('header.dashboard', {
                    url: '/',
                    templateUrl: 'modules/dashboard/dashboard.template.html',
                    controller: "dashBoardCtrl",
                    resolve: {
                        dashboard: function($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'DashBoardModule',
                                files: ['modules/dashboard/dashboard.module.js']
                            })
                        }
                    }
                })
                .state('login', {
                    url: '/login',
                    templateUrl: 'modules/login/login.template.html',
                    controller: "loginCtrl",
                    resolve: {
                        login: function($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'loginModule',
                                files: ['modules/login/login.module.js']
                            })
                        }
                    }
                })
                // register
                .state('register', {
                    url: '/register',
                    templateUrl: 'modules/register/register.template.html',
                    controller: "registerCtrl",
                    resolve: {
                        register: function($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'registerModule',
                                files: ['modules/register/register.module.js']
                            })
                        }
                    }
                })

            // from store/store directory
            .state('header.stores', {
                    url: '/stores',
                    templateUrl: 'modules/store/store/store.template.html',
                    controller: "storeCtrl",
                    resolve: {
                        store: function($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'storeModule',
                                files: ['modules/store/store/store.module.js']
                            })
                        }
                    }
                })
                // from store/add directory
                .state('header.add-store', {
                    url: '/store/add',
                    templateUrl: 'modules/store/add/add.store.template.html',
                    controller: "addStoreCtrl",
                    resolve: {
                        addStore: function($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'addStoreModule',
                                files: ['modules/store/add/add.store.module.js']
                            })
                        }
                    }
                })
                .state('header.update-store', {
                    url: '/store/update/:storeId',
                    templateUrl: 'modules/store/update/update.store.template.html',
                    controller: "updateStoreCtrl",
                    resolve: {
                        updateStore: function($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'updateStoreModule',
                                files: ['modules/store/update/update.store.module.js']
                            })
                        }
                    }
                })

            // from deal/deal directory
            .state('header.deals', {
                    url: '/deals',
                    templateUrl: 'modules/deals/deal/deal.template.html',
                    controller: "dealCtrl",
                    resolve: {
                        deal: function($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'dealModule',
                                files: ['modules/deals/deal/deal.module.js']
                            })
                        }
                    }
                })
                // from deals/add directory
                .state('header.add-deal', {
                    url: '/deal/add',
                    templateUrl: 'modules/deals/add/add.deal.template.html',
                    controller: "addDealCtrl",
                    resolve: {
                        addDeal: function($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'addDealModule',
                                files: ['modules/deals/add/add.deal.module.js']
                            })
                        }
                    }
                })
                .state('header.update-deal', {
                    url: '/deal/update/:dealId',
                    templateUrl: 'modules/deals/update/update.deal.template.html',
                    controller: "updateDealCtrl",
                    resolve: {
                        updateDeal: function($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'updateDealModule',
                                files: ['modules/deals/update/update.deal.module.js']
                            })
                        }
                    }
                })

            // from coupons/add directory
            .state('header.coupon', {
                    url: '/coupons',
                    templateUrl: 'modules/coupons/coupon/coupon.template.html',
                    controller: "couponCtrl",
                    resolve: {
                        coupon: function($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'couponModule',
                                files: ['modules/coupons/coupon/coupon.module.js']
                            })
                        }
                    }
                })
                .state('header.add-coupon', {
                    url: '/coupon/add',
                    templateUrl: 'modules/coupons/add/add.coupon.template.html',
                    controller: "addCouponCtrl",
                    resolve: {
                        addCoupon: function($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'addCouponModule',
                                files: ['modules/coupons/add/add.coupon.module.js']
                            })
                        }
                    }
                })
                .state('header.update-coupon', {
                    url: '/coupon/update/:couponId',
                    templateUrl: 'modules/coupons/update/update.coupon.template.html',
                    controller: "updateCouponCtrl",
                    resolve: {
                        updateCoupon: function($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'updateCouponModule',
                                files: ['modules/coupons/update/update.coupon.module.js']
                            })
                        }
                    }
                })


            // ==== settings ======
            .state('header.settings', {
                    url: '/settings',
                    templateUrl: 'modules/settings/settings/settings.template.html',
                    controller: "settingsCtrl",
                    resolve: {
                        settings: function($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'settingsModule',
                                files: ['modules/settings/settings/settings.module.js']
                            })
                        }
                    }
                })
                .state('header.settings.profile', {
                    url: '/profile',
                    templateUrl: 'modules/settings/profile/profile.template.html',
                    controller: "profileCtrl",
                    resolve: {
                        settings: function($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'profileModule',
                                files: ['modules/settings/profile/profile.module.js']
                            })
                        }
                    }
                })
                .state('header.settings.change-password', {
                    url: '/change-password',
                    templateUrl: 'modules/settings/change-password/change-password.template.html',
                    controller: "profileCtrl",
                    resolve: {
                        settings: function($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'profileModule',
                                files: ['modules/settings/profile/profile.module.js']
                            })
                        }
                    }
                })
        }
    ])
    .controller("mainCtrl", ["$scope", function($scope) {

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