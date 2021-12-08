/* constante */
const recetaPan = [{ id: 1, ingrediente: "Harina", cantidad: 5, unidad: "gr" },
    { id: 2, ingrediente: "agua", cantidad: 3, unidad: "gr" },
    { id: 3, ingrediente: "masa Madre", cantidad: 2, unidad: "gr" },
    { id: 4, ingrediente: "sal", cantidad: 1, unidad: "gr" },
]

/* ingreso de cantidad */
let cantidadComensal = parseInt(prompt("ingre la cantidad de comensales"));

/* creo array para la cantidad de cada ingrediente segun la cantidad de comensales ingresada */
let total = recetaPan.map(ingrediente => ingrediente.cantidad * cantidadComensal);

/* realizzo un ciclo for donde imprimo la cantidad de TOTAL  */
for (let i = 0; i < total.length; i++) {
    alert(recetaPan[i].ingrediente + " " + total[i] + " " + recetaPan[i].unidad);
}

/* ordenar por orden alfabetico de ingredientes */
let ordenar = recetaPan.sort((a, b) => a.ingrediente.localeCompare(b.ingrediente));
console.log(ordenar);
