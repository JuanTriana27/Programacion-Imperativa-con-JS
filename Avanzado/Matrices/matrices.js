// Creamos la Matriz

// Opcion 1
let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]];

// Opcion 2
let arrayMatriz = [];

let fila1 = ["x0", "x1", "x2"];
let fila2 = ["y0", "y1", "y2"];

arrayMatriz[0] = fila1;
arrayMatriz[1] = fila2;

// Visualizamos la Matriz
console.table(matriz);

// Acceder a un Elemento Especifico
console.log(matriz[1][1]);

// Modificar un Elemento Especifico
matriz[1][2] = 10;
console.table(matriz);

// Recorrer una Matriz en una columna
for (let i = 0; i < matriz.length; i++) {
    console.log(matriz[i][0]);
}

// Recorrer una Matriz en una fila
for (let i = 0; i < matriz[1].length; i++) {
    console.log(matriz[1][i]);
}