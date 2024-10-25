// Recorrer un array e ir ejecutando callbakcs
function procesesarArray(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}

// Funcion Callback que muestre elementos del Array
function mostrarElemento(elemento) {
    console.log(elemento);
}

// Funcion callback para multiplicar por 2
function multiplicarPorDos(elemento) {
    console.log(elemento * 2);
}

// Crear Array
let array = [1, 2, 3, 4, 5];

// LLamar a la procesar array
console.log("Recorrido del array");
procesesarArray(array, mostrarElemento);

console.log("Multiplicar por 2");
procesesarArray(array, multiplicarPorDos);