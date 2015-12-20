$(function() {
    Parse.$ = jQuery;
  //Inicializar Parse
    Parse.initialize("pVQEqn1cuqxLP8BL0LSbkB18p9Tii4wWi9EMfuzv", "6cceoL2U1WqxgUUls7dFj7CHwyEZeN47vTxySufM");
    if (Parse.User.current()){
     //alert("Usuario Comprobado");   
    }else{
     alert("No eres administrador");
     location.replace("http://beta-hack.appspot.com");
    }
});