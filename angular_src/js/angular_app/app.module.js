(function(){
    'use strict';

    angular
        .module('articles', [
            // external
//            'angularUtils.directives.dirPagination',
            'ngResource',
            'ngRoute',
//            'ui.bootstrap',

            //internal
            'homeUser',
            'headerUser'
        ]);
}) ();
