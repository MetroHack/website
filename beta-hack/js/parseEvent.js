$(function() {
    Parse.$ = jQuery;
  //Inicializar Parse
    Parse.initialize("pVQEqn1cuqxLP8BL0LSbkB18p9Tii4wWi9EMfuzv", "6cceoL2U1WqxgUUls7dFj7CHwyEZeN47vTxySufM");
    //***************************************ESTEBAN Y LUIS***************************************
    //AQUI YO LLAME LA FUNCION PARA QUE SE EJECUTE DE UNA, PERO LLAMENLA CUANDO SEA NECESARIO PARA USTEDES
    getEvent();
    comprobarRegistro();
    //Parse.User.logOut(); 
    //logIn();
});


function getEvent(){
    var id = window.location.hash.substr(1);
    //alert(id);
    var Evento = Parse.Object.extend("Event");
    var query = new Parse.Query(Evento);
    query.equalTo("objectId", id);
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


  //Comprobamos que el usuario esta registrado en MetroHack
  function comprobarUsuario(){
      //Usuario Registrado
      if (Parse.User.current()){
          //alert("ESTA FIUNCIONANDO");
          return true;
          
      //Usuario no registrado
      }else{
          //alert("aja");
          return false;
      }  
  }



//En esta funcion comprobamos si el usuario ya esta registrado Luis
function comprobarRegistro(){
    
            //Si el usuario si esta registrado en MetroHack, te registra al evento con tu user.
            if (comprobarUsuario()){
                
                        //Creamos las variables
                        var user = Parse.User.current(); 
                        var id = window.location.hash.substr(1);
                        var Registro = Parse.Object.extend("RegistradoEvento");
                
                        //Hacemos el Query
                        var query = new Parse.Query(Registro);
                        query.equalTo("usuario", user);
                        query.equalTo("eventoID",id);
                        query.find({
                            
                                    success: function(results) {
                                    //*********************************************
                                    //Aqui va el codigo para bloquear el boton LUIS
                                        for (var i = 0; i < results.length; i++) {
                                            $('#registrame').text("Ya Registrado"); 
                                            $('#registrame').attr("disabled", true);
                                        	$('#registrame').css("color","green");
                                        }
                                        
                                    },
                            
                            
                            
                                      error: function(error) {
                                            alert("Error: " + error.code + " " + error.message);
                                      }
          
          
                          });     
 
            }
    
}

//***************************************************************************************************************************************

//Funcion para registrar al usuario en el evento
function registrarUsuario(){
    
            //Si el usuario no esta registrado en MetroHack, te manda al home para que lo hagas.
            if (comprobarUsuario() == false){

                        alert("No estas registrado en MetroHack, vuelve cuando ya estes registrado");
                        location.replace("http://metro-hack.appspot.com");

                
            //Si el usuario si esta registrado en MetroHack, te registra al evento con tu user. 
            }else{
                       

                        //Creamos las variables
                        var user = Parse.User.current(); 
                        var id = window.location.hash.substr(1);
                        var Registro = Parse.Object.extend("RegistradoEvento");
                        var registro = new Registro();
                        var Evento = Parse.Object.extend("Event");
                
                        //Buscamos el evento que se quiere registrar
                        var query = new Parse.Query(Evento);
                        query.equalTo("objectId", id);
                        query.find({
                            
                                    success: function(results) {
                                            //Aqui ya se registra al usuario
                                            registro.set("usuario",user);
                                            registro.set("evento",results[0]);
                                            registro.set("eventoID",id);
                                            registro.save();
                                            alert("Registrado!");
                                            
                                            for (var i = 0; i < results.length; i++) {
                                            $('#registrame').text("Ya Registrado"); 
                                            $('#registrame').attr("disabled", true);
                                        	$('#registrame').css("color","green");
                                        }
                                        
                                        
                                    },
                            
                            
                            
                                      error: function(error) {
                                            alert("Error: " + error.code + " " + error.message);
                                      }
          
          
                          });    
    
                    
            }
    
}
