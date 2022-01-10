/* animaciones */
$("#panMM, #pizza, #focaccia, #arepas").hide("fast");
$("#btnPanMM").click(() => {
    $("#panMM").slideToggle();
});
$("#btnPizza").click(() => {
    $("#pizza").slideToggle();
});
$("#btnFocaccia").click(() => {
    $("#focaccia").slideToggle();
});
$("#btnArepa").click(() => {
    $("#arepas").slideToggle();
});
/* constante */
/* pan masa madre */
const recetaPan = [{ id: 1, porcentaje: "90%", ingrediente: "Harina", cantidad: 47, unidad: "gr" },
    { id: 2, porcentaje: "70%", ingrediente: "agua", cantidad: 36, unidad: "gr" },
    { id: 3, porcentaje: "20%", ingrediente: "masa Madre", cantidad: 10, unidad: "gr" },
    { id: 4, porcentaje: "2%", ingrediente: "sal", cantidad: 1, unidad: "gr" },
];
/* pizza */
const recetaPizza = [{ id: 1, porcentaje: "80%", ingrediente: "Harina", cantidad: 47, unidad: "gr" },
    { id: 2, porcentaje: "70%", ingrediente: "agua", cantidad: 36, unidad: "gr" },
    { id: 3, porcentaje: "20%", ingrediente: "levadura", cantidad: 10, unidad: "gr" },
    { id: 4, porcentaje: "2%", ingrediente: "sal", cantidad: 1, unidad: "gr" },
    { id: 5, porcentaje: "2%", ingrediente: "aceite", cantidad: 1, unidad: "gr" },
    { id: 6, porcentaje: "2%", ingrediente: "salsa", cantidad: 5, unidad: "gr" },
    { id: 7, porcentaje: "2%", ingrediente: "queso", cantidad: 30, unidad: "gr" }
];
/* focaccia */
const recetaFocaccia = [{ id: 1, porcentaje: "80%", ingrediente: "Harina", cantidad: 47, unidad: "gr" },
    { id: 2, porcentaje: "70%", ingrediente: "agua", cantidad: 36, unidad: "gr" },
    { id: 3, porcentaje: "20%", ingrediente: "levadura", cantidad: 10, unidad: "gr" },
    { id: 4, porcentaje: "2%", ingrediente: "sal", cantidad: 1, unidad: "gr" },
    { id: 5, porcentaje: "2%", ingrediente: "aceite", cantidad: 1, unidad: "gr" },
];
/* arepas */
const recetaArepas = [{ id: 1, porcentaje: "80%", ingrediente: "Harina de maiz", cantidad: 20, unidad: "gr" },
    { id: 2, porcentaje: "70%", ingrediente: "agua", cantidad: 35, unidad: "gr" },
    { id: 3, porcentaje: "20%", ingrediente: "aceite", cantidad: 1, unidad: "gr" },
    { id: 4, porcentaje: "2%", ingrediente: "sal", cantidad: 1, unidad: "gr" },
];


/* ingreso de cantidad */
let cantidadComensal = document.getElementById("cantidad");
let cantidadPizza = document.getElementById("cantidadPizza");
let cantidadFocaccia = document.getElementById("cantidadFocaccia");
let cantidadArepas = document.getElementById("cantidadArepa");

/* imprimir en documento por getElementById */
let cambio = document.getElementById("panMM");
let cambio2 = document.getElementById("pizza");
let cambio3 = document.getElementById("focaccia");
let cambio4 = document.getElementById("arepas");
/* usando jquery */
/* calcular y mostrr pan de masa madre */
$("#cantidad").on("keyup", function() {
    let total = recetaPan.map(ingrediente => ingrediente.cantidad * cantidadComensal.value);
    cambio.innerHTML = recetaPan[0].ingrediente + " " + total[0] + " " + recetaPan[0].unidad + "<br>" + recetaPan[1].ingrediente + " " + total[1] + " " + recetaPan[1].unidad + "<br>" + recetaPan[2].ingrediente + " " + total[2] + " " + recetaPan[2].unidad + "<br>" + recetaPan[3].ingrediente + " " + total[3] + " " + recetaPan[3].unidad
});
/* calcular y mostrar pizza */
$("#cantidadPizza").on("keyup", function() {
    let total = recetaPizza.map(ingrediente => ingrediente.cantidad * cantidadPizza.value);
    cambio2.innerHTML = recetaPizza[0].ingrediente + " " + total[0] + " " + recetaPizza[0].unidad + "<br>" + recetaPizza[1].ingrediente + " " + total[1] + " " + recetaPizza[1].unidad + "<br>" + recetaPizza[2].ingrediente + " " + total[2] + " " + recetaPizza[2].unidad + "<br>" + recetaPizza[3].ingrediente + " " + total[3] + " " + recetaPizza[3].unidad + "<br>" + recetaPizza[4].ingrediente + " " + total[4] + " " + recetaPizza[4].unidad + "<br>" + recetaPizza[5].ingrediente + " " + total[5] + " " + recetaPizza[5].unidad + "<br>" + recetaPizza[6].ingrediente + " " + total[6] + " " + recetaPizza[6].unidad
});
/* calcular y mostrar focaccia */
$("#cantidadFocaccia").on("keyup", function() {
    let total = recetaFocaccia.map(ingrediente => ingrediente.cantidad * cantidadFocaccia.value);
    cambio3.innerHTML = recetaFocaccia[0].ingrediente + " " + total[0] + " " + recetaFocaccia[0].unidad + "<br>" + recetaFocaccia[1].ingrediente + " " + total[1] + " " + recetaFocaccia[1].unidad + "<br>" + recetaFocaccia[2].ingrediente + " " + total[2] + " " + recetaFocaccia[2].unidad + "<br>" + recetaFocaccia[3].ingrediente + " " + total[3] + " " + recetaFocaccia[3].unidad + "<br>" + recetaFocaccia[4].ingrediente + " " + total[4] + " " + recetaFocaccia[4].unidad
});
/* calcular y mostrar arepas */
$("#cantidadArepa").on("keyup", function() {
    let total = recetaArepas.map(ingrediente => ingrediente.cantidad * cantidadArepas.value);
    cambio4.innerHTML = recetaArepas[0].ingrediente + " " + total[0] + " " + recetaArepas[0].unidad + "<br>" + recetaArepas[1].ingrediente + " " + total[1] + " " + recetaArepas[1].unidad + "<br>" + recetaArepas[2].ingrediente + " " + total[2] + " " + recetaArepas[2].unidad + "<br>" + recetaArepas[3].ingrediente + " " + total[3] + " " + recetaArepas[3].unidad
});
/*         /* ordenar por orden alfabetico de ingredientes */
let ordenar = recetaPan.sort((a, b) => a.ingrediente.localeCompare(b.ingrediente));
console.log(ordenar);
