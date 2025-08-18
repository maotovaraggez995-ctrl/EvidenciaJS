const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Map para almacenar productos y precios
const precios = new Map();
// Array para almacenar historial de productos ingresados
const historial = [];

function preguntarProducto() {
    rl.question('Ingresa el nombre del producto (o "fin" para terminar): ', (producto) => {
        producto = producto.trim();
        
        if (producto.toLowerCase() === 'fin') {
            mostrarResultados();
            rl.close();
            return;
        }

        rl.question('Ingresa el precio del producto: ', (precioInput) => {
            const precio = parseFloat(precioInput);
            if (isNaN(precio)) {
                console.log('Precio inválido, intenta de nuevo.');
            } else {
                // Almacenar precio en el Map
                precios.set(producto, precio);
                // Guardar en historial
                historial.push(producto);
            }
            // Volver a preguntar
            preguntarProducto();
        });
    });
}

function mostrarResultados() {
    // Productos únicos usando Set
    const productosUnicos = new Set(historial);

    console.log('Productos únicos:', productosUnicos);
    console.log('Precios:', precios);
    console.log('Historial:', historial);
}

// Iniciar el ingreso de productos
preguntarProducto();
