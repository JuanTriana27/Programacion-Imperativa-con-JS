// Ordenamiento Burbuja pero con objetos
let nombres = [
    {
        nombre : "Juan",
        edad : 23
    },
    {
        nombre : "Nata",
        edad : 24
    },
    {
        nombre : "Santiago",
        edad : 15
    }
];

// Se usan 2 for para que el primero recorra las veces que sea necesario, sino solo lo haria una sola vez
for (let j = 0; j < nombres.length; j++) {
    // Primero se recorre todo el arreglo desde posicion 0 hasta 5
    for (let i = 0; i < nombres.length - 1; i++) {

        // si la posicion actual es mayor que la siguiente
        if (nombres[i].edad > nombres[i + 1].edad) {

            // Variable temporal para guardar el objeto actual
            let temp = nombres[i];

            // Se pisa el dato actual con el objeto nuevo
            nombres[i] = nombres[i + 1];

            // Cargamos la variable temporal al nombres
            nombres[i + 1] = temp;
        }
    }
}

console.log(nombres);