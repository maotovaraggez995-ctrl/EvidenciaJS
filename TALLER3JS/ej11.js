const readline = require('readline');

// Creamos la interfaz para leer desde la terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Definimos el Map con 10 países y sus capitales
const paisesYCapitales = new Map([
    ["colombia", "bogota"],
    ["argentina", "buenos aires"],
    ["mexico", "ciudad de México"],
    ["españa", "Madrid"],
    ["francia", "París"],
    ["italia", "Roma"],
    ["brasil", "Brasilia"],
    ["chile", "Santiago"],
    ["peru", "Lima"],
    ["japon", "Tokio"]
]);

// Preguntamos al usuario por un país
rl.question('Ingresa el nombre de un país: ', (pais) => {
    if (paisesYCapitales.has(pais)) {
        console.log(`La capital de ${pais} es ${paisesYCapitales.get(pais)}`);
    } else {
        console.log('País no encontrado');
    }

    rl.close(); // Cerramos la interfaz
});
