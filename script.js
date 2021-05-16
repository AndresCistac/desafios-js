//desafio 2

// var usuario = prompt("Ingresa tu nombre de usuario:");

// if (usuario == "Carlitos123" || usuario == "carlitos123") {
//     let password = prompt("Ingresa tu password");

//     if (password === "123456") {
//         alert("Bienvenido " + usuario);
//     } else {
//         alert("Contraseña erronea");
//     }
// } else {
//     alert("Usuario incorrecto");
// }

//desafio 3
for (let i = 1; i <= 30 ; i++){
    for (let x = 9; x <= 13 ; x++){
    var ingresarNombre = prompt("Ingresar nombre y apellido");
    alert("Hola " + ingresarNombre + " su turno es a las " +x+ " hs del dia " +i+ " de Junio");
    }
}

/* seria un sistema de turnos que entrega turnos entre las 9 y las 13 hs, 
al cumplirse esos turnos empieza a solicitar turnos para el dia siguiente  */
