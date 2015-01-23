(function () {
    "use strict";

    angular
        .module('app.widgets')
        .filter('fromNow', fromNow);

    function fromNow(){
        return function(date) {
            return moment(new Date(date)).fromNow();
        }
    }
})();
