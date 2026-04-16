// BubbleSort: Crea una función que reciba por parámetro un array de números y los ordene de menor a mayor mediante el ordenamiento burbuja.
// Ordenamiento Burbuja
let array = [5, 4, 1, 6, 3, 2];

// Indicar ordenamiento: Crea una función que reciba por parámetro un array de números e indique si el array se encuentra ordenado de forma ascendente o no.
function numerosAsc(arr) {
    // Se recorre todo el arreglo con 2 for, con uno solo solo recorre una vez
    for (let j = 0; j < arr.length; j++) {

        // Se recorre hasta la posicion
        for (let i = 0; i < arr.length; i++) {

            // Si la posicion actual es mayor que la siguiente
            if (arr[i] < arr[i + 1]) {

                // variable temporal para guardar numero actual
                let temp = arr[i];

                // Pisamos dato actual con el numero
                arr[i] = arr[i + 1];

                // Cargamos la variable temporal
                arr[i + 1] = temp;
                
            }
        }
    }

    // variable booleana para saber si es ascendente, se recorre el arr ordenado y se verifica 
    // si cada posicion es menor o mayor a la anterior
    let esAscendente = true;
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            esAscendente = false;
            break;
        }
    }

    if(esAscendente){
        console.log("Los numeros estan de menor a mayor");
    }else{
        console.log("Los numeros estan de mayor a menor");
    }
    return arr;
}

let numeros = numerosAsc(array);

console.log(numeros);