$(function() {
    Parse.$ = jQuery;
  //Inicializar Parse
    Parse.initialize("pVQEqn1cuqxLP8BL0LSbkB18p9Tii4wWi9EMfuzv", "6cceoL2U1WqxgUUls7dFj7CHwyEZeN47vTxySufM");
    getEvent();
});



function getEvent(){
    var Evento = Parse.Object.extend("Event");
    var query = new Parse.Query(Evento);
    query.find({
          success: function(results) {
                var output = "";
                //alert("Successfully retrieved " + results.length + " scores.");
                // Do something with the returned Parse.Object values
                output+= "<ul id=\"cd-gallery-items\" class=\"cd-container\">";
                for (var i = 0; i < results.length; i++) {
                  var object = results[i];

                  var titulo = object.get('titulo');
                  var fecha = object.get('fecha');
                  var lugar = object.get('lugar');
                  var imagen = object.get('imagenUrl');
                  var registro = object.get('registro');
                  var descripcion = object.get('descripcion');
                  
                  output += "<li>";
                  output += "<ul class=\"cd-item-wrapper\">";
                  output += "<li class=\"cd-item-front\"><a href=\"#0\"><img src="+imagen+" alt=\"Preview image\"></a></li>";
                  output += "</ul>";
                  output += "<div class=\"cd-item-info\">";
                  output += "<b><a href=\"#0\">"+titulo+"</a></b>";
                  output += "</div>";
                  output += "</li>";
                  
                }
                output += "</ul>";
                 alert("Tituloss: "+titulo);	
                  //LLenamos el HTML	                  
                  $("#eventos").html(output);
          },
          error: function(error) {
                alert("Error: " + error.code + " " + error.message);
          }
          
          
    });    
    
    	
}


