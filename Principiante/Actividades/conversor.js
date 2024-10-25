function convert(monto, CLP, DOLAR, op) {
    switch (op) {
        case 1:
            CLP = monto * CLP;
            console.log("El monto en peso Chileno es: " + CLP);
            break;

        case 2:
            DOLAR = monto / DOLAR;
            console.log("El monto en dolares es: " + DOLAR)
            break;

        default:
    }
}
convert(2117000, 0.24, 3800, 1);

let a = 2;
let b = '3';
console.log(a+b);