$(function() {
    Parse.$ = jQuery;
  //Inicializar Parse
    Parse.initialize("pVQEqn1cuqxLP8BL0LSbkB18p9Tii4wWi9EMfuzv", "6cceoL2U1WqxgUUls7dFj7CHwyEZeN47vTxySufM");
    getEvent();
});


////Metodo para obtener el id de los eventos
//$('#eventos').on("click", "a", function(event){
//    event.preventDefault();
//    //alert("FUNCIONA");
//    var Evento = Parse.Object.extend("Event");
//    var id = $(this).attr("href");
//    var query = new Parse.Query(Evento);
//    query.equalTo("objectId", id);
//    query.find({
//        
//        success: function(results){
////        
////                  var object = results[0];
////                  var titulo = object.get('titulo');
////                  var fecha = object.get('fecha');
////                  var lugar = object.get('lugar');
////                  var imagen = object.get('imagenUrl');
////                  var registro = object.get('registro');
////                  var descripcion = object.get('descripcion');
//
//            alert(id);
//            location.replace("http://localhost:8080/event#"+id+"");
//             //setEvent(titulo, fecha, lugar, imagen, registro, descripcion);
//            prueba("LEOOONES");
//            //alert(results[0].get("titulo"));
//            //console.log(results[0].get('titulo'));
//        
//        }, error: function(error) {
//        
//            alert("Error");
//        
//        
//        }});
//    
//});

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
                  var id = object.id;
                  
                  output += "<li>";
                  output += "<ul class=\"cd-item-wrapper\">";
                  output += "<li class=\"cd-item-front\"><a href='http://localhost:8080/event#"+id+"'><img src="+imagen+" alt=\"Preview image\"></a></li>";
                  output += "</ul>";
                  output += "<div class=\"cd-item-info\">";
                  output += "<b><a href='http://localhost:8080/event#"+id+"'>"+titulo+"</a></b>";
                  output += "</div>";
                  output += "</li>";
                  
                }
                output += "</ul>";
                 //alert("Tituloss: "+titulo);	
                  //LLenamos el HTML	                  
                  $("#eventos").html(output);
          },
          error: function(error) {
                alert("Error: " + error.code + " " + error.message);
          }
          
          
    });    
    
    	
}


