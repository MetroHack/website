$(function() {
    Parse.$ = jQuery;
  //Inicializar Parse
    Parse.initialize("pVQEqn1cuqxLP8BL0LSbkB18p9Tii4wWi9EMfuzv", "6cceoL2U1WqxgUUls7dFj7CHwyEZeN47vTxySufM");
    //***************************************ESTEBAN Y LUIS***************************************
    //AQUI YO LLAME LA FUNCION PARA QUE SE EJECUTE DE UNA, PERO LLAMENLA CUANDO SEA NECESARIO PARA USTEDES
    //getEvent();
    checkLogin();
    getUser();
});


function getUser(){
    
    var user = Parse.User.current();
    if (user) {
    // do stuff with the user
        //alert(user.get('admin'));
        var username = user.get('username');
        var email = user.get('email');
        var firstName = user.get('firstName');
        var lastName = user.get('lastName');
        var carrera = user.get('carrera');
        
        //Validamos que no sean null
        if (firstName == null){
         firstName = ""; 
        }
        
        if (lastName == null){
         lastName = ""; 
        }
        
        if (carrera == null){
         carrera = ""; 
        }
        
        //Asignamos los valores en el html
        document.getElementById("username").value = username;
        document.getElementById("email").value = email;
        document.getElementById("firstName").value = firstName;
        document.getElementById("lastName").value = lastName;
        document.getElementById("carrera").value = carrera;
        

        setTarjeta(username, firstName, lastName, carrera);
    }     
}


function setTarjeta(username, firstName, lastName, carrera){
        
       if (firstName == "" && lastName == "" || firstName == null && lastName == null){
           document.getElementById("nombreTarjeta").innerHTML = "Nombre y Apellido";
       }else{
        document.getElementById("nombreTarjeta").innerHTML = firstName + " " + lastName;
       }
    
        document.getElementById("usernameTarjeta").innerHTML = username;
    
       if (carrera == "" || carrera == null){
           document.getElementById("carreraTarjeta").innerHTML = "Carrera"; 
       }else{
        document.getElementById("carreraTarjeta").innerHTML = carrera; 
       }
     
}

function updateUser(form){
    event.preventDefault();
    var user = Parse.User.current(); 
    
    var username = user.get('username');
    var email = form.email.value;
    var firstName = form.firstName.value;
    var lastName = form.lastName.value;
    var carrera = form.carrera.value;
    
    user.set("email", email);
    user.set("firstName", firstName);
    user.set("lastName", lastName);
    user.set("carrera", carrera);
    
            user.save(null, {
                  success: function(gameScore) {
                            // Execute any logic that should take place after the object is saved.
                            alert("Perfil Actualizado");
                  },
                  error: function(gameScore, error) {
                            // Execute any logic that should take place if the save fails.
                            // error is a Parse.Error with an error code and message.
                            alert("No se pudo actualizar");
                  }
        });
    
    setTarjeta(username,firstName,lastName,carrera);
}

function logOut(){
 Parse.User.logOut(); 
 location.replace("http://beta-hack.appspot.com");
}

function checkLogin(){
    if (Parse.User.current()){
     //alert("Usuario Comprobado");   
    }else{
     alert("No estas registrado");
     location.replace("http://beta-hack.appspot.com");
    } 
}

function logIn(){
Parse.User.logIn("marcelo", "20131110015", {
  success: function(user) {
    // Do stuff after successful login.
  },
  error: function(user, error) {
    // The login failed. Check error to see why.
  }
});
    
}