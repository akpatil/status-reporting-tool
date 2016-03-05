angular.module('User').factory('userService', ['$resource', function($resource){
	return $resource('api/project/:projectId', {
		projectId: '@_id'
	}, {
		update: {
			method: 'PUT'
		}
	});
	}
]);