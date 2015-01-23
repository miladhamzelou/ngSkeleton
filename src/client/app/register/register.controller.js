(function () {
    'use strict';

    angular
        .module('app.register')
        .controller('RegisterController', RegisterController);

    RegisterController.$inject = ['logger', 'auth'];
    /* @ngInject */
    function RegisterController(logger, auth) {
        var vm = this;
        vm.title = 'Register';
        vm.user = {};
        vm.submit = submit;

        activate();

        function activate() {
            logger.info('Activated Register View');
        }

        function submit() {
            auth.register(vm.user)
                .success(function(res){
                    console.log("good");
                })
                .error(function(err){
                    console.log("bad");
                });
        }

    }
})();
