const promt = require("prompt-sync")({ sigint: true });

/*let i = 1;

while (i <= 10) {
    console.log(i);
    i++;
}

let j = 1;

do {
    console.log(j)
    j++;
} while (j <= 10);*/


let nroAadivinar = 4;
let intento = 0;
let num;

do {
    num = parseInt(promt("Ingrese un Numero del 1 al 10: "));

    if (num < nroAadivinar) {
        console.log("Muy Bajo");
    } else if (num > nroAadivinar) {
        console.log("Muy Grande");
    } else {
        console.log("Numero Correcto")
    }

    intento++;

} while (num != nroAadivinar);

console.log("Numero de Intentos: " + intento);