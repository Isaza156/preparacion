var meta = 10000;
var responsabilidad = meta / 4;
var responsables = ["Wendy", "Dipper", "Soosy", "Mabel"];
var recogido = [0, 0, 0, 0];
var porcentajes = [0, 0, 0, 0];
var total = 0;

for (var i = 0; i < responsables.length; i++) {
    recogido[i] = prompt("Ingrese el valor recogido por: " + responsables[i]);
    recogido[i] = parseFloat(recogido[i]);
}

for (var j = 0; j < responsables.length; j++) {
    total += recogido[j];
}

console.log("El total recogido por todos fue: " + total);

for (var k = 0; k < responsables.length; k++) {
    if (recogido[k] > responsabilidad) {
        console.log(responsables[k] + " sobrepasó la meta, recogiendo un total de: " + recogido[k]);
    } else if (recogido[k] == responsabilidad) {
        console.log(responsables[k] + " cumplió con la meta, recogiendo un total de: " + recogido[k]);
    } else if (recogido[k] < responsabilidad) {
        console.log(responsables[k] + " no cumplió con la meta, recogiendo un total de: " + recogido[k]);
    }
}

for (var x = 0; x < responsables.length; x++) {
    porcentajes[x] = recogido[x] * 100 / total;
    porcentajes[x] = Math.round(porcentajes[x])
    console.log("El porcentaje de ventas obtenido por " + responsables[x] + " fue: " + porcentajes[x] + "%");
}

if(total >= meta){
    console.log("Meta Cumplida, ¡eres buena Jefe Mabel!");
}else{
    console.log("Fracasaste Mabel")
}