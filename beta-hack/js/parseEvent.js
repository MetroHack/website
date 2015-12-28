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

                  var titulo = object.get('titulo');
                  var fecha = object.get('fecha');
                  var lugar = object.get('lugar');
                  var imagen = object.get('imagenUrl');
                  var registro = object.get('registro');
                  var descripcion = object.get('descripcion');
                  
                }
                	
                  //LLenamos el HTML	
                  document.getElementById("titulo").innerHTML = titulo;
                  document.getElementById("descripcion").innerHTML = descripcion;
                  document.getElementById("fecha").innerHTML = fecha;
                  document.getElementById("lugar").innerHTML = lugar;
		
					//imagen
					if (imagen == ""){
						//automaticamente se coloca la imagen default que esta en el css
					}
					else{
						$('.contests_landing').css("background-image", "url("+imagen+")"); 
       			   		//$('.contests_landing').css('background-image', 'url(imagen)');
       			  		//document.getElementById("imagen").style.backgroundImage = "url(imagen)";
       			  	}
       			  
       			  //Registro
       			  var r = document.getElementById('registroBoton');
       			  if (Boolean(registro)){
       			  	   r.style.display = "block";
       			  }else{
       			  	r.style.display = "none";
       			  }
       			  
       			  var r2 = document.getElementById('registroMenu');
       			  if (Boolean(registro)){
       			  	   r2.style.display = "block";
       			  }else{
       			  	r2.style.display = "none";
       			  }
          },
          error: function(error) {
                alert("Error: " + error.code + " " + error.message);
          }
          
          
    });    
    
    	
}


