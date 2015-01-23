(function () {
    'use strict';

    angular
        .module('app.branches')
        .controller('BranchesController', BranchesController);

    BranchesController.$inject = ['$q', 'logger'];
    /* @ngInject */
    function BranchesController($q, logger) {
        var vm = this;
        vm.sessions = [];
        vm.title = 'Recharge';

        activate();

        function activate() {
            //TODO: get our sessions
            return $q.all([getSessions()]).then(function() {
                logger.info('Activated Pinless View');
            });
        }

        function getSessions() {
        }
    }
})();
