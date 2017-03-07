currencyApp.controller('currencyController', ["$http",function($http){
//angular.module("currencyApp").controller("currencyController",['$http', function($http) {

	var self = this;

	//variable Objet stockant la liste des monnaies alimentée par le fichier JSON currencymap.json au démarrage du contrôleur
	$http.get('app/data/currencymap.json').
    then(function(response) {
        self.currencies = response.data;
        self.from=self.currencies.EUR;
        self.to=self.currencies.USD;
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
    var url='http://free.currencyconverterapi.com/api/v3/convert?compact=y&q='+self.from.code+'_'+self.to.code;
    console.log(url);
    $http.jsonp(url, {jsonpCallbackParam: 'callback'})
    .then(function(result) {
                console.log("coucuo2");
                if(!jQuery.isEmptyObject(result.data))
                    self.result = result.data[self.from+'_'+self.to].val*self.what;
                console.log(this.result);
            },
            function(result){console.log(result);}
        );
        
    }


	//Echange la monnaie source et la monnaie cible 
	this.swap = function(){

	}



}]);	