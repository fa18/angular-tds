// Création du module; [] -> Dépendances
var noteApp = angular.module("TD1",['ngCookies']); 

noteApp.controller('NoteController', ['$cookies', function($cookies){
    var message = $cookies.get("message");
    this.messageNote = message || "";
   
    this.info = "";
    this.status=1;
 
    this.save = function(){
        if(this.messageNote != ""){
            this.info = "Note sauvegardée";
            this.status=0;
            this.saved = true;
            $cookies.put("message",this.messageNote);
        }
        
        
    };

    this.clear = function(){
        if(this.messageNote != ""){
        this.messageNote = "";
        this.info="Note effacée";
        this.caracRestant =100;
        }
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
}]); //]