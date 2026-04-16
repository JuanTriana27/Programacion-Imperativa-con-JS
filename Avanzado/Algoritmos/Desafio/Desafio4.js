// Creamos los objetos
let array = [
    { tema: "reggaeton", votos: 45 },
    { tema: "rock", votos: 28 },
    { tema: "pop", votos: 67 },
    { tema: "cumbia", votos: 52 },
    { tema: "salsa", votos: 34 }
];

// Función que retorna toda la información del tema
function buscarTema(arr, temaBuscado) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].tema.toLowerCase() === temaBuscado.toLowerCase()) {
            return {
                encontrado: true,
                tema: arr[i].tema,
                votos: arr[i].votos,
                posicion: i
            };
        }
    }

    return { encontrado: false };
}

// Usar la función
let resultado = buscarTema(array, "pop");

if (resultado.encontrado) {
    console.log(`✓ Tema: ${resultado.tema}`);
    console.log(`✓ Votos: ${resultado.votos}`);
    console.log(`✓ Posición: ${resultado.posicion}`);
} else {
    console.log("El tema no se encontró en la arr");
}