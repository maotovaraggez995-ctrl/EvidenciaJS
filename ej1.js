const prompt = require('prompt-sync')();

let numero = parseInt(prompt("Ingrese un número entero: "));

if (numero % 2 === 0) {
    console.log(`El número ${numero} es PAR`);
} else {
    console.log(`El número ${numero} es IMPAR`);
}