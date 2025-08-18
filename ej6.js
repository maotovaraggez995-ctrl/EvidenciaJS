 /*Impuesto según salario*/

const prompt = require('prompt-sync')();

let salario = parseFloat(prompt("Ingrese su salario mensual: "));

// Tabla de ejemplo, ajusta si te dan valores reales
if (salario < 2000000) {
    console.log("No paga impuestos.");
} else if (salario <= 5000000) {
    console.log(`Debe pagar ${(salario * 0.10).toFixed(2)} pesos (10%)`);
} else {
    console.log(`Debe pagar ${(salario * 0.20).toFixed(2)} pesos (20%)`);
}
