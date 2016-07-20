'use strict';

console.log('Application Angular module is required!');

var doc = document,
    aogApp,

aogApp = angular.module('aogApp', ['ngRoute', 'ngAnimate']);

aogApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('*');

  $routeProvider
    .when('/', {
      templateUrl: 'views/front/home.php',
      controller: 'aogAppCtrl'
    })
    .when('/blog', {
      templateUrl: 'views/front/blog.php',
      controller: 'aogAppCtrl'
    })
    .when('/ministry', {
      templateUrl: 'views/front/ministry.php',
      controller: 'aogAppCtrl'
    })
    .when('/about-us', {
      templateUrl: 'views/front/about-us.php',
      controller: 'aogAppCtrl'
    })
    .when('/contact', {
      templateUrl: 'views/front/contact.php',
      controller: 'aogAppCtrl'
    })
    .when('/player', {
      templateUrl: 'views/front/player.php',
      controller: 'playerCtrl'
    })
    .otherwise({
      redirectTo: '/'
    })
}]);

aogApp.controller('playerCtrl', ['$scope', '$http', '$log', function($scope, $http, $log) {
  $scope.$on('$viewContentLoaded', function() {
    player();
  });
}]);

aogApp.controller('aogAppCtrl', ['$scope', '$http', '$log', function($scope, $http, $log) {

  $scope.$on('$viewContentLoaded', function() {
    ngViewReady();
  });

  // $scope.image_default = 'public/img/products/default-image.jpg';

  // $http.get('public/js/data/men_data.php')
  //       .success(function(data) {
  //         $scope.men_products = data;
  //       })
  //       .error(function(err) {
  //         $log.error(err);
  //       })

  // $http.get('public/js/data/woman_data.php')
  //     .success(function(data) {
  //       $scope.woman_products = data;
  //     })
  //     .error(function(err) {
  //       $log.error(err);
  //     })

  // $http.get('public/js/data/kids_data.php')
  //       .success(function(data) {
  //         $scope.kids_products = data;
  //       })
  //       .error(function(err) {
  //         $log.error(err);
  //       })
}]);