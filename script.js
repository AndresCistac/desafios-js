//desafio 2
var usuario = prompt("Ingresa tu nombre de usuario:");


if((usuario == "Carlitos123") || (usuario =="carlitos123")){
    var password = prompt("Ingresa tu password");
}else{
    alert("Usuario incorrecto")
}

if(password === "123456"){
    alert("Bienvenido " + usuario);
}else{
    alert("Contraseña erronea")
}