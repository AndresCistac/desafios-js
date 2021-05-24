// Desafio 5

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

        if(okey == "OK") {
            console.log("Se confirma turno para el Sr/Sra " + this.apellido + " especialidad: " + this.especialidad + ".");
        }
    }
    
}

const turno1 = new Turno ("Alicia", "Almada", 212376, "Dermatologia");
const turno2 = new Turno ("Leandro", "Perez", 207426,"Clinico");

turno1.solicitud();
turno1.aceptar();
