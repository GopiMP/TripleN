angular.module('tripleN')
.controller('domain_list_ctrl',['$scope', '$state',function($scope, $state){

$scope.domainList = ["Embeded", "DSP/DIP", "Java", "Dot Net", "NS2", "Android","VLSI", "PLC/SCADA", "Power Electronics", "Power Systems"]
 $scope.getMsg = function(){
 	alert('welcome to projects');
 }

}])