/* Decimal a binario*/

const prompt = require('prompt-sync')();

let numero = parseInt(prompt("Ingrese un número decimal: "));
let binario = "";

if (numero === 0) {
    binario = "0";
} else {
    while (numero > 0) {
        binario = (numero % 2) + binario;
        numero = Math.floor(numero / 2);
    }
}

console.log(`En binario: ${binario}`);