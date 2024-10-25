const promt = require("prompt-sync")({ sigint: true });

/*let contador = 0;
let n1 = 0;

while (contador <= 10) {
    console.log(n1);
    n1++;
    contador++;
}*/

let control = "si";
let nota;
let sumaNotas = 0;
let cant = 0;
console.log("Bienvenido al Registro de Notas");

while (control == "si") {
    console.log("Ingrese una Nota a sumar");
    nota = parseInt(promt("Nota: "));

    //Suma Notas = 0
    sumaNotas += nota;
    cant++;

    control = promt("Ingrese 'si' si desea agreagar mas notas, o 'no' si no vas a agregar mas: ");
}
let prom = sumaNotas / cant;
console.log("Su promedio es: " + prom)