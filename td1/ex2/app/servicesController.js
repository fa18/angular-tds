var serviceApp = angular.module("TD1",[]);

serviceApp.controller('servicesController', function(){
	var self = this;
	this.cpt = 1;
	this.totals = 0;

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


	 this.toggleActive = function($i){
	 	console.log($i);
    	// Si c'est actif, alors ca désactive
    	if(!this.services[$i].active){
    		this.services[$i].active = true;
    	}
    	else
    		this.services[$i].active = false;
    }	

});	