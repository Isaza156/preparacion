let nombres = ['Wendy', 'Dipper', 'Soos', 'Mabel'];
let dineroRecolectado = [0, 0, 0, 0];
let porcentajeCadaUno = [0, 0, 0, 0];
let metaTotal = 10000;
let metaPersonal = 2500;
let totalTodos = 0;

for (let i = 0; i < nombres.length; i++) {
    dineroRecolectado[i] = prompt(`${nombres[i]} Cuanto has recolectado ?`);
    dineroRecolectado[i] = parseFloat(dineroRecolectado[i]);
    porcentajeCadaUno[i] = dineroRecolectado[i] * 100 / metaTotal;
    totalTodos += dineroRecolectado[i];
}

if(totalTodos >= metaTotal){
    console.log('Meta Cumplida, ¡eres buena Jefe Mabel!')
}

console.log(totalTodos);

let consolidado = {
    nombre: nombres,
    total: dineroRecolectado,
    porcentaje: porcentajeCadaUno
}
console.table(consolidado);

