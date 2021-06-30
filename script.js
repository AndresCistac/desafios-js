
//Boton para desplegar turnos  AGREGAR ESTIILOS
let visible = true;
$("#btnTurnosDisponibles").on('click', () => {
    if (visible == true) {
        $("#contenedorTurnos").css({ display: "none" });
    } else {
        $("#contenedorTurnos").css({ display: "block" });
    }
    visible = !visible;
});





//Constructor para turnos
class Turno {
    constructor(id, fecha, hora, profesional, disponible) {
        this.id = id;
        this.fecha = fecha;
        this.hora = hora;
        this.profesional = profesional
        this.disponible = disponible;
    }
}

function TurnosPend(idTurno, fechaTurno, horaTurno, profesionalTurno) {
    this.idTurno = idTurno;
    this.fecha = fechaTurno;
    this.hora = horaTurno;
    this.profesional = profesionalTurno;


}



const losTurnos = [];
const traumatologia = [];

losTurnos.push(new Turno(01, "01/09/2021", " 13h.", "Dr.Romero", 1));
losTurnos.push(new Turno(02, "01/09/2021", " 14h.", "Dr.Serna", 1));
losTurnos.push(new Turno(03, "01/09/2021", " 13h.", "Dr.Cistac", 1));
losTurnos.push(new Turno(04, "01/09/2021", " 15h.", "Dr.Rosas", 1));

creaTrurnos(losTurnos);

function creaTrurnos (losTurnos) {
    losTurnos.forEach((el) => {

        let section = document.getElementById('turnosClinica');
        let article = document.createElement('div')
        article.classList.add("turnos", "turnosHover")
        article.innerHTML += `
                <p>${el.fecha}</p>
                <p> ${el.hora}</p>
                <p> ${el.profesional}</p>
                <button id="boton${el.id}" class="">solicitar</button> 
                    `
        section.appendChild(article)
        let boton = document.getElementById(`boton${el.id}`)

        boton.addEventListener('click', () => {
            agregarAMisTurnos(el.id)
        })

    })


}





// // agregar los items a mis turnos

let turnosCarrito = [];
let contTurnosCarrito = document.getElementById("turnosCart");
let contador = document.getElementById("item-count");




carritoAbandonado()

function agregarAMisTurnos(id, cantidad) {

    let TurnoAgregar = losTurnos.filter((el) => el.id == id)[0]

    let prodExistente = turnosCarrito.find(el => el.idTurno == TurnoAgregar.id)

    if (prodExistente) {

        let id = prodExistente.idTurno
        prodExistente.cantidad = parseInt(prodExistente.cantidad) + 1
        $("#cantidad-" + id).val(prodExistente.cantidad)


    } else {

        let turnosPendientes = new TurnosPend(TurnoAgregar.id, TurnoAgregar.fecha, TurnoAgregar.hora, TurnoAgregar.profesional);

        turnosCarrito.push(turnosPendientes)
        actualizarCarrito()

        localStorage.setItem("turnosCarrito", JSON.stringify(turnosCarrito))

        actualizarModal();

        

    }
}

function actualizarModal(){

    // reseteo el carrito para q se cree con lo nuevo
    contTurnosCarrito.innerHTML = '';

    // le pongo lo nuevo
    turnosCarrito.forEach((el) => {
        let div = document.createElement("div")
        div.classList.add("turnosCart")
        div.innerHTML = `
    <p>${el.fecha}</p>
    <p>${el.hora} </p>
    <p>${el.profesional}</p>
    <button id="eliminar${TurnosPend.idTurno}" class="boton-eliminar">borrar</button>
    `

        contTurnosCarrito.appendChild(div)
    });

    let botonEliminar = document.getElementById(`eliminar${TurnosPend.idTurno}`)
        botonEliminar.addEventListener('click', () => {
            botonEliminar.parentElement.remove()

            turnosCarrito = turnosCarrito.filter((el) => el.idTurno != TurnosPend.idTurno)
            localStorage.setItem("turnosCarrito", JSON.stringify(turnosCarrito))

            actualizarModal();
        })
}

function actualizarCarrito() {
    contador.innerText = turnosCarrito.length;

}

function carritoAbandonado() {
    let turnosEnCarrito = JSON.parse(localStorage.getItem("turnosCarrito"));;
    if (turnosEnCarrito) {
        turnosEnCarrito.forEach((el) => {
            let turnosPendientes = new TurnosPend(el.idTurno, el.fecha, el.hora, el.profesional);

            turnosCarrito.push(turnosPendientes);
        });
        actualizarCarrito();
        actualizarModal();
    }
}


// console.log(turnosCarrito[0]);