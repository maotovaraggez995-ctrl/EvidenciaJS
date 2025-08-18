/*Factorial*/

const prompt = require('prompt-sync')();

let numero = parseInt(prompt("Ingrese un número entero: "));
let factorial = 1;

for (let i = 1; i <= numero; i++) {
    factorial *= i;
}

console.log(`El factorial de ${numero} es: ${factorial}`);