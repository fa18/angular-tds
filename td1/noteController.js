// Création du module; [] -> Dépendances
var noteApp = angular.module("TD1"); 

noteApp.controller('NoteController', function(){
    this.messageNote = "ma note";
    this.info = "";
    this.save = function(){

    };
    this.clear = function(){

    };
    this.caracRestant = 100;
    this.count = function(){
        this.caracRestant = 100-this.messageBox.length;
    };
});