let array = [5, 3, 5, 7, 5, 2, 3, 5, 1, 3];
let numeroBuscado = 5;

// Función que cuenta cuántas veces aparece un número
function contarApariciones(arr, numero) {
    let contador = 0;

    // Búsqueda lineal
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === numero) {
            contador++;
        }
    }

    return contador;
}

// Usar la función
let veces = contarApariciones(array, numeroBuscado);
console.log(`El número ${numeroBuscado} aparece ${veces} veces en el array`);