const prompt = require('prompt-sync')();

let numero = parseInt(prompt("Ingrese un número entero: "));
numero = Math.abs(numero);
let suma = 0;

while (numero > 0) {
    suma += numero % 10;
    numero = Math.floor(numero / 10);
}

console.log(`La suma de los dígitos es: ${suma}`);