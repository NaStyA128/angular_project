(function(){
    'use strict';

    angular
        .module('homeUser')
        .component('homeUser', {
            templateUrl: '/js/angular_app/home-user/home-user.html',
            controller: function($http, $location, $routeParams) {
                console.log('home');
            }
        });
})();