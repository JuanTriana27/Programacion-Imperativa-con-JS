//Definimos la funcion
function eliminarPrimerElemento(){
    let nombres = ["Juan", "Natalia", "German"];
    let nombreEliminado = nombres.shift();

    //Retornamos el arreglo
    return nombres;
}
let mostrar = eliminarPrimerElemento();
console.log(mostrar);