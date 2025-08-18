const prompt = require('prompt-sync')();

let edad = parseInt(prompt("Ingrese su edad: "));

if (edad < 5) {
    console.log("La entrada es GRATIS");
} else if (edad <= 18) {
    console.log("La entrada cuesta 5000 pesos");
} else {
    console.log("La entrada cuesta 10000 pesos");
}