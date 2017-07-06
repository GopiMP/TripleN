angular.module('tripleN')
.controller('domain_list_ctrl',['$scope', '$state','domain_factory', '$rootScope', function($scope, $state, domain_factory, $rootScope){
$scope.domainListtest = [];
//$scope.domainList = ["Embeded", "DSP/DIP", "Java", "Dot Net", "NS2", "Android","VLSI", "PLC/SCADA", "Power Electronics", "Power Systems"];
domain_factory.getDomainList();
 $scope.getMsg = function(){
 	$scope.testdomain = $rootScope.domainListData.data;
	console.log("Initial :"+$rootScope.domainListData.data)
 	alert('welcome to projects');
 	for(var i = 0; i< $rootScope.domainListData.data.length; i++){
 		$scope.domainListtest.push = $scope.testdomain[i].title;
 		console.log("Title : "+$scope.testdomain[i].title);
 		console.log("Title : "+$scope.domainListtest)
 	}
 }

}])