//Constructor para turnos
class Turno{
    constructor(id, dia, fecha, hora){
        this.id = id;
        this.dia = dia;
        this.fecha = fecha;
        this.hora = hora;
    }
}

const turno1 = new Turno("0", "Martes","5/07/2021", " hora");
const turno2 = new Turno("0", "Martes","12/07/2021", " hora");
const turno3 = new Turno("0", "Martes","18/07/2021", " hora");
const turno4 = new Turno("0", "Martes","25/07/2021", " hora");
const turno5 = new Turno("0", "Martes","30/07/2021", " hora");

const losTurnos = [turno1, turno2, turno3, turno4, turno5];
let turnosClinica = document.getElementById("turnosClinica");

for ( const turno of losTurnos ){
    var turnosDiv = document.createElement("div");
    turnosDiv.setAttribute("class", "turnos turnosHover");
    //iterar para la class en el a con el id
    turnosDiv.innerHTML= `
                <div class="turnosHover">
                    <h3> ${turno.dia} </h3>
                    <h3>${turno.fecha}</h3>
                    <h3>${turno.hora}</h3>
                    <a class="solicitar ${turno.id}" href="#">Solicitar</a> 
                </div>`;
                
                turnosClinica.appendChild(turnosDiv);
                
}

let solicitudes = document.getElementsByClassName("solicitar");
for (let i=0; i < solicitudes.length; i++){
    solicitudes[i].addEventListener("click", () =>{
        cantSolicitudes(losTurnos[i]);
    } )
}

function guardarTurnos(turno) {
    console.log("adentro de la funcion")
    console.log("el turno es ", turno)
}

function cantSolicitudes(turno) {
    var numeroSolicitudes = localStorage.getItem("cantSolicitudes");
    numeroSolicitudes = parseInt(numeroSolicitudes);
    if(numeroSolicitudes){
        localStorage.setItem("cantSolicitudes", numeroSolicitudes + 1 );
        document.querySelector(".misTurnos span").textContent = numeroSolicitudes +1;
    }else{
        localStorage.setItem("cantSolicitudes", 1 );
        document.querySelector(".misTurnos span").textContent = 1;
    }
    guardarTurnos(turno);
};
//funcion para que al recargar la pagina no se borre el indicador de lo guardado en mis turnos
function recargaPagina () {
    var numeroSolicitudes = localStorage.getItem("cantSolicitudes");
    if(numeroSolicitudes){
        document.querySelector(".misTurnos span").textContent = numeroSolicitudes;
    }
}
recargaPagina ();

function guardarTurnos(turno) {
    let turnosGuardados = localStorage.getItem("turnosPendientes");
    turnosGuardados = JSON.parse (turnosGuardados);   //pasando de json a objeto para despues poder tomarlo en la confirmacion de turnos 
    turno.id = 1;  //iterar para que cada turno vaya creando un lugar nuevo 
    turnosGuardados ={
        [turno.tag] : turno
    }

    localStorage.setItem("turnosPendientes", JSON.stringify(turnosGuardados));
}