angular.module('yapp')
	.service('Login',['$http',function($http){
	this.checkLogin=function(username,password){
		//inserire la chiamata POST al backend fornendo username e password----> il backend torna check e ruolo(admin o studente)
		var role=0;
		var ruolo=username;
		if(ruolo==="admin"){
			role=0;
		}
		if(ruolo==="student"){
			role=1;
		}
		if(ruolo==="error"){
			role=2;
		}
		return role;

	};
	
}]);