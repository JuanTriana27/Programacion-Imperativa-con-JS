//var funciona a nivel global
function ejemplo1() {
    if (true) {
        var mensaje = "Hola";
    }
    console.log(mensaje);
}
ejemplo1();


//let funciona solo en el bloque de codigo en el que fue creado
function ejemlplo2() {
    if (true) {
        let mensaje2 = "Hola";
        console.log(mensaje2);
    }
    console.log(mensaje2);
}
ejemlplo2();