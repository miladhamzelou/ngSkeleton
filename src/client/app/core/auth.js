(function () {
    "use strict";
    angular.module('app.core')
        .service('auth', authService);

    authService.$inject = ['$http', 'API_URL', 'authToken', '$state'];

    function authService($http, API_URL, authToken, $state) {
        this.login = function(phone,password){
            var url = API_URL + 'login';
            return $http.post(url, {
                phone: phone,
                password: password
            }).success(authSuccessful);
        };
        this.register = function(user){
            var url = API_URL + 'register';
            return $http.post(url, user).success(authSuccessful);
        };

        function authSuccessful(res) {
            authToken.setToken(res.token);
            $state.go('dashboard');
        }
    }
})();
