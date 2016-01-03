$(function() {
    Parse.$ = jQuery;
  //Inicializar Parse
    Parse.initialize("pVQEqn1cuqxLP8BL0LSbkB18p9Tii4wWi9EMfuzv", "6cceoL2U1WqxgUUls7dFj7CHwyEZeN47vTxySufM");
    //***************************************ESTEBAN Y LUIS***************************************
    //AQUI YO LLAME LA FUNCION PARA QUE SE EJECUTE DE UNA, PERO LLAMENLA CUANDO SEA NECESARIO PARA USTEDES
    //getEvent();
    //checkLogin();
    //getUser();
});


function getUser(){
    
    var user = Parse.User.current();
    if (user) {
    // do stuff with the user
        //alert(user.get('admin'));
        var username = user.get('username');
        document.getElementById("username").innerHTML = username;
    }     
}

function logOut(){
 Parse.User.logOut(); 
 location.replace("http://metro-hack.appspot.com");
}

function checkLogin(){
    if (Parse.User.current()){
     //alert("Usuario Comprobado");   
    }else{
     alert("No estas registrado");
     location.replace("http://metro-hack.appspot.com");
    } 
}


//var MyApp = angular.module('WebApp', []);
//    MyApp.controller('NoticiasController',function ($scope ) {
//        Parse.$ = jQuery;
//        Parse.initialize("pVQEqn1cuqxLP8BL0LSbkB18p9Tii4wWi9EMfuzv", "6cceoL2U1WqxgUUls7dFj7CHwyEZeN47vTxySufM");
//        //***************************************ESTEBAN Y LUIS***************************************
//        //AQUI YO LLAME LA FUNCION PARA QUE SE EJECUTE DE UNA, PERO LLAMENLA CUANDO SEA NECESARIO PARA USTEDES
//        $scope.noticias=[];
//        $scope.getNoticias = function () {
//            var Evento = Parse.Object.extend("Event");
//            var query = new Parse.Query(Evento);
//            query.find({
//                success: function (results) {
//                    $scope.$apply(function() {
//
//                    var noticias=[];
//                    for (var i = 0; i < results.length; i++) {
//                        var object = results[i];
//
//                        //*******************ESTEBAN Y LUIS (Gay)****************************
//                        //*************************************************************
//                        //AQUI ESTAN LAS VARIABLES DE LOS EVENTOS, USENLOS COMO QUIERAN//patico
//
//                        var titulo = object.get('titulo');
//                        var fecha = object.get('fecha');
//                        var lugar = object.get('lugar');
//                        var imagen = object.get('imagenUrl');
//                        var registro = object.get('registro');
//                        var descripcion = object.get('descripcion');
//                        var noticia = {
//                            titulo: titulo,
//                            fecha: fecha,
//                            lugar: lugar,
//                            imagen: imagen,
//                            registro: registro,
//                            descripcion: descripcion
//                        };
//
//                         $scope.noticias.push(noticia);
//                    }
//                       return results;
//                    });
//                },
//                error: function (error) {
//                    alert("Error: " + error.code + " " + error.message);
//                }
//
//            });
//
//        };
//
//        console.log($scope.noticias);
//
//    });


