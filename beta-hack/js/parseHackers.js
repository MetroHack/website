$(function() {
    Parse.$ = jQuery;
  //Inicializar Parse
    Parse.initialize("pVQEqn1cuqxLP8BL0LSbkB18p9Tii4wWi9EMfuzv", "6cceoL2U1WqxgUUls7dFj7CHwyEZeN47vTxySufM");
    checkLogin();
    getUsuarios();
});


function checkLogin(){
    if (Parse.User.current().get('admin') == true){
     //alert("Usuario Comprobado");   
    }else{
     alert("No eres administrador");
     location.replace("http://metro-hack.appspot.com");
    } 
}


function getUsuarios(){
    var Usuario = Parse.Object.extend("User");
    var query = new Parse.Query(Usuario);
    query.find({
          success: function(results) {
                var output = "";
                //alert("Successfully retrieved " + results.length + " scores.");
                // Do something with the returned Parse.Object values
                for (var i = 0; i < results.length; i++) {
                  var object = results[i];
                
                  var username = object.get('username');
                  var email = object.get('email');
                  output += "<li>";
                  output += "<h1>"+"Username: "+username+"     |     "+" Email: "+email+"</h1>";
                  output += "</li>";

                }
              
              $("#lista-usuario").html(output);
              
              //$("#lista-usuarios").html(output);
          },
          error: function(error) {
                alert("Error: " + error.code + " " + error.message);
          }
    });    
}

function logOut(){
 Parse.User.logOut(); 
 location.replace("http://metro-hack.appspot.com");
}
