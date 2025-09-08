import { esElegibleParaPrestamo } from './utilidades4.js';

console.log("=== Pruebas esElegibleParaPrestamo ===");

console.log(esElegibleParaPrestamo(3500000, 700));  // Elegible para préstamo
console.log(esElegibleParaPrestamo(2800000, 700));  // No elegible para préstamo (salario bajo)
console.log(esElegibleParaPrestamo(3500000, 600));  // No elegible para préstamo (puntaje bajo)
console.log(esElegibleParaPrestamo(2500000, 500));  // No elegible para préstamo (ambos bajos)
