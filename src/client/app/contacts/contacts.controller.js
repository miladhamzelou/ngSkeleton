(function () {
    'use strict';

    angular
        .module('app.contacts')
        .controller('ContactsController', ContactsController);

    ContactsController.$inject = ['logger', 'dataservice', '$filter'];
    /* @ngInject */
    function ContactsController(logger, dataservice, $filter) {
        var vm = this;
        vm.filter = '';
        vm.groups = [
            {name: 'Coworkers'},
            {name: 'Family'},
            {name: 'Friends'},
            {name: 'Partners'},
            {name: 'Group'}
        ];

        vm.createGroup = function(){
            var group = {name: 'New Group'};
            group.name = vm.checkItem(group, vm.groups, 'name');
            vm.groups.push(group);
        };

        vm.checkItem = function(obj, arr, key){
            var i=0;
            angular.forEach(arr, function(item) {
                if(item[key].indexOf( obj[key] ) == 0){
                    var j = item[key].replace(obj[key], '').trim();
                    if(j){
                        i = Math.max(i, parseInt(j)+1);
                    }else{
                        i = 1;
                    }
                }
            });
            return obj[key] + (i ? ' '+i : '');
        };

        vm.deleteGroup = function(item){
            vm.groups.splice(vm.groups.indexOf(item), 1);
        };

        vm.selectGroup = function(item){
            angular.forEach(vm.groups, function(item) {
                item.selected = false;
            });
            vm.group = item;
            vm.group.selected = true;
            vm.filter = item.name;
        };

        vm.selectItem = function(item){
            angular.forEach(vm.items, function(item) {
                item.selected = false;
                item.editing = false;
            });
            vm.item = item;
            vm.item.selected = true;
        };

        vm.deleteItem = function(item){
            vm.items.splice(vm.items.indexOf(item), 1);
            vm.item = $filter('orderBy')(vm.items, 'first')[0];
            if(vm.item) vm.item.selected = true;
        };

        vm.createItem = function(){
            var item = {
                group: 'Friends',
                avatar:'img/a0.jpg'
            };
            vm.items.push(item);
            vm.selectItem(item);
            vm.item.editing = true;
        };

        vm.editItem = function(item){
            if(item && item.selected){
                item.editing = true;
            }
        };

        vm.doneEditing = function(item){
            item.editing = false;
        };

        activate();

        function activate() {
            getContacts();
            logger.info('Activated Contact View');
        }

        function getContacts() {
            dataservice.getContacts().then(function(data){
                vm.items = angular.fromJson(data);
                vm.item = $filter('orderBy')(vm.items, 'first')[0];
                vm.item.selected = true;
            });
        }
    }
})();
