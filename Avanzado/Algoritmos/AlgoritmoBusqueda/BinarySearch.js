// Busqueda binaria
let array = [1, 2, 3, 4, 5, 6, 7];
let numeroBuscar = 3;

// Funcion para buscar binario
function busquedaBinaria (arr, nroBuscar){

    // Variable para por donde empezar la busqueda
    let indiceBusqueda = 0;

    // Variable para el limite de busqueda, debe poder ir hasta el final
    // de cualquier arreglo, el -1 hace que el valor final le saque una unidad
    // para acceder a la posicion final, en este ejemplo 7 quedaria en la posicion 6
    let limiteBusqueda = arr.length - 1;

    // Repetir hasta encontrar el valor o hasta que no hayan datos que buscar
    while(indiceBusqueda <= limiteBusqueda){

        // Variable para guardar el indice, si no hay mitad se usa math round
        const INDICEMITAD = Math.round((indiceBusqueda + limiteBusqueda) / 2);

        // Variable para guardar el elemento
        const ELEMENTOMEDIO = arr[INDICEMITAD];

        // Si el elemento medio es igual al numero a buscar retornamos INDICEMITAD, osea el elemento
        if(ELEMENTOMEDIO == nroBuscar){
            return INDICEMITAD;
        } 

        // Si indice mitad es mayor al numero buscar entonces mostramos la posicion -1 o al contrario +1
        if(ELEMENTOMEDIO > nroBuscar){
            limiteBusqueda = INDICEMITAD - 1;
        } else {
            indiceBusqueda = INDICEMITAD + 1;            
        }
    }
    return null;
}

let indiceEncontrado = busquedaBinaria(array, numeroBuscar);
console.log(indiceEncontrado);