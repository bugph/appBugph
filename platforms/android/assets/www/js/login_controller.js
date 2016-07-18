app.controller("loginController", function ($scope, $state, $cordovaFacebook){

	$scope.entrar = function (){
		$cordovaFacebook.login(["public_profile", "email"]).then(function(success) {
			console.log("successLogin: ", success);
	      localStorage.setItem("userID", success.authResponse.userID);
	      $scope.infos();
	    });
	}

	$scope.infos = function(){
		$cordovaFacebook.api("me", ["public_profile","user_friends"])
	    .then(function(success) {
	    	console.log("successInfos: ", success);
	      localStorage.setItem("name", success.name);
	      $state.go("timeline");
	    });
	}

	$scope.sair = function (){
		$cordovaFacebook.logout()
	    .then(function(success) {
	      console.log("success: ", success);
	    }, function (error) {
	      console.log("error: ", success);
	    });
	}

});