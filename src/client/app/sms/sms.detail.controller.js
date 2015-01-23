(function () {
    "use strict";

    angular
        .module('app.sms')
        .controller('SmsDetailController', SmsDetailController);

    SmsDetailController.$inject = ['logger', 'dataservice', '$stateParams'];

    function SmsDetailController(logger, dataservice, $stateParams) {
        var vm = this;
        vm.mail = dataservice.getFilteredMails($stateParams.mailId);

        activate();

        function activate() {
            logger.info('Activated SMS Details View');
        }
    }
})();
