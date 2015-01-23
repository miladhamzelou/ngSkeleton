(function () {
    'use strict';

    angular
        .module('app.accessnumbers')
        .controller('AccessNumbersController', AccessNumbersController);

    AccessNumbersController.$inject = ['$q', 'logger'];
    /* @ngInject */
    function AccessNumbersController($q, logger) {
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
