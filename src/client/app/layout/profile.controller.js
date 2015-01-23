(function() {
    'use strict';

    angular
        .module('app.layout')
        .controller('ProfileController', ProfileController);

    ProfileController.$inject = ['$state', 'routerHelper', 'authToken'];
    /* @ngInject */
    function ProfileController($state, routerHelper, authToken) {
        var vm = this;
        vm.isAuthenticated = authToken.isAuthenticated;

        activate();

        function activate() {
            // toogle sidebar
            $('.right-toggler').click(function (e) {
                $(".main-wrap").toggleClass("userbar-toggle");
                e.preventDefault();
            });
        }

    }
})();
