import { categoriaIMC, nivelRiesgo } from './utilidades2.js';

console.log("Pruebas categoriaIMC");
console.log(categoriaIMC(17.8));  
console.log(categoriaIMC(22));    
console.log(categoriaIMC(27));    
console.log(categoriaIMC(32));    

console.log("\nPruebas nivelRiesgo");
console.log(nivelRiesgo(65, false)); 
console.log(nivelRiesgo(45, true));    
console.log(nivelRiesgo(50, false));  
console.log(nivelRiesgo(30, false));  
