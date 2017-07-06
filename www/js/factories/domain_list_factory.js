var mod = angular.module('tripleN.domain_factory', [])
mod.factory('domain_factory', function($http, $rootScope){
 $rootScope.domainListData;
 var serviceURL = '/data/';


	return{
		getDomainList : function(){
			$http.get(serviceURL + 'domain_list.json').then(function(results){
 			$rootScope.domainListData = results;
 			console.log("Get from Json : "+$rootScope.domainListData);
			return $rootScope.domainListData;

			})	
		}
	};
})