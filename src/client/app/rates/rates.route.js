(function() {
    'use strict';

    angular
        .module('app.rates')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'rates',
                config: {
                    url: '/rates',
                    templateUrl: 'app/rates/rates.html',
                    controller: 'RatesController',
                    controllerAs: 'vm',
                    title: 'Rates',
                    settings: {
                        nav: 9,
                        content: '<i class="fa fa-calculator"></i> <span class="font-bold">Rates</span>'
                    },
                    authenticate: true
                }
            }
        ];
    }
})();
