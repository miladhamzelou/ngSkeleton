(function() {
    'use strict';

    angular
        .module('app.accessnumbers')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'accessnumbers',
                config: {
                    url: '/accessnumbers',
                    templateUrl: 'app/accessnumbers/accessnumber.html',
                    controller: 'AccessNumbersController',
                    controllerAs: 'vm',
                    title: 'Access Numbers',
                    settings: {
                        nav: 8,
                        content: '<i class="fa fa-tty"></i> <span class="font-bold">Access Numbers</span>'
                    },
                    authenticate: true
                }
            }
        ];
    }
})();
