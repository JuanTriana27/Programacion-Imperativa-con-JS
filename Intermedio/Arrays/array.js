//Crear Array.
let edades = [24, 37, 18, 59, 7];
let nombres = ["Juan", "Raul", "German"];
let booleanos = [true, false, false, true];
let combinados = [15, "Hola", true];

//Acceder a un Elemento específico de un array.
console.log(nombres[2]);

//Recorrer un array.
for (let i = 0; i < edades.length; i++) {
    console.log(edades[i]);
}

//Nuevo Arreglo
let numero = [10, 20, 30, 40, 50];

//Modificar cada uno de los elementos
//Se pisan todos para verificar
for (let i = 0; i < numero.length; i++) {
    numero[i] = i + 1;
}

//Cambiar un valor a un array
numero[2] = 233;

for (let i = 0; i < numero.length; i++) {
    console.log(numero[i]);
}

//Agregar elementos a un array
let notas = [5, 4, 3, 1];
notas[notas.length] = 3; /*length para recorrer todo el arreglo*/

for (let i = 0; i < notas.length; i++) {
    console.log(notas[i]);
}

//Extraer elemntos del array en una variable
let names = ["Juan", "Natalia", "Santiago"];
let nombrePosicion = names[1];
console.log(nombrePosicion)

//Extraer todos los elementos para algo especifico
let numeros = [10, 20, 30, 40, 50];
let sumaNumeros = 0;

for (let i = 0; i < numeros.length; i++) {
    sumaNumeros += numeros[i];
}
let promedio = sumaNumeros / numeros.length;
console.log(promedio);

//Encontra el mayor o menor
let numeros2 = [10, 48, 7, 52, 19];
let menor = numeros2[0];
let mayor;

for (let i = 0; i < numeros2.length; i++) {
    if (numeros2[i] < menor) { /* para mayor solo se cambia el sentido del signo */
        menor = numeros2[i];
    }
}
console.log(menor);