//desafio 4 complementario

const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const descuento = i => i * 0.15;
const interes =  x => x * 0.10;

let precioConsulta = 1200;
let protocolo = 500;

let total = suma(resta(precioConsulta, descuento(precioConsulta)), protocolo);
console.log("El precio de la consulta con el 15% de dto de su obra social mas el protocolo COVID seria $" + total);

let pago = prompt("Por favor ingrese si pagaria con Debito/Credito");


if((pago == "Debito") || (pago == "debito")){
 alert("El total a abonar seria $" + total);
}else{
 alert("El total a abonar con un 10% de recargo seria $" + suma(total, interes(total)));
}


