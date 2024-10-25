//Definimos la funcion
function convert() {
    let nombre = "juan esteban triana";
    let mayus = nombre.toUpperCase();

    // retornamos mayusculas - para minusculas es .toLowerCase()
    return mayus;
}
let mostrar = convert();
console.log(mostrar);