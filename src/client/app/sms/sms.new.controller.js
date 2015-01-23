(function () {
    "use strict";
    angular
        .module('app.sms')
        .controller('SmsNewController', SmsNewController);

    SmsNewController.$inject = [];

    function SmsNewController(){
        var vm = this;

        vm.mail = {
            to: '',
            subject: '',
            content: ''
        };
        vm.tolist = [{text:'+50660407129', name:'Eduardo Zamora'}];
        vm.validatephone = validatephone;

        vm.addReceipent = function(num){
           vm.tolist.push({
               name: '',
               phone: num
           });
        };

        function validatephone(tag){
            console.log(tag);
            console.log("here");
        }

    }
})();
