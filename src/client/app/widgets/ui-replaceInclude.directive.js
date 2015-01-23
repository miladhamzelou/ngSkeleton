(function () {
    "use strict";

    angular
        .module('app.widgets')
        .directive('includeReplace', includeReplace);

    function includeReplace(){
        return {
            require: 'ngInclude',
            restrict: 'A',
            link: function(scope,el,attrs) {
                el.replaceWith(el.children());
            }
        }
    }
})();
