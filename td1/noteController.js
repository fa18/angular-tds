// Création du module; [] -> Dépendances
var noteApp = angular.module("TD1"); 

noteApp.controller('NoteController', function(){
    this.messageNote = "ma note";
    this.info = "";
 
    this.save = function(){

    };

    this.clear = function(){
        this.messageBox = "";
        self.info="Note effacée";
        this.caracRestant =100;
    };

    this.caracRestant = 100;

    this.count = function(){
        this.caracRestant = 100-this.messageBox.length;
         this.warning = false;
        this.danger = false;
        if(this.caracRestant < 50){
            if(this.caracRestant < 10){
                this.danger = true;
            }
            this.warning = true;
}
    };
});