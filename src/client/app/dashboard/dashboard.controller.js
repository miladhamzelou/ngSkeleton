(function () {
    'use strict';

    angular
        .module('app.dashboard')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['logger'];
    /* @ngInject */
    function DashboardController(logger) {
        var vm = this;
        vm.oneAtATime = true;
        vm.title = 'Dashboard';
        vm.autoRechargeStatus = false;
        vm.autoRechargeForm = {
            triggerAmount: 25
        };
        vm.finishedWizard = finishedWizard;

        activate();

        function activate() {
                logger.info('Activated Dashboard View');
        }

        function finishedWizard(){
            logger.success('You are completely done!');
        }

    }
})();
