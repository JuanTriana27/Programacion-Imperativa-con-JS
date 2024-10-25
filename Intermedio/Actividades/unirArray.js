//Definimos la Funcion
function unirArray() {
    let nombres = ["Juan", "Natalia", "German"];
    let otrosNombres = ["Santiago", "Claudia"];
    let mostar = nombres.concat(otrosNombres);

    //retornamos el arreglo unido al otro
    return mostar;
}
let mostrarArreglo = unirArray();
console.log(mostrarArreglo);