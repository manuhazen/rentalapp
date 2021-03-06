(function(){
	'use strict';

	angular
		.module('rentApp')
		.controller('loginController', 
			['$scope', '$location', 'Login', LoginController])

	function LoginController($scope, $location, Login) {
        $scope.login = function () {
            Login.login($scope.user)
                .then(function () {
                        $location.url('/');
                    },
                    function () {
                        $scope.login_error = "Invalid username/password combination";
                    })
        }
        $scope.logout = function(){
            delete localStorage.currentUser;
            $http.get('/auth/logout/')
                .then(function(){
                    $location.url('/login')
                });
        }
	}
})();