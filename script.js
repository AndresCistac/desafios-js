function turnero(){
    const misTurnos = document.getElementById('misTurnos');
    const turnosCart = document.getElementById('turnosCart');
    
    misTurnos.addEventListener("click", function(){
        turnosCart.classList.toggle('show-cart')
    })
    };
    turnero();
    
    
    //Boton para desplegar turnos  AGREGAR ESTIILOS
    let visible = true;
    $("#btnTurnosDisponibles").on('click', () => {
        if(visible==true){
            $("#contenedorTurnos").css({ display: "none" });
        }else{
            $("#contenedorTurnos").css({ display: "block" });
        }   
        visible = !visible;
    });

    
    
    
    
    //Constructor para turnos
class Turno{
    constructor(id, fecha, hora, profesional, disponible){
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



    const clinica = [];
    const traumatologia = [];

    clinica.push(new Turno(01, "01/09/2021", " 13h.", "Dr.Romero",1 ));
    clinica.push(new Turno(02, "01/09/2021", " 14h.", "Dr.Serna",1 ));

    traumatologia.push(new Turno(03, "01/09/2021", " 13h.", "Dr.Cistac",1 ));
    traumatologia.push(new Turno(04, "01/09/2021", " 15h.", "Dr.Rosas",1 ));
    
    tclinica(clinica);
    tTrauma(traumatologia);

    function tclinica(clinica){
        clinica.forEach( (el) => {

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

    function tTrauma(traumatologia){
        traumatologia.forEach( (el) => {

        let section = document.getElementById('turnosTrauma');
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

const turnosCarrito = [];
let contTurnosCarrito = document.getElementById("turnosCart");
let contador = document.getElementById("item-count");



function agregarAMisTurnos(id, cantidad) {

    let TurnoAgregar = clinica.filter((el) => el.id == id)[0]
    
    let prodExistente = turnosCarrito.find(el => el.idTurno == TurnoAgregar.id)

    if (prodExistente) {
        
        let id = prodExistente.idTurno
        prodExistente.cantidad = parseInt(prodExistente.cantidad)  + 1
        $("#cantidad-" + id).val(prodExistente.cantidad)


    } else {
        let cant = cantidad ? cantidad : 1;

        let turnosPend = new TurnosPend(TurnoAgregar.id, TurnoAgregar.fecha,  TurnoAgregar.hora, TurnoAgregar.profesional);

        turnosCarrito.push(turnosPend)
        localStorage.setItem("turnosCarrito", JSON.stringify(turnosCarrito))

        turnosPend = localStorage.getItem("turnosCarrito");
        turnosPend = JSON.parse(turnosPend);


        actualizarCarrito()
        let div = document.createElement("div")
        div.classList.add("turnosCart")
        div.innerHTML = `
        <p>${turnosPend.fecha}</p>
        <p>${turnosPend.hora} </p>
        <p>${turnosPend.profesional}</p>
        
        `
        contTurnosCarrito.appendChild(div)

    }
}

function actualizarCarrito() {
    contador.innerText = turnosCarrito.length

}


console.log(turnosCarrito[0]);