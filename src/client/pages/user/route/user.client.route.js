angular.module('User').config(['$routeProvider', function($routeProvider){
	$routeProvider

	.when('/project', {
		templateUrl: '/pages/user/view/list-projects.client.view.html'
	})

	.when('/project/create', {
		templateUrl: '/pages/user/view/create-project.client.view.html'
	})
}]);