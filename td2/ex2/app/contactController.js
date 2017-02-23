contactApp.controller('contactController', ["$http",function($http){

	var self = this;


	//Tableau des contacts existants
	this.contacts = [
		{
            "nom": "ZUCKERBERG",
            "prenom": "Mark",
            "email": "mark@facebook.com",
            "deleted": "false"
        },
        {
            "nom": "GATES",
            "prenom": "Bill",
            "email": "bill@microsoft.com",
            "deleted": "false"
        },
        {
            "nom": "JOBS",
            "prenom": "Steeve",
            "email": "Steeve@apple.com",
            "deleted": "false"
        }
	] ;

	// tableau des contacs existant - ceux supprimés temporairement
	this.results = []; 

	this.suprItems = [];

	//Variable contenant le contact à modifier
	this.contact;

	//Variable contenant le contact modifié par le formulaire
	this.tmpContact = [
		{
            "nom": "",
            "prenom": "",
            "email": "",
            "deleted": "false"
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

	//contact temporaire = vierge
	this.vierge = function(){
		self.tmpContact = [
			{
	            "nom": "",
	            "prenom": "",
	            "email": "",
	            "deleted": "false"
	        }
        ];
        this.edit=false;
	}	
	//Ajoute le contact
	this.add = function(){
		self.tmpContact.deleted="false";
		console.log(self.tmpContact);
		console.log(this.operation);
		if (self.operation == "Ajout") {
            self.contacts.push(self.tmpContact);
            this.vierge();
        
        } else {  //lors de la modification ,modifie directement lorsqu'on tappe
        	console.log(this.operation);
        	//ne passe pas ici si on annule
	        this.vierge();

	        console.log(self.tmpContact);
            self.operation= "";
            console.log(this.operation);

        }

	}

	//Met à jour la liste des contacts après validation du formulaire (ajout ou modif)
	this.update = function(){
		
	}

	this.toDelete = function(contact){
		console.log(contact);
		console.log("toDelete");
		this.operation="Suppression";

		console.log(contact);
		console.log("deleted : "+contact.deleted);
		contact.deleted = "true";
		console.log("deleted : "+contact.deleted);
		this.suprItems.push(contact); 
		//console.log("deleted : "+this.suprItems.deleted); // pas logique : undefined
		console.log(self.suprItems);
		console.log(this.contacts);
		

		angular.forEach(self.contacts,function(element){
			if (contact.deleted == "true") {
				console.log("coucou");
            	i = self.contacts.indexOf(element); 
            	//self.suprItems.push(self.contacts[i]);
            	self.contacts.splice(i+1,1);
        	}
		});
				
	}

	//Supprime de la liste le contact
	this.delete = function(contact){
		console.log("delete");
		
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