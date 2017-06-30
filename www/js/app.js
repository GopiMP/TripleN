
// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('tripleN', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(['$stateProvider', '$urlRouterProvider', '$ionicConfigProvider',function($stateProvider, $urlRouterProvider, $ionicConfigProvider){
  $ionicConfigProvider.tabs.position('bottom');
  $stateProvider
  .state('onboarding',{
    url : "/onboarding",
    templateUrl : "modules/onboarding/views/onboarding.html",
    controller : "onboardingCtrl"
  })
  .state('home',{
    url : "/home",
    templateUrl : "modules/home/views/hometab.html"
  })
  .state('home.domainlist',{
    url : "/domainlist",
    views:{
        'home.domainlist':{
          templateUrl :'modules/project/views/domain_List.html'
        }
      }
  })
  .state('home.trainiglist',{
    url : "/trainiglist",
    views : {
      'home.trainiglist' : {
        templateUrl : 'modules/training/views/training_program_list.html'
      }
    }
  })
  .state('home.contact',{
    url : "/contact",
    views : {
      'home.contact' : {
        templateUrl : 'modules/contact/views/contact_details.html'
      }
    }
  })
  $urlRouterProvider.otherwise("/onboarding");
}])
