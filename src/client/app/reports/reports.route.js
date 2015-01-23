(function() {
    'use strict';

    angular
        .module('app.reports')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'reports',
                config: {
                    url: '/reports',
                    templateUrl: 'app/reports/reports.html',
                    controller: 'ReportsController',
                    controllerAs: 'vm',
                    title: 'Reports',
                    settings: {
                        nav: 6,
                        content: '<i class="fa fa-line-chart"></i> <span class="font-bold">Reports</span>'
                    },
                    authenticate: true
                }
            }
        ];
    }
})();
