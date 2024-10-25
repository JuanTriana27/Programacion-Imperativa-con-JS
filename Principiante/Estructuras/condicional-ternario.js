//traducional vs ternario
let numero = -10;

//traducional
if (numero > 0) {
    console.log(numero + " es positivo");
} else {
    console.log(numero + " es negativo");
}

//ternario
(numero > 0) ? console.log(numero + " es positivo") : console.log(numero + " es negativo");


//asignacion de variable
let edad = 30;
let mensaje = "";

//traducional
if (edad >= 18) {
    mensaje = "Es mayor"
} else {
    mensaje = "Es menor"
}
console.log(mensaje);

//ternario
mensaje = (edad >= 18) ? "Es mayor" : "Es menor";
console.log(mensaje);

let edad2 = 20;
let mensaje2 = "";
let categoria = "";

// if (edad2 >= 18) {
//     mensaje2 = "Es mayor de Edad";
//     categoria = "Adulto";
//     console.log("Eres mayor de edad");
// } else {
//     mensaje2 = "Es menor de Edad";
//     categoria = "Menor";
//     console.log("Eres menor de edad");
// }



(edad2 >= 18) ? (
    mensaje2 = "Es mayor de Edad",
    categoria = "Adulto",
    console.log("Eres mayor de edad")) :
    (
        mensaje2 = "Es menor de Edad",
        categoria = "Menor",
        console.log("Eres menor de edad"));

        console.log(mensaje+"\n"+categoria);
