const prompt = require("prompt-sync")({ sigint: true });

//Suma
function suma(num1, num2) {
    return resultadoS = num1 + num2;
}

//Suma
function resta(num1, num2) {
    return resultado = num1 - num2;
}

//Multiplicacion
function multiplicacion(num1, num2) {
    return resultado = num1 * num2;;
}

//Division
function division(num1, num2) {
    if (num2 == 0) {
        return "No se puede dividir por 0";
    } else {
        let resultado = num1 / num2;
        return resultado;
    }
}

console.log("Bienvenido a la Calculadora");
console.log("1. Suma\n2. Resta\n3. Multiplicacion\n4. Division");

let op = parseInt(prompt("Qué operacion desea Realizar: "));
let n1;
let n2;

switch (op) {
    case 1:
        n1 = parseInt(prompt("Ingrese Primer Valor: "));
        n2 = parseInt(prompt("Ingrese Segundo Valor: "));

        resultado = suma(n1, n2);
        console.log("Resultado de Suma: " + resultado);
        break;

    case 2:
        n1 = parseInt(prompt("Ingrese Primer Valor: "));
        n2 = parseInt(prompt("Ingrese Segundo Valor: "));

        resultado = resta(n1, n2);
        console.log("Resultado de Resta: " + resultado);
        break;

    case 3:
        n1 = parseInt(prompt("Ingrese Primer Valor: "));
        n2 = parseInt(prompt("Ingrese Segundo Valor: "));

        resultado = multiplicacion(n1, n2);
        console.log("Resultado de Multiplicacion: " + resultado);
        break;

    case 4:
        n1 = parseInt(prompt("Ingrese Primer Valor: "));
        n2 = parseInt(prompt("Ingrese Segundo Valor: "));
        resultado = division(n1, n2);
        if (typeof resultado == "string") {
            console.log(resultado);
        } else {
            console.log("Resultado de Division: " + resultado);
        }

        break;

    default:
        console.log("Opcion Incorrecta");
        break;
}