//Strings y accesos unicos
let saludo = "Hola";
console.log(saludo[0]);

//.length - propiedad de los String
let miSerie = "Better Call Saul";
console.log(miSerie.length);

let arrayNombres = ["Juan", "Nata", "Santiago"];
console.log(arrayNombres.length);
console.log(arrayNombres[2].length);

//.indexOf()
let saludos = "Hola, Estamos Programando";
console.log(saludos.indexOf("a"));
console.log(saludos.indexOf("Estamos"));

//.slice() - corta el string
let frase = "Hola, ¿Como estas?";

//opcion 1
console.log(frase.slice(3, 11));

//opcion 2
console.log(frase.slice(6));

//opcion 3
console.log(frase.slice(-5));

//.trim() - eliminar espacios al principio y final del string
let nombreCompleto = "                     Juan Esteban Triana             ";
console.log(nombreCompleto);
console.log(nombreCompleto.trim());

//.split() - divide un string en diferentes partes
let salud = "Hola, Cómo estas";
console.log(salud.split(" "));

let arrayNuevo = salud.split(", ");
console.log(arrayNuevo);

//.replace() - reemplazar una parte del string por otra
let nuevoString = salud.replace("Cómo", "CoMMMMO");
console.log(nuevoString);