//Declarar e inicilizar mis variables

var metrosCuadrados = 0;
var tipoDeInmueble = "";
var valorDeAdministracion = 0;
var valorCuotaDeAseo = 0;
var valorDerechosDeGimnasio = 0;
var genero = "";
var edad = 0;
//Capturar datos de entrada
metrosCuadrados = prompt("Digite los " +
    "metros cuadrados");
tipoDeInmueble = prompt('Digite el tipo de ' +
    'inmueble "Casa" o "Apartamento".')
tipoDeInmueble = tipoDeInmueble.toUpperCase();
//Proceso o cálculos del problema
valorDeAdministracion = calcularValorDeAdministracion(metrosCuadrados, tipoDeInmueble);
valorCuotaDeAseo = calcularCuotaDeAseo(valorDeAdministracion);

genero = prompt("Digite el genero ");
edad = prompt("Digite la edad ");
genero = genero.toLowerCase();

valorDerechosDeGimnasio = calcularValorDerechoDeGimnasio(genero, edad);

function calcularCuotaDeAseo(valorDeAdministracion) {
    return (valorDeAdministracion * 0.1) + (metrosCuadrados * 1000);
}

function calcularValorDeAdministracion(mt, t) {
    if (t == "CASA") {
        return mt * 1500 + 100000;
    } else if (t == "APARTAMENTO") {
        return mt * 1500 + 50000;
    } else {
        return "Tipo de inmueble no valido"
    }
}

function calcularValorDerechoDeGimnasio(genero, edad) {
    switch (genero) {
        case "masculino":
            if (edad < 10) {
                return 0;
            } else if (edad >= 10 && edad < 20) {
                return 20000;
            } else if (edad >= 20 && edad < 40) {
                return 15000;
            } else if (edad >= 40 && edad < 60) {
                return 10000
            } else if (edad > 60) {
                return 0;
            }
            break;
        case "femenino":
            if (edad < 10) {
                return 0;
            } else if (edad >= 10 && edad < 18) {
                return 15000;
            } else if (edad >= 18 && edad < 35) {
                return 12000;
            } else if (edad >= 35 && edad < 55) {
                return 8000;
            } else if (edad > 55) {
                return 0;
            }
            break;
    }
}

//Salidas del sistema.
document.write("El valor de la administracion es " +
    valorDeAdministracion + "<br>");
document.write("El valor de la cuota de aseo es " +
    valorCuotaDeAseo + "<br>");
document.write("El valor de los derechos de ginmasio es " +
    valorDerechosDeGimnasio); 