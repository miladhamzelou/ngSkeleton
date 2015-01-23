(function() {
    'use strict';

    angular
        .module('app.billpayment')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'billpayment',
                config: {
                    url: '/billpayment',
                    templateUrl: 'app/billpayment/billpayment.html',
                    controller: 'BillPaymentController',
                    controllerAs: 'vm',
                    title: 'Bill Payment',
                    settings: {
                        nav: 10,
                        content: '<i class="fa fa-usd"></i> <span class="font-bold">Bill Payment</span>'
                    },
                    authenticate: true
                }
            }
        ];
    }
})();
