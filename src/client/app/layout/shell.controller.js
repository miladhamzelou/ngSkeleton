(function() {
    'use strict';

    angular
        .module('app.layout')
        .controller('ShellController', ShellController);

    ShellController.$inject = ['$timeout', 'config', 'logger', '$rootScope', 'authToken'];
    /* @ngInject */
    function ShellController($timeout, config, logger, $rootScope, authToken) {
        var vm = this;
        vm.busyMessage = 'Please wait ...';
        vm.isBusy = true;
        vm.showSplash = true;
        vm.isAuthenticated = authToken.isAuthenticated;
        vm.asideFolded = false;

        vm.navline = {
            title: config.appTitle,
            text: 'Created by Eduardo Zamora',
            link: 'http://twitter.com/gfxrage'
        };

        $rootScope.loginUser = true;

        activate();

        function activate() {
            logger.success(config.appTitle + ' loaded!', null);
            hideSplash();
        }

        function hideSplash() {
            //Force a 1 second delay so we can see the splash.
            $timeout(function() {
                vm.showSplash = false;
            }, 1000);
        }

    }
})();
