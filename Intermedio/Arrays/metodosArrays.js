//.push() - Agregar datos al arreglo
let colores = ["Rojo", "Azul", "Amarillo"];
colores.push("Blanco", "Verde", "Dorado");
console.log(colores);

//.pop() - Eliminar el Ultimo elemento de un arreglo
let colorEliminado = colores.pop();
console.log("Eliminamos: " + colorEliminado);
console.log(colores);

//.shift() - Elimina el primer elemento de un arreglo
let colorEliminado2 = colores.shift();
console.log("Eliminamos: " + colorEliminado2);
console.log(colores);

//.unshift() - Agrega uno o varios elementos al principio
colores.unshift("Morado", "Naranja");
console.log(colores);

//.join - Unir elementos de un array con un caracter
let dias = ["Lunes", "Martes", "Miercoles"];
let separadosPorComa = dias.join(' - ');
console.log(separadosPorComa);

//.indexOf() - Buscar un elemento por parametro
let indice = dias.indexOf("Martes");
console.log("Dia: " + indice);

//.lastIndexOf() - Busca elemento pero desde atras adelante
let clubes = ["Racing", "Boca", "Lanus", "Boca"];
let poscionEncontrada = clubes.lastIndexOf("Boca");
console.log("Equipo: " + poscionEncontrada);

//.inCludes() - retorna booleano
let frutas = ["Banano", "Manzana", "Pera"];
console.log(frutas.includes("Manzana"));