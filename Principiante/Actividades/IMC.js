function IMC(pesoRecibido, alturaRecibida) {
    let imc = pesoRecibido / (alturaRecibida * alturaRecibida);
    if (imc <= 18.5) {
        console.log("Bajo Peso");
    } else if (imc <= 24.9) {
        console.log("Peso Saludable");
    } else if (imc <= 29.9) {
        console.log("Sobrepeso");
    } else if (imc >= 30) {
        console.log("Obesidad");
    }
}
IMC(75, 1.70);