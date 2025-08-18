const prompt = require('prompt-sync')();

let edad = parseInt(prompt("Ingrese su edad: "));
let tieneCedula = prompt("¿Tiene cédula? (si/no): ").toLowerCase() === "si";
let cedulaInscrita = prompt("¿Tiene inscrita la cédula? (si/no): ").toLowerCase() === "si";

if (edad >= 18 && tieneCedula && cedulaInscrita) {
    console.log("Puede votar.");
} else {
    console.log(" No puede votar.");
}