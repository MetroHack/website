$(function() {
    Parse.$ = jQuery;
  //Inicializar Parse
    Parse.initialize("pVQEqn1cuqxLP8BL0LSbkB18p9Tii4wWi9EMfuzv", "6cceoL2U1WqxgUUls7dFj7CHwyEZeN47vTxySufM");
    checkLogin();
});


function checkLogin(){
    if (Parse.User.current().get('admin') == true){
     //alert("Usuario Comprobado");   
    }else{
     alert("No eres administrador");
     location.replace("http://beta-hack.appspot.com");
    } 
}


function crearEvento (form) {
    event.preventDefault();
    //Creamos las variables del texto introducido por el usuario
    var titulo = form.titulo.value;
    var fecha = form.fecha.value;
    var lugar = form.lugar.value;
    var url = form.url.value;
    var descripcion = form.descripcion.value;
    //var registroUsuario = form.registro.value;
    var registroBoolean = true;
    var registro = document.getElementsByName("registro");
    
    //Aqui validamos la opcion marcada en Registro. Si o No
    for (var i = 0; i < registro.length; i++) {
        if (registro[i].checked) {
            //alert("radioButton " + i + ": " + radioButtons[i].value);
            
                  if(registro[i].value == 'Si'){
                      registroBoolean = true;
                      //alert("Funciona");
                  }else{
                      registroBoolean = false;
                      //alert("No Funciona");
                  }
        }
    }
    
    
    var Evento = Parse.Object.extend("Event");
    var evento = new Evento(); 
    
    evento.set("titulo",titulo);
    evento.set("fecha",fecha);
    evento.set("lugar",lugar);
    evento.set("imagenUrl",url);
    evento.set("registro",registroBoolean);
    evento.set("descripcion",descripcion);
    
                evento.save(null, {
                            success: function(gameScore) {
                            // Execute any logic that should take place after the object is saved.
                            //alert('New object created with objectId: ' + evento.id);
                            alert("Evento Creado");
                            location.reload();
                            },
                            error: function(gameScore, error) {
                            // Execute any logic that should take place if the save fails.
                            // error is a Parse.Error with an error code and message.
                            alert('Failed to create new object, with error code: ' + error.message);
                            }
                });


}


