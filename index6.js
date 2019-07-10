//Declaracion de variables
var meta = 0;
var recogido = [0,0,0,0];
var cuotaAsignada = [0,0,0,0];
var porcentajes = [0,0,0,0];
var responsables = ["1:Wendy","2:Dipper","3:Soosy","4:Mabel"];
var codigo = 0;
var total = 0;
var notif = "";
var notif2 = "";

//Procedimientos



meta=prompt("Mabel ingresa la meta a la cual quieres llegar");
meta = parseInt(meta);

for (let i = 0; i < responsables.length; i++) {
   recogido[i]=prompt("Ingresa lo recogido por "+responsables[i]+": ");
   recogido[i] = parseInt(recogido[i]);

}

cumplimiento(recogido, cuotaAsignada);



function cumplimiento(recogidof, cuotaAsignadaf){

   for (let k = 0; k < responsables.length; k++) {
       cuotaAsignadaf[k] = meta / responsables.length;

        if (recogidof[k] == cuotaAsignadaf[k]) {
            return notif = responsables[k]+" Cumplio con la cuota estipulada";

        } else if (recogidof[k] > cuotaAsignadaf[k]) {
            return notif = responsables[k]+" Se paso de la cuota estipulada";

        } else if (recogidof[k] < cuotaAsignadaf[k]) {
            return notif = responsables[k]+" Le falto para la cuota estipulada";

        }
            return total = recogidof[k]+recogidof[k];

   }
if (total >= meta) {
   return notif2 = "Meta Cumplida, ¡eres buena Jefe Mabel";
}

}


porcentajesResponsables(recogido);


function porcentajesResponsables(recogidof){

   for (let x = 0; x < responsables.length; x++) {
       return porcentajes[x] = recogidof[x] * 100 / meta;
   }

}


document.write("<h3>El valor recogido por todos es de: "+total);

document.write(notif2);

for (let n = 0; n < responsables.length; n++) {
   document.write("<h3>El valor recogido por "+responsables[n]+" es de "+recogido[n]+" con un porcentaje del "+porcentajes[n]+"%")

}