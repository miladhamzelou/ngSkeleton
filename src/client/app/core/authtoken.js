(function () {
    "use strict";
    angular.module('app.core')
           .factory('authToken', authToken);

    authToken.$inject = ['$window'];

    function authToken($window) {
        var storage = $window.localStorage;
        var cachedToken;
        var userToken = 'userToken';
        var authFactory = {
            setToken: function(token) {
                cachedToken = token;
                storage.setItem(userToken, token);
            },
            getToken: function(){
                if(!cachedToken)
                    cachedToken =  storage.getItem(userToken);

                return cachedToken;
            },
            isAuthenticated: function(){
                return !!authFactory.getToken();
            },
            removeToken: function(){
                cachedToken = null;
                storage.removeItem(userToken);
            }
        };
        return authFactory;
    }
})();
