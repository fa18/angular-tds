angular.module("MainModule").service("AuthService",function(){
// Permet la connexion/déconnexion d un utilisateur, et la mémorisation des infos de connexion-->



	//Tableau des logins autorisés
	this.users = [];

	//variable objet contenant le login de l'utilisateur actif (+ éventuelles autres infos)
	this.activeUser;

	//Retourne vrai si l'utilisateur est dans la liste des utilisateurs autorisés, connecte l'utilisateur
	this.checkLogin = function (login){

	}

	//Retourne vrai si un utilisateur est authentifié 
	this.isAuth = function(){

	}

});
