// .map() es un método que crea una nueva matriz con los resultados de llamar a una función proporcionada en cada elemento de la matriz llamando a la matriz original.

let numeros = [2, 4, 6];

let numeroMultiplicados = numeros.map(function callback(numero) {
    return numero * 2;
});
console.log(numeroMultiplicados); // [4, 8, 12]




// .filter() es un método que crea una nueva matriz con todos los elementos que pasan la prueba implementada por la función proporcionada.

let edades = [15, 20, 30, 40, 45];

let mayoresDeEdad = edades.filter(function callback(edad) {
    return edad >= 18;
});
console.log(mayoresDeEdad); // [20, 25, 30, 35, 40, 45, 50]




// .reduce() es un método que aplica una función a un acumulador y a cada valor de la matriz (de izquierda a derecha) para reducirlo a un solo valor.

let nums = [5, 7, 16];

let suma = nums.reduce(function(acumulador, num) {
    return acumulador - num;
});     
console.log(suma); // -28




// .forEach() es un método que ejecuta una función proporcionada una vez por cada elemento de la matriz.

let paises = ["Argentina", "Brasil", "Chile", "Colombia", "Perú"];

paises.forEach(function(pais){
    console.log(pais);
});