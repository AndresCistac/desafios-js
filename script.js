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
    
    const clinica = [];
    const traumatologia = [];

    clinica.push(new Turno(01, "01/09/2021", " 13h.", "Dr.Romero",1 ));
    clinica.push(new Turno(02, "01/09/2021", " 14h.", "Dr.Serna",1 ));

    traumatologia.push(new Turno(03, "01/09/2021", " 13h.", "Dr.Cistac",1 ));
    traumatologia.push(new Turno(04, "01/09/2021", " 15h.", "Dr.Rosas",1 ));
    



    for ( const turno of clinica ){
        let lista = document.getElementById("turnosClinica")
        var turnosDiv = document.createElement("div");
        turnosDiv.setAttribute("class", "turnos turnosHover");
        turnosDiv.innerHTML= `
                    <div class="turnosHover">
                        <h3>${turno.fecha}</h3>
                        <h3>${turno.hora}</h3>
                        <h3>${turno.profesional}</h3>
                        <button id="boton${turno.id}" class="">Solicitar </button> 
                    </div>`;
                    
                    lista.appendChild(turnosDiv);
                    
    }

    for ( const turno of traumatologia ){
        let lista2 = document.getElementById("turnosTrauma")
        var turnosDiv = document.createElement("div");
        turnosDiv.setAttribute("class", "turnos turnosHover");
        turnosDiv.innerHTML= `
                    <div class="turnosHover">
                        <h3>${turno.fecha}</h3>
                        <h3>${turno.hora}</h3>
                        <h3>${turno.profesional}</h3>
                        <button id="boton${turno.id}" class="">Solicitar </button> 
                    </div>`;
                    
                    lista2.appendChild(turnosDiv);
                    
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
            document.querySelector("#item-count").textContent = numeroSolicitudes +1;
        }else{
            localStorage.setItem("cantSolicitudes", 1 );
            document.querySelector("#item-count").textContent = 1;
        }
        guardarTurnos(turno);
    };
    //funcion para que al recargar la pagina no se borre el indicador de lo guardado en mis turnos
    function recargaPagina () {
        var numeroSolicitudes = localStorage.getItem("cantSolicitudes");
        if(numeroSolicitudes){
            document.querySelector("#item-count").textContent = numeroSolicitudes;
        }
    }
    recargaPagina ();
    // funcion que guarda individualmente cada turno
    function guardarTurnos(turno) {
        let turnosGuardados = localStorage.getItem("turnosPendientes");
        turnosGuardados = JSON.parse (turnosGuardados);   //pasando de json a objeto para despues poder tomarlo en la confirmacion de turnos 
         
        if(turnosGuardados != null){
            if(turnosGuardados[turno.id] == undefined){
                turnosGuardados ={
                    ...turnosGuardados,
                    [turno.id] : turno
                }
            }
        }else{
            turnosGuardados = {
                [turno.id] : turno
            }
        }
        localStorage.setItem("turnosPendientes", JSON.stringify(turnosGuardados));
    }
    
    // Scripts agregando mis turnos
    
    function mostrarTurnos(){
        let turnosGuardados = localStorage.getItem("turnosPendientes");
        turnosGuardados = JSON.parse(turnosGuardados);
        let contenedorTurnos = document.querySelector(".turnosCart");
    
        console.log("turnosGuardados")
        if(turnosGuardados && contenedorTurnos){
            contenedorTurnos.innerHTML= '';
    
    
        }
        
    }
    mostrarTurnos();