//Declaramos Funcion
function suma(nota1, nota2, nota3) {
    let resultado = nota1 + nota2 + nota3;
    return resultado; //Nos devuelve el resultado
}

//resultado se guarda en resultadoSuma
let resultadoSuma = suma(5, 3, 2);
console.log(resultadoSuma);

function promedio() {
    let resultadoSuma = suma(5, 3, 2);
    let resultadoPromedio = resultadoSuma / 3;
    return resultadoPromedio;
}

let prom = promedio();
console.log(prom);