//desafio 2

var usuario = prompt("Ingresa tu nombre de usuario:");

if (usuario == "Carlitos123" || usuario == "carlitos123") {
    let password = prompt("Ingresa tu password");

    if (password === "123456") {
        alert("Bienvenido " + usuario);
    } else {
        alert("Contraseña erronea");
    }
} else {
    alert("Usuario incorrecto");
}