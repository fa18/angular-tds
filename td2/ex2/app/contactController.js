contactApp.controller('contactController', ["$http",function($http){

	var self = this;


	//Tableau des contacts existants
	this.contacts = [
		{
            "nom": "ZUCKERBERG",
            "prenom": "Mark",
            "adresse": "mark@facebook.com"
        },
        {
            "nom": "GATES",
            "prenom": "Bill",
            "adresse": "bill@microsoft.com"
        },
        {
            "nom": "JOBS",
            "prenom": "Steeve",
            "adresse": "Steeve@apple.com"
        }
	] ;

	//Variable contenant le contact à modifier
	this.contact;

	//Variable contenant le contact modifié par le formulaire
	this.tmpContact;

	//Chaîne indiquant la modification ou l'ajout d'un contact
	this.operation;

	//Contrôle l'affichage du formulaire d'ajout/modification
	this.edit;

	//Affiche le formulaire de modification du contact
	this.toUpdate=function(contact){

	}

	//Affiche le formulaire d'ajout d'un contact
	this.toAdd = function(){

	}

	//Ajoute le contact
	this.add = function(){

	}

	//Met à jour la liste des contacts après validation du formulaire (ajout ou modif)
	this.update = function(){

	}

	//Supprime de la liste le contact
	this.delete = function(contact){
		
	}

}]);