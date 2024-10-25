function range(edad) {
    if (edad >= 6 && edad <= 11) {
        console.log("Niño");
    } else if (edad >= 12 && edad <= 26) {
        console.log("Adolescente\nJoven");
    } else if (edad > 26 && edad <= 59) {
        console.log("Adulto");
    }
}
range(13);