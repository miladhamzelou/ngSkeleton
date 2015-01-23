(function() {
    'use strict';

    angular
        .module('app.branches')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'branches',
                config: {
                    url: '/branches',
                    templateUrl: 'app/branches/branches.html',
                    controller: 'BranchesController',
                    controllerAs: 'vm',
                    title: 'Branches',
                    settings: {
                        nav: 7,
                        content: '<i class="fa fa-code-fork"></i> <span class="font-bold">Branches</span>'
                    },
                    authenticate: true
                }
            }
        ];
    }
})();
