'use strict';

var mvnoAngularApp = angular.module('mvnoAngularApp', ['ngRoute', 'ngResource', 'ui.bootstrap', 'toaster', 'chieffancypants.loadingBar']);
mvnoAngularApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
	//$routeProvider.when('/events', { templateUrl: '/partials/eventList.html', controller: 'EventListCtrl' });
	//$routeProvider.when('/events/:eventId/sessions/edit/:sessionId', { templateUrl: '/partials/editSession.html', controller: 'EditSessionCtrl' });
	//$routeProvider.when('/events/:eventId/sessions/new', { templateUrl: '/partials/editSession.html', controller: 'EditSessionCtrl' });
	//$routeProvider.when('/event/:eventId', { templateUrl: '/partials/event.html', controller: 'EventCtrl' });
	//$routeProvider.when('/events/new', { templateUrl: '/partials/editEvent.html', controller: 'EditEventCtrl' });
	//$routeProvider.when('/events/edit/:eventId', { templateUrl: '/partials/editEvent.html', controller: 'EditEventCtrl' });
	$routeProvider.when('/register', { templateUrl: '/App/Register/registerView.html', controller: 'registerCtrl' });
	//$routeProvider.when('/editProfile', { templateUrl: '/partials/editProfile.html', controller: 'EditProfileCtrl' });
	//$routeProvider.when('/viewProfile/:userName', { templateUrl: '/partials/viewProfile.html', controller: 'ViewProfileCtrl' });
	$routeProvider.when('/login', { templateUrl: '/App/Login/loginView.html', controller: 'loginCtrl' });
	$routeProvider.otherwise({ redirectTo: '/' });
	$locationProvider.html5Mode(true);
}]);