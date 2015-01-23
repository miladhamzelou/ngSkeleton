(function () {
    'use strict';

    angular
        .module('app.core', [
            'ngAnimate', 'ngSanitize',
            'blocks.exception', 'blocks.logger', 'blocks.router',
            'ui.router', 'ngplus', 'ui.bootstrap', 'mgo-angular-wizard', 'ngStorage', 'internationalPhoneNumber', 'ngTagsInput'
        ])
        .run(function($rootScope, $state, authToken){
            $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams){
                if (toState.authenticate && !authToken.isAuthenticated()){
                    // User isn’t authenticated
                    $state.transitionTo("login");
                    event.preventDefault();
                }
            });
        });
})();
