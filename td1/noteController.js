// Création du module; [] -> Dépendances
var noteApp = angular.module("TD1"); 

noteApp.controller('NoteController', function(){ //['$cookies', function($cookies)
    //var message = $cookies.get("message");
    //this.messageBox = message || "";
    this.messageNote = "";
    this.info = "";
    this.status=1;
 
    this.save = function(){

        this.info="Note Sauvegardée";
        this.status=0;
    };

    this.clear = function(){
        this.messageNote = "";
        this.info="Note effacée";
        this.caracRestant =100;
    };

    this.caracRestant = 100;

    this.count = function(){
        this.caracRestant = 100-this.messageNote.length;
         this.warning = false;
        this.danger = false;
        if(this.caracRestant < 50){
            if(this.caracRestant < 20){
                this.danger = true;
                this.status=2;
                 if(this.caracRestant < 20){
                    this.status=3;
                 }
            }
            this.warning = true;
}
    };
}); //]