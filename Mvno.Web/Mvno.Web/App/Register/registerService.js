'use strict';

mvnoAngularApp.factory('registerService', ['registerResource', function (registerResource) {
	//    debugger;
	return {
		getUser: function (userName, callback) {
			return registerResource.get({ userName: userName }, function (user) {
				if (callback) {
					callback(user);
				}
			});
		},
		save: function (user) {
			debugger;
			registerResource.save(user);
		},
		users: function () {
			return registerResource.queryAll(function (users) {
				return users;
			});
		}
	};
}]);
