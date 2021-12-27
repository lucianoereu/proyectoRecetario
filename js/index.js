/* constante */
const recetaPan = [{ id: 1, porcentaje: "90%", ingrediente: "Harina", cantidad: 47, unidad: "gr" },
    { id: 2, porcentaje: "70%", ingrediente: "agua", cantidad: 36, unidad: "gr" },
    { id: 3, porcentaje: "20%", ingrediente: "masa Madre", cantidad: 10, unidad: "gr" },
    { id: 4, porcentaje: "2%", ingrediente: "sal", cantidad: 1, unidad: "gr" },
]
$(document).ready(function() {
    /* ingreso de cantidad */
    let cantidadComensal = document.getElementById("cantidad");


    /* imprimir en documento por getElementById */
    let cambio = document.getElementById("panMM");
    /* usando jquery */
    $("#cantidad").on("keyup", function() {
        /* comento el add para imprimir en el dom */
        /* cantidadComensal.addEventListener("keyup", () => { */
        /* creo array para la cantidad de cada ingrediente segun la cantidad de comensales ingresada */
        let total = recetaPan.map(ingrediente => ingrediente.cantidad * cantidadComensal.value);
        cambio.innerHTML = recetaPan[0].ingrediente + " " + total[0] + " " + recetaPan[0].unidad + "<br>" + recetaPan[1].ingrediente + " " + total[1] + " " + recetaPan[1].unidad + "<br>" + recetaPan[2].ingrediente + " " + total[2] + " " + recetaPan[2].unidad + "<br>" + recetaPan[3].ingrediente + " " + total[3] + " " + recetaPan[3].unidad
    })


    /*         /* ordenar por orden alfabetico de ingredientes */
    let ordenar = recetaPan.sort((a, b) => a.ingrediente.localeCompare(b.ingrediente));
    console.log(ordenar);

});
