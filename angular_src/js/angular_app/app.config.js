(function(){
    'use strict';

    angular
        .module('articles')
        .config( config );

    function config ($locationProvider, $routeProvider) {
        $locationProvider.html5Mode({
            enabled: true,
        })

        $routeProvider
            .when("/", {
                template: "<home-user></home-user>",
            })
//            .when("/about", {
//                templateUrl: "/templates/about.html",
//            })
//            .when("/blog", {
//                template: "<blog-list></blog-list>",
////                redirectTo: "/"
//            })
//            .when("/blog/:id", {
//                template: "<blog-detail></blog-detail>",
//            })
//            .when("/customer", {
//                template: "<customer></customer>",
//            })
            .otherwise({
                template: "Not Found"
            });
    }

})();