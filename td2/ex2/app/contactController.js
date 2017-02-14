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
	this.tmpContact = [
		{
            "nom": "",
            "prenom": "",
            "adresse": ""
        }
        ];

	//Chaîne indiquant la modification ou l'ajout d'un contact
	this.operation="";

	//Contrôle l'affichage du formulaire d'ajout/modification
	this.edit=false;

	//Affiche le formulaire de modification du contact
	this.toUpdate=function(contact){

		this.operation="Modification";
	}

	//Affiche le formulaire d'ajout d'un contact
	this.toAdd = function(){
		this.edit=true;
		this.operation="Ajout";

	}

	//Ajoute le contact
	this.add = function(){
		console.log(self.tmpContact);
		if (self.operation == "Ajout") {
            self.contacts.push(self.tmpContact);
            self.tmpContact = [
			{
	            "nom": "",
	            "prenom": "",
	            "adresse": ""
	        }
        ];
        } else {
            self.tmpContact = [
			{
	            "nom": "",
	            "prenom": "",
	            "adresse": ""
	        }
	        ];

            self.operation = "";
        }

	}

	//Met à jour la liste des contacts après validation du formulaire (ajout ou modif)
	this.update = function(){

	}

	//Supprime de la liste le contact
	this.delete = function(contact){
		
	}

}]);

	angular.module("TD2").directive('frmContactElem', function() {
    return {
    	restrict:"E",
        templateUrl: 'app/frmContacts.html'
    };
	});