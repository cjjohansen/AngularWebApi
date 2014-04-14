'use strict';

mvnoAngularApp.controller('registerCtrl',
	function registerCtrl($scope, $location, registerService, authService) {
		$scope.user = {};
		$scope.$watch(function () {
			return authService.getCurrentUserName();
		}, function () {
			$scope.user = authService.getCurrentUser();
		});

		$scope.isAuthenticated = function () {
			return authService.isAuthenticated();
		};

		$scope.registerUser = function (user, form) {

			debugger;
			if (!form.$valid) {
				return;
			}
			userData.save(user);
			authService.setCurrentUser(user);
			$location.url('/viewProfile/' + user.userName);
		};

		$scope.updateProfile = function (user, form) {
			if (!form.$valid) {
				return;
			}
			userData.save(user);
			authService.setCurrentUser(user);
			$location.url('/viewProfile/' + user.userName);
		};
	}
);