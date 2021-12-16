/* constante */
const recetaPan = [{ id: 1, ingrediente: "Harina", cantidad: 5, unidad: "gr" },
    { id: 2, ingrediente: "agua", cantidad: 3, unidad: "gr" },
    { id: 3, ingrediente: "masa Madre", cantidad: 2, unidad: "gr" },
    { id: 4, ingrediente: "sal", cantidad: 1, unidad: "gr" },
]

/* ingreso de cantidad */
let cantidadComensal = document.getElementById("cantidad");


/* imprimir en documento por getElementById */
let cambio = document.getElementById("panMM");

cantidadComensal.addEventListener("keyup", () => {
    /* creo array para la cantidad de cada ingrediente segun la cantidad de comensales ingresada */
    let total = recetaPan.map(ingrediente => ingrediente.cantidad * cantidadComensal.value);
    cambio.innerHTML = recetaPan[0].ingrediente + " " + total[0] + " " + recetaPan[0].unidad + "<br>" + recetaPan[1].ingrediente + " " + total[1] + " " + recetaPan[1].unidad + "<br>" + recetaPan[2].ingrediente + " " + total[2] + " " + recetaPan[2].unidad + "<br>" + recetaPan[3].ingrediente + " " + total[3] + " " + recetaPan[3].unidad
})

/*         /* ordenar por orden alfabetico de ingredientes */
let ordenar = recetaPan.sort((a, b) => a.ingrediente.localeCompare(b.ingrediente));
console.log(ordenar);
