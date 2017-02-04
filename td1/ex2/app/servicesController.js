var serviceApp = angular.module("TD1",[]);

serviceApp.controller('servicesController', function($http){
	var self = this;
	this.cpt = 1;
	this.total = 300;
	this.CodePromoCoche = false;

	

    this.services = [
	    {
	        "name": "Web Development",
	        "price": 300,
	        "active":true
	    },{
	        "name": "Design",
	        "price": 400,
	        "active":false
	    },{
	        "name": "Integration",
	        "price": 250,
	        "active":false
	    },{
	        "name": "Formation",
	        "price": 220,
	        "active":false
	    }
	];

	this.ftotal = function(){
    	var tprice = 0;
    	angular.forEach(this.services, function(value, key){
    		if(value.active)
    			tprice+=value.price;
    		
    	});
    	this.total = tprice;
    };

	 this.toggleActive = function($i){
	 	//console.log($i);

    	// Si c'est actif, alors ca désactive
    	if(!this.services[$i].active){
    		this.services[$i].active = true;
    		this.cpt++;
    	}
    	else{
    		this.services[$i].active = false;
    		this.cpt--;
    	}

    	this.ftotal();

    	console.log(this.cpt);
    }	

    this.promoExiste = function(){   
			$http.get("promo.json").then(function(response) {    
			self.remise = 0;
			self.prixAvecRemise = 0;
			self.promoError = true;
	    	angular.forEach(response.data, function(value, key){
	    		if(self.codePromoSaisi == key) {
	    			self.remise = self.total*value;
	    			self.prixAvecRemise = self.total-self.remise;
	    			self.promoError = false;
	    		}
	    	});    
	    });
  }


    


    	
   

});	