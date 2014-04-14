'use strict';

mvnoAngularApp.controller('loginCtrl',
    function loginCtrl($scope, $location, userData, authService) {
    	$scope.user = { userName: "", password: "" };
    	$scope.login = function () {
    		userData.getUser($scope.user.userName, function (user) {
    			if (!!user && user.password === $scope.user.password) {
    				authService.setCurrentUser(user);
    				$location.url('/');
    			}
    		});
    	};
    }
);