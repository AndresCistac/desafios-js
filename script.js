let solicitudes = document.getElementsByClassName("solicitar");
for (let i=0; i < solicitudes.length; i++){
    solicitudes[i].addEventListener("click", () =>{
        cantSolicitudes();
    } )
}
function cantSolicitudes() {
    var numeroSolicitudes = localStorage.getItem("cantSolicitudes");
    numeroSolicitudes = parseInt(numeroSolicitudes);
    if(numeroSolicitudes){
        localStorage.setItem("cantSolicitudes", numeroSolicitudes + 1 );
        document.querySelector(".misTurnos span").textContent = numeroSolicitudes +1;
    }else{
        localStorage.setItem("cantSolicitudes", 1 );
        document.querySelector(".misTurnos span").textContent = 1;
    }
};

//desafio 7 complementario
//Constructor para turnos
class Turno{
    constructor(id, dia, fecha, hora){
        this.id = id;
        this.dia = dia;
        this.fecha = fecha;
        this.hora = hora;
    }
}

const turno1 = new Turno("turno1", "Martes","5/07/2021", " hora");
const turno2 = new Turno("turno2", "Martes","12/07/2021", " hora");
const turno3 = new Turno("turno3", "Martes","18/07/2021", " hora");
const turno4 = new Turno("turno4", "Martes","25/07/2021", " hora");
const turno5 = new Turno("turno5", "Martes","30/07/2021", " hora");

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


