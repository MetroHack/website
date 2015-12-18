$(function() {
    Parse.$ = jQuery;
  //Inicializar Parse
    Parse.initialize("pVQEqn1cuqxLP8BL0LSbkB18p9Tii4wWi9EMfuzv", "6cceoL2U1WqxgUUls7dFj7CHwyEZeN47vTxySufM");
    Parse.User.logOut();
});

function normalLogin (form) {
    event.preventDefault();
    var user = new Parse.User();
    
    //Creamos las variables del texto introducido por el usuario
    var username = form.user.value;
    var password = form.password.value;
    
    
                       //Metodo de Parse para login
                       Parse.User.logIn(username, password, {
                             success: function(user) {
                             // Do stuff after successful login.
                             alert("Bienvenido");
                             
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



function crearUsuario (form) {
    event.preventDefault();
    var user = new Parse.User();
    
    //Creamos las variables del texto introducido por el usuario
    var username = form.userNew.value;
    var password = form.passwordNew.value;
    var email = form.email.value;
    //alert("Email: " + email + " Username: " + username + " Password: " + password);
    
                                    //Metodo Parse para registrar usuarios
                                    user.set("username", username);
                                    user.set("password", password);
                                    user.set("email", email);
                                    user.set("admin", false);
    

                                    user.signUp(null, {
                                      success: function(user) {
                                        // Hooray! Let them use the app now.
                                          alert("Registrado");
                                      },
                                      error: function(user, error) {
                                        // Show the error message somewhere and let the user try again.
                                        alert("Error: " + error.code + " " + error.message);
                                      }
                                    });

}