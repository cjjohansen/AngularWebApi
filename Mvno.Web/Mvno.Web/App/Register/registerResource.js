'use strict';

mvnoAngularApp.factory('registerResource', ['$resource', function ($resource) {
	var service = $resource('/api/account/register/:id', { id: '@id' });

	service.queryAll = function (callback) {
		return service.query({}, callback);
	};

	return service;
}]);