angular.module("MainModule").factory("config",function(){
	return {
		nom: "Mutlti-Modules APP",
		version: "1.0",
		paths:{"/":[{caption:"Se connecter", href:"/login"}]}
	}
});