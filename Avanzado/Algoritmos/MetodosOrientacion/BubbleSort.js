// Ordenamiento Burbuja
let array = [5, 4, 1, 6, 3, 2];

// Se usan 2 for para que el primero recorra las veces que sea necesario, sino solo lo haria una sola vez
for (let j = 0; j < array.length; j++) {
    // Primero se recorre todo el arreglo desde posicion 0 hasta 5
    for (let i = 0; i < array.length; i++) {

        // si la posicion actual es mayor que la siguiente
        if (array[i] > array[i + 1]) {

            // Variable temporal para guardar el numero actual
            let temp = array[i];

            // Se pisa el dato actual con el numero nuevo
            array[i] = array[i + 1];

            // Cargamos la variable temporal al array
            array[i + 1] = temp;
        }
    }
}

console.log(array);