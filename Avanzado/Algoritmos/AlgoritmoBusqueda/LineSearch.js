// Busqueda lineal
let array = [14, 3, 51, 7, 92, 110, 5, 17, 13, 48]
let elementoBuscado = 51;

// Funcion con parametros a buscar
function busquedaLineal(arr, elemento) {

    // Se recorre todo el arreglo
    for (let i = 0; i < arr.length; i++) {

        // se busca el valor igual al elemento dentro del arreglo
        if (arr[i] === elemento) {
            // se retorna la posicion
            return i;
        }
    }

    // si no existe el elemento dentro del arreglo se retorna un -1
    return -1;
}

// variable donde se asigna la posicion
let indiceEncontrado = busquedaLineal(array, elementoBuscado);

// si es -1 no se encontro, sino se imprime el indice
if (indiceEncontrado === -1) {
    console.log("Posicion no encontrada")
} else {
    console.log("La posicion es: " + indiceEncontrado)
}