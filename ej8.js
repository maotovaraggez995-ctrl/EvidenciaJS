 /*Número primo*/

const prompt = require('prompt-sync')();

let numero = parseInt(prompt("Ingrese un número entero: "));
let esPrimo = numero > 1;

for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
        esPrimo = false;
        break;
    }
}

if (esPrimo) {
    console.log(`${numero} es primo`);
} else {
    console.log(`${numero} no es primo`);
}