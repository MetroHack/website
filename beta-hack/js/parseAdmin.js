$(function() {
    Parse.$ = jQuery;
  //Inicializar Parse
    Parse.initialize("pVQEqn1cuqxLP8BL0LSbkB18p9Tii4wWi9EMfuzv", "6cceoL2U1WqxgUUls7dFj7CHwyEZeN47vTxySufM");
});
 

//Funcion para hacer login
function adminLogin (form) {
    
    //Creamos las variables del texto introducido por el usuario
    var user = form.user.value;
    var password = form.password.value;
    
    //Metodo de Parse para login
    Parse.User.logIn(user, password, {
          success: function(user) {
          // Do stuff after successful login.
              //alert("Bienvenido");
              
          //*****AQUI ABAJO VA EL SALTO DE PAGINA LUIS*********
              location.replace("http://www.w3schools.com");
              
          },
          error: function(user, error) {
          // The login failed. Check error to see why.
              alert("Clave o Usuario Incorrecto");
          }
    });
}