(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('dataservice', dataservice);

    dataservice.$inject = ['$q'];
    /* @ngInject */
    function dataservice($q) {
        var service = {
            getPeople: getPeople,
            getMessageCount: getMessageCount,
            getMails: getMails,
            getFilteredMails: getFilteredMails,
            getContacts: getContacts
        };



        var mails = [
            {
                "id": 10,
                "subject": "Angular is Awesome",
                "from": "james@gmail.com",
                "avatar": "images/photos/aaron_skonnard.jpg",
                "to":[
                    {"name":"Mogen", "email":"mogen.abc@hotmail.com"}
                ],
                "content":"Titudin venenatis ipsum ac feugiat. Vestibulum ullamcorper Neque quam. Aliquam sollicitudin venenatis ipsum ac feugiat.",
                "attach":[
                    {"name":"c1.jpg", "url":"img/c1.jpg"},
                    {"name":"c3.jpg", "url":"img/c3.jpg"}
                ],
                "date":"12:20 7/23/2014",
                "label":"angular",
                "fold":"important"
            },
            {
                "id": 9,
                "subject": "Bootstrap components written in pure AngularJS",
                "from": "james@gmail.com",
                "avatar": "images/photos/aaron_skonnard.jpg",
                "to":[
                    {"name":"Mogen", "email":"mogen.abc@hotmail.com"}
                ],
                "content":"Retur adipiscing elit. Morbi id neque quam. Aliquam sollicitudin venenatis ipsum ac feugiat. Vestibulum ullamcorper Neque quam. Aliquam sollicitudin venenatis ipsum ac feugiat.",
                "date":"12:20 7/23/2014",
                "label":"bootstrap",
                "fold":"important"
            },
            {
                "id": 8,
                "subject": "Nesting view in Angular",
                "from": "jessica@gmail.com",
                "avatar": "images/photos/aaron_skonnard.jpg",
                "to":[
                    {"name":"Mogen", "email":"mogen.abc@hotmail.com"}
                ],
                "content":"Neque quam. Aliquam sollicitudin venenatis ipsum ac feugiat.",
                "attach":[
                    {"name":"c0.jpg", "url":"img/c0.jpg"}
                ],
                "date":"16:20 7/22/2014",
                "label":"angular",
                "fold":"important"
            },
            {
                "id": 7,
                "subject": "Lazy loading Angular controllers, directives and services",
                "from": "lucy@hotmail.com",
                "avatar": "images/photos/aaron_skonnard.jpg",
                "to":[
                    {"name":"Mogen", "email":"mogen.abc@hotmail.com"}
                ],
                "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id neque quam. Aliquam sollicitudin venenatis ipsum ac feugiat. Vestibulum ullamcorper sodales nisi nec condimentum. Mauris convallis mauris at pellentesque volutpat. Phasellus at ultricies neque, quis malesuada augue. Donec eleifend condimentum nisl eu consectetur. Integer eleifend, nisl venenatis consequat iaculis, lectus arcu malesuada sem, dapibus porta quam lacus eu neque.",
                "date":"10:20 7/22/2014",
                "label":"angular",
                "fold":"sent",
                "state":"unread"
            },
            {
                "id": 6,
                "subject": "What a hot day",
                "from": "Jobs@jobhunter.com",
                "avatar": "images/photos/aaron_skonnard.jpg",
                "to":[
                    {"name":"Mogen", "email":"mogen.abc@hotmail.com"}
                ],
                "content":"Duis non malesuada est, quis congue nibh. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id neque quam. Aliquam sollicitudin venenatis ipsum ac feugiat. Vestibulum ullamcorper sodales nisi nec condimentum. Mauris convallis mauris at pellentesque volutpat. Phasellus at ultricies neque, quis malesuada augue. Donec eleifend",
                "date":"3:20 7/22/2014",
                "label":"client",
                "fold":"starred",
                "state":"unread"
            },
            {
                "id": 5,
                "subject": "Oho!",
                "from": "Peter@microsoft.com",
                "avatar": "images/photos/aaron_skonnard.jpg",
                "to":[
                    {"name":"Mogen", "email":"mogen.abc@hotmail.com"}
                ],
                "content":"Turpis egestas lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "date":"2:20 7/22/2014",
                "label":"",
                "fold":"sent"
            },
            {
                "id": 4,
                "subject": "Meeting",
                "from": "newsletter@yahoo.com",
                "avatar": "images/photos/aaron_skonnard.jpg",
                "to":[
                    {"name":"Mogen", "email":"mogen.abc@hotmail.com"}
                ],
                "content":"Fames ac turpis egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id neque quam. Aliquam sollicitudin venenatis ipsum ac feugiat. Vestibulum ullamcorper sodales nisi nec condimentum. Mauris convallis mauris at pellentesque volutpat. Phasellus at ultricies neque, quis malesuada augue. Donec eleifend",
                "date":"1:20 7/22/2014",
                "label":"work",
                "fold":"starred"
            },
            {
                "id": 3,
                "subject": "Product version released",
                "from": "ad@advent.com",
                "avatar": "images/photos/aaron_skonnard.jpg",
                "to":[
                    {"name":"Mogen", "email":"mogen.abc@hotmail.com"}
                ],
                "content":"Consectetur adipiscing elit. Morbi id neque quam. Aliquam sollicitudin venenatis ipsum ac feugiat. Vestibulum ullamcorper sodales nisi nec condimentum. Mauris convallis mauris at pellentesque volutpat. Phasellus at ultricies neque, quis malesuada augue. Donec eleifend",
                "date":"4:20 7/21/2014",
                "label":"",
                "fold":"starred"
            },
            {
                "id": 2,
                "subject": "Hi, What's up",
                "from": "help@helpdesk.com",
                "avatar": "images/photos/aaron_skonnard.jpg",
                "to":[
                    {"name":"Mogen", "email":"mogen.abc@hotmail.com"}
                ],
                "content":"Morbi id neque quam. Aliquam sollicitudin venenatis ipsum ac feugiat. Vestibulum ullamcorper sodales nisi nec condimentum. Mauris convallis mauris at pellentesque volutpat. Phasellus at ultricies neque, quis malesuada augue. Donec eleifend",
                "date":"6:20 7/15/2014",
                "label":"",
                "fold":"trash"
            },
            {
                "id": 1,
                "subject": "Kick-off meeting at 5:00 pm",
                "from": "developer@apple.com",
                "avatar": "images/photos/aaron_skonnard.jpg",
                "to":[
                    {"name":"Mogen", "email":"mogen.abc@hotmail.com"}
                ],
                "content":"Morbi id neque quam. Aliquam sollicitudin venenatis ipsum ac feugiat. Vestibulum ullamcorper sodales nisi nec condimentum. Mauris convallis mauris at pellentesque volutpat. Phasellus at ultricies neque, quis malesuada augue. Donec eleifend",
                "date":"18:00 6/15/2014",
                "label":"work",
                "fold":"starred"
            }
        ];

        var contacts = [
            {
                "group" : "Partner",
                "first": "Bertina",
                "last": "Robert",
                "company": "",
                "mobile": "121 364 135",
                "home": "(021) 1234 8755",
                "work": "(021) 9000 9877",
                "notes": "",
                "avatar": "img/a3.jpg"
            },
            {
                "group" : "Coworkers",
                "first": "Alexandra",
                "last": "Galton",
                "company": "Google Inc.",
                "mobile": "102 394 821",
                "home": "(021) 9876 9485",
                "work": "(021) 2130 3049",
                "notes": "",
                "avatar": "img/a0.jpg"
            },
            {
                "group" : "Family",
                "first": "Angela",
                "last": "Oscar",
                "company": "Max Inc.",
                "mobile": "100 364 135",
                "home": "(021) 1234 8755",
                "work": "(021) 9000 9877",
                "notes": "",
                "avatar": "img/a1.jpg"
            },
            {
                "group" : "Friends",
                "first": "Annabelle",
                "last": "",
                "company": "",
                "mobile": "324 123 123",
                "home": "(021) 1234 8755",
                "work": "(021) 9000 9877",
                "notes": "",
                "avatar": "img/a2.jpg"
            },
            {
                "group" : "Friends",
                "first": "Brenda",
                "last": "Lanny",
                "company": "",
                "mobile": "765 434 565",
                "home": "(021) 1234 8755",
                "work": "(021) 9000 9877",
                "notes": "",
                "avatar": "img/a4.jpg"
            },
            {
                "group" : "Group",
                "first": "Britney",
                "last": "Patricia",
                "company": "",
                "mobile": "432 364 455",
                "home": "(021) 1234 8755",
                "work": "(021) 9000 9877",
                "notes": "",
                "avatar": "img/a5.jpg"
            },
            {
                "group" : "Friends",
                "first": "Blanche",
                "last": "Julian",
                "company": "",
                "mobile": "433 364 234",
                "home": "(021) 1234 8755",
                "work": "(021) 9000 9877",
                "notes": "",
                "avatar": "img/a6.jpg"
            },
            {
                "group" : "Group",
                "first": "Deborah",
                "last": "Darryl",
                "company": "",
                "mobile": "332 431 223",
                "home": "(021) 1234 8755",
                "work": "(021) 9000 9877",
                "notes": "",
                "avatar": "img/a7.jpg"
            },
            {
                "group" : "Group",
                "first": "Elizabeth",
                "last": "",
                "company": "",
                "mobile": "543 453 890",
                "home": "(021) 1234 8755",
                "work": "(021) 9000 9877",
                "notes": "",
                "avatar": "img/a8.jpg"
            },
            {
                "group" : "Partners",
                "first": "Emily",
                "last": "Jolyon",
                "company": "",
                "mobile": "656 565 789",
                "home": "(021) 1234 8755",
                "work": "(021) 9000 9877",
                "notes": "",
                "avatar": "img/a9.jpg"
            },
            {
                "group" : "Partners",
                "first": "Gertrude",
                "last": "",
                "company": "",
                "mobile": "434 987 898",
                "home": "(021) 1234 8755",
                "work": "(021) 9000 9877",
                "notes": "",
                "avatar": "img/a8.jpg"
            },
            {
                "group" : "Family",
                "first": "Gwynne",
                "last": "Rufus",
                "company": "",
                "mobile": "098 888 897",
                "home": "(021) 1234 8755",
                "work": "(021) 9000 9877",
                "notes": "",
                "avatar": "img/a8.jpg"
            },
            {
                "group" : "Coworkers",
                "first": "Octavia",
                "last": "Swaine",
                "company": "",
                "mobile": "854 656 879",
                "home": "(021) 1234 8755",
                "work": "(021) 9000 9877",
                "notes": "",
                "avatar": "img/a8.jpg"
            }
        ];

        return service;

        function getMessageCount() { return $q.when(72); }

        function getPeople() {
            var people = [
                {firstName: 'John', lastName: 'Papa', age: 25, location: 'Florida'},
                {firstName: 'Ward', lastName: 'Bell', age: 31, location: 'California'},
                {firstName: 'Colleen', lastName: 'Jones', age: 21, location: 'New York'},
                {firstName: 'Madelyn', lastName: 'Green', age: 18, location: 'North Dakota'},
                {firstName: 'Ella', lastName: 'Jobs', age: 18, location: 'South Dakota'},
                {firstName: 'Landon', lastName: 'Gates', age: 11, location: 'South Carolina'},
                {firstName: 'Haley', lastName: 'Guthrie', age: 35, location: 'Wyoming'}
            ];
            return $q.when(people);
        }

        function getMails() {

            return $q.when(mails);
        }

        function getFilteredMails(id) {
            for(var i=0; i < mails.length; i++) {
                if(mails[i].id == id) {
                    return mails[i];
                }
            }

        }



        function getContacts(){
            return $q.when(contacts);
        }
    }
})();
