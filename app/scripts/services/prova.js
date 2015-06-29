angular.module('yapp')
	.service('Prova',['$http',function($http){
	this.provami=function(){
		console.log("sono in prova, dai cazzo funziona");
	};
	
}]);