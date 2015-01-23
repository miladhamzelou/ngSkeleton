(function() {
    'use strict';

    angular
        .module('app.layout')
        .directive('htTopNav', htTopNav);

    /* @ngInject */
    function htTopNav () {
        var directive = {
            bindToController: true,
            controller: TopNavController,
            controllerAs: 'vm',
            restrict: 'EA',
            templateUrl: 'app/layout/ht-top-nav.html'
        };

        /* @ngInject */
        function TopNavController(authToken, $scope) {
            var vm = this;
            vm.isAuthenticated = authToken.isAuthenticated;
            vm.name = "Pure Minutes";
            vm.lang = { isopen: false };
            vm.langs = {en:'English', de_DE:'German', it_IT:'Italian'};
            vm.selectLang = "English";
            vm.setLang = function(langKey, $event) {
                // set the current lang
                vm.selectLang = vm.langs[langKey];
                // You can change the language during runtime
                //vm.use(langKey);
                vm.lang.isopen = !vm.lang.isopen;
            };



        }

        return directive;
    }
})();
