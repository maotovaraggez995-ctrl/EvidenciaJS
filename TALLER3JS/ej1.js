function generarContrasena() {
    // Conjuntos de caracteres
    const mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const minusculas = "abcdefghijklmnopqrstuvwxyz";
    const digitos = "0123456789";
    const especiales = "@#$%&()=?¿*+[]{}";

    // Función para obtener un carácter aleatorio de un conjunto
    function getRandomChar(conjunto) {
        return conjunto[Math.floor(Math.random() * conjunto.length)];
    }

    // Generar los caracteres requeridos
    let password = [];
    for (let i = 0; i < 2; i++) {
        password.push(getRandomChar(mayusculas));
        password.push(getRandomChar(minusculas));
        password.push(getRandomChar(digitos));
        password.push(getRandomChar(especiales));
    }

    // Mezclar el array para que no quede en orden predecible
    password = password.sort(() => Math.random() - 0.5);

    // Convertir a string y retornar
    return password.join('');
}

// Ejemplo de uso
console.log(generarContrasena());
