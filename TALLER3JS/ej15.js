const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Arreglo que almacenará todas las cuentas
const cuentas = [];

// Contador para generar el consecutivo de las cuentas
let consecutivo = 1;

// Función para crear una cuenta de ahorros
function crearCuenta() {
    const añoActual = new Date().getFullYear();
    const codigo = `${añoActual}-${consecutivo}`;
    consecutivo++;

    const cuenta = {
        codigo: codigo,
        fechaCreacion: new Date().toLocaleDateString(),
        saldo: 0
    };

    cuentas.push(cuenta);
    console.log(`Cuenta creada con éxito. Código: ${codigo}`);
}

// Función para consignar dinero en una cuenta
function consignar() {
    rl.question("Ingrese el código de la cuenta: ", (codigo) => {
        const cuenta = cuentas.find(c => c.codigo === codigo.trim());
        if (!cuenta) {
            console.log("Cuenta no encontrada.");
            menu();
            return;
        }

        rl.question("Ingrese el monto a consignar: ", (montoStr) => {
            const monto = parseFloat(montoStr);
            if (isNaN(monto) || monto <= 0) {
                console.log("Monto inválido.");
            } else {
                cuenta.saldo += monto;
                console.log(`Consignación exitosa. Nuevo saldo: ${cuenta.saldo}`);
            }
            menu();
        });
    });
}

// Función para retirar dinero de una cuenta
function retirar() {
    rl.question("Ingrese el código de la cuenta: ", (codigo) => {
        const cuenta = cuentas.find(c => c.codigo === codigo.trim());
        if (!cuenta) {
            console.log("Cuenta no encontrada.");
            menu();
            return;
        }

        rl.question("Ingrese el monto a retirar: ", (montoStr) => {
            const monto = parseFloat(montoStr);
            if (isNaN(monto) || monto <= 0) {
                console.log("Monto inválido.");
            } else if (monto > cuenta.saldo) {
                console.log("Saldo insuficiente.");
            } else {
                cuenta.saldo -= monto;
                console.log(`Retiro exitoso. Nuevo saldo: ${cuenta.saldo}`);
            }
            menu();
        });
    });
}

// Función para mostrar todas las cuentas
function mostrarCuentas() {
    if (cuentas.length === 0) {
        console.log("No hay cuentas creadas.");
    } else {
        console.log("\nCuentas registradas:");
        cuentas.forEach(c => {
            console.log(`Código: ${c.codigo}, Fecha: ${c.fechaCreacion}, Saldo: ${c.saldo}`);
        });
    }
    menu();
}

// Menú principal
function menu() {
    console.log("\n--- BANCO SIMULADO ---");
    console.log("1. Crear cuenta de ahorros");
    console.log("2. Consignar dinero");
    console.log("3. Retirar dinero");
    console.log("4. Mostrar cuentas");
    console.log("5. Salir");

    rl.question("Seleccione una opción: ", (opcion) => {
        switch(opcion.trim()) {
            case "1":
                crearCuenta();
                menu();
                break;
            case "2":
                consignar();
                break;
            case "3":
                retirar();
                break;
            case "4":
                mostrarCuentas();
                break;
            case "5":
                console.log("Gracias por usar el banco simulado.");
                rl.close();
                break;
            default:
                console.log("Opción inválida. Intente de nuevo.");
                menu();
        }
    });
}

// Iniciamos el sistema
menu();
