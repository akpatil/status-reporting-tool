var applicationModuleName = 'SRT'; //'S'tatus - 'R'eporting - 'T'ool
var applicationModule = angular.module(applicationModuleName, ['ngRoute', 'ngResource', 'User']);
applicationModule.config(['$locationProvider', function($locationProvider){
	$locationProvider.hashPrefix('!');
}]);
if(window.location.hash === '') window.location.hash = '#!/';
angular.element(document).ready(function(){
	angular.bootstrap(document, [applicationModuleName]);
});