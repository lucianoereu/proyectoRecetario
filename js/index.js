/* constante */
const recetaPan =[{ id: 1, ingrediente: "Harina", cantidad: "5", unidad: "gr" },
                  { id: 2, ingrediente: "agua", cantidad: "3", unidad: "gr" },
                  { id: 3, ingrediente: "masa Madre", cantidad: "2", unidad: "gr" },
                  { id: 4, ingrediente: "sal", cantidad: "1", unidad: "gr" },]

/* ingreso de cantidad */
let cantidadComensal = parseInt(prompt("ingre la cantidad de comensales"));
// funcion
for(let recetaCantidad of recetaPan){
    alert(`${recetaCantidad.ingrediente} ${recetaCantidad.cantidad} ${recetaCantidad.unidad}`);
}

/* buscar el elemento "Masa madre" */
const resultado = recetaPan.find( ingredientes => ingredientes.ingrediente === "masa Madre" );
console.log(resultado);
/* function laM(masa) {
    return masa.ingrediente === 'Masa Madre';
}


console.log( recetaPan.find(laM)); */