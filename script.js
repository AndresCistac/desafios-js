// Desafio 5

// class Turno{ 
//     constructor (nombre, apellido, afiliado, especialidad){
//     this.nombre = nombre;
//     this.apellido = apellido;
//     this.afiliado = afiliado;
//     this.especialidad = especialidad;
//     }
//     solicitud() {
//         console.log("Se solicita turno para "+ this.nombre + " " + this.apellido);
//     }
   
//     aceptar() { 
//         var okey =  prompt("Si es correcta la informacion ingresar OK");

//         if(okey == "OK") {
//             console.log("Se confirma turno para el Sr/Sra " + this.apellido + " especialidad: " + this.especialidad + ".");
//         }
//     }
    
// }

// const turno1 = new Turno ("Alicia", "Almada", 212376, "Dermatologia");
// const turno2 = new Turno ("Leandro", "Perez", 207426,"Clinico");

// turno1.solicitud();
// turno1.aceptar();

        //desafio 6 y primer entrega final

class Turno{ 
    constructor (nombre, apellido, afiliado, especialidad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.afiliado = afiliado;
    this.especialidad = especialidad;
    }
    solicitud() {
        console.log("Se solicita turno para "+ this.nombre + " " + this.apellido);
    }
   
    aceptar() { 
        var okey =  prompt("Si es correcta la informacion ingresar OK");

        if((okey == "OK") || (okey == "ok")) {
            console.log("Se confirma turno para el Sr/Sra " + this.apellido + " especialidad: " + this.especialidad + ".");
        } else{
            console.log("Le pedimos por favor volver a ingresar los datos, Muchas gracias.")
        }
    
    }
    
}
const turnos = [];


turnos.push (new Turno ("Alicia", "Almada", 212376, "Ginecologia"));
turnos.push (new Turno ("Leandro", "Perez", 207426,"Clinica"));
turnos.push (new Turno ("Alejandra", "Marques", 605446,"Ginecologia"));
turnos.push (new Turno ("Marta", "Aguirre", 862356, "Guardia"));
console.log(turnos.length);

for (const turno of turnos){
   turno.solicitud();
}
const ginecologia = turnos.filter(turno => turno.especialidad =="Ginecologia");
console.log(ginecologia)


// desafio 6 complementario

