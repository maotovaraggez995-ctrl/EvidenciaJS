/*Patrón*/

const prompt = require('prompt-sync')();

let filas = parseInt(prompt("Ingrese el número de filas: "));

for (let i = 1; i <= filas; i++) {
    console.log("* ".repeat(i));
}