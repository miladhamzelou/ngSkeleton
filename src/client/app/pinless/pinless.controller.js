(function () {
    'use strict';

    angular
        .module('app.pinless')
        .controller('PinlessController', PinlessController);

    PinlessController.$inject = ['logger'];
    /* @ngInject */
    function PinlessController(logger) {
        var vm = this;
        vm.isNewPhone = isNewPhone;
        vm.registerPhone = registerNewPhone;
        vm.registeredPhones = ['12122222222'];
        vm.phoneChecked = true;
        vm.languages = [{ name: "English", id: 1 },{ name: "Spanish", id: 2 }];
        vm.selectedLang = vm.languages[0];

        activate();

        function activate() {
            logger.info('Activated Pinless View');
        }

        function registerNewPhone(state) {
            if(state == true) {
                vm.newPhone = isNewPhone();
                if(vm.newPhone == false) {
                    vm.registeredPhones.push(vm.phone);
                    vm.phoneChecked = false;
                    return;
                }
                vm.phoneChecked = true;
            }
        }

        function isNewPhone() {
            return vm.registeredPhones.indexOf(vm.phone) != -1;
        }
    }
})();
