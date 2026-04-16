// Ordenamiento Burbuja pero con strings, ordena alfabeticamente
let nombres = ["Juan", "Nata", "Santiago", "Almendra"];

// Se usan 2 for para que el primero recorra las veces que sea necesario, sino solo lo haria una sola vez
for (let j = 0; j < nombres.length; j++) {
    // Primero se recorre todo el arreglo desde posicion 0 hasta 5
    for (let i = 0; i < nombres.length; i++) {

        // si la posicion actual es mayor que la siguiente
        if (nombres[i] > nombres[i + 1]) {

            // Variable temporal para guardar el numero actual
            let temp = nombres[i];

            // Se pisa el dato actual con el numero nuevo
            nombres[i] = nombres[i + 1];

            // Cargamos la variable temporal al nombres
            nombres[i + 1] = temp;
        }
    }
}

console.log(nombres);