(function() {
    'use strict';

    angular
        .module('app.transactions')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'transactions',
                config: {
                    url: '/transactions',
                    templateUrl: 'app/transactions/transactions.html',
                    controller: 'TransactionsController',
                    controllerAs: 'vm',
                    title: 'Transactions',
                    settings: {
                        nav: 5,
                        content: '<i class="fa fa-exchange"></i> <span class="font-bold">Transactions</span>'
                    },
                    authenticate: true
                }
            }
        ];
    }
})();
