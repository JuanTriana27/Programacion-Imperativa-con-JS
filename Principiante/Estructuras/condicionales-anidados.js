//Clima del Dia
let clima = "Soleado";
let temperatura = 20;
let mensaje = "Dia soleado";

if (clima === "Soleado" && temperatura >= 26) {
    console.log(mensaje);
} else {
    console.log("Dia frio");
}


//Notas
let puntuacion = 2;

if (puntuacion >= 4) {
    console.log("Nota Superior");
} else if (puntuacion >= 3) {
    console.log("Nota Alta");
} else if (puntuacion <= 2.9) {
    console.log("Nota Baja");
}

let nota = 5.1;

if (nota >= 1 && nota <= 5) {
    if (nota >= 3) {
        console.log("Aprobado");
    } else if (nota <= 2.9) {
        console.log("No Aprobado");
    }

} else {
    console.log("La nota es erronea. Debe ser entre 1 y 10");
}

