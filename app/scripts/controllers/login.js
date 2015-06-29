'use strict';

/**
 * @ngdoc function
 * @name yapp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of yapp
 */
angular.module('yapp')
  .controller('loginController',['Prova','Login','$scope','$location', function(Prova,Login,$scope, $location) {
 	$scope.login=Login;
 	$scope.prova=Prova;
 	$scope.prova.provami();
  	var role=null;
    $scope.submit = function(username,password) {

    	
    	role=$scope.login.checkLogin(username,password);
    	switch(role){
    		case 0: $location.path('/admin');
    				break;
    		case 1: $location.path('/student');
    				break;
    		default: console.log("errore nella login");
    				break;
    	}
      //$location.path('/dashboard');
    }
  }]);
