(function () {
    'use strict';

    angular
        .module('app.topup')
        .controller('TopupController', TopupController);

    TopupController.$inject = ['$q', 'logger'];
    /* @ngInject */
    function TopupController($q, logger) {
        var vm = this;
        vm.sessions = [];
        vm.title = 'Topup';

        activate();

        function activate() {
            //TODO: get our sessions
            return $q.all([getSessions()]).then(function() {
                logger.info('Activated Topup View');
            });
        }

        function getSessions() {
        }
    }
})();
