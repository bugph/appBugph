app.controller("loginController", function ($rootScope, $state){

	$rootScope.logar = function (){
		$state.go("timeline");
	}

});