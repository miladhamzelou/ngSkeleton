(function() {
    'use strict';

    angular
        .module('app.pinless')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'pinless',
                config: {
                    url: '/pinless',
                    templateUrl: 'app/pinless/pinless.html',
                    controller: 'PinlessController',
                    controllerAs: 'vm',
                    title: 'Pinless',
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-phone"></i> <span class="font-bold">Pinless</span>'
                    },
                    authenticate: true
                }
            }
        ];
    }
})();
