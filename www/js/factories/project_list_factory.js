var mod = angular.module('tripleN.project_factory', [])
mod.factory('project_factory', function($http, $rootScope){
 $rootScope.projectlistdata;
 var serviceURL = '/data/';
	return{
		getProjectList : function(domain){
			$http.get(serviceURL + domain +'.json').then(function(results){
 			$rootScope.projectlistdata = results;
			return $rootScope.projectlistdata;

			})	
		}
	};
})