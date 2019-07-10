let estudiantes = 16;
let casas = [0, 0, 0, 0];
let porcentajesCasas = [0, 0, 0, 0];
let totalCasas = [0, 0, 0, 0];
let casaDominante = [];

for (let i = 0; i < estudiantes; i++) {
    for (let j = 0; j < casas.length; j++) {
        do {
            casas = prompt(`Digite la letra de su casa ${i + 1}`);
            casas = casas.toUpperCase();

            if (casas === 'G') {
                totalCasas[0]++
                porcentajesCasas[0] = totalCasas[0] * 100 / estudiantes;
            } else if (casas === 'R') {
                totalCasas[1]++
                porcentajesCasas[1] = totalCasas[1] * 100 / estudiantes;
            } else if (casas === 'S') {
                totalCasas[2]++
                porcentajesCasas[2] = totalCasas[2] * 100 / estudiantes;
            } else if (casas === 'H') {
                totalCasas[3]++
                porcentajesCasas[3] = totalCasas[3] * 100 / estudiantes;
            }
        } while (casas !== "G" & casas !== "R" & casas !== "S" & casas !== "H");
    }
}
let consolidado = {
    nombre: ['Gryffindor', 'Ravenclaw', 'Slytherin', 'Hufflepuff'],
    casas: totalCasas,
    porcentaje: porcentajesCasas

}

console.table(consolidado);