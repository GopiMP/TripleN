angular.module('tripleN')
.controller('onboardingCtrl',['$scope','$ionicSlideBoxDelegate', '$state',function($scope, $ionicSlideBoxDelegate, $state){
	$scope.sliderImages = [];
	$scope.value = {};

	$scope.$on("$ionicView.beforeEnter", function(event, data){
   // handle event
   $scope.value = 0;
});
	
	$scope.sliderImages = [ { "image" : "img/Final-Year-Project.png"}, { "image" : "img/Technical-Training.png"}, 
						  { "image" : "img/Technology.png"}];

	$scope.slideHasChanged = function(index){
		console.log("index: "+index)
		$scope.value = index;
		if(index<2) {
            $scope.onboardingBtnText = "Next";
        } else {
            $scope.onboardingBtnText = "Get Started";
        }
	}	
	$scope.onBoardClick = function(index_value){
		if(index_value < 2 ){
			$ionicSlideBoxDelegate.next();
		}else{
			console.log("last screen , need to navigate to next screen")
			$state.go('home');
		} 
	}		

}])