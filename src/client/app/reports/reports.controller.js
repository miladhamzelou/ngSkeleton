(function () {
    'use strict';

    angular
        .module('app.reports')
        .controller('ReportsController', ReportsController);

    ReportsController.$inject = ['$q', 'logger'];
    /* @ngInject */
    function ReportsController($q, logger) {
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
