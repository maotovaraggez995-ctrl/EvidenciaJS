function contarPalabras(texto) {
    // Eliminamos espacios al inicio y al final
    texto = texto.trim();

    // Si el texto está vacío, no hay palabras
    if (texto === "") return 0;

    // Separamos por espacios y contamos los elementos
    const palabras = texto.split(/\s+/); // \s+ captura uno o más espacios
    return palabras.length;
}

// Ejemplo de uso
const frase = "Hola Mauro, ¿cómo estás hoy?";
console.log(`Cantidad de palabras: ${contarPalabras(frase)}`);
