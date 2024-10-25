// Ejercicio1 - Validador de Contraseña
let password = "Contraseña123";

function acount(passwordReceived) {
    if (password === passwordReceived) {
        console.log("Contraseña Correcta");
    } else {
        console.log("Contraseña Incorrecta");
    }
}
acount("Contraseña123");