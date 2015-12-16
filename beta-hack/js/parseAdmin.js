$(function() {
    Parse.$ = jQuery;
  //Inicializar Parse
    Parse.initialize("pVQEqn1cuqxLP8BL0LSbkB18p9Tii4wWi9EMfuzv", "6cceoL2U1WqxgUUls7dFj7CHwyEZeN47vTxySufM");
    Parse.User.logOut();
});
 

//Funcion para hacer login
function adminLogin (form) {

    var user = new Parse.User();
    
    //Creamos las variables del texto introducido por el usuario
    var username = form.user.value;
    var password = form.password.value;
    
    
    //Validamos que sea admin
    var admin = Parse.Object.extend("User");
    var query = new Parse.Query(admin);
    query.equalTo("username",username);
    query.equalTo("admin", true);
    query.find({
         success: function(results) {
                   //alert("Successfully retrieved " + results.length + " scores.");
                   // Do something with the returned Parse.Object values

                              for (var i = 0; i < results.length; i++) {
                              var object = results[i];
                              //alert(username + password);
                                  
                                                   //Metodo de Parse para login
                                                   Parse.User.logIn(username, password, {
                                                         success: function(user) {
                                                         // Do stuff after successful login.
                                                         alert("Bienvenido " + username);

                                                        //***************************************************
                                                       //*****AQUI ABAJO VA EL SALTO DE PAGINA LUIS*********
                                                       //location.replace("http://www.w3schools.com");
                                                        },
                                                        error: function(user, error) {
                                                       // The login failed. Check error to see why.
                                                       alert("Clave o Usuario Incorrecto");
                                                       } 
                                                   });
                              }
             
                         
         },
         error: function(error) {
         alert("Error: " + error.code + " " + error.message);
         }
    });   
}
    