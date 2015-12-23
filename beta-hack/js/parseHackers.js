$(function() {
    Parse.$ = jQuery;
  //Inicializar Parse
    Parse.initialize("pVQEqn1cuqxLP8BL0LSbkB18p9Tii4wWi9EMfuzv", "6cceoL2U1WqxgUUls7dFj7CHwyEZeN47vTxySufM");
    checkLogin();
   // getUsuarios();
});


function checkLogin(){
    if (Parse.User.current()){
     //alert("Usuario Comprobado");   
    }else{
     alert("No eres administrador");
     location.replace("http://beta-hack.appspot.com");
    } 
}


function getUsuarios(){
    var Usuario = Parse.Object.extend("User");
    var query = new Parse.Query(Usuario);
    query.find({
          success: function(results) {
                alert("Successfully retrieved " + results.length + " scores.");
                // Do something with the returned Parse.Object values
                for (var i = 0; i < results.length; i++) {
                  var object = results[i];
                
                  var output = "";
                  var username = object.get('username');
                  var email = object.get('email');
                  output += "<ul>";
                  output += "<li>"+username+"</li>";
                  output += "<li>"+email+"</li>";
                  output += "</ul>";

                }
              
              $("#lista-usuarios").html(output);
              
              //$("#lista-usuarios").html(output);
          },
          error: function(error) {
                alert("Error: " + error.code + " " + error.message);
          }
    });    
}
