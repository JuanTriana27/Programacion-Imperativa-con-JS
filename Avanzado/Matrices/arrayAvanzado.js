/* .slice()
Sintaxis: let newArray = arrayOriginal.slice(inicio, fin); */

let frutas = ["Manzana", "Naranja", "Platano", "Fresa", "Kiwi"];

let primerasTres = frutas.slice(0, 3);
console.log(primerasTres); // ["Manzana", "Naranja", "Platano"]

let desdeNaranja = frutas.slice(1);
console.log(desdeNaranja); // ["Naranja", "Platano", "Fresa", "Kiwi"]

let ultimasDos = frutas.slice(-2);
console.log(ultimasDos); // ["Fresa", "Kiwi"]

let entreDosIndices = frutas.slice(-3, 4);
console.log(entreDosIndices); // ["Platano", "Fresa"]


/* .splice()
Sintaxis: arrayOriginal.splice(inicio, cantidadEliminar, item1, item2, ...); */

let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];

meses.splice(1, 2, "NuevoMes1", "NuevoMes2");
console.log(meses); // ["Enero", "NuevoMes1", "NuevoMes2", "Abril", "Mayo"]

meses.splice(2, 0, "NuevoMes3");
console.log(meses); // ["Enero", "NuevoMes1", "NuevoMes2", "NuevoMes3", "Abril", "Mayo"]


/* .sort()
Sintaxis: arrayOriginal.sort(); */

let numeros = [3, 1, 4, 1, 5, 2, 6, 5, 3, 5];

numeros.sort();
console.log(numeros); // [1, 1, 2, 3, 3, 4, 5, 5, 5, 6]

let palabras = ["Manzana", "Naranja", "Platano", "Fresa", "Kiwi"];

palabras.sort();
console.log(palabras); // ["Fresa", "Kiwi", "Manzana", "Naranja", "Platano"]