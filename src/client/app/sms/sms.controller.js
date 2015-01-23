(function () {
    'use strict';

    angular
        .module('app.sms')
        .controller('SmsController', SmsController)
        .directive('labelColor', labelColor);

    SmsController.$inject = ['logger', 'dataservice', '$state', '$stateParams'];
    /* @ngInject */
    function SmsController(logger, dataservice, $state, $stateParams) {
        var vm = this;
        vm.title = 'SMS';
        vm.hasAttachments = hasAttachments;
        vm.folds = [
            {name: 'Inbox', filter:''},
            {name: 'Starred', filter:'starred'},
            {name: 'Sent', filter:'sent'},
            {name: 'Important', filter:'important'},
            {name: 'Draft', filter:'draft'},
            {name: 'Trash', filter:'trash'}
        ];

        vm.labelClass = labelClass;
        vm.fold = $stateParams.fold;

        activate();

        function activate() {
            $state.transitionTo('sms.inbox');
            getMails();
            logger.info('Activated SMS View');
        }

        function getMails(){
            dataservice.getMails().then(function(data){
                vm.mails = angular.fromJson(data);
            })
        }

        function hasAttachments(index) {
            return vm.mails[index].attach ? true : false;
        }

        function labelClass(label) {
            return {
                'b-l-info': angular.lowercase(label) === 'angular',
                'b-l-primary': angular.lowercase(label) === 'bootstrap',
                'b-l-warning': angular.lowercase(label) === 'client',
                'b-l-success': angular.lowercase(label) === 'work'
            };
        }
    }

    function labelColor(){
        return function(scope, $el, attrs) {
            $el.css({'color': attrs.color});
        }
    }

})();
