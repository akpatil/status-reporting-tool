/*
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
*/
angular.module('User').factory('userService', ['$http', function($http){
	return {
		get: function(){
			return $http.get('api/project');
		}
	}
}]);