const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Contadores de votos
const votos = {
    "Candidato Uno": 0,
    "Candidato Dos": 0,
    "Candidato Tres": 0,
    "Blanco": 0
};

const totalVotantes = 50;
let votanteActual = 1;

// Clave de cierre anticipado
const claveCierre = "CERRAR123";

function mostrarMenu() {
    console.log("\nMENU ELECCIONES 2025");
    console.log("1. Candidato Uno");
    console.log("2. Candidato Dos");
    console.log("3. Candidato Tres");
    console.log("4. Blanco");
    console.log("5. Cerrar elecciones");
}

function votar() {
    if (votanteActual > totalVotantes) {
        console.log("\nTodos los votos han sido registrados.");
        mostrarResultados();
        rl.close();
        return;
    }

    console.log(`\nVotante ${votanteActual} de ${totalVotantes}`);
    mostrarMenu();

    rl.question("Ingrese el número de su opción o la clave de cierre: ", (input) => {
        input = input.trim();

        // Verificar clave de cierre
        if (input === claveCierre) {
            console.log("\nElecciones cerradas por el presidente de la mesa.");
            mostrarResultados();
            rl.close();
            return;
        }

        switch(input) {
            case "1":
                votos["Candidato Uno"]++;
                break;
            case "2":
                votos["Candidato Dos"]++;
                break;
            case "3":
                votos["Candidato Tres"]++;
                break;
            case "4":
                votos["Blanco"]++;
                break;
            case "5":
                console.log("\nElecciones cerradas manualmente por opción del menú.");
                mostrarResultados();
                rl.close();
                return;
            default:
                console.log("Opción inválida. Intente de nuevo.");
                votar();
                return;
        }

        votanteActual++;
        votar(); // Pasamos al siguiente votante
    });
}

function mostrarResultados() {
    const personasQueVotaron = votanteActual - 1;
    console.log("\nRESULTADOS DE LAS ELECCIONES 2025:");
    console.log(`Número de personas que votaron: ${personasQueVotaron}`);
    for (let candidato in votos) {
        console.log(`${candidato}: ${votos[candidato]} votos`);
    }
}

// Iniciamos el proceso de votación
votar();
