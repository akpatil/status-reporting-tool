angular.module('User').controller('UserController', ['$scope', '$routeParams', '$location', 'userService', function($scope, $routeParams, $location, userService){
	$scope.create = function(){
		var project = new userService({

		});
	}
	$scope.find = function(){
		userService.get()
			.then(function success(result){
					console.log(result.data);
					$scope.projects =  result.data;
				}, 
				function error(err){
					console.log(err);
				});
	};
}]);