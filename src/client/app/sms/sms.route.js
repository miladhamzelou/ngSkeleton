(function() {
    'use strict';

    angular
        .module('app.sms')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'sms',
                config: {
                    url: '/sms',
                    templateUrl: 'app/sms/sms.html',
                    controller: 'SmsController',
                    controllerAs: 'vm',
                    title: 'SMS',
                    settings: {
                        nav: 4,
                        content: '<i class="fa fa-envelope text-info-lter"></i> <span class="font-bold">SMS</span>'
                    },
                    authenticate: true
                }
            },
            {
                state: 'sms.inbox',
                config: {
                    url: '/inbox/{fold}',
                    templateUrl: 'app/sms/sms.list.html',
                    title: 'SMS Inbox'
                }
            },
            {
                state: 'sms.detail',
                config: {
                    url: '/{mailId:[0-9]{1,4}}',
                    templateUrl: 'app/sms/sms.detail.html',
                    controller: 'SmsDetailController',
                    controllerAs: 'vm',
                    title: 'SMS Detail'
                }
            },
            {
                state: 'sms.compose',
                config: {
                    url: '/compose',
                    controller:'SmsDetailController',
                    controllerAs: 'vm',
                    templateUrl: 'app/sms/sms.new.html',
                    title: 'SMS New'
                }
            }
        ];
    }
})();
