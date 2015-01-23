(function () {
    'use strict';

    angular
        .module('app.login')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['logger', 'auth'];
    /* @ngInject */
    function LoginController(logger, auth) {
        var vm = this;
        vm.title = 'Login';
        vm.loginBtn = loginBtn;
        vm.user = {};

        activate();

        function activate() {
            logger.info('Activated Login View');
        }

        function loginBtn() {
            auth.login(vm.user.phone,vm.user.password).then(function(data){
                console.log("Login successful! : " + data);
            });
        }
    }
})();
