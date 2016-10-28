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
            .when("/admin", {
                template: "<h1>Hello admin</h1>",
            })
//            .when("/blog/:id", {
//                template: "<blog-detail></blog-detail>",
//            })
            .otherwise({
                template: "Not Found"
            });
    }

})();