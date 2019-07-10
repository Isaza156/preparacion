// Declarar variables

var meta = 10000;
var responsabilidad = meta / 4;
var responsables = ["Wendy", "Dipper", "Soosy", "Mabel"];
var recogido = [0, 0, 0, 0];
var porcentajes = [0, 0, 0, 0];
var totalRecogido = 0;

// Llamar funciones y mostrar

inicio();
totalRecogido = funcionUno(recogido);
funcionDos(recogido, responsabilidad);
funcionTres(recogido, totalRecogido);
console.log("El total recogido por todos fue: " + totalRecogido);
funcionCuatro(totalRecogido, meta);

// Funciones

function inicio(){
    for (let i = 0; i < responsables.length; i++) {
        recogido[i] = prompt("Ingrese el valor recogido por: " + responsables[i]);
        recogido[i] = parseFloat(recogido[i]);
    }
}

function funcionUno(recogidoF) {
    let total = 0;
    for (let j = 0; j < responsables.length; j++) {
        total += recogidoF[j];
    }
    return total;
}

function funcionDos(recogidoF, responsabilidadF) {
    for (let k = 0; k < responsables.length; k++) {
        if (recogidoF[k] > responsabilidadF) {
            console.log(responsables[k] + " sobrepasó la meta, recogiendo un total de: " + recogidoF[k]);
        } else if (recogidoF[k] == responsabilidadF) {
            console.log(responsables[k] + " cumplió con la meta, recogiendo un total de: " + recogidoF[k]);
        } else if (recogidoF[k] < responsabilidadF) {
            console.log(responsables[k] + " no cumplió con la meta, recogiendo un total de: " + recogidoF[k]);
        }
    }
}

function funcionTres(recogidoF, totalRecogidoF) {
    for (let x = 0; x < responsables.length; x++) {
        porcentajes[x] = recogidoF[x] * 100 / totalRecogidoF;
        porcentajes[x] = Math.round(porcentajes[x])
        console.log("El porcentaje de ventas obtenido por " + responsables[x] + " fue: " + porcentajes[x] + "%");
    }
}

function funcionCuatro(totalRecogidoF, metaF) {
    if (totalRecogidoF >= metaF) {
        console.log("Meta Cumplida, ¡eres buena Jefe Mabel!");
    } else {
        console.log("Fracasaste Mabel")
    }
}