contactApp.controller('contactController', ["$http",function($http){

	var self = this;


	//Tableau des contacts existants
	this.contacts = [
		{
            "nom": "ZUCKERBERG",
            "prenom": "Mark",
            "email": "mark@facebook.com"
        },
        {
            "nom": "GATES",
            "prenom": "Bill",
            "email": "bill@microsoft.com"
        },
        {
            "nom": "JOBS",
            "prenom": "Steeve",
            "email": "Steeve@apple.com"
        }
	] ;

	// tableau des contacs existant - ceux supprimés temporairement
	this.results = []; 

	//Variable contenant le contact à modifier
	this.contact;

	//Variable contenant le contact modifié par le formulaire
	this.tmpContact = [
		{
            "nom": "",
            "prenom": "",
            "email": ""
        }
        ];

	//Chaîne indiquant la modification ou l'ajout d'un contact
	this.operation="";

	//Contrôle l'affichage du formulaire d'ajout/modification
	this.edit=false;

	//Affiche le formulaire de modification du contact
	this.toUpdate=function(contact){
		this.edit=true;
		this.operation="Modification";
		console.log(contact);
		self.tmpContact = contact;
		console.log(self.tmpContact);
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
	            "email": ""
	        }
        ];
        } else {
            self.tmpContact = [
			{
	            "nom": "",
	            "prenom": "",
	            "email": ""
	        }
	        ];

            self.operation = "";
        }

	}

	//Met à jour la liste des contacts après validation du formulaire (ajout ou modif)
	this.update = function(){
		
	}

	this.toDelete = function(contact){
		        self.results.push(contact);
				contact.deleted = true;
	}

	//Supprime de la liste le contact
	this.delete = function(contact){
		console.log("supprime");

	}

}]);
	
	angular.module("TD2").directive('contactsEleme', function() {
    return {
    	restrict:"E",
        templateUrl: 'app/contacts.html'
    };
	});

	angular.module("TD2").directive('frmContactElem', function() {
    return {
    	restrict:"E",
        templateUrl: 'app/frmContacts.html'
    };
	});