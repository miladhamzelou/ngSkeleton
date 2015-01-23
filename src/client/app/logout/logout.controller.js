(function () {
    "use strict";
    angular.module('app.logout')
        .controller('LogoutController', LogoutController);

    LogoutController.$inject = ['authToken', '$state'];

    function LogoutController(authToken, $state) {
        authToken.removeToken();
        angular.element('.right-toggler').trigger('click');
        $state.go('login');
    }
})();
