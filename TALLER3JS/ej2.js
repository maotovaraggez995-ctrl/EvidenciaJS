function contarVocales(texto) {
    // Convertimos el texto a minúsculas para simplificar la comparación
    texto = texto.toLowerCase();

    // Definimos las vocales
    const vocales = "aeiou";

    // Contador de vocales
    let contador = 0;

    // Recorremos cada carácter de la cadena
    for (let char of texto) {
        if (vocales.includes(char)) {
            contador++;
        }
    }

    return contador;
}

// Ejemplo de uso
const frase = "Hola Mauro, ¿cómo estás?";
console.log(`Cantidad de vocales: ${contarVocales(frase)}`);
