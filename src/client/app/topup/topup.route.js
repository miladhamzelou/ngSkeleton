(function() {
    'use strict';

    angular
        .module('app.topup')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'topup',
                config: {
                    url: '/topup',
                    templateUrl: 'app/topup/topup.html',
                    controller: 'TopupController',
                    controllerAs: 'vm',
                    title: 'Topup',
                    settings: {
                        nav: 3,
                        content: '<i class="glyphicon glyphicon-phone"></i> <span class="font-bold">TopUp</span>'
                    },
                    authenticate: true
                }
            }
        ];
    }
})();
