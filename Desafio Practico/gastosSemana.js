// Matriz Gastos de cada dia de la Semana
let gastos = [
  [10, 20, 30, 40, 50, 60, 70], // Semana 1 - Suma = 280
  [5, 15, 25, 35, 45, 55, 65], // Semana 2 - Suma = 245
  [8, 18, 28, 38, 48, 58, 68], // Semana 3 - Suma = 266
  [12, 22, 32, 42, 52, 62, 72], // Semana 4 - Suma = 294
]


// Gastos de la semana
function gastosSemanaEspecifica(matriz, numSemana) {

  let sumaDeGatos = 0;

  for (let i = 0; i < matriz[numSemana].length; i++) {
    sumaDeGatos += matriz[numSemana - 1][i]; // Se resta 1 para que el usuario pueda ingresar la semana 1 y no la 0
  }

  return sumaDeGatos; // Retornamos la suma de los gastos de la semana
}

let sumaDeGastosSemanales = gastosSemanaEspecifica(gastos, 3);
console.log("La suma de los gastos de la semana 3 es de: " + sumaDeGastosSemanales);


// Gatos Dias Especificos de la Semana
function gastosDeDiaEspecifico(matriz, numDia) {

  let gastosDia = 0;

  for (let i = 0; i < matriz.length; i++) {
    gastosDia += matriz[i][numDia - 1]; // Se resta 1 para que el usuario pueda ingresar el dia 1 y no el 0
  }

  return gastosDia; // Retornamos la suma de los gastos del dia
}

let gastosDiaEspecifico = gastosDeDiaEspecifico(gastos, 1);
console.log("La suma de los gastos del dia lunes de la semana es de: " + gastosDiaEspecifico);


// Gastos Totales de la Semana
function gastosDelMes(matriz) {

  let gastosTotales = 0;

  // Recorremos toda la matriz
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      gastosTotales += matriz[i][j]; // Sumamos todos los gastos
    }
  }

  return gastosTotales; // Retornamos la suma de los gastos de todo el mes
}

let gastosTotales = gastosDelMes(gastos);
console.log("La suma de los gastos de todo el mes es de: " + gastosTotales);


// Calcular Total de Gastos por Semana
function calcularTotalGastosSemana(matriz, callback) {

  let totalGastosSemama = []; // Creamos un array vacio
  let gastosSemanales = 0; // Inicializamos la variable en

  matriz.forEach(function (semana) { // Recorremos la matriz de gastos

    gastosSemanales = semana.reduce(function (total, dia) { // Sumamos los gastos de la semana

      return total + dia; // Retornamos la suma de los gastos de la semana
    });

    totalGastosSemama.push(gastosSemanales); // Agregamos la suma de los gastos de la semana al array

  }, 0);

  callback(totalGastosSemama); // Llamamos a la funcion callback y le pasamos el array con las sumas de los gastos de cada semana
}

function mostrarResultados(resultados) {
  console.log("Total De Gastos Por Semama: " + resultados);
}

calcularTotalGastosSemana(gastos, mostrarResultados); // Llamamos a la funcion calcularTotalGastosSemana y le pasamos la matriz de gastos y la funcion
