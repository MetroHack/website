$(function() {
    Parse.$ = jQuery;
  //Inicializar Parse
    Parse.initialize("pVQEqn1cuqxLP8BL0LSbkB18p9Tii4wWi9EMfuzv", "6cceoL2U1WqxgUUls7dFj7CHwyEZeN47vTxySufM");
    //***************************************ESTEBAN Y LUIS***************************************
    //AQUI YO LLAME LA FUNCION PARA QUE SE EJECUTE DE UNA, PERO LLAMENLA CUANDO SEA NECESARIO PARA USTEDES
    getEvent();
});



function getEvent(){
    var Evento = Parse.Object.extend("Event");
    var query = new Parse.Query(Evento);
    query.find({
          success: function(results) {
                //alert("Successfully retrieved " + results.length + " scores.");
                // Do something with the returned Parse.Object values
                for (var i = 0; i < results.length; i++) {
                  var object = results[i];
                    
                  //*******************ESTEBAN Y LUIS****************************
                  //*************************************************************
                  //AQUI ESTAN LAS VARIABLES DE LOS EVENTOS, USENLOS COMO QUIERAN
                  var titulo = object.get('titulo');
                  var fecha = object.get('fecha');
                  var lugar = object.get('lugar');
                  var imagen = object.get('imagenUrl');
                  var registro = object.get('registro');
                  var descripcion = object.get('descripcion');
                }
          },
          error: function(error) {
                alert("Error: " + error.code + " " + error.message);
          }
    });    
}