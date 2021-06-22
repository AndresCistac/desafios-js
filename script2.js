// Scripts agregando mis turnos

function mostrarTurnos(){
    let turnosGuardados = localStorage.getItem("turnosPendientes");
    turnosGuardados = JSON.parse(turnosGuardados);
    let contenedorTurnos = querySelector (".contenedorTurnos2");
    if(turnosPendientes && contenedorTurnos){
        console.log("funciona")
    }
}

