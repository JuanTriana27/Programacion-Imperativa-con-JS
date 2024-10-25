let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    
];

console.table(matriz);

// Recorrer la totalidad de la Matriz
for (let i = 0; i < matriz.length; i++) { // Recorremos las filas

    for (let j = 0; j < matriz.length; j++) { // Recorremos las columnas
        //console.log(matriz[i][j]);
    }

}

// Mostrar Pares de la Matriz
console.log("Pares de la Matriz");
for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        if (matriz[i][j] % 2 == 0) {
            console.log(matriz[i][j]);
        }
    }
}

// Mostrar Impares de la Matriz
console.log("Impares de la Matriz");
for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        if (matriz[i][j] % 2 != 0) {
            console.log(matriz[i][j]);
        }
    }
}