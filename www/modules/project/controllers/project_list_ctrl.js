angular.module('tripleN')
.controller('project_list_ctrl', ['$scope', '$stateParams', '$rootScope', 'project_factory', '$state', function ($scope, $stateParams, $rootScope, project_factory, $state) {
		 $scope.domain_name = $stateParams.domain_name;
		 $scope.ProjectList = [];
		 project_factory.getProjectList($scope.domain_name);
		console.log("factory calling over");
		$scope.$on('$ionicView.afterEnter', function () {
			$scope.testdomain = $rootScope.projectlistdata.data;
			for (var i = 0; i < $rootScope.projectlistdata.data.length; i++) {
				$scope.ProjectList.push($scope.testdomain[i]);
			}
		});
		$scope.$on('$ionicView.afterLeave', function () {
			// Anything you can think of
			$scope.ProjectList.length = 0;
		});
		$scope.mailProject = function(project_title, project_id){
			console.log("Project : "+project_title+" , ID : "+project_id);
			$state.go('home.mail');
		}
	}])