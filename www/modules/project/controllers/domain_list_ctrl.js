angular.module('tripleN')
	.controller('domain_list_ctrl', ['$scope', '$state', 'domain_factory', '$rootScope', function ($scope, $state, domain_factory, $rootScope) {
		$scope.domainList = [];
		domain_factory.getDomainList();
		$scope.$on('$ionicView.afterEnter', function () {

			$scope.testdomain = $rootScope.domainListData.data;
			console.log("Initial :" + $rootScope.domainListData.data)
			for (var i = 0; i < $rootScope.domainListData.data.length; i++) {
				$scope.domainList.push($scope.testdomain[i]);
			}
		});
		$scope.$on('$ionicView.afterLeave', function () {
			// Anything you can think of
			$scope.domainList.length = 0;
		});
		$scope.project_list = function(domain){
			console.log("Domain name : "+domain);
			$state.go('home.projectlist',{
				domain_name : domain
			});
		}

	}])