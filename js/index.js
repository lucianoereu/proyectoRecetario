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
/* llamada dinamica */
let ingredientesJson = "";

/* llamada dianmica del json */

$.ajax({
    url: "js/ingredientes.json",
    dataType: "json",
    success: (respuesta) => {
        ingredientesJson = respuesta;
    },
});


/* ingreso de cantidad */
let cantidadMasaMadre = document.getElementById("cantidadMasaMadre");
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
$("#cantidadMasaMadre").on("keyup", function() {
    let panMasaMadre = ingredientesJson.ingredientesMM;
    let total = panMasaMadre.map(ingrediente => ingrediente.cantidad * cantidadMasaMadre.value);
    cambio.innerHTML = panMasaMadre[0].ingrediente + " " + total[0] + " " + panMasaMadre[0].unidad + "<br>" + panMasaMadre[1].ingrediente + " " + total[1] + " " + panMasaMadre[1].unidad + "<br>" + panMasaMadre[2].ingrediente + " " + total[2] + " " + panMasaMadre[2].unidad + "<br>" + panMasaMadre[3].ingrediente + " " + total[3] + " " + panMasaMadre[3].unidad;
})

/* calcular y mostrar pizza */
$("#cantidadPizza").on("keyup", function() {
    let pizza = ingredientesJson.ingredientesPizza;
    let total = pizza.map(ingrediente => ingrediente.cantidad * cantidadPizza.value);
    cambio2.innerHTML = pizza[0].ingrediente + " " + total[0] + " " + pizza[0].unidad + "<br>" + pizza[1].ingrediente + " " + total[1] + " " + pizza[1].unidad + "<br>" + pizza[2].ingrediente + " " + total[2] + " " + pizza[2].unidad + "<br>" + pizza[3].ingrediente + " " + total[3] + " " + pizza[3].unidad + "<br>" + pizza[4].ingrediente + " " + total[4] + " " + pizza[4].unidad + "<br>" + pizza[5].ingrediente + " " + total[5] + " " + pizza[5].unidad
});

/* calcular y mostrar focaccia */
$("#cantidadFocaccia").on("keyup", function() {
    let focaccia = ingredientesJson.ingredientesFocaccia;
    let total = focaccia.map(ingrediente => ingrediente.cantidad * cantidadFocaccia.value);
    cambio3.innerHTML = focaccia[0].ingrediente + " " + total[0] + " " + focaccia[0].unidad + "<br>" + focaccia[1].ingrediente + " " + total[1] + " " + focaccia[1].unidad + "<br>" + focaccia[2].ingrediente + " " + total[2] + " " + focaccia[2].unidad + "<br>" + focaccia[3].ingrediente + " " + total[3] + " " + focaccia[3].unidad + "<br>" + focaccia[4].ingrediente + " " + total[4] + " " + focaccia[4].unidad

});

/* calcular y mostrar arepas */
$("#cantidadArepa").on("keyup", function() {
    let arepas = ingredientesJson.ingredientesArepas;
    let total = arepas.map(ingrediente => ingrediente.cantidad * cantidadArepas.value);
    cambio4.innerHTML = arepas[0].ingrediente + " " + total[0] + " " + arepas[0].unidad + "<br>" + arepas[1].ingrediente + " " + total[1] + " " + arepas[1].unidad + "<br>" + arepas[2].ingrediente + " " + total[2] + " " + arepas[2].unidad + "<br>" + arepas[3].ingrediente + " " + total[3] + " " + arepas[3].unidad
});




/* ajax */

document.querySelector("#mostrarReceta").addEventListener("click", function mostrarReceta() {
    /* console.log("mostrar recetas"); */
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "recetas/recetaMM.txt", true);
    xhttp.send();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status === 200) {
            document.getElementById("receta").innerHTML = this.responseText;
        }
    }
})
