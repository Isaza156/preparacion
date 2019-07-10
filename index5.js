var totalPuntos = 1230;
var totalPuntosRecogidos = 0;
var amigos = ["Mike","Lucas","Dustin","Eleven","Max"];
var artefactos = 3;
var puntosArtefactosPorAmigo = [0,0,0,0,0];
var porcentaje = 0;
for (var i = 0; i < amigos.length; i++){
for (var j = 0; j < artefactos; j++){
do{
    var artefacto = prompt("Digite los puntos del artefacto " + (j+1) + " recolectado por " + amigos[i]);
    artefacto = parseInt(artefacto);
}while(artefacto < 1 || artefacto > 100)
    puntosArtefactosPorAmigo[i] += artefacto;
    alert("El total de puntos va en " + puntosArtefactosPorAmigo[i])
}
}
for (var k = 0; k < puntosArtefactosPorAmigo.length; k++){
    document.write("<h3>Los puntos que recogió " + amigos[k] + " en total fueron " + puntosArtefactosPorAmigo[k])
}
for(var n = 0; n < puntosArtefactosPorAmigo.length; n++){
    totalPuntosRecogidos += puntosArtefactosPorAmigo[n]
}
    document.write("<h3>El total de puntos recolectados por los amigos de Will fueron " + totalPuntosRecogidos)

for(var m = 0; m < puntosArtefactosPorAmigo.length; m++){
    porcentaje = Math.round(puntosArtefactosPorAmigo[m] * 100 / totalPuntosRecogidos);
    document.write("<h3>El porcentaje de puntos de " + amigos[m] + " fue de " + porcentaje + "%")
}

if (totalPuntosRecogidos >= totalPuntos){
    document.write("<h3>Se logró la meta de obtener minimo " + totalPuntos)
    document.write("<h3>Will fue liberado")
}else{
    document.write("<h3>No se cumplió con el objetivo minimo de puntos que son " + totalPuntos)
    document.write("<h3>El pueblo de Hawkins está condenado a su destrucción")
}