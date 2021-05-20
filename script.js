//desafio 4

const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const descuento = i => i * 0.15;

let precioConsulta = 1200;
let protocolo = 500;

let total = suma(resta(precioConsulta, descuento(precioConsulta)), protocolo);
console.log("El precio de la consulta con el 15% de dto de su obra social mas el protocolo COVID seria $" + total)



