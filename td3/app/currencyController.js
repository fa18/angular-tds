currencyApp.controller('currencyController', ["$http",function($http){
//angular.module("currencyApp").controller("currencyController",['$http', function($http) {

	var self = this;

	//variable Objet stockant la liste des monnaies alimentée par le fichier JSON currencymap.json au démarrage du contrôleur
	$http.get('app/data/currencymap.json').
    then(function(response) {
        self.currencies = response.data;
    },
    function(response) {
        console.log("Erreur avec le statut Http : "+response.status);
    });

	//variable stockant la monnaie source (à initialiser en euro)
	this.from;

	//variable stockant la monnaie cible (à initialiser en dollars US)
	this.to;

	//variable stockant le montant à convertir (à initialiser à 1)
	this.what;

	//variable donnant le résultat de la conversion
	this.result;


	//Retourne le résultat en effectuant une requête JSONP vers l'adresse free.currencyconverterapi.com
	//Modifie en retour la variable result
    this.getResult = function(){

        url = 'https://free.currencyconverterapi.com/api/v3/convert?compact=y&q='+self.from+'_'+self.to;
        console.log(url);
        $http.jsonp(url, {jsonCallbackParam: 'callback'}).
        then(function(result){
            if(!jQuery.isEmptyObject(result.data))
                self.result = result.data[self.from+'_'+self.to].val*self.what;
            else
                alert('Erreur lors de la conversion');
        });
    }


	//Echange la monnaie source et la monnaie cible 
	this.swap = function(){

	}



}]);	