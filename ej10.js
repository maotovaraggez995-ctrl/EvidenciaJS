 /*Repetir frase*/

const prompt = require('prompt-sync')();

let veces = parseInt(prompt("Ingrese un número entre 1 y 20: "));
let frase = prompt("Ingrese una frase: ");

if (veces >= 1 && veces <= 20) {
    for (let i = 1; i <= veces; i++) {
        console.log(`${i}. ${frase}`);
    }
} else {
    console.log("Número fuera de rango");
}