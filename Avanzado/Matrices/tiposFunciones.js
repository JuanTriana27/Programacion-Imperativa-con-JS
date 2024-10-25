// Funciones declaradas
function suma(num1, num2){
    return num1 + num2;
}
console.log(suma(5, 3));

// Funciones Expresadas
let resta = function(num1, num2){
    return num1 - num2;
}
console.log(resta(5, 3));

// Funciones Flecha (Arrow Functions)
let multiplicacion = (num1, num2) => {
    return num1 * num2;
}
console.log(multiplicacion(5, 3));

// Funciones Flecha (Arrow Functions) Simplificadas
let objeto = {
    valor: 10,
    doble : () =>{
        return this.valor * 2;
    }
}
console.log(objeto.doble());